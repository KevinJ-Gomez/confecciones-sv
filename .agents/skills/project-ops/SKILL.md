---
name: project-ops
description: Coordinates Confecciones SV work across Codex/Astra or Antigravity using the smallest useful number of agents, focused validation and independent review. Use for multi-step implementation, audits, responsive work or releases.
---

# Confecciones SV project operations

1. Read `AGENTS.md`, relevant GitHub Issues and current code before acting. The project remains parked unless the owner explicitly assigns product work.
2. Keep the process lightweight. Use subagents only when independent review or parallel investigation clearly saves time or improves quality.
3. Never invent business facts. Unknown hours, prices, payments, delivery times, guarantees, social accounts, photos or services remain pending until confirmed.
4. Use GPT-6 Astra only for genuinely difficult work; routine site changes should use efficient models. Antigravity is a valid fallback agent under the same repository rules and skills.
5. Validate the behavior actually changed, including relevant mobile/desktop viewports for UI changes.
6. Check accessibility/SEO only to the depth justified by the change, then run lint/build required by the repository before release work.
7. Before PR completion, use an independent reviewer.
8. Apply the automatic handoff in `AGENTS.md`: persist material decisions when needed, and before ending substantive work push safe changes and leave the Issue/PR with objective, decisions, changed areas/commits, validation, blockers/unknown client facts, explicit status and exact next action. Never require Kevin to copy a VS Code/ChatGPT conversation or remind you to hand off.
9. For an owner-assigned task, routine non-destructive branch/commit/push/PR operations are already authorized; destructive Git and release/merge remain gated.
10. User instructions override general skill guidance unless they conflict with mandatory repository or safety constraints.
