<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Confecciones SV agent rules

## Product truth
- GitHub Issues, confirmed client information and the current code are the source of truth.
- Never invent business facts such as prices, hours, payment methods, delivery times, guarantees, services, social accounts, address details or client photographs.
- If a material business fact is unknown, keep it explicitly pending instead of filling it with plausible content.

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
