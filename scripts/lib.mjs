export const STALE_DAYS = 365;
export const START = '<!-- list:start -->';
export const END = '<!-- list:end -->';

const REPO_RE = /^[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/;
const SHORT = { 'claude-code': 'CC', codex: 'CX', 'gemini-cli': 'GC', cursor: 'CU' };

export function validate(data) {
  const errors = [];
  const agentIds = Object.keys(data.agents ?? {});
  const catIds = (data.categories ?? []).map(c => c.id);
  if (!agentIds.length) errors.push('agents: missing');
  if (!catIds.length) errors.push('categories: missing');
  if (!Array.isArray(data.entries)) return [...errors, 'entries: must be an array'];
  const seen = new Set();
  data.entries.forEach((e, i) => {
    const at = `entries[${i}] ${e.repo ?? ''}`.trim();
    const keys = Object.keys(e).filter(k => !['repo', 'category', 'agents', 'description'].includes(k));
    if (keys.length) errors.push(`${at}: unknown field ${keys.join(', ')}`);
    if (typeof e.repo !== 'string' || !REPO_RE.test(e.repo)) errors.push(`${at}: repo must be owner/name`);
    else if (seen.has(e.repo.toLowerCase())) errors.push(`${at}: duplicate`);
    else seen.add(e.repo.toLowerCase());
    if (!catIds.includes(e.category)) errors.push(`${at}: unknown category ${e.category}`);
    if (!Array.isArray(e.agents) || !e.agents.length) errors.push(`${at}: agents must be a non-empty array`);
    else for (const a of e.agents) if (!agentIds.includes(a)) errors.push(`${at}: unknown agent ${a}`);
    if (typeof e.description !== 'string' || !e.description.trim()) errors.push(`${at}: description required`);
    else if (e.description.length > 100) errors.push(`${at}: description over 100 chars`);
    else if (!/\.$/.test(e.description)) errors.push(`${at}: description must end with a period`);
  });
  return errors;
}

export function isStale(pushedAt, now = new Date()) {
  return now - new Date(pushedAt) > STALE_DAYS * 864e5;
}

export function formatStars(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '')}k` : String(n);
}

export function merge(data, stats, now = new Date()) {
  return data.entries.map(e => {
    const s = stats[e.repo];
    return {
      ...e,
      url: `https://github.com/${e.repo}`,
      stars: s?.stars ?? 0,
      pushedAt: s?.pushedAt ?? null,
      archived: !!s?.archived,
      stale: s?.pushedAt ? isStale(s.pushedAt, now) : false,
    };
  });
}

export function renderList(data, stats, now = new Date()) {
  const rows = merge(data, stats, now);
  const legend = Object.entries(data.agents).map(([id, name]) => `\`${SHORT[id] ?? id}\` ${name}`).join(' · ');
  const out = [`Agents: ${legend}. Flags: **archived**, **stale** (no push in ${STALE_DAYS} days).`, ''];
  out.push(data.categories.map(c => `[${c.title}](#${slug(c.title)})`).join(' · '), '');
  for (const c of data.categories) {
    const items = rows.filter(r => r.category === c.id).sort((a, b) => b.stars - a.stars || a.repo.localeCompare(b.repo));
    if (!items.length) continue;
    out.push(`## ${c.title}`, '', c.description, '', '| Project | Description | Agents | Stars | Updated |', '| --- | --- | --- | ---: | --- |');
    for (const r of items) {
      const flag = r.archived ? ' **archived**' : r.stale ? ' **stale**' : '';
      const agents = r.agents.map(a => `\`${SHORT[a] ?? a}\``).join(' ');
      out.push(`| [${r.repo}](${r.url})${flag} | ${r.description.replace(/\|/g, '\\|')} | ${agents} | ${formatStars(r.stars)} | ${r.pushedAt?.slice(0, 10) ?? ''} |`);
    }
    out.push('');
  }
  return out.join('\n').trim();
}

export function injectReadme(readme, list) {
  const a = readme.indexOf(START);
  const b = readme.indexOf(END);
  if (a < 0 || b < a) throw new Error('README markers not found');
  return `${readme.slice(0, a + START.length)}\n${list}\n${readme.slice(b)}`;
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
}

export async function fetchStats(repos, token) {
  const stats = {};
  for (let i = 0; i < repos.length; i += 50) {
    const chunk = repos.slice(i, i + 50);
    const query = `{${chunk.map((r, j) => {
      const [o, n] = r.split('/');
      return `r${j}: repository(owner: ${JSON.stringify(o)}, name: ${JSON.stringify(n)}) { nameWithOwner stargazerCount pushedAt isArchived }`;
    }).join('\n')}}`;
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { authorization: `bearer ${token}`, 'content-type': 'application/json', 'user-agent': 'awesome-coding-agent-skills' },
      body: JSON.stringify({ query }),
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    const { data, errors } = await res.json();
    if (!data) throw new Error(`GitHub API: ${JSON.stringify(errors)}`);
    chunk.forEach((r, j) => {
      const v = data?.[`r${j}`];
      stats[r] = v && { name: v.nameWithOwner, stars: v.stargazerCount, pushedAt: v.pushedAt, archived: v.isArchived };
    });
  }
  return stats;
}
