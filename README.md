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
- Plugins and plugin marketplaces for Claude Code, Codex and Cursor
- Gemini CLI extensions
- Subagent collections
- Rules and instruction files (Cursor rules, `AGENTS.md`)
- MCP servers commonly used with coding agents
- Memory, code indexing and context reduction tools
- Statuslines, usage and cost monitors
- Hooks
- Parallel agent runners, worktree managers and session clients
- Skill managers, converters, rule sync tools and CI actions
- Guides and example setups

## How the list is maintained

- `data/entries.json` is the single source of truth: repository, category, supported agents, one-line description.
- `scripts/build.mjs` reads it, pulls stars, last push and archived state from the GitHub GraphQL API, and regenerates the tables below plus `site/data.json`. Entries are sorted by stars within each category.
- `.github/workflows/refresh.yml` runs the build every Monday and commits any changes.
- `.github/workflows/ci.yml` runs the tests, validates the schema and fails on repositories that no longer exist or have moved.

Edit `data/entries.json`, never the tables. They are overwritten on every refresh.

## List

<!-- list:start -->
Agents: `CC` Claude Code · `CX` Codex · `GC` Gemini CLI · `CU` Cursor. Flags: **archived**, **stale** (no push in 365 days).

[Skill collections](#skill-collections) · [Workflows and frameworks](#workflows-and-frameworks) · [Plugins and marketplaces](#plugins-and-marketplaces) · [Gemini CLI extensions](#gemini-cli-extensions) · [Subagents](#subagents) · [Rules and instructions](#rules-and-instructions) · [MCP servers](#mcp-servers) · [Memory and context](#memory-and-context) · [Statusline and usage](#statusline-and-usage) · [Hooks](#hooks) · [Sessions and orchestration](#sessions-and-orchestration) · [Skill managers and tooling](#skill-managers-and-tooling) · [Guides and examples](#guides-and-examples) · [Other lists](#other-lists)

## Skill collections

Repositories of SKILL.md skills.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Matt Pocock's small, composable engineering skills. | `CC` `CX` `GC` `CU` | 280k | 2026-10-07 |
| [anthropics/skills](https://github.com/anthropics/skills) | Anthropic's reference skills, including docx, pptx, xlsx and pdf. | `CC` `CX` `GC` `CU` | 180k | 2026-10-05 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Skill that pushes the agent toward minimal code and reuse over new abstractions. | `CC` `CX` `GC` `CU` | 158k | 2026-10-05 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | UI/UX design skill with searchable styles, palettes, font pairings and stack guidelines. | `CC` `CX` `GC` `CU` | 134k | 2026-10-03 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Skill that builds a queryable knowledge graph from code, docs and schemas. | `CC` `CX` `GC` `CU` | 125k | 2026-10-07 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Skill that cuts output tokens by having the agent answer in terse caveman speech. | `CC` `CX` `GC` `CU` | 110k | 2026-10-07 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Engineering skills: specs, testing, code review, performance. | `CC` `CX` `GC` `CU` | 103k | 2026-10-03 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Frontend design skills that steer agents away from generic UI output. | `CC` `CX` `GC` `CU` | 94k | 2026-10-07 |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Skill that turns ideas, plans or codebases into interactive diagrams. | `CC` `CX` `GC` `CU` | 79k | 2026-10-08 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Researches a topic across Reddit, X, YouTube and HN for the last 30 days. | `CC` `CX` `GC` `CU` | 64k | 2026-10-07 |
| [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Skill that makes the agent lead with the answer and keep output scannable. | `CC` `CX` `GC` `CU` | 55k | 2026-10-06 |
| [blader/humanizer](https://github.com/blader/humanizer) | Rewrites text to remove common signs of AI-generated writing. | `CC` `CX` `GC` | 55k | 2026-09-28 |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for CRO, copywriting, SEO, analytics and growth. | `CC` `CX` `GC` `CU` | 54k | 2026-10-08 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Academic research pipeline skills: research, write, review, revise. | `CC` `CX` `GC` `CU` | 51k | 2026-10-03 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Skills for Obsidian vaults, Markdown, Bases and the Obsidian CLI. | `CC` `CX` | 49k | 2026-09-15 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Skills for scientific research, databases and analysis packages. | `CC` `CX` `GC` `CU` | 48k | 2026-10-05 |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | Large installable skill catalog with tooling for discovery and selection. | `CC` `CX` `GC` `CU` | 47k | 2026-10-07 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | Editorial diagram skill with 42 diagram types, output as HTML and SVG. | `CC` `CX` `GC` `CU` | 45k | 2026-10-08 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | Vercel's browser automation CLI for agents, shipped with a skill. | `CC` `CX` `GC` `CU` | 44k | 2026-10-07 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | Cybersecurity skills mapped to MITRE ATT&CK, NIST CSF and other frameworks. | `CC` `CX` `GC` `CU` | 34k | 2026-08-31 |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel's skills for React, Next.js and Vercel projects. | `CC` `CX` `GC` `CU` | 32k | 2026-08-28 |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | Google Workspace CLI with 40+ agent skills for Drive, Gmail, Calendar and more. | `CC` `CX` `GC` `CU` | 31k | 2026-10-06 |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Skill that builds HTML slide decks using the agent's frontend abilities. | `CC` `CX` `GC` `CU` | 30k | 2026-06-23 |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Design skill aimed at avoiding generic AI-looking interfaces. | `CC` `CX` `GC` `CU` | 30k | 2026-08-06 |
| [openai/skills](https://github.com/openai/skills) | OpenAI's skills catalog for Codex. | `CX` | 28k | 2026-09-08 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | Large collection of skills, agents and commands across domains. | `CC` `CX` `GC` `CU` | 28k | 2026-08-30 |
| [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Persistent markdown planning files for long-running agent tasks. | `CC` `CX` `GC` `CU` | 27k | 2026-10-06 |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | Product management skills from discovery to strategy. | `CC` `CX` `GC` `CU` | 27k | 2026-09-14 |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | Collection of 20+ productivity and content skills by Baoyu. | `CC` `CX` `GC` `CU` | 26k | 2026-09-10 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | Multi-phase security audit skill with verified findings. | `CC` `CX` `GC` `CU` | 26k | 2026-09-14 |
| [agentskills/agentskills](https://github.com/agentskills/agentskills) | The Agent Skills (SKILL.md) specification and documentation. | `CC` `CX` `GC` `CU` | 26k | 2026-08-09 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | SEO skill with sub-skills and subagents for technical SEO, schema and GEO. | `CC` `CX` `GC` `CU` | 18k | 2026-10-04 |
| [wanshuiyin/Auto-claude-code-research-in-sleep](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) | Markdown skills for autonomous ML research with cross-model review loops. | `CC` `CX` `GC` `CU` | 17k | 2026-10-07 |
| [Orchestra-Research/AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs) | Skills for AI research and ML engineering: training, evaluation, inference. | `CC` `CX` `GC` `CU` | 13k | 2026-06-16 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | Skills for web design, knowledge retrieval and image generation. | `CC` `CX` `GC` `CU` | 13k | 2026-07-12 |
| [Jeffallan/claude-skills](https://github.com/Jeffallan/claude-skills) | Full-stack development skills by language, framework and role. | `CC` `CX` `GC` `CU` | 12k | 2026-10-03 |
| [huggingface/skills](https://github.com/huggingface/skills) | Hugging Face's skills for models, datasets, training and Hub workflows. | `CC` `CX` `GC` `CU` | 11k | 2026-10-01 |
| [Agents365-ai/drawio-skill](https://github.com/Agents365-ai/drawio-skill) | Skill that turns text, code and schemas into editable draw.io diagrams. | `CC` `CX` `GC` `CU` | 10k | 2026-10-02 |
| [revfactory/harness](https://github.com/revfactory/harness) | Meta-skill that designs domain-specific agent teams and generates their skills. | `CC` | 9.1k | 2026-09-28 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | Google's skills for designing UI with the Stitch MCP server. | `CC` `CX` `GC` `CU` | 8.4k | 2026-08-17 |
| [SimoneAvogadro/android-reverse-engineering-skill](https://github.com/SimoneAvogadro/android-reverse-engineering-skill) | Skill for reverse engineering Android apps. | `CC` `CX` `GC` `CU` | 8k | 2026-09-30 |
| [anthropics/defending-code-reference-harness](https://github.com/anthropics/defending-code-reference-harness) | Anthropic's skills for threat modeling, scanning, triage and patching. | `CC` | 7.6k | 2026-08-06 |
| [trailofbits/skills](https://github.com/trailofbits/skills) | Trail of Bits skills for security research and auditing. | `CC` `CX` | 7.4k | 2026-10-07 |
| [deanpeters/Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills) | Product management skills built on established PM frameworks. | `CC` `CX` `GC` `CU` | 7.2k | 2026-09-01 |
| [zarazhangrui/codebase-to-course](https://github.com/zarazhangrui/codebase-to-course) | Turns a codebase into an interactive single-page HTML course. | `CC` | 5.7k | 2026-03-30 |
| [dotnet/skills](https://github.com/dotnet/skills) | The .NET team's skills for C# and .NET development. | `CC` `CX` `GC` `CU` | 5.6k | 2026-10-08 |
| [google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills) | Google's skills for the Gemini API, SDKs and agent interactions. | `CC` `CX` `GC` `CU` | 4.3k | 2026-10-06 |
| [cloudflare/skills](https://github.com/cloudflare/skills) | Cloudflare's skills for Workers, the Agents SDK and the developer platform. | `CC` `CX` `GC` `CU` | 3k | 2026-10-01 |
| [supabase/agent-skills](https://github.com/supabase/agent-skills) | Supabase's skills for building with Supabase. | `CC` `CX` `GC` `CU` | 2.7k | 2026-10-02 |
| [expo/skills](https://github.com/expo/skills) | Expo's skills for Expo projects and EAS. | `CC` `CX` `GC` `CU` | 2.7k | 2026-10-07 |
| [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) | Skills focused on agent output quality and context use. | `CC` `CX` `GC` `CU` | 1.7k | 2026-08-26 |
| [skills-directory/skill-codex](https://github.com/skills-directory/skill-codex) | Claude Code skill that delegates prompts to Codex. | `CC` `CX` | 1.5k | 2026-09-13 |
| [daymade/claude-code-skills](https://github.com/daymade/claude-code-skills) | Skills marketplace for Claude Code. | `CC` | 1.4k | 2026-10-07 |
| [getsentry/skills](https://github.com/getsentry/skills) | Sentry team's skills for development work. | `CC` `CX` `GC` `CU` | 1k | 2026-10-02 |
| [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills) | HashiCorp skills and plugins for Terraform and other products. | `CC` `CX` `CU` | 887 | 2026-10-05 |

## Workflows and frameworks

Opinionated development processes packaged as skills, commands or plugins.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [obra/superpowers](https://github.com/obra/superpowers) | Skills-based development method: brainstorm, plan, TDD, review. | `CC` `CX` `GC` `CU` | 296k | 2026-10-06 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | Skills, agents, hooks and rules for agent performance, memory and security. | `CC` `CX` `CU` | 275k | 2026-10-05 |
| [github/spec-kit](https://github.com/github/spec-kit) | GitHub's toolkit for spec-driven development. | `CC` `CX` `GC` `CU` | 141k | 2026-10-07 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Garry Tan's setup: role-based skills for planning, review, QA and shipping. | `CC` `CX` `CU` | 136k | 2026-10-07 |
| [Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec) | Spec-driven development with change proposals, specs and tasks. | `CC` `CX` `GC` `CU` | 71k | 2026-10-07 |
| [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) | Agile planning and development method driven by role agents. | `CC` `CX` `CU` | 54k | 2026-10-07 |
| [eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master) | Task management from PRDs, usable via CLI or MCP. | `CC` `CX` `CU` | 28k | 2026-04-28 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Game development studio setup with 49 agents and 72 workflow skills. | `CC` | 26k | 2026-09-29 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | Plan, work, review and compound workflow where each task informs the next. | `CC` `CX` `CU` | 25k | 2026-10-07 |
| [SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework) | Commands, personas and modes layered on Claude Code. | `CC` | 24k | 2026-09-27 |
| [mindfold-ai/Trellis](https://github.com/mindfold-ai/Trellis) | Persists specs, tasks and memory in the repo so agents follow team conventions. | `CC` `CX` `CU` | 15k | 2026-09-29 |
| [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core) | Meta-prompting, context engineering and spec-driven development system. | `CC` `CX` `CU` | 10k | 2026-10-07 |
| [frankbria/ralph-claude-code](https://github.com/frankbria/ralph-claude-code) | Autonomous development loop for Claude Code with exit detection. | `CC` | 9.7k | 2026-10-07 |
| [backnotprop/plannotator](https://github.com/backnotprop/plannotator) | Visual annotation and review of agent plans and diffs, with feedback sent back. | `CC` `CX` `GC` | 9.2k | 2026-10-08 |
| [automazeio/ccpm](https://github.com/automazeio/ccpm) | Project management using GitHub Issues and git worktrees. | `CC` `CX` `CU` | 8.4k | 2026-03-18 |
| [MrLesk/Backlog.md](https://github.com/MrLesk/Backlog.md) | Markdown task board in the repo for humans and agents, with CLI and MCP. | `CC` `CX` `GC` `CU` | 7k | 2026-10-07 |
| [Q00/ouroboros](https://github.com/Q00/ouroboros) | Interview-gated, staged evaluation loop for replayable AI coding workflows. | `CC` `CX` `GC` | 6.2k | 2026-10-07 |
| [parcadei/Continuous-Claude-v3](https://github.com/parcadei/Continuous-Claude-v3) | Context management with ledgers and handoffs maintained by hooks. | `CC` | 3.9k | 2026-01-26 |
| [OneRedOak/claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows) | Code review, security review and design review workflows. | `CC` | 3.9k | 2026-10-06 |
| [gemini-cli-extensions/conductor](https://github.com/gemini-cli-extensions/conductor) | Spec-driven development plugin for Antigravity and Claude Code. | `CC` | 3.8k | 2026-09-01 |
| [gotalab/cc-sdd](https://github.com/gotalab/cc-sdd) | Spec-driven development harness: requirements, design, tasks, implementation. | `CC` `CX` `GC` `CU` | 3.7k | 2026-09-23 |

## Plugins and marketplaces

Installable plugins and plugin catalogs.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [wshobson/agents](https://github.com/wshobson/agents) | Plugin marketplace of agents, skills and commands for several harnesses. | `CC` `CX` `CU` | 40k | 2026-10-05 |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) | Anthropic's agents, skills and connectors for financial-services workflows. | `CC` | 39k | 2026-09-21 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Anthropic-managed directory of Claude Code plugins. | `CC` | 38k | 2026-10-07 |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | OpenAI's Claude Code plugin to review code or delegate tasks to Codex. | `CC` | 34k | 2026-07-08 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | Anthropic's role-based plugins for knowledge work, for Cowork and Claude Code. | `CC` | 27k | 2026-10-07 |
| [cursor/plugins](https://github.com/cursor/plugins) | Cursor plugin specification and official plugins. | `CU` | 10k | 2026-10-08 |
| [anthropics/claude-for-legal](https://github.com/anthropics/claude-for-legal) | Anthropic's plugins for legal workflows. | `CC` | 9.6k | 2026-09-29 |
| [openai/plugins](https://github.com/openai/plugins) | OpenAI's curated Codex plugin examples and default marketplace. | `CX` | 7.3k | 2026-09-28 |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Read-only mirror of the community plugin marketplace for Claude Code. | `CC` | 4.6k | 2026-10-05 |
| [cursor/community-plugins](https://github.com/cursor/community-plugins) | Community plugins for Cursor. | `CU` | 4k | 2026-09-11 |
| [davepoon/buildwithclaude](https://github.com/davepoon/buildwithclaude) | Marketplace and directory of Claude Code skills, agents, commands and hooks. | `CC` | 3.6k | 2026-10-06 |
| [agenticnotetaking/arscontexta](https://github.com/agenticnotetaking/arscontexta) | Plugin that generates a personal knowledge system from conversation. | `CC` | 3.5k | 2026-02-24 |
| [jeremylongshore/tons-of-skills-marketplace](https://github.com/jeremylongshore/tons-of-skills-marketplace) | Large skills and plugin marketplace with the ccpi package manager. | `CC` | 2.8k | 2026-10-08 |
| [ZeframLou/call-me](https://github.com/ZeframLou/call-me) | Plugin that lets Claude Code call you on the phone. | `CC` | 2.6k | 2026-04-07 |
| [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) | Marketplace for superpowers and related plugins. | `CC` | 1.3k | 2026-09-08 |
| [numman-ali/n-skills](https://github.com/numman-ali/n-skills) | Curated plugin marketplace for Claude Code, Codex and openskills. | `CC` `CX` | 1.1k | 2026-09-12 |
| [team-attention/plugins-for-claude-natives](https://github.com/team-attention/plugins-for-claude-natives) | Claude Code plugins for power users. | `CC` | 825 | 2026-04-20 |
| [hamelsmu/claude-review-loop](https://github.com/hamelsmu/claude-review-loop) | Claude Code plugin that runs an automated review loop with Codex. | `CC` | 724 | 2026-03-15 |
| [anthropics/life-sciences](https://github.com/anthropics/life-sciences) | Anthropic's plugin marketplace for Claude for Life Sciences. | `CC` | 612 | 2026-08-14 |
| [Piebald-AI/claude-code-lsps](https://github.com/Piebald-AI/claude-code-lsps) | Marketplace of language server plugins for Claude Code. | `CC` | 521 | 2026-07-25 |
| [trailofbits/skills-curated](https://github.com/trailofbits/skills-curated) | Community-vetted plugin marketplace curated by Trail of Bits. | `CC` `CX` | 512 | 2026-07-14 |
| [anthropics/healthcare](https://github.com/anthropics/healthcare) | Anthropic's healthcare plugin with skills and hosted MCP servers. | `CC` | 422 | 2026-08-27 |

## Gemini CLI extensions

Extensions installed with `gemini extensions install`.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [gemini-cli-extensions/nanobanana](https://github.com/gemini-cli-extensions/nanobanana) | Image generation and editing with Gemini image models. | `GC` | 1.1k | 2026-06-25 |
| [gemini-cli-extensions/security](https://github.com/gemini-cli-extensions/security) | Google's extension that scans code changes for vulnerabilities. | `GC` | 794 | 2026-07-25 |
| [gemini-cli-extensions/workspace](https://github.com/gemini-cli-extensions/workspace) | Google Workspace access: Docs, Drive, Gmail, Calendar. | `GC` | 646 | 2026-10-05 |
| [gemini-cli-extensions/code-review](https://github.com/gemini-cli-extensions/code-review) | Google's extension that reviews local code changes. | `GC` | 531 | 2026-03-10 |
| [gemini-cli-extensions/stitch](https://github.com/gemini-cli-extensions/stitch) | Google's extension for designing UI with the Stitch MCP server. | `GC` | 477 | 2026-01-26 |
| [gemini-cli-extensions/jules](https://github.com/gemini-cli-extensions/jules) | Delegates tasks to the Jules asynchronous coding agent. | `GC` | 413 | 2026-06-17 |
| [gemini-cli-extensions/flutter](https://github.com/gemini-cli-extensions/flutter) | Google's extension to create, build, test and run Flutter apps. | `GC` | 401 | 2026-03-02 |
| [gemini-cli-extensions/ralph](https://github.com/gemini-cli-extensions/ralph) | Google's extension for Ralph loops. | `GC` | 332 | 2026-02-02 |
| [gemini-cli-extensions/genkit](https://github.com/gemini-cli-extensions/genkit) | Google's extension for building with Genkit. | `GC` | 176 | 2026-02-20 |
| [AsyncFuncAI/ralph-wiggum-extension](https://github.com/AsyncFuncAI/ralph-wiggum-extension) | Ralph Wiggum loop extension for Gemini CLI. | `GC` | 134 | 2026-01-06 |
| [elastic/gemini-cli-elasticsearch](https://github.com/elastic/gemini-cli-elasticsearch) | Elastic's Elasticsearch extension for Gemini CLI. | `GC` | 118 | 2026-04-08 |
| [gemini-cli-extensions/mcp-toolbox](https://github.com/gemini-cli-extensions/mcp-toolbox) | Google's extension for MCP Toolbox for Databases. | `GC` | 108 | 2026-10-07 |
| [thoreinstein/gemini-obsidian](https://github.com/thoreinstein/gemini-obsidian) | Obsidian vault access with local RAG for Gemini CLI. | `GC` | 102 | 2026-07-31 |
| [gemini-cli-extensions/postgres](https://github.com/gemini-cli-extensions/postgres) | Google's extension for PostgreSQL databases. | `GC` `CC` `CX` | 96 | 2026-08-31 |
| [gemini-cli-extensions/sre](https://github.com/gemini-cli-extensions/sre) | Google's SRE investigation tools for Google Cloud. | `GC` `CC` `CX` | 84 | 2026-09-02 |
| [gemini-cli-extensions/looker](https://github.com/gemini-cli-extensions/looker) | Google's skills for Looker. | `GC` `CC` `CX` | 57 | 2026-09-23 |
| [gemini-cli-extensions/cicd](https://github.com/gemini-cli-extensions/cicd) | Google's extension for CI/CD on Google Cloud. | `GC` | 51 | 2026-10-08 |
| [gemini-cli-extensions/bigquery-data-analytics](https://github.com/gemini-cli-extensions/bigquery-data-analytics) | Google's data analytics skills for BigQuery. | `GC` `CC` `CX` | 50 | 2026-09-28 |
| [gemini-cli-extensions/cloud-sql-postgresql](https://github.com/gemini-cli-extensions/cloud-sql-postgresql) | Google's skills for Cloud SQL for PostgreSQL. | `GC` `CC` `CX` | 42 | 2026-09-23 |
| [gemini-cli-extensions/mysql](https://github.com/gemini-cli-extensions/mysql) | Google's extension for MySQL databases. | `GC` `CC` `CX` | 42 | 2026-08-27 |
| [gemini-cli-extensions/datacommons](https://github.com/gemini-cli-extensions/datacommons) | Google's extension for querying Data Commons public datasets. | `GC` | 36 | 2026-02-04 |
| [gemini-cli-extensions/knowledge-catalog](https://github.com/gemini-cli-extensions/knowledge-catalog) | Google's skills for Knowledge Catalog. | `GC` `CC` `CX` | 34 | 2026-09-22 |
| [gemini-cli-extensions/firestore-native](https://github.com/gemini-cli-extensions/firestore-native) | Google's skills for Firestore. | `GC` `CC` `CX` | 30 | 2026-09-23 |
| [gemini-cli-extensions/google-cloud-storage](https://github.com/gemini-cli-extensions/google-cloud-storage) | Google's skills for Cloud Storage buckets, objects and transfers. | `GC` `CC` `CX` | 30 | 2026-10-03 |
| [gemini-cli-extensions/bigquery-conversational-analytics](https://github.com/gemini-cli-extensions/bigquery-conversational-analytics) | Google's extension for conversational analytics on BigQuery. | `GC` | 28 | 2026-10-05 |
| [gemini-cli-extensions/alloydb](https://github.com/gemini-cli-extensions/alloydb) | Google's skills for AlloyDB. | `GC` `CC` `CX` | 24 | 2026-09-23 |
| [gemini-cli-extensions/sql-server](https://github.com/gemini-cli-extensions/sql-server) | Google's extension for SQL Server databases. | `GC` `CC` `CX` | 24 | 2026-08-27 |
| [gemini-cli-extensions/vertex](https://github.com/gemini-cli-extensions/vertex) | Google's extension for managing prompts in Vertex AI. | `GC` | 22 | 2026-06-23 |
| [gemini-cli-extensions/spanner](https://github.com/gemini-cli-extensions/spanner) | Google's skills for Spanner. | `GC` `CC` `CX` | 19 | 2026-09-30 |
| [gemini-cli-extensions/angular](https://github.com/gemini-cli-extensions/angular) | Angular extension for Gemini CLI. | `GC` | 16 | 2025-12-09 |

## Subagents

Collections of specialized agent definitions.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Agent personas across engineering, design, marketing and other departments. | `CC` `CX` `GC` `CU` | 158k | 2026-10-07 |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 100+ subagent definitions grouped by domain. | `CC` | 26k | 2026-10-05 |
| [jnMetaCode/agency-agents-zh](https://github.com/jnMetaCode/agency-agents-zh) | Chinese edition of agency-agents with 277 roles, including China-market agents. | `CC` `CX` `GC` `CU` | 21k | 2026-10-05 |
| [VoltAgent/awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) | 130+ subagent definitions for Codex. | `CX` | 6.3k | 2026-10-05 |
| [vijaythecoder/awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents) | Orchestrated subagent dev team for Claude Code. | `CC` | 4.4k | 2025-10-30 |
| [0xfurai/claude-code-subagents](https://github.com/0xfurai/claude-code-subagents) | 100+ development subagents for Claude Code. | `CC` | 1k | 2025-10-15 |
| [rahulvrane/awesome-claude-agents](https://github.com/rahulvrane/awesome-claude-agents) | Collection of Claude Code subagents. | `CC` | 371 | 2026-03-06 |

## Rules and instructions

Cursor rules, AGENTS.md and similar instruction files.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | Single CLAUDE.md derived from Karpathy's notes on LLM coding pitfalls. | `CC` `CU` | 217k | 2026-04-20 |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | Cursor rules files by language and framework. | `CU` | 41k | 2026-05-30 |
| [agentsmd/agents.md](https://github.com/agentsmd/agents.md) | The AGENTS.md format specification and site. | `CX` `GC` `CU` | 25k | 2026-09-10 |
| [drona23/claude-token-efficient](https://github.com/drona23/claude-token-efficient) | CLAUDE.md that keeps responses terse to cut output tokens. | `CC` | 6.1k | 2026-06-16 |
| [sanjeed5/awesome-cursor-rules-mdc](https://github.com/sanjeed5/awesome-cursor-rules-mdc) | Cursor rules in .mdc format. | `CU` | 3.6k | 2026-05-19 |
| [LakshmanTurlapati/Review-Gate](https://github.com/LakshmanTurlapati/Review-Gate) | Cursor rule and MCP tool that asks for review before a request ends. | `CU` | 1.5k | 2026-04-02 |
| [agent0ai/dox](https://github.com/agent0ai/dox) | Self-documenting AGENTS.md files maintained by the agent. | `CX` `GC` `CU` | 1.5k | 2026-09-01 |
| [twostraws/SwiftAgents](https://github.com/twostraws/SwiftAgents) | AGENTS.md file for Swift and SwiftUI projects. | `CX` `GC` `CU` | 1.5k | 2026-03-05 |
| [instructa/ai-prompts](https://github.com/instructa/ai-prompts) | Curated prompts and Cursor rules. | `CU` | 1.1k | 2026-05-13 |
| [yzhao062/agent-style](https://github.com/yzhao062/agent-style) | 21 writing rules for coding and writing agents. | `CC` `CX` `GC` `CU` | 706 | 2026-10-07 |

## MCP servers

Model Context Protocol servers widely used with coding agents.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Reference MCP server implementations. | `CC` `CX` `GC` `CU` | 91k | 2026-10-07 |
| [upstash/context7](https://github.com/upstash/context7) | Current library documentation and code examples. | `CC` `CX` `GC` `CU` | 63k | 2026-10-07 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Chrome DevTools for debugging, tracing and inspecting pages. | `CC` `CX` `GC` `CU` | 53k | 2026-10-07 |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | Browser automation through Playwright. | `CC` `CX` `GC` `CU` | 38k | 2026-10-07 |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | GitHub's official MCP server. | `CC` `CX` `GC` `CU` | 33k | 2026-10-07 |
| [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) | Control Blender from an agent over MCP. | `CC` `CX` `GC` `CU` | 30k | 2026-10-06 |
| [oraios/serena](https://github.com/oraios/serena) | Symbol-level code retrieval and editing via language servers. | `CC` `CX` `GC` `CU` | 30k | 2026-10-06 |
| [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | n8n node documentation and workflow management for agents. | `CC` `CX` `GC` `CU` | 23k | 2026-10-06 |
| [googleapis/mcp-toolbox](https://github.com/googleapis/mcp-toolbox) | Google's MCP server for databases. | `CC` `CX` `GC` `CU` | 17k | 2026-10-07 |
| [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) | Figma layout data for coding agents. | `CC` `CX` `GC` `CU` | 16k | 2026-10-03 |
| [CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp) | Bridge between agents and the Unity Editor. | `CC` `CX` `GC` `CU` | 15k | 2026-10-07 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | Semantic code search over the whole codebase. | `CC` `CX` `GC` `CU` | 13k | 2026-07-14 |
| [mrexodia/ida-pro-mcp](https://github.com/mrexodia/ida-pro-mcp) | IDA Pro reverse engineering tools over MCP. | `CC` `CX` `GC` `CU` | 13k | 2026-09-26 |
| [hangwin/mcp-chrome](https://github.com/hangwin/mcp-chrome) | Chrome extension that exposes your browser to agents over MCP. | `CC` `CX` `GC` `CU` | 12k | 2026-01-06 |
| [BeehiveInnovations/pal-mcp-server](https://github.com/BeehiveInnovations/pal-mcp-server) | Lets one agent consult other models and CLIs for review, debugging and planning. | `CC` `CX` `GC` `CU` | 12k | 2025-12-15 |
| [apify/apify-mcp-server](https://github.com/apify/apify-mcp-server) | Apify's MCP server for web scraping Actors. | `CC` `CX` `GC` `CU` | 10k | 2026-10-07 |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | Terminal control, file search and diff-based editing over MCP. | `CC` `CX` `GC` `CU` | 10k | 2026-10-07 |
| [awslabs/mcp](https://github.com/awslabs/mcp) | AWS Labs' MCP servers for AWS services. | `CC` `CX` `GC` `CU` | 9.8k | 2026-10-07 |
| [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) | Mobile automation for iOS and Android simulators, emulators and devices. | `CC` `CX` `GC` `CU` | 8.7k | 2026-10-07 |
| [idosal/git-mcp](https://github.com/idosal/git-mcp) | Remote MCP server that serves docs for any GitHub project. | `CC` `CX` `GC` `CU` | 8.5k | 2026-05-08 |
| [firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) | Firecrawl's MCP server for scraping, crawling and search. | `CC` `CX` `GC` `CU` | 7.6k | 2026-10-08 |
| [grab/cursor-talk-to-figma-mcp](https://github.com/grab/cursor-talk-to-figma-mcp) | Read and modify Figma designs from an agent via a plugin and MCP. | `CC` `CX` `GC` `CU` | 7k | 2026-07-26 |
| [getsentry/MobileBuildMCP](https://github.com/getsentry/MobileBuildMCP) | Sentry's MCP server and CLI for building and testing iOS and macOS projects. | `CC` `CX` `GC` `CU` | 6.5k | 2026-10-02 |
| [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp) | Generates and searches React and Tailwind components from prompts. | `CC` `CX` `GC` `CU` | 6k | 2026-09-09 |
| [sooperset/mcp-atlassian](https://github.com/sooperset/mcp-atlassian) | MCP server for Jira and Confluence. | `CC` `CX` `GC` `CU` | 6k | 2026-09-19 |
| [Coding-Solo/godot-mcp](https://github.com/Coding-Solo/godot-mcp) | Launch, run and debug Godot projects from an agent. | `CC` `CX` `GC` `CU` | 6k | 2026-04-16 |
| [exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) | Exa's MCP server for web search and crawling. | `CC` `CX` `GC` `CU` | 5.1k | 2026-10-07 |
| [makenotion/notion-mcp-server](https://github.com/makenotion/notion-mcp-server) | Notion's MCP server. | `CC` `CX` `GC` `CU` | 4.7k | 2026-09-20 |
| [cloudflare/mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | Cloudflare's MCP servers for Workers, observability and other services. | `CC` `CX` `GC` `CU` | 4.4k | 2026-10-06 |
| [microsoft/mcp](https://github.com/microsoft/mcp) | Catalog of Microsoft's official MCP servers, including Azure. | `CC` `CX` `GC` `CU` | 3.7k | 2026-10-07 |
| [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana) | Grafana's MCP server. | `CC` `CX` `GC` `CU` | 3.5k | 2026-10-07 |
| [supabase/mcp](https://github.com/supabase/mcp) | Supabase's MCP server for projects, databases and edge functions. | `CC` `CX` `GC` `CU` | 2.9k | 2026-10-07 |
| [perplexityai/modelcontextprotocol](https://github.com/perplexityai/modelcontextprotocol) | Perplexity's MCP server for the Perplexity API. | `CC` `CX` `GC` `CU` | 2.6k | 2026-09-25 |
| [tavily-ai/tavily-mcp](https://github.com/tavily-ai/tavily-mcp) | Tavily's MCP server for search, extract, map and crawl. | `CC` `CX` `GC` `CU` | 2.4k | 2026-10-05 |
| [figma/mcp-server-guide](https://github.com/figma/mcp-server-guide) | Figma's guide and rules for the Figma MCP server. | `CC` `CX` `GC` `CU` | 2.1k | 2026-10-05 |
| [MicrosoftDocs/mcp](https://github.com/MicrosoftDocs/mcp) | Microsoft Learn MCP server for current Microsoft docs and code samples. | `CC` `CX` `GC` `CU` | 1.9k | 2026-10-08 |
| [docker/mcp-gateway](https://github.com/docker/mcp-gateway) | Docker's MCP gateway and CLI plugin for running MCP servers in containers. | `CC` `CX` `GC` `CU` | 1.6k | 2026-09-23 |
| [hashicorp/terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server) | HashiCorp's MCP server for the Terraform registry and workspaces. | `CC` `CX` `GC` `CU` | 1.5k | 2026-10-07 |
| [mongodb-js/mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server) | MongoDB's MCP server for databases and Atlas. | `CC` `CX` `GC` `CU` | 1.1k | 2026-10-07 |
| [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server) | Atlassian's remote MCP server for Jira, Confluence and Bitbucket. | `CC` `CX` `GC` `CU` | 1.1k | 2026-10-07 |
| [getsentry/toolkit](https://github.com/getsentry/toolkit) | Sentry's MCP server and CLI. | `CC` `CX` `GC` `CU` | 917 | 2026-10-07 |

## Memory and context

Persistent memory, code indexing and token reduction.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Captures session activity, compresses it and injects context into later sessions. | `CC` `CX` | 98k | 2026-10-07 |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | Turns a codebase or docs into an interactive knowledge graph you can query. | `CC` `CX` `GC` `CU` | 86k | 2026-10-06 |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) | CLI proxy that filters and compresses command output before it reaches the agent. | `CC` `CX` `GC` `CU` | 83k | 2026-10-07 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Local compression of tool output, logs and files before they reach the model. | `CC` `CX` `CU` | 75k | 2026-10-07 |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | Pre-indexed code knowledge graph that syncs on code changes. | `CC` `CX` `GC` `CU` | 73k | 2026-10-07 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | Indexes a codebase into a persistent knowledge graph served over MCP. | `CC` `CX` `GC` `CU` | 46k | 2026-10-07 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Persistent codebase map so agents read only the code that matters. | `CC` `CX` `GC` `CU` | 32k | 2026-10-06 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | Persistent memory for coding agents. | `CC` `CX` `GC` `CU` | 29k | 2026-10-06 |
| [yamadashy/repomix](https://github.com/yamadashy/repomix) | Packs a repository into one AI-friendly file; also runs as an MCP server. | `CC` `CX` `GC` `CU` | 29k | 2026-10-03 |
| [gastownhall/beads](https://github.com/gastownhall/beads) | Dependency-aware issue graph that gives agents persistent task memory. | `CC` `CX` | 28k | 2026-10-08 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | Sandboxes tool output and persists session memory to save context. | `CC` `CX` `GC` `CU` | 26k | 2026-10-07 |
| [Gentleman-Programming/engram](https://github.com/Gentleman-Programming/engram) | Agent-agnostic memory in SQLite with MCP server, HTTP API, CLI and TUI. | `CC` `CX` `GC` `CU` | 7.1k | 2026-10-07 |

## Statusline and usage

Statuslines, usage trackers and cost monitors.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | Plugin showing context usage, active tools and running agents. | `CC` | 28k | 2026-10-03 |
| [steipete/CodexBar](https://github.com/steipete/CodexBar) | macOS menu bar app for Codex and Claude Code usage limits. | `CC` `CX` `CU` | 22k | 2026-10-08 |
| [ccusage/ccusage](https://github.com/ccusage/ccusage) | Token usage and cost reports from local session logs. | `CC` `CX` `GC` | 19k | 2026-10-08 |
| [sirmalloc/ccstatusline](https://github.com/sirmalloc/ccstatusline) | Configurable statusline with powerline themes. | `CC` | 13k | 2026-10-06 |
| [getagentseal/codeburn](https://github.com/getagentseal/codeburn) | Local token and cost tracking across many coding agents. | `CC` `CX` `GC` `CU` | 11k | 2026-10-07 |
| [Maciek-roboblog/Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) | Terminal usage monitor with burn rate and limit predictions. | `CC` | 8.7k | 2026-07-05 |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | Local session search, analytics and token stats for coding agents. | `CC` `CX` | 6.1k | 2026-10-08 |
| [junhoyeo/tokscale](https://github.com/junhoyeo/tokscale) | Token usage tracking across coding agents from the terminal. | `CC` `CX` `GC` `CU` | 5.6k | 2026-10-05 |
| [robinebers/openusage](https://github.com/robinebers/openusage) | macOS menu bar app tracking AI coding plan limits and spend. | `CC` `CX` `CU` | 4.3k | 2026-10-06 |
| [matt1398/claude-devtools](https://github.com/matt1398/claude-devtools) | Visual inspector for Claude Code session logs, tool calls, tokens and subagents. | `CC` | 4k | 2026-09-26 |
| [Haleclipse/CCometixLine](https://github.com/Haleclipse/CCometixLine) | Statusline written in Rust. | `CC` | 3.5k | 2026-03-14 |
| [phuryn/claude-usage](https://github.com/phuryn/claude-usage) | Local dashboard for Claude Code token usage, cost and sessions. | `CC` | 2.3k | 2026-07-10 |
| [tddworks/ClaudeBar](https://github.com/tddworks/ClaudeBar) | macOS menu bar app for Claude, Codex and Gemini usage quotas. | `CC` `CX` `GC` `CU` | 1.5k | 2026-10-07 |
| [nilbuild/claude-statusline](https://github.com/nilbuild/claude-statusline) | Minimal Claude Code statusline. | `CC` | 1.4k | 2026-04-03 |
| [Owloops/claude-powerline](https://github.com/Owloops/claude-powerline) | Vim-style powerline statusline. | `CC` | 1.2k | 2026-10-04 |
| [GaoSSR/best-claude-hud](https://github.com/GaoSSR/best-claude-hud) | Statusline HUD for Claude Code written in Rust. | `CC` | 1.1k | 2026-08-13 |
| [Iamshankhadeep/ccseva](https://github.com/Iamshankhadeep/ccseva) | macOS menu bar app for Claude Code usage. | `CC` | 806 | 2026-08-03 |

## Hooks

Hook collections, SDKs and observability built on hooks.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [Dicklesworthstone/destructive_command_guard](https://github.com/Dicklesworthstone/destructive_command_guard) | Blocks dangerous git and shell commands before an agent runs them. | `CC` `CX` `GC` `CU` | 6.1k | 2026-10-07 |
| [FailproofAI/failproofai](https://github.com/FailproofAI/failproofai) | Hooks that capture agent runs and enforce policies. | `CC` `CX` `CU` | 5.3k | 2026-10-07 |
| [entireio/cli](https://github.com/entireio/cli) | Captures agent sessions via hooks and indexes them alongside commits. | `CC` `CX` `CU` | 5.2k | 2026-10-08 |
| [PeonPing/peon-ping](https://github.com/PeonPing/peon-ping) | Voice notifications for agent events, with Warcraft peon and other sound packs. | `CC` `CX` `GC` `CU` | 5.1k | 2026-10-06 |
| [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery) | Examples of every Claude Code hook event. | `CC` | 3.9k | 2026-03-04 |
| [nizos/tdd-guard](https://github.com/nizos/tdd-guard) | Hook-based test-driven development enforcement for Claude Code. | `CC` | 2.4k | 2026-10-05 |
| [severity1/claude-code-prompt-improver](https://github.com/severity1/claude-code-prompt-improver) | Hook that asks clarifying questions when a prompt is vague. | `CC` | 1.9k | 2026-10-01 |
| [kenryu42/cc-safety-net](https://github.com/kenryu42/cc-safety-net) | Pre-execution guard against destructive git and file system commands. | `CC` `CX` `GC` `CU` | 1.6k | 2026-10-08 |
| [disler/claude-code-hooks-multi-agent-observability](https://github.com/disler/claude-code-hooks-multi-agent-observability) | Real-time dashboard of agent activity fed by hook events. | `CC` | 1.5k | 2026-02-08 |
| [coleam00/claude-memory-compiler](https://github.com/coleam00/claude-memory-compiler) | Hooks capture sessions and the Agent SDK compiles them into project memory. | `CC` | 1.3k | 2026-04-06 |
| [777genius/agent-notifications](https://github.com/777genius/agent-notifications) | Desktop notifications, sounds and webhooks for agent events. | `CC` `CX` `GC` | 815 | 2026-10-08 |
| [karanb192/claude-code-hooks](https://github.com/karanb192/claude-code-hooks) | Hooks for safety, cost and observability, with a plugin marketplace. | `CC` | 533 | 2026-10-04 |
| [GowayLee/cchooks](https://github.com/GowayLee/cchooks) | Python SDK for writing Claude Code hooks. | `CC` | 132 | 2026-04-08 |

## Sessions and orchestration

Parallel agent runners, worktree managers and session clients.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [stablyai/orca](https://github.com/stablyai/orca) | Desktop app that runs agents side by side, each in its own worktree. | `CC` `CX` `CU` | 87k | 2026-10-08 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | Multi-agent swarm orchestration for Claude Code and Codex. | `CC` `CX` | 74k | 2026-10-07 |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | Persistent terminal runtime for coding agents that survives disconnects. | `CC` `CX` `CU` | 43k | 2026-10-07 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | Team-based multi-agent orchestration for Claude Code. | `CC` | 40k | 2026-10-07 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | Desktop cowork app for Claude Code, Codex, Gemini CLI and other CLI agents. | `CC` `CX` `GC` | 33k | 2026-09-09 |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Ghostty-based macOS terminal with vertical tabs and agent notifications. | `CC` `CX` `GC` `CU` | 28k | 2026-10-08 |
| [openai/symphony](https://github.com/openai/symphony) | OpenAI's service that turns tracker issues into isolated autonomous agent runs. | `CX` | 28k | 2026-09-15 |
| [slopus/happy](https://github.com/slopus/happy) | Desktop and mobile client to control Claude Code and Codex remotely. | `CC` `CX` | 24k | 2026-10-07 |
| [coleam00/Archon](https://github.com/coleam00/Archon) | Workflow engine that runs YAML-defined development processes with agents. | `CC` | 24k | 2026-10-08 |
| [winfunc/opcode](https://github.com/winfunc/opcode) | Desktop GUI for Claude Code sessions and custom agents. | `CC` | 22k | 2026-09-18 |
| [getpaseo/paseo](https://github.com/getpaseo/paseo) | Orchestrates coding agents from desktop and mobile. | `CC` `CX` | 20k | 2026-10-07 |
| [superset-sh/superset](https://github.com/superset-sh/superset) | Desktop app for running many coding agents in parallel. | `CC` `CX` `GC` `CU` | 15k | 2026-10-08 |
| [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha) | Desktop workspace for Claude Code with worktrees, diffs and multi-agent runs. | `CC` | 15k | 2026-10-05 |
| [siteboon/claudecodeui](https://github.com/siteboon/claudecodeui) | Web and mobile UI for Claude Code, Codex and Cursor CLI sessions. | `CC` `CX` `CU` | 14k | 2026-10-07 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | CLI for git worktree management in parallel agent workflows. | `CC` `CX` | 9k | 2026-10-07 |
| [smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad) | Terminal app that manages several agents in tmux sessions and worktrees. | `CC` `CX` `GC` | 8.6k | 2026-08-20 |
| [dagger/container-use](https://github.com/dagger/container-use) | Containerized environments so several agents can work in parallel safely. | `CC` `CX` `GC` `CU` | 4.1k | 2026-09-21 |

## Skill managers and tooling

Install, sync, convert, route, configure and run in CI.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) | Routes agent requests to other model providers. | `CC` `CX` | 38k | 2026-09-26 |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | `npx skills` CLI to install and update skills across agents. | `CC` `CX` `GC` `CU` | 33k | 2026-10-07 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI to install agents, commands, hooks and MCP configs. | `CC` | 32k | 2026-10-07 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | Security scanner for agent skills: injection, exfiltration and malicious patterns. | `CC` `CX` `GC` | 20k | 2026-10-07 |
| [yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers) | Converts docs sites, GitHub repos and PDFs into skills. | `CC` `CU` | 15k | 2026-09-30 |
| [openai/codex-security](https://github.com/openai/codex-security) | OpenAI's Codex Security CLI and SDK for finding and fixing vulnerabilities. | `CX` | 11k | 2026-10-08 |
| [numman-ali/openskills](https://github.com/numman-ali/openskills) | Universal skills loader installed from npm. | `CC` `CX` `CU` | 11k | 2026-01-18 |
| [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action) | Anthropic's GitHub Action that runs Claude Code on PRs and issues. | `CC` | 9.4k | 2026-10-07 |
| [anthropics/claude-agent-sdk-python](https://github.com/anthropics/claude-agent-sdk-python) | Python SDK for building agents on the Claude Code harness. | `CC` | 8.2k | 2026-10-07 |
| [Gentleman-Programming/gentle-ai](https://github.com/Gentleman-Programming/gentle-ai) | Configures memory, skills and workflows across your coding agents. | `CC` `CX` `GC` `CU` | 7.6k | 2026-10-08 |
| [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review) | Anthropic's GitHub Action for security review of code changes. | `CC` | 6.3k | 2026-02-11 |
| [xingkongliang/skills-manager](https://github.com/xingkongliang/skills-manager) | Desktop app to manage and sync skills across agents. | `CC` `CX` `GC` `CU` | 5.7k | 2026-10-04 |
| [anthropics/sandbox-runtime](https://github.com/anthropics/sandbox-runtime) | Anthropic's OS-level filesystem and network sandbox for agent processes. | `CC` | 5.5k | 2026-10-07 |
| [github/gh-aw](https://github.com/github/gh-aw) | GitHub's agentic workflows: Markdown-defined agent runs in GitHub Actions. | `CC` `CX` | 5.4k | 2026-10-08 |
| [intellectronica/ruler](https://github.com/intellectronica/ruler) | Applies one set of rules to all coding agents. | `CC` `CX` `GC` `CU` | 2.9k | 2026-09-30 |
| [Piebald-AI/tweakcc](https://github.com/Piebald-AI/tweakcc) | Customizes Claude Code's system prompts, toolsets, themes and spinners. | `CC` | 2.5k | 2026-10-06 |
| [google-github-actions/run-gemini-cli](https://github.com/google-github-actions/run-gemini-cli) | Google's GitHub Action that runs Gemini CLI in workflows. | `GC` | 2.1k | 2026-08-21 |
| [anthropics/claude-agent-sdk-typescript](https://github.com/anthropics/claude-agent-sdk-typescript) | TypeScript SDK for building agents on the Claude Code harness. | `CC` | 1.8k | 2026-10-07 |
| [dyoshikawa/rulesync](https://github.com/dyoshikawa/rulesync) | CLI that generates rules, MCP and command configs for many agents. | `CC` `CX` `GC` `CU` | 1.5k | 2026-10-05 |
| [Dimillian/CodexSkillManager](https://github.com/Dimillian/CodexSkillManager) | macOS app to manage Codex skills. | `CX` | 1.4k | 2026-01-18 |
| [openai/codex-action](https://github.com/openai/codex-action) | OpenAI's GitHub Action that runs Codex in workflows. | `CX` | 1.3k | 2026-10-05 |
| [luongnv89/asm](https://github.com/luongnv89/asm) | CLI skill manager for multiple coding agents. | `CC` `CX` `GC` `CU` | 953 | 2026-10-06 |
| [agent-sh/agnix](https://github.com/agent-sh/agnix) | Linter and LSP for CLAUDE.md, AGENTS.md, SKILL.md, hooks and MCP configs. | `CC` `CX` `GC` `CU` | 445 | 2026-10-06 |
| [intellectronica/skillz](https://github.com/intellectronica/skillz) | MCP server that exposes skills to clients without native support. | `CX` `GC` `CU` | 402 | 2026-01-30 |
| [jduncan-rva/skill-porter](https://github.com/jduncan-rva/skill-porter) | Converts Claude Code skills to Gemini CLI extensions and back. | `CC` `GC` | 191 | 2025-12-02 |

## Guides and examples

Tutorials, guides and example setups.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Builds a minimal Claude Code-like agent harness step by step. | `CC` | 78k | 2026-09-28 |
| [shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice) | Claude Code practices and examples, from setup to agentic engineering. | `CC` | 67k | 2026-10-07 |
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | Visual, example-driven Claude Code guide with copy-paste templates. | `CC` | 42k | 2026-09-30 |
| [coleam00/context-engineering-intro](https://github.com/coleam00/context-engineering-intro) | Context engineering templates and examples for Claude Code. | `CC` | 14k | 2026-03-16 |
| [Piebald-AI/claude-code-system-prompts](https://github.com/Piebald-AI/claude-code-system-prompts) | Claude Code's system prompt, tool descriptions and subagent prompts by version. | `CC` | 13k | 2026-10-06 |
| [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) | 45+ Claude Code tips, including a statusline script. | `CC` | 10k | 2026-09-25 |
| [diet103/claude-code-infrastructure-showcase](https://github.com/diet103/claude-code-infrastructure-showcase) | Example Claude Code setup with skill auto-activation, hooks and agents. | `CC` | 10k | 2026-07-13 |
| [KimYx0207/AI-Coding-Guide-Zh](https://github.com/KimYx0207/AI-Coding-Guide-Zh) | Chinese tutorials for Claude Code and Codex with hands-on examples. | `CC` `CX` | 6.2k | 2026-10-03 |
| [cursor/cookbook](https://github.com/cursor/cookbook) | Cursor's small examples for building with Cursor, including hooks. | `CU` | 4.1k | 2026-10-07 |
| [anthropics/code-migration-kit-with-claude-code](https://github.com/anthropics/code-migration-kit-with-claude-code) | Anthropic's prompts, templates and scripts for large language migrations. | `CC` | 743 | 2026-07-08 |

## Other lists

Related curated lists.

| Project | Description | Agents | Stars | Updated |
| --- | --- | --- | ---: | --- |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | Large curated list of MCP servers. | `CC` `CX` `GC` `CU` | 96k | 2026-09-27 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Curated Claude skills and resources. | `CC` | 77k | 2026-09-18 |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | Curated Claude Code resources. | `CC` | 55k | 2026-10-08 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 1000+ agent skills indexed by source. | `CC` `CX` `GC` `CU` | 35k | 2026-10-07 |
| [composio-community/awesome-codex-skills](https://github.com/composio-community/awesome-codex-skills) | Curated Codex skills. | `CX` | 17k | 2026-07-26 |
| [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) | Curated Claude skills and resources. | `CC` | 15k | 2026-04-28 |
| [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) | Curated list of Claude skills. | `CC` | 10k | 2026-09-21 |
| [heilcheng/awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) | Tutorials, guides and directories for agent skills. | `CC` `CX` | 6.3k | 2026-04-05 |
| [quemsah/awesome-claude-plugins](https://github.com/quemsah/awesome-claude-plugins) | Automated index of Claude Code plugins with adoption metrics. | `CC` | 1.4k | 2026-10-08 |
| [hashgraph-online/awesome-codex-plugins](https://github.com/hashgraph-online/awesome-codex-plugins) | Curated Codex plugins, skills and resources. | `CX` | 1.2k | 2026-10-07 |
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
