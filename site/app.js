const $ = id => document.getElementById(id);
const fmt = n => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '')}k` : String(n));

fetch('data.json').then(r => r.json()).then(init, () => { $('count').textContent = 'Could not load data.json.'; });

function init(data) {
  const cats = Object.fromEntries(data.categories.map(c => [c.id, c.title]));
  const params = new URLSearchParams(location.search);
  const active = new Set((params.get('agents') || '').split(',').filter(a => a in data.agents));

  for (const [id, name] of Object.entries(data.agents)) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = name;
    b.dataset.id = id;
    b.setAttribute('aria-pressed', active.has(id));
    b.onclick = () => {
      active.has(id) ? active.delete(id) : active.add(id);
      b.setAttribute('aria-pressed', active.has(id));
      render();
    };
    $('agents').append(b);
  }
  for (const c of data.categories) $('category').append(new Option(c.title, c.id));

  $('q').value = params.get('q') || '';
  $('category').value = cats[params.get('category')] ? params.get('category') : '';
  $('sort').value = ['stars', 'updated', 'name'].includes(params.get('sort')) ? params.get('sort') : 'stars';
  $('hide').checked = params.get('hide') === '1';
  for (const el of ['q', 'category', 'sort', 'hide']) $(el).addEventListener('input', render);
  $('generated').textContent = `Data refreshed ${data.generatedAt.slice(0, 10)}.`;

  function render() {
    const q = $('q').value.trim().toLowerCase();
    const cat = $('category').value;
    const sort = $('sort').value;
    const hide = $('hide').checked;
    const items = data.entries
      .filter(e => (!q || `${e.repo} ${e.description}`.toLowerCase().includes(q))
        && (!cat || e.category === cat)
        && [...active].every(a => e.agents.includes(a))
        && !(hide && (e.archived || e.stale)))
      .sort(sort === 'name' ? (a, b) => a.repo.localeCompare(b.repo)
        : sort === 'updated' ? (a, b) => (b.pushedAt || '').localeCompare(a.pushedAt || '')
        : (a, b) => b.stars - a.stars);

    $('list').replaceChildren(...items.map(e => {
      const li = document.createElement('li');
      const flag = e.archived ? '<span class="flag">archived</span>' : e.stale ? '<span class="flag">stale</span>' : '';
      li.innerHTML = `
        <div class="top"><a href="${e.url}">${esc(e.repo)}</a>${flag}<span class="stars" title="GitHub stars">★ ${fmt(e.stars)}</span></div>
        <p>${esc(e.description)}</p>
        <div class="meta"><span class="cat">${esc(cats[e.category])}</span>${e.agents.map(a => `<span class="tag">${esc(data.agents[a])}</span>`).join('')}<span class="date">updated ${e.pushedAt ? e.pushedAt.slice(0, 10) : 'unknown'}</span></div>`;
      return li;
    }));
    $('count').textContent = `${items.length} of ${data.entries.length}`;

    const p = new URLSearchParams();
    if (q) p.set('q', q);
    if (active.size) p.set('agents', [...active].join(','));
    if (cat) p.set('category', cat);
    if (sort !== 'stars') p.set('sort', sort);
    if (hide) p.set('hide', '1');
    history.replaceState(null, '', p.size ? `?${p}` : location.pathname);
  }
  render();
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
}
