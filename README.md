# Awesome Coding Agent Skills

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CI](https://github.com/Abdalkaderdev/awesome-coding-agent-skills/actions/workflows/ci.yml/badge.svg)](https://github.com/Abdalkaderdev/awesome-coding-agent-skills/actions/workflows/ci.yml)
[![Refresh](https://github.com/Abdalkaderdev/awesome-coding-agent-skills/actions/workflows/refresh.yml/badge.svg)](https://github.com/Abdalkaderdev/awesome-coding-agent-skills/actions/workflows/refresh.yml)
[![License: CC0-1.0](https://img.shields.io/badge/list-CC0--1.0-lightgrey.svg)](LICENSE-CC0)
[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)

Skills, plugins, extensions and tooling for **Claude Code**, **Codex**, **Gemini CLI** and **Cursor**, in one list. Every entry shows which of the four agents it works with, its GitHub stars and its last push date. Stars and dates are refreshed weekly by a scheduled workflow, and archived or inactive projects are flagged.

Search and filter the same data at **[skills.abdalkader.dev](https://skills.abdalkader.dev)**.

## What is covered

- Skill collections in the `SKILL.md` format
- Workflow frameworks and methods packaged as skills or plugins
- Plugin marketplaces for Claude Code, Codex and Cursor
- Gemini CLI extensions
- Subagent collections
- Rules and instruction files (Cursor rules, `AGENTS.md`)
- MCP servers commonly used with coding agents
- Statuslines, usage and cost monitors
- Hooks
- Skill managers, converters and routers

## How the list is maintained

- `data/entries.json` is the single source of truth: repository, category, supported agents, one-line description.
- `scripts/build.mjs` reads it, pulls stars, last push and archived state from the GitHub GraphQL API, and regenerates the tables below plus `site/data.json`. Entries are sorted by stars within each category.
- `.github/workflows/refresh.yml` runs the build every Monday and commits any changes.
- `.github/workflows/ci.yml` runs the tests, validates the schema and fails on repositories that no longer exist or have moved.

Edit `data/entries.json`, never the tables. They are overwritten on every refresh.

## List

<!-- list:start -->
Agents: `CC` Claude Code · `CX` Codex · `GC` Gemini CLI · `CU` Cursor. Flags: **archived**, **stale** (no push in 365 days).

[Skill collections](#skill-collections) · [Workflows and frameworks](#workflows-and-frameworks) · [Plugin marketplaces](#plugin-marketplaces) · [Gemini CLI extensions](#gemini-cli-extensions) · [Subagents](#subagents) · [Rules and instructions](#rules-and-instructions) · [MCP servers](#mcp-servers) · [Statusline and usage](#statusline-and-usage) · [Hooks](#hooks) · [Skill managers and tooling](#skill-managers-and-tooling) · [Other lists](#other-lists)

## Skill collections

Repositories of SKILL.md skills.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [anthropics/skills](https://github.com/anthropics/skills) | Anthropic's reference skills, including docx, pptx, xlsx and pdf. | `CC` `CX` `GC` `CU` | 180k | 2026-10-05 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Engineering skills: specs, testing, code review, performance. | `CC` `CX` `GC` `CU` | 103k | 2026-10-03 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Researches a topic across Reddit, X, YouTube and HN for the last 30 days. | `CC` `CX` `GC` `CU` | 64k | 2026-10-07 |
| [blader/humanizer](https://github.com/blader/humanizer) | Rewrites text to remove common signs of AI-generated writing. | `CC` `CX` `GC` | 55k | 2026-09-28 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Skills for Obsidian vaults, Markdown, Bases and the Obsidian CLI. | `CC` `CX` | 49k | 2026-09-15 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Skills for scientific research, databases and analysis packages. | `CC` `CX` `GC` `CU` | 48k | 2026-10-05 |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel's skills for React, Next.js and Vercel projects. | `CC` `CX` `GC` `CU` | 32k | 2026-08-28 |
| [openai/skills](https://github.com/openai/skills) | OpenAI's skills catalog for Codex. | `CX` | 28k | 2026-09-08 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Large collection of skills, agents and commands across domains. | `CC` `CX` `GC` `CU` | 28k | 2026-08-30 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Persistent markdown planning files for long-running agent tasks. | `CC` `CX` `GC` `CU` | 27k | 2026-10-06 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | Product management skills from discovery to strategy. | `CC` `CX` `GC` `CU` | 27k | 2026-09-14 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | Multi-phase security audit skill with verified findings. | `CC` `CX` `GC` `CU` | 26k | 2026-09-14 |
| [trailofbits/skills](https://github.com/trailofbits/skills) | Trail of Bits skills for security research and auditing. | `CC` `CX` | 7.4k | 2026-10-07 |
| [zarazhangrui/codebase-to-course](https://github.com/zarazhangrui/codebase-to-course) | Turns a codebase into an interactive single-page HTML course. | `CC` | 5.7k | 2026-03-30 |
| [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) | Skills focused on agent output quality and context use. | `CC` `CX` `GC` `CU` | 1.7k | 2026-08-26 |
| [skills-directory/skill-codex](https://github.com/skills-directory/skill-codex) | Claude Code skill that delegates prompts to Codex. | `CC` `CX` | 1.5k | 2026-09-13 |
| [daymade/claude-code-skills](https://github.com/daymade/claude-code-skills) | Skills marketplace for Claude Code. | `CC` | 1.4k | 2026-10-07 |
| [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills) | HashiCorp skills and plugins for Terraform and other products. | `CC` `CX` `CU` | 886 | 2026-10-05 |

## Workflows and frameworks

Opinionated development processes packaged as skills, commands or plugins.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [obra/superpowers](https://github.com/obra/superpowers) | Skills-based development method: brainstorm, plan, TDD, review. | `CC` `CX` `GC` `CU` | 296k | 2026-10-06 |
| [github/spec-kit](https://github.com/github/spec-kit) | GitHub's toolkit for spec-driven development. | `CC` `CX` `GC` `CU` | 141k | 2026-10-07 |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | Agile planning and development method driven by role agents. | `CC` `CX` `CU` | 54k | 2026-10-07 |
| [eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master) | Task management from PRDs, usable via CLI or MCP. | `CC` `CX` `CU` | 28k | 2026-04-28 |
| [SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework) | Commands, personas and modes layered on Claude Code. | `CC` | 24k | 2026-09-27 |
| [automazeio/ccpm](https://github.com/automazeio/ccpm) | Project management using GitHub Issues and git worktrees. | `CC` `CX` `CU` | 8.4k | 2026-03-18 |
| [parcadei/Continuous-Claude-v3](https://github.com/parcadei/Continuous-Claude-v3) | Context management with ledgers and handoffs maintained by hooks. | `CC` | 3.9k | 2026-01-26 |
| [OneRedOak/claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows) | Code review, security review and design review workflows. | `CC` | 3.9k | 2026-10-06 |

## Plugin marketplaces

Installable plugin catalogs.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [wshobson/agents](https://github.com/wshobson/agents) | Plugin marketplace of agents, skills and commands for several harnesses. | `CC` `CX` `CU` | 40k | 2026-10-05 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Anthropic-managed directory of Claude Code plugins. | `CC` | 38k | 2026-10-07 |
| [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins. | `CU` | 10k | 2026-10-07 |
| [cursor/community-plugins](https://github.com/cursor/community-plugins) | Community plugins for Cursor. | `CU` | 4k | 2026-09-11 |
| [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) | Marketplace for superpowers and related plugins. | `CC` | 1.3k | 2026-09-08 |
| [Piebald-AI/claude-code-lsps](https://github.com/Piebald-AI/claude-code-lsps) | Marketplace of language server plugins for Claude Code. | `CC` | 521 | 2026-07-25 |
| [trailofbits/skills-curated](https://github.com/trailofbits/skills-curated) | Community-vetted plugin marketplace curated by Trail of Bits. | `CC` `CX` | 512 | 2026-07-14 |

## Gemini CLI extensions

Extensions installed with `gemini extensions install`.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [gemini-cli-extensions/conductor](https://github.com/gemini-cli-extensions/conductor) | Spec-driven development: specs, plans and tracked implementation. | `GC` `CC` | 3.8k | 2026-09-01 |
| [gemini-cli-extensions/nanobanana](https://github.com/gemini-cli-extensions/nanobanana) | Image generation and editing with Gemini image models. | `GC` | 1.1k | 2026-06-25 |
| [gemini-cli-extensions/security](https://github.com/gemini-cli-extensions/security) | Google's extension that scans code changes for vulnerabilities. | `GC` | 794 | 2026-07-25 |
| [gemini-cli-extensions/workspace](https://github.com/gemini-cli-extensions/workspace) | Google Workspace access: Docs, Drive, Gmail, Calendar. | `GC` | 645 | 2026-10-05 |
| [gemini-cli-extensions/code-review](https://github.com/gemini-cli-extensions/code-review) | Google's extension that reviews local code changes. | `GC` | 531 | 2026-03-10 |
| [gemini-cli-extensions/jules](https://github.com/gemini-cli-extensions/jules) | Delegates tasks to the Jules asynchronous coding agent. | `GC` | 413 | 2026-06-17 |

## Subagents

Collections of specialized agent definitions.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 100+ subagent definitions grouped by domain. | `CC` | 26k | 2026-10-05 |
| [VoltAgent/awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) | 130+ subagent definitions for Codex. | `CX` | 6.3k | 2026-10-05 |

## Rules and instructions

Cursor rules, AGENTS.md and similar instruction files.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | Cursor rules files by language and framework. | `CU` | 41k | 2026-05-30 |
| [agentsmd/agents.md](https://github.com/agentsmd/agents.md) | The AGENTS.md format specification and site. | `CX` `GC` `CU` | 25k | 2026-09-10 |
| [steipete/agent-rules](https://github.com/steipete/agent-rules) **archived** | Rules and commands for working with Claude Code and Cursor. | `CC` `CU` | 5.7k | 2026-05-03 |
| [sanjeed5/awesome-cursor-rules-mdc](https://github.com/sanjeed5/awesome-cursor-rules-mdc) | Cursor rules in .mdc format. | `CU` | 3.6k | 2026-05-19 |

## MCP servers

Model Context Protocol servers widely used with coding agents.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Reference MCP server implementations. | `CC` `CX` `GC` `CU` | 91k | 2026-10-07 |
| [upstash/context7](https://github.com/upstash/context7) | Current library documentation and code examples. | `CC` `CX` `GC` `CU` | 63k | 2026-10-07 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for debugging, tracing and inspecting pages. | `CC` `CX` `GC` `CU` | 53k | 2026-10-07 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Browser automation through Playwright. | `CC` `CX` `GC` `CU` | 38k | 2026-10-07 |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | GitHub's official MCP server. | `CC` `CX` `GC` `CU` | 33k | 2026-10-07 |
| [oraios/serena](https://github.com/oraios/serena) | Symbol-level code retrieval and editing via language servers. | `CC` `CX` `GC` `CU` | 30k | 2026-10-06 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Semantic code search over the whole codebase. | `CC` `CX` `GC` `CU` | 13k | 2026-07-14 |

## Statusline and usage

Statuslines, usage trackers and cost monitors.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | Plugin showing context usage, active tools and running agents. | `CC` | 28k | 2026-10-03 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | macOS menu bar app for Codex and Claude Code usage limits. | `CX` `CC` | 22k | 2026-10-07 |
| [ccusage/ccusage](https://github.com/ccusage/ccusage) | Token usage and cost reports from local session logs. | `CC` `CX` | 19k | 2026-10-07 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | Configurable statusline with powerline themes. | `CC` | 13k | 2026-10-06 |
| [Maciek-roboblog/Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) | Terminal usage monitor with burn rate and limit predictions. | `CC` | 8.7k | 2026-07-05 |
| [Haleclipse/CCometixLine](https://github.com/Haleclipse/CCometixLine) | Statusline written in Rust. | `CC` | 3.5k | 2026-03-14 |
| [Owloops/claude-powerline](https://github.com/Owloops/claude-powerline) | Vim-style powerline statusline. | `CC` | 1.2k | 2026-10-04 |

## Hooks

Hook collections, SDKs and observability built on hooks.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery) | Examples of every Claude Code hook event. | `CC` | 3.9k | 2026-03-04 |
| [disler/claude-code-hooks-multi-agent-observability](https://github.com/disler/claude-code-hooks-multi-agent-observability) | Real-time dashboard of agent activity fed by hook events. | `CC` | 1.5k | 2026-02-08 |
| [karanb192/claude-code-hooks](https://github.com/karanb192/claude-code-hooks) | Hooks for safety, cost and observability, with a plugin marketplace. | `CC` | 533 | 2026-10-04 |
| [GowayLee/cchooks](https://github.com/GowayLee/cchooks) | Python SDK for writing Claude Code hooks. | `CC` | 132 | 2026-04-08 |

## Skill managers and tooling

Install, sync, convert and route.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) | Routes agent requests to other model providers. | `CC` `CX` | 38k | 2026-09-26 |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | `npx skills` CLI to install and update skills across agents. | `CC` `CX` `GC` `CU` | 33k | 2026-10-07 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI to install agents, commands, hooks and MCP configs. | `CC` | 32k | 2026-10-07 |
| [numman-ali/openskills](https://github.com/numman-ali/openskills) | Universal skills loader installed from npm. | `CC` `CX` `CU` | 11k | 2026-01-18 |
| [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) | Desktop app to manage and sync skills across agents. | `CC` `CX` `GC` `CU` | 5.7k | 2026-10-04 |
| [Dimillian/CodexSkillManager](https://github.com/Dimillian/CodexSkillManager) | macOS app to manage Codex skills. | `CX` | 1.4k | 2026-01-18 |
| [luongnv89/asm](https://github.com/luongnv89/asm) | CLI skill manager for multiple coding agents. | `CC` `CX` `GC` `CU` | 953 | 2026-10-06 |
| [intellectronica/skillz](https://github.com/intellectronica/skillz) | MCP server that exposes skills to clients without native support. | `CX` `GC` `CU` | 402 | 2026-01-30 |
| [jduncan-rva/skill-porter](https://github.com/jduncan-rva/skill-porter) | Converts Claude Code skills to Gemini CLI extensions and back. | `CC` `GC` | 191 | 2025-12-02 |

## Other lists

Related curated lists.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Curated Claude skills and resources. | `CC` | 77k | 2026-09-18 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Curated Claude Code resources. | `CC` | 55k | 2026-10-07 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 1000+ agent skills indexed by source. | `CC` `CX` `GC` `CU` | 35k | 2026-10-07 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | Curated Codex skills. | `CX` | 17k | 2026-07-26 |
| [quemsah/awesome-claude-plugins](https://github.com/quemsah/awesome-claude-plugins) | Automated index of Claude Code plugins with adoption metrics. | `CC` | 1.4k | 2026-10-07 |
| [RoggeOhta/awesome-codex-cli](https://github.com/RoggeOhta/awesome-codex-cli) | Tools, skills, subagents and plugins for Codex CLI. | `CX` | 544 | 2026-09-06 |
| [Piebald-AI/awesome-gemini-cli](https://github.com/Piebald-AI/awesome-gemini-cli) | Tools, extensions and resources for Gemini CLI. | `GC` | 512 | 2026-10-06 |
<!-- list:end -->

## Site

`site/` is a static page (`index.html`, `app.js`, `style.css`, `data.json`) with client-side search and filters by agent and category. It has no build step. Any static host works; `vercel.json` points Vercel at `site/`.

Run locally:

```sh
npx serve site
```

## Development

Requires Node 20 or later. No dependencies.

```sh
npm test              # unit tests
npm run check         # validate entries and check every repo resolves
npm run refresh       # refresh stats, rewrite README.md and site/data.json
```

The scripts use `GITHUB_TOKEN`, or fall back to `gh auth token`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for inclusion criteria and the PR format.

## License

- List content (`data/entries.json` and the generated list) is dedicated to the public domain under [CC0 1.0](LICENSE-CC0).
- Code (`scripts/`, `site/`, `test/`, workflows) is under the [MIT License](LICENSE).

## Author

[Abdalkader](https://abdalkader.dev) · [@Abdalkaderdev](https://github.com/Abdalkaderdev)
