import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { validate, fetchStats, merge, renderList, injectReadme } from './lib.mjs';

const root = new URL('../', import.meta.url);
const check = process.argv.includes('--check');

const data = JSON.parse(await readFile(new URL('data/entries.json', root), 'utf8'));
const errors = validate(data);
if (errors.length) fail(errors);

const token = process.env.GITHUB_TOKEN || ghToken();
if (!token) fail(['GITHUB_TOKEN not set and `gh auth token` unavailable']);

const repos = data.entries.map(e => e.repo);
const stats = await fetchStats(repos, token);
const dead = repos.filter(r => !stats[r]).map(r => `${r}: not found`);
const moved = repos.filter(r => stats[r] && stats[r].name.toLowerCase() !== r.toLowerCase()).map(r => `${r}: moved to ${stats[r].name}`);
if (dead.length || moved.length) fail([...dead, ...moved]);

if (check) {
  console.log(`ok: ${repos.length} entries valid and reachable`);
} else {
  const now = new Date();
  const site = { generatedAt: now.toISOString(), agents: data.agents, categories: data.categories, entries: merge(data, stats, now) };
  await writeFile(new URL('site/data.json', root), JSON.stringify(site, null, 2) + '\n');
  const readmeUrl = new URL('README.md', root);
  await writeFile(readmeUrl, injectReadme(await readFile(readmeUrl, 'utf8'), renderList(data, stats, now)));
  console.log(`wrote README.md and site/data.json (${repos.length} entries)`);
}

function ghToken() {
  try {
    return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

function fail(lines) {
  for (const l of lines) console.error(`error: ${l}`);
  process.exit(1);
}
