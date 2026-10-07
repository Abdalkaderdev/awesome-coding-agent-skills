import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validate, isStale, formatStars, renderList, injectReadme, START, END } from '../scripts/lib.mjs';

const base = () => ({
  agents: { 'claude-code': 'Claude Code', codex: 'Codex' },
  categories: [{ id: 'skills', title: 'Skill collections', description: 'Skills.' }],
  entries: [
    { repo: 'a/low', category: 'skills', agents: ['codex'], description: 'Low.' },
    { repo: 'b/high', category: 'skills', agents: ['claude-code'], description: 'High.' },
  ],
});

test('entries.json is valid', async () => {
  const data = JSON.parse(await readFile(new URL('../data/entries.json', import.meta.url), 'utf8'));
  assert.deepEqual(validate(data), []);
});

test('validate reports bad entries', () => {
  const d = base();
  d.entries.push(
    { repo: 'a/low', category: 'skills', agents: ['codex'], description: 'Dup.' },
    { repo: 'not a repo', category: 'nope', agents: ['vim'], description: '' },
    { repo: 'c/d', category: 'skills', agents: [], description: 'No period', stars: 3 },
  );
  const errs = validate(d).join('\n');
  for (const s of ['duplicate', 'owner/name', 'unknown category nope', 'unknown agent vim', 'description required', 'non-empty', 'end with a period', 'unknown field stars'])
    assert.match(errs, new RegExp(s));
});

test('isStale and formatStars', () => {
  const now = new Date('2026-01-01');
  assert.equal(isStale('2024-12-01', now), true);
  assert.equal(isStale('2025-06-01', now), false);
  assert.equal(formatStars(999), '999');
  assert.equal(formatStars(1250), '1.3k');
  assert.equal(formatStars(2000), '2k');
  assert.equal(formatStars(296384), '296k');
});

test('renderList sorts by stars and flags archived and stale', () => {
  const now = new Date('2026-01-01');
  const md = renderList(base(), {
    'a/low': { stars: 10, pushedAt: '2020-01-01T00:00:00Z', archived: false },
    'b/high': { stars: 5000, pushedAt: '2025-12-01T00:00:00Z', archived: true },
  }, now);
  assert.ok(md.indexOf('b/high') < md.indexOf('a/low'));
  assert.match(md, /\[b\/high\]\(https:\/\/github.com\/b\/high\) \*\*archived\*\* \| High\. \| `CC` \| 5k \| 2025-12-01 \|/);
  assert.match(md, /\[a\/low\]\(https:\/\/github.com\/a\/low\) \*\*stale\*\*/);
  assert.match(md, /\[Skill collections\]\(#skill-collections\)/);
});

test('injectReadme replaces only the marked region', () => {
  const out = injectReadme(`head\n${START}\nold\n${END}\ntail`, 'new');
  assert.equal(out, `head\n${START}\nnew\n${END}\ntail`);
  assert.throws(() => injectReadme('no markers', 'x'));
});
