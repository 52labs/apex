# Apex Design System

> AI-enabled operational infrastructure. Industrial. Technical. Confident.

Apex is positioned as an **AI-enabled operations and infrastructure brand** -- the reference materials present it as *Apex Logistics*, an "AI Operations Terminal" running supply-chain and dispatch intelligence. The visual identity reads like industrial signage crossed with a research-lab dossier: warm paper backgrounds, near-black grotesque display type, vermilion-orange accent, monospace metadata everywhere.

The three reference posters (Apex Logistics, Text Labs, Orbital Systems) share a single template-grade visual language -- so the system is portable across products. This design system codifies that language so any new artifact (slide, mock, marketing poster, dashboard) feels native to the brand.

---

## Source materials

This system was built from three poster references shared by the user. **No codebase, Figma file, or product UI was provided** -- the brand is currently expressed only through marketing artifacts.

| Source | Path | Notes |
|---|---|---|
| Poster - Apex Logistics | `assets/posters/poster-apex-logistics.png` | "AI Operations Terminal" - the primary brand artifact |
| Poster - Text Labs | `assets/posters/poster-text-labs.png` | Same template applied to a sibling/fictional brand |
| Poster - Orbital Systems | `assets/posters/poster-orbital-systems.png` | Same template; introduces dot-matrix display type |

> [!] **Open ask:** If there is a product UI, codebase, or Figma file for Apex, please attach it via the Import menu. UI kits below are currently **scaffolded against poster references only** and would benefit enormously from a real product source.

---

## Index - what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand context + the three big sections below. |
| `SKILL.md` | Cross-compatible skill manifest. Read this first if you're an agent. |
| `colors_and_type.css` | All color + type tokens, raw and semantic. Import this and basic HTML already looks like Apex. |
| `preset.json` | shadcn registry-item preset - applies the Apex tokens to any shadcn project. |
| `assets/posters/` | Reference posters (the source of truth for the visual language). |
| `assets/marks/` | Brand marks, registration glyphs, corner brackets used in compositions. |
| `preview/` | Small HTML cards that populate the Design System tab. |
| `ui_kits/marketing-poster/` | UI kit recreating the poster system as composable React components. |
| `ui_kits/ops-terminal/` | Hi-fi mock of the implied "Apex Operations Terminal" product - flagged as inferred. |

---

## USING AS A SHADCN PRESET

`preset.json` packages the Apex tokens as a shadcn [registry-item](https://ui.shadcn.com/schema/registry-item.json) (Tailwind v4). To apply it to any shadcn-initialized project:

```bash
npx shadcn@latest add https://raw.githubusercontent.com/knowsuchagency/apex/main/preset.json
```

What lands in your project:
- `:root` / `.dark` CSS variables -- `--background`, `--foreground`, `--primary`, `--border`, `--radius`, `--chart-1..5`, etc. mapped to Apex's paper + ink + vermilion surfaces. Light is the canonical theme; dark provides a respectful inverse so the shadcn theme toggle keeps working.
- An `@theme inline` block exposing the full Apex palette as Tailwind utilities -- `bg-apex-paper`, `text-apex-ink`, `bg-apex-orange`, `text-apex-orange-deep`, `bg-apex-signal-amber`, `font-display`, `font-mono`, `font-dot`, `ease-apex-out`, and friends.
- Default `--radius: 0rem` (Apex is hard-edged). `radius-sm/md/lg/xl` cascade off `--radius`, so all shadcn components render square by default; opt into 2px inputs / 4px chips via `rounded-apex-input` / `rounded-apex-chip`.
- A brand-aligned text selection color (orange-on-paper).

**Fonts are not bundled.** The preset declares `font-display` / `font-condensed` / `font-mono` / `font-dot` families but does not load the webfonts. Add the imports to your project's `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Archivo+Narrow:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Workbench:BLED,SCAN@-50..100,-50..50&display=swap');
```

Prerequisites: a project with `components.json` (run `npx shadcn@latest init` if needed) and Tailwind v4.

---

## Content fundamentals

The voice across all three poster references is **third-person institutional** -- Apex talks like a research division reporting up the chain, not like a consumer app. There is almost no "you," almost no "we." Copy is short, declarative, and reads like signage or a teletype log.

### Voice
- **Declarative, not promotional.** "Built to optimize human potential" - flat assertion, no hype words.
- **Operational reporting.** "Observation: Freight density spikes in western corridor. Inference: Seasonal routing inefficiency detected." Reads like an incident log.
- **Institutional framing.** "Future Operations Department." "Center for AI Experiments." "Linguistic Research Div." The brand is a *facility*, not a startup.
- **No emoji. No exclamation marks. No "let's." No first-person plural.**

### Casing
- **ALL CAPS** for metadata labels, eyebrows, footers, vertical type, and structural callouts (`FUTURE OPERATIONS DEPARTMENT`, `THE GRID NEVER SLEEPS`).
- **Sentence case** for prose / log entries (`Observation: Freight density spikes...`).
- **Title Case for display headlines that aren't all caps** (`Center for AI Experiments`, `Text Labs`).
- **Mega display headlines** are usually all caps (`APEX LOGISTICS`, `ORBITAL SYSTEMS`).

### Metadata vocabulary
The brand leans into **archive/ID/version syntax** as decoration. These are not real values; they're typographic texture. Use the same shapes when you need filler chrome:

- `ARCHIVE REF: T-LAB-23421-U8-FWD`
- `PROTOTYPE CLASS: GENERATIVE-01`
- `REPORT ID: SUPPLY-CHAIN-482`
- `VEHICLE ID: AX-3897`
- `ROUTE ID: EST-044`
- `V.01`, `T-L`, `(OSP-01)`, `(c) 2026`

### Vibe in three words
Industrial . Calibrated . Quiet-but-loud.

### Examples to imitate

> **BUILT TO OPTIMIZE HUMAN POTENTIAL**
> *(orange highlight block, mono, all caps - flagship slogan style)*

> **Text Laboratory operates at the intersection of computational linguistics and applied machine intelligence.**
> *(mono, sentence case - the "what we do" line)*

> **\[ SYSTEM INSIGHT LOG \]**
> *Observation: ...*
> *Inference: ...*
> *Action: ...*
> *Human validation required before network reroute.*
> *(mono log block - used for product-flavored callouts)*

### Examples to avoid
- "We're so excited to launch..."
- "Hey there."
- "Built different."
- Anything with `!` or emoji.
- Marketing superlatives (best, easiest, simplest, world-class).

---

## Visual foundations

### Color
A four-axis palette: **paper** (warm light gray backgrounds), **ink** (near-black foreground), **orange** (single accent - vermilion, ~#EE5314), and **mid gray** (decorative/ghosted metadata). That is the whole system. There is no purple, no teal, no blue except for very limited status signaling.

Backgrounds are **never pure white** -- always warm paper (`#E9E7E2`). Black is **never pure black** -- always `#111`. This restraint is half the brand: any pure white or pure black on screen immediately reads as "not Apex."

### Typography
- **Display:** A neutral grotesque (we're using **Archivo** as the Google Fonts substitute - see "Font substitutions" below). Tight tracking, heavy weights (700-900) for headlines. The mega-display use is the signature move: oversized, all caps, sometimes with an orange parallelogram bar slicing horizontally through it.
- **Mono:** **JetBrains Mono** (substitute). Used pervasively for metadata, IDs, labels, eyebrows, log copy. The mono presence is what gives Apex its "operations terminal" feel - easily 30%+ of every layout is mono.
- **Dot-matrix:** **Workbench** (Google Fonts variable dot-matrix). Reserved for poster-grade hero headlines on a small subset of compositions (see `poster-orbital-systems.png`).
- **Condensed:** **Archivo Narrow** for vertical or stacked secondary type.

### Layout
- **Loose, asymmetric, grid-anchored.** Compositions feel like a wall of stamps and rubber-stamped IDs on a clean sheet - lots of empty paper, items hung from invisible vertical/horizontal guides.
- **Edge-anchored chrome.** Corner brackets, eyebrow chips, and footer labels live tight to the four corners of the canvas. Center the eye on one mega element; everything else floats at the edges as metadata.
- **Vertical type is allowed and encouraged** (rotated `NEW YORK CITY`, `UNITED STATES OF AMERICA`).
- **Overlap is intentional.** The orange parallelogram bar slicing through `APEX LOGISTICS` is a brand move - accent shapes pass *behind or in front of* type, never neatly beside it.

### Backgrounds
- Default: flat warm paper (`--paper`).
- Posters and hero blocks: same paper with **dropped-out ghost type** in the background (e.g. faint vertical `NEW YORK CITY`, ghosted ASCII separators `*****`, light-gray data bars).
- **No photo backgrounds. No gradients. No grain filters.** The system is print-flat.

### Animation
- The reference materials are static print, so movement is implied, not shown. The intent is: **mechanical, instant, no bounce.**
- Use `cubic-bezier(0.2, 0.7, 0.1, 1)` (`--ease-out`) for transforms, 120-200ms.
- Avoid spring/bounce easings - they fight the industrial register.
- One sanctioned motion idiom: **dot-matrix flicker** or **teletype reveal** on mono copy (typewriter-style char-by-char). Use sparingly, never on body copy.

### Hover / press states
- **Hover (links, eyebrow chips):** background flips to orange, text flips to paper. No glow, no scale.
- **Hover (buttons w/ orange already):** background darkens to `--orange-deep` (`#C8420C`).
- **Press:** background shifts to `--ink`, no transform / no shrink. The brand is too rigid for a "pressed" scale animation.
- **Focus:** 2px solid orange outline, 2px offset. No glow.

### Borders & rules
- **1px solid `--ink`** is the default rule. Rules are *black hairlines*, not gray.
- For decorative gridding (forms, tables), use `--rule-soft` (`#C9C7C2`) only when ink would be too loud.
- **No rounded corners on UI chrome.** Radius is reserved for physical-object mockups (a phone bezel, a card). Buttons, inputs, panels, modals: all square.

### Shadows
- **None by default.** Elevation is signaled by background-color shifts (`--bg` -> `--bg-raised`) or by a 1px ink hairline.
- A single utility shadow exists (`--shadow-float`) for genuinely floating overlays. Used sparingly.
- **Never use blurred drop shadows on type.**

### Transparency & blur
- Avoid. The brand is opaque on paper. The only sanctioned transparency is the **orange parallelogram bar overlapping black type** (orange-on-ink reads as a darker orange) - a print-overlay effect, not CSS opacity.

### Corner radii
- UI chrome: **`0`**.
- Form inputs: **`0`** or `--r-1` (2px) at most.
- Tags, chips, pills: **`0`** - they are rectangles, not pills.
- Avatars: square or circle (`50%`), nothing between.

### Cards
- Background: `--bg-raised` (lighter paper) or just paper-on-paper with a 1px ink rule.
- Border: 1px solid `--ink` (preferred) or no border (relying on bg shift).
- Radius: **0**.
- Shadow: **none**.
- Inside the card: lots of mono metadata top-left and top-right, mega/display content centered or left-aligned, more mono at bottom corners. A card is a *miniature poster*.

### Layout rules - fixed elements
- The **corner-bracket** is a brand element: small square orange marker top-left + top-right (and sometimes all four corners), or an orange L-bracket at all four corners (see Orbital Systems poster). Use to frame a composition.
- The **registration mark** (R) floats inline near the brand name, ghosted gray.
- An **eyebrow chip** (black block, paper text, mono) is the standard top-of-composition label.

### What to avoid
- Bluish-purple gradients. Neumorphism. Glassmorphism. Drop-shadow stacks.
- Rounded-corner cards with a colored left-border accent.
- Emoji as iconography.
- Inter or Roboto as display type. Pure black (`#000`) or pure white (`#FFF`) backgrounds. Photographic backgrounds with overlays.
- Bouncy spring animations. Confetti. Skeleton shimmers.

---

## Iconography

The reference materials use **typographic glyphs and brand marks**, not a conventional icon system. Specifically:

- **Registration mark** (R) - appears 2-3x per composition, ghosted gray, treated as a brand artifact rather than legal copy.
- **Asterisk runs** `*********` - used as decorative separators / dot leaders, in orange or ghost gray.
- **Corner brackets** drawn with `[-` `-]` shapes - 1-2px ink or orange L-shapes at the canvas corners.
- **Forward slashes** `////` and `>>>>>` - used as separators and directional cues.
- **Solid square markers** - small orange or black squares used as bullet-equivalents in metadata rows.
- **A small custom "flower" mark** (Apex Logistics poster) and a small **X-target mark** (Apex Logistics, lower-center). These are **brand-specific glyphs** that we do not have vector source for; flagged for the user below.

### Approach for screens / mocks
For functional UI iconography (where the poster glyphs aren't enough - e.g. a dashboard's nav icons), use **Lucide** loaded from CDN. Lucide's thin-stroke, square-cap visual aligns with the brand's industrial register and does not introduce a competing visual style.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="activity"></i>
```

> [!] **Substitution flag - icons:** Lucide is a substitute. If Apex has its own icon set in product, please share it and we'll replace the Lucide references.

### Emoji & unicode
- **Emoji: never.** Not in product, not in marketing.
- **Unicode-as-icon: avoid.** Stick to ASCII glyphs: `*`, `/`, `>`, `+`, `x`. Status ticks are acceptable as the words "OK" / "FAIL" or paired with the design system's `--signal-*` colors.

---

## Font substitutions

> [!] **Substitution flag - fonts:** We were not given font files. The system uses these Google Fonts substitutes, which are visually close but not identical:
>
> | Role | Substitute (Google Fonts) | Likely real font |
> |---|---|---|
> | Display | **Archivo** (400-900) | Neue Haas Grotesk Display / Helvetica Now Display |
> | Condensed | **Archivo Narrow** | Helvetica Neue Condensed |
> | Mono | **JetBrains Mono** | IBM Plex Mono / Berkeley Mono |
> | Dot-matrix | **Workbench** (variable) | Custom LED dot-matrix face |
>
> If you have licenses for the real faces, drop `.woff2` files into `fonts/` and update the `@import` at the top of `colors_and_type.css`.
>
> **Note on Workbench:** Workbench is a variable font with `BLED` and `SCAN` axes that control its dot-matrix appearance. The default rendering is a clean sans-serif. To get the heavy dot-matrix look from the Orbital Systems reference poster, set `font-variation-settings: "BLED" 100;` and adjust. Some render targets (html-to-image, older browsers) ignore variable-font axes and show the default static instead.

---

## Caveats

1. **No product source.** All UI kits beyond the marketing-poster recreation are inferred from the brand's voice + visual treatments. Real product code or Figma will sharpen them dramatically.
2. **Brand marks** (the flower + X-target glyphs on the Apex Logistics poster) are not vectorized - we reference the raster crops only.
3. **Fonts are substitutes** - see above.
