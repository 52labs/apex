---
name: apex-design
description: Use this skill to generate well-branded interfaces and assets for Apex, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** Apex — AI-enabled operations / infrastructure. Reads like an industrial research facility.
- **Voice:** declarative, institutional, third-person. No "we" / no emoji / no "!" / no marketing superlatives.
- **Color:** warm paper (`#E9E7E2`) + near-black ink (`#111111`) + vermilion orange (`#EE5314`). That's it. Never `#FFF` or `#000`.
- **Type:** Archivo (display) + JetBrains Mono (metadata/labels) + Workbench (dot-matrix display, rare). Substitutes for unknown originals — flag this if the user has real font files.
- **Visual idiom:** Swiss-grotesque-meets-AI-terminal. Lots of mono metadata (IDs, archive refs, version chips). Corner brackets and registration marks frame compositions. An orange parallelogram bar slicing through mega type is the signature move.

## Files in this skill

- `README.md` — full design system (read this first, especially Content Fundamentals + Visual Foundations + Iconography sections)
- `colors_and_type.css` — drop into any HTML and basic markup already looks Apex
- `assets/posters/` — the three reference posters that define the visual language
- `ui_kits/marketing-poster/` — composable React components for the poster system
- `preview/` — small specimen cards (good reference, not required)

## Defaults when uncertain

- Background: `var(--paper)` (not white)
- Foreground: `var(--ink)` (not black)
- Accent: `var(--orange)` (only one accent in the whole system)
- Cards/UI chrome: square corners (`--r-0`), 1px ink hairline, no shadows
- Eyebrow labels: mono, uppercase, tracked, often as a black or orange chip
- Numbers / IDs: mono, uppercase, with a fake-but-plausible structure (`AX-3897`, `SUPPLY-CHAIN-482`)
