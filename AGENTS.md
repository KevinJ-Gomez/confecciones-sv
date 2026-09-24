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

## Visual design gate — distinctive atelier identity
- `docs/VISUAL-DNA.md` is the canonical high-level art direction and `.agents/skills/art-direction/SKILL.md` is the anti-generic workflow.
- The project remains parked: do not create visual/product work unless Kevin explicitly assigns it.
- For an assigned **material** visual change, read the current confirmed branding/client context, the Visual DNA and art-direction skill before implementing; use the read-only `art-director` for preflight/review when useful.
- The implementation agent must not invent a new visual language or fabricate business facts/photos/claims to make a design richer.
- Preserve the atelier/thread/pattern/editorial identity; challenge generic black-and-gold luxury templates and generic SaaS layouts.
- Small visual maintenance only needs to preserve the existing DNA and be checked in relevant mobile/desktop views.
- Material visual work should pass rendered logo-off, brand-swap and AI-smell gates before it is called visually complete.

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

## Atomic handoff cutover — concurrent worker state
For substantive handoffs with active or recently dispatched workers, the handoff is not complete merely because a snapshot was written.

Rules:
- `HANDOFF_SNAPSHOT_WRITTEN != HANDOFF_CUTOVER_COMPLETE`.
- `LATEST_DURABLE_DELTA > HANDOFF_SNAPSHOT`: the receiver checks GitHub activity newer than the handoff/cutover before dispatching, reassigning or merging.
- `PROMPT_SENT` is a durable mission state. Never represent a sent mission as `READY_TO_SEND` or resend it because an older snapshot says so.
- `PAUSED_CAPACITY != IDLE`: quota/tool/provider pauses do not release the writer or write-zone. Ownership persists until durable `STOP/CLOSED` or an explicit takeover.
- Before declaring `HANDOFF_READY`, reconcile one final time: current main/PR HEAD, active mission, writer, prompt dispatch state, worker state, write-zone ownership, blockers, resume trigger and next Director action.
- If any dispatch/state change happens while preparing the handoff, reconcile the handoff again before rotating.
- Keep this proportional: this cutover discipline applies when concurrent mission state can drift, not to trivial one-agent tasks.

## BOOTSTRAP_COMPREHENSION_PROOF — material/new-agent missions
For `FULL_BOOTSTRAP` or `FOCAL_BOOTSTRAP` on a material mission, reading a source list is not enough. Before the first substantive product write, the worker must produce a compact comprehension proof.

Minimum fields:
- `CURRENT_MAIN / ACTIVE_ISSUE_PR / LAST_HANDOFF`;
- `ROLE / MODE`;
- `MISSION / LATEST_ACCEPTED_DELTA`;
- `WRITE_ZONE / FORBIDDEN_ZONES`;
- `ACTIVE_WRITER_COLLISIONS / DEPENDENCIES`;
- `REQUIRED_SOURCES_READ` with at least one mission-changing implication from each material authority, not just filenames;
- `INVARIANTS / NEGATIVE_CASES`;
- `EVIDENCE / REVIEWERS`;
- `STOP_CONDITION`.

Rules:
- `SOURCE_LIST_READ != SOURCE_CONTRACT_UNDERSTOOD`.
- `ROLE_SPEC_READ != ROLE_COMPLIANCE`.
- A generic “read/understood” statement is not a pass.
- If the worker cannot state how a required source changes execution, scope, evidence or STOP, bootstrap is incomplete.
- For the same healthy worker continuing the same unchanged mission, `DELTA_BOOTSTRAP` may provide only the changed refs/implications.
- Material closeout/reviewer checks the final implementation against this proof and the latest durable delta; the proof does not override newer accepted authority.
- Keep this proportional: trivial one-agent maintenance does not require a durable bootstrap comment.

For multi-agent or handoff-sensitive material work, persist the proof in the target Issue/PR (or another project-approved durable mission record) so a fresh Director can verify what the worker believed before it wrote.

