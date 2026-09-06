# Confecciones SV — Visual DNA

Status: canonical art-direction guardrail for future owner-assigned visual work. The project remains **PARKED**; this document does not reactivate the roadmap.

## Product essence
Confecciones SV should feel like a **contemporary tailoring atelier where craft is visible in the structure**, not a generic luxury landing page.

The business value is practical and human: recover and adapt garments carefully, make the service understandable and help a customer move from garment → alteration → realistic next step.

## Memory test
Twenty-four hours later, the visual memory should be:

> **A precise golden thread moving through an editorial tailoring workspace.**

If the memory is only "cream + black + gold premium website", the direction is too generic.

## Core adjectives
- **Crafted** — details relate to real sewing/tailoring practice rather than generic luxury decoration.
- **Editorial** — strong type, composition and negative space create quality without needing endless cards/effects.
- **Precise** — measurements, choices, prices and steps are clear and trustworthy.

## Anti-adjectives
- generic black-and-gold luxury;
- fashion e-commerce template;
- corporate SaaS;
- rustic craft-market cliché;
- flashy 3D for its own sake.

## Confirmed visual anchors
From the current project context:
- cream/sand `#FAF7F2`;
- dark brown `#2D2926`;
- gold `#C5A059` for accents/thread;
- WhatsApp green reserved for the actual WhatsApp action;
- finished SV monogram and typographic logo in `/public/assets/branding/`;
- current direction: high-couture, minimal, neo-editorial;
- `AnimatedThread` and the garment → service → budget flow are existing project-specific assets/behaviors.

Do not invent additional client imagery, claims or branding to enrich the design.

## Source metaphors
Extract principles from:
- tailoring patterns, chalk marks, seam allowances and measurement ticks;
- thread paths, stitches, pins and garment construction diagrams;
- atelier worktables, paper patterns and fabric folds;
- fashion-editorial typography and catalogue composition;
- garment labels, care labels and workshop tickets/receipts when useful for information hierarchy.

Do not rely only on luxury fashion websites for inspiration.

## Signature system
### 1. The thread as navigation/progress
The existing dynamic thread can connect meaningful decisions or sections. It should communicate continuity/progress, not become a decorative squiggle behind every block.

### 2. Pattern geometry
Rules, notches, measurement ticks, cut lines, subtle registration marks and pattern-like spacing can structure content. Use sparingly and functionally; avoid fake technical detail.

### 3. Editorial scale
Typography and negative space should create hierarchy before cards/shadows. A price, service name or section title may become a strong compositional anchor.

### 4. Material contrast
Cream paper/fabric-like light surfaces + dark ink/brown + restrained gold should feel tactile without photorealistic fake textures. Real client photos only when actually supplied/approved.

## Composition grammar
- Prefer editorial sections, rules and spatial hierarchy over repeated rounded cards.
- The service/calculator flow should feel like steps in making/altering a garment, not a fintech onboarding wizard.
- Desktop can use asymmetric editorial composition; mobile keeps the path linear and immediately understandable.
- Calls to action should be scarce and explicit; WhatsApp remains a real destination, not a generic green accent used everywhere.

## Typography direction
Typography should support an atelier/editorial character while keeping service/pricing information highly readable.

- display roles may use an elegant serif/editorial face where the current implementation supports it;
- body/action text needs a restrained, legible companion;
- do not default new design work to Inter/Roboto/Arial/Space Grotesk without a reason;
- a global type change requires properly licensed/performance-suitable candidates rendered with Spanish and English content;
- do not use thin fashion-magazine typography for essential prices/forms if it hurts readability.

## Color logic
- cream/sand is the primary field, not merely a card background;
- dark brown provides ink/structure;
- gold marks thread, craft emphasis or refined focus — not every border/icon;
- WhatsApp green is semantic to WhatsApp;
- avoid turning the palette into generic black + gold luxury, metallic gradients, glow or glass.

## Shape and surface language
- pattern-sheet edges, rules and open space can replace generic rounded containers;
- radii should be modest/purposeful where controls need them;
- stacking-card behavior may remain where it expresses the existing calculator interaction, but do not make every section another stacking card;
- shadows should evoke real layering only when hierarchy needs it.

## Imagery and iconography
- Never invent before/after garment photographs or client work.
- Use logos/assets already confirmed.
- When photos arrive, art direction should define consistent crop, lighting/background treatment and before/after pairing without falsifying results.
- Generic fashion silhouettes, scissors/mannequin icons and gold icons in circles should not become filler.

## Motion language
Motion should feel like **handling/material/progression**:
- thread drawing as a decision path;
- controlled stacking/turning where already part of the calculator;
- subtle layer shifts like pattern sheets;
- short, useful feedback.

Avoid ornamental parallax, floating luxury particles, universal fade-ups or 3D unless a concrete interaction benefits.

## Anti-generic checks specific to Confecciones SV
Return `GENERIC_RISK` if several appear together:
- black/cream/gold alone carries the identity with no tailoring-specific structure;
- hero + three service cards + testimonials + CTA template appears by default;
- every service uses a generic icon-in-circle;
- fabric/craft claims or photos are fabricated to make the layout richer;
- the thread/pattern language disappears and the site could represent a jewellery, hotel or consulting brand by swapping text;
- animations communicate "premium" but not sewing, handling or progression.

## Truth constraint
Design can never compensate for missing client facts by inventing them. Unknown hours, payment methods, delivery times, guarantees, services, social accounts or photos remain explicitly pending under `AGENTS.md` and Issue #1.

## Parked-project constraint
Do not use this new design system as a reason to resume product work. It activates only when the owner explicitly assigns a Confecciones task.

## Canonical relationship
- Business truth: `AGENTS.md`, confirmed client information, Issues and current code.
- Existing historical project context: `CONTEXTO.md` only where it still agrees with current truth.
- Artistic intent: this file.
- Method/QA: `.agents/skills/art-direction/SKILL.md`.
