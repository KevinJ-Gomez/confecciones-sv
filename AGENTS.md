<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Confecciones SV agent rules

## Product truth
- GitHub Issues, confirmed client information and the current code are the source of truth.
- Never invent business facts such as prices, hours, payment methods, delivery times, guarantees, services, social accounts, address details or client photographs.
- If a material business fact is unknown, keep it explicitly pending instead of filling it with plausible content.
- This project is currently parked unless the owner explicitly assigns new product work. Governance/maintenance does not reactivate the roadmap.

## Git rules
- Work from latest `main` on a task branch; do not push directly to `main`.
- For an owner-assigned Issue/task, routine non-destructive branch creation, commits, pushes and PR creation/update are pre-authorized; do not ask Kevin to repeat that permission.
- Preserve unrelated work and do not use destructive Git operations to discard unknown changes.
- Merge/release still requires the applicable validation and review gates.

## Session handoff protocol — mandatory and automatic
GitHub is the durable operational memory; chat transcripts and local plans are secondary.

At the start of substantive work:
1. review current `main`, this file, the target Issue and any relevant PR/branch;
2. inspect current code and applicable skills;
3. prefer current GitHub evidence over old conversations.

During work:
- do not post minute-by-minute logs;
- persist material decisions when they change scope, client facts, architecture, canonical paths or the accepted implementation route;
- local machine/workspace paths are not canonical project state.

Before ending substantive work, without waiting for Kevin to ask:
1. push safe changes to the task branch;
2. create/update the PR when appropriate;
3. leave a concise handoff in the Issue/PR with objective, final decisions, changed areas/commits, validation result, blockers/unknown client facts, explicit status and exact next action;
4. reconcile Issue state when scope/completion changed.

A future ChatGPT/Codex/Antigravity session must be able to reconstruct the task from GitHub without the prior conversation. Kevin should not have to copy plans or summaries between agents.

## Agent orchestration
- This repository supports both Codex (including GPT-6 Astra) and Google Antigravity.
- Shared procedures live in `.agents/skills/`; use them instead of duplicating long workflows in prompts.
- Codex project subagent settings live in `.codex/`; Antigravity can use the same skills and its custom agents under `.agents/agents/`.
- Keep the process lightweight. Use GPT-6 Astra only for genuinely difficult work and use subagents only when parallel investigation or independent review clearly improves the result.
- Antigravity is an approved fallback development agent when Codex/Astra quota is constrained, under the same repository rules and skills.
- Avoid multiple agents editing the same code area concurrently.

## Validation
- Validate the behavior actually changed.
- UI changes should be checked on relevant mobile and desktop sizes.
- Before release work, run the applicable lint/build checks and use an independent reviewer.
