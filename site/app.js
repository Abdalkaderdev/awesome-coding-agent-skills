const $ = id => document.getElementById(id);
const SORTS = ['stars', 'updated', 'name'];
const nf = new Intl.NumberFormat('en', { maximumFractionDigits: 1 });
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const df = new Intl.DateTimeFormat('en', { dateStyle: 'medium' });

initTheme();

fetch('data.json')
  .then(r => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
  .then(init)
  .catch(() => {
    $('list').replaceChildren();
    $('count').textContent = 'Could not load the index. Reload the page to try again.';
  });

function stars(n) {
  if (n < 1000) return String(n);
  const k = n / 1000;
  return `${k >= 100 ? Math.round(k) : nf.format(Math.round(k * 10) / 10)}k`;
}

function ago(iso, now) {
  if (!iso) return { text: 'unknown', title: '' };
  const d = new Date(iso);
  const days = Math.round((d - now) / 864e5);
  const abs = Math.abs(days);
  const text = abs < 1 ? 'today'
    : abs < 30 ? rtf.format(days, 'day')
    : abs < 365 ? rtf.format(Math.round(days / 30.4), 'month')
    : rtf.format(Math.round(days / 365), 'year');
  return { text, title: df.format(d) };
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
}

function mark(text, q) {
  if (!q) return esc(text);
  const lower = text.toLowerCase();
  let out = '';
  let i = 0;
  for (let j = lower.indexOf(q); j !== -1; j = lower.indexOf(q, i)) {
    out += `${esc(text.slice(i, j))}<mark>${esc(text.slice(j, j + q.length))}</mark>`;
    i = j + q.length;
  }
  return out + esc(text.slice(i));
}

function init(data) {
  const now = new Date();
  const cats = Object.fromEntries(data.categories.map(c => [c.id, c.title]));
  const agentIds = Object.keys(data.agents);
  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get('q') || '',
    agents: new Set((params.get('agents') || '').split(',').filter(a => a in data.agents)),
    category: params.get('category') in cats ? params.get('category') : '',
    sort: SORTS.includes(params.get('sort')) ? params.get('sort') : 'stars',
    hide: params.get('hide') === '1',
  };
  const haystack = new Map(data.entries.map(e => [e, `${e.repo} ${e.description} ${cats[e.category]}`.toLowerCase()]));

  $('total').textContent = data.entries.length;
  const gen = new Date(data.generatedAt);
  $('refreshed').textContent = df.format(gen);
  $('refreshed').dateTime = data.generatedAt;
  $('agent-list').innerHTML = agentIds.map(id => `<li><svg aria-hidden="true"><use href="#i-${id}"/></svg><span>${esc(data.agents[id])}</span><span class="num">${data.entries.filter(e => e.agents.includes(id)).length}</span></li>`).join('');

  $('agents').insertAdjacentHTML('beforeend', agentIds.map(id => `
    <label class="chip"><input type="checkbox" name="agent" value="${id}"${state.agents.has(id) ? ' checked' : ''}><svg aria-hidden="true"><use href="#i-${id}"/></svg><span>${esc(data.agents[id])}</span></label>`).join(''));

  $('cat-list').innerHTML = [['', 'All'], ...data.categories.map(c => [c.id, c.title])].map(([id, title]) => `
    <label class="cat"><input type="radio" name="category" value="${id}"${state.category === id ? ' checked' : ''}><span class="cat-name">${esc(title)}</span><span class="cat-n num" data-cat="${id}"></span></label>`).join('');

  $('q').value = state.q;
  document.querySelector(`input[name=sort][value=${state.sort}]`).checked = true;
  $('hide').checked = state.hide;

  $('filters').addEventListener('input', e => {
    const t = e.target;
    if (t.id === 'q') state.q = t.value;
    else if (t.name === 'agent') t.checked ? state.agents.add(t.value) : state.agents.delete(t.value);
    else if (t.name === 'category') state.category = t.value;
    else if (t.name === 'sort') state.sort = t.value;
    else if (t.id === 'hide') state.hide = t.checked;
    render();
  });

  $('reset').addEventListener('click', () => {
    Object.assign(state, { q: '', category: '', hide: false });
    state.agents.clear();
    $('q').value = '';
    $('hide').checked = false;
    for (const el of document.querySelectorAll('input[name=agent]')) el.checked = false;
    document.querySelector('input[name=category][value=""]').checked = true;
    render();
    $('q').focus();
  });

  document.addEventListener('keydown', e => {
    const el = document.activeElement;
    const typing = el?.isContentEditable || /^(TEXTAREA|SELECT)$/.test(el?.tagName) || (el?.tagName === 'INPUT' && !/^(checkbox|radio|button|submit|reset)$/.test(el.type));
    if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      $('q').focus();
      $('q').select();
    } else if (e.key === 'Escape' && document.activeElement === $('q')) {
      if ($('q').value) {
        $('q').value = '';
        state.q = '';
        render();
      } else $('q').blur();
    }
  });

  const order = {
    stars: (a, b) => b.stars - a.stars || a.repo.localeCompare(b.repo),
    updated: (a, b) => (b.pushedAt || '').localeCompare(a.pushedAt || ''),
    name: (a, b) => a.repo.split('/')[1].localeCompare(b.repo.split('/')[1], 'en', { sensitivity: 'base' }) || a.repo.localeCompare(b.repo),
  };

  function render() {
    const q = state.q.trim().toLowerCase();
    const base = data.entries.filter(e => (!q || haystack.get(e).includes(q))
      && [...state.agents].every(a => e.agents.includes(a))
      && !(state.hide && (e.archived || e.stale)));
    const items = base.filter(e => !state.category || e.category === state.category).sort(order[state.sort]);

    for (const el of document.querySelectorAll('.cat-n')) {
      const n = el.dataset.cat ? base.filter(e => e.category === el.dataset.cat).length : base.length;
      el.textContent = n;
      el.closest('.cat').classList.toggle('is-zero', n === 0);
    }

    $('list').innerHTML = items.map(e => {
      const [owner, name] = e.repo.split('/');
      const t = ago(e.pushedAt, now);
      const flag = e.archived ? '<span class="flag">Archived</span>'
        : e.stale ? '<span class="flag" title="No push in over a year">Stale</span>' : '';
      const agents = agentIds.map(a => e.agents.includes(a)
        ? `<svg role="img" aria-label="${esc(data.agents[a])}"><title>${esc(data.agents[a])}</title><use href="#i-${a}"/></svg>`
        : '<i aria-hidden="true"></i>').join('');
      return `<li class="row${e.archived || e.stale ? ' is-dim' : ''}">
        <div class="row-main">
          <a class="repo" href="${esc(e.url)}" translate="no"><span class="owner">${mark(owner, q)}/</span><span class="name">${mark(name, q)}</span></a>${flag}${state.category ? '' : `<span class="row-cat">${esc(cats[e.category])}</span>`}
          <p class="desc">${mark(e.description, q)}</p>
        </div>
        <div class="row-agents" role="group" aria-label="Works with">${agents}</div>
        <span class="row-stars num"><span aria-hidden="true">${stars(e.stars)}</span><span class="sr-only">${e.stars.toLocaleString('en')} stars</span></span>
        <time class="row-date" datetime="${esc(e.pushedAt || '')}" title="${t.title}">${t.text}</time>
      </li>`;
    }).join('');

    const empty = items.length === 0;
    $('empty').hidden = !empty;
    $('empty-q').textContent = q ? `“${state.q.trim()}”` : 'these filters';
    $('count').textContent = items.length === data.entries.length
      ? `${items.length} repos`
      : `${items.length} of ${data.entries.length} repos`;

    const p = new URLSearchParams();
    if (q) p.set('q', state.q.trim());
    if (state.agents.size) p.set('agents', agentIds.filter(a => state.agents.has(a)).join(','));
    if (state.category) p.set('category', state.category);
    if (state.sort !== 'stars') p.set('sort', state.sort);
    if (state.hide) p.set('hide', '1');
    const qs = p.toString();
    history.replaceState(null, '', qs ? `?${qs}${location.hash}` : location.pathname + location.hash);
  }

  render();
}

function initTheme() {
  const btn = $('theme');
  const label = $('theme-label');
  const modes = ['auto', 'light', 'dark'];
  const names = { auto: 'system', light: 'light', dark: 'dark' };
  let mode = document.documentElement.dataset.theme || 'auto';
  const paint = () => {
    label.textContent = mode;
    btn.setAttribute('aria-label', `Color theme: ${names[mode]}. Switch theme`);
  };
  paint();
  btn.addEventListener('click', () => {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length];
    if (mode === 'auto') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = mode;
    try {
      mode === 'auto' ? localStorage.removeItem('theme') : localStorage.setItem('theme', mode);
    } catch {}
    paint();
  });
}
