# Contributing

Additions, corrections and removals are welcome. Open a pull request that edits `data/entries.json` only. The README tables and `site/data.json` are generated; do not edit them by hand.

## Inclusion criteria

An entry must:

- Be a public GitHub repository that works with at least one of Claude Code, Codex, Gemini CLI or Cursor.
- Be a skill, skill collection, plugin, extension, subagent collection, rules collection, hook, statusline, usage tool, memory or context tool, session or orchestration tool, skill manager, CI action or SDK, MCP server, guide, or curated list used with coding agents.
- Have a README that explains what it does and how to install it.
- Have at least 100 stars, or be published by the vendor of the tool it extends.
- Have had a push in the last 12 months when added.
- Not be a paid product with an open-source wrapper, a link farm, or a fork without meaningful changes.

Entries that are archived or have no push for 12 months are flagged automatically. Flagged entries may be removed in a later cleanup.

## Entry format

```json
{ "repo": "owner/name", "category": "skills", "agents": ["claude-code", "codex"], "description": "What it does, in one line." }
```

- `repo`: `owner/name` exactly as on GitHub. Renamed repositories fail CI; use the new name.
- `category`: one of the `id` values in `categories`.
- `agents`: ids from `agents`. List an agent only if the project documents support for it, or ships in a format the agent loads natively (`SKILL.md` skills and MCP servers work in all four).
- `description`: plain and factual, at most 100 characters, ending with a period. No marketing words, no emoji, no star counts.

Place new entries anywhere inside their category block. Order in the output is by stars.

## Checks

```sh
npm test
npm run check
```

`npm run check` needs `GITHUB_TOKEN` or a logged-in `gh` CLI. CI runs both on every pull request.

## Pull request format

Title: `add: owner/name`, `remove: owner/name` or `fix: owner/name description`.

Body:

```
Repo: https://github.com/owner/name
Category: skills
Agents: claude-code, codex
Why: one or two sentences on why it belongs here.
```

One entry per pull request, unless the entries are closely related (for example, several extensions from the same publisher).
