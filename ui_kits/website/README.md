# Apex — Website UI Kit

Responsive section components for actual web pages. This is the kit you
reach for when building a marketing site, a documentation page, a
field-note article — anything that lives at a real URL and reflows from
mobile to wide desktop.

It is the **counterpart to `marketing-poster/`**, which is a fixed
1600px transform-scaled stage for poster compositions. Posters do not
reflow; websites do. Use the right kit for the job.

## Install

```html
<link rel="stylesheet" href="ui_kits/website/kit.css" />
```

`kit.css` imports `colors_and_type.css` and the components kit
(`../components/kit.css`), so loading it brings buttons, status, cards,
modals, the full token set, and body typography along with it.

## Sections

| Class | What it is |
|---|---|
| `.wb-strip` | Black status strip above the header. Mono uppercase metadata — "AI ASSIST · ACTIVE", report IDs, city. Optional. |
| `.wb-header` + `.wb-nav` | Sticky page header with brand lock-up, primary nav, and a CTA button. Collapses to a toggle below 820px. |
| `.wb-hero` | Mega display headline + lede + actions + 4-column meta grid. Orange parallelogram bar in the title and corner brackets at the canvas edges. |
| `.wb-callout` | Orange-bar slogan band (the "BUILT TO OPTIMIZE HUMAN POTENTIAL" move). |
| `.wb-section` | Generic content section with eyebrow + 2-col head. Ink variant (`--ink`) for a black band. |
| `.wb-features` | 3-up feature grid drawn with a 1px hairline grid (no card edges — the grid is the card). Collapses to 2-up at 940px, 1-up at 600px. |
| `.wb-stats` | 4-up statistics band with a hairline border around the whole group. |
| `.wb-article` | Two-column long-form layout: sticky TOC rail + article body. Single column below 820px. |
| `.wb-footer` | Inverse footer with brand pitch + three link columns + archive ref line. |

See `index.html` for a full marketing page demo and `article.html` for a
long-form content layout.

## Pages in this kit

- `index.html` — Landing page: hero, callout, feature grid, stats, doctrine, ink CTA band, footer.
- `article.html` — Long-form field note with sticky TOC rail.

## Layout rules

- **Wrap content in `.wb-wrap`** (max-width 1240px, 28px gutters). The
  status strip, header, hero, sections, and footer each use it
  internally.
- **One hero per page.** The mega display headline is the brand's
  loudest move; never stack two on a page.
- **Eyebrow + 2-col head is the section signature.** Left column holds
  the bracketed mono index (`[ 01 / SYSTEMS ]`), right column holds the
  headline + lede.
- **Hairline grids over cards.** The feature grid draws its dividers
  with 1px borders rather than wrapping each tile as a bordered card.
  This keeps the wall-of-stamps feel from the posters.

## Responsive behaviour

The kit reflows at three breakpoints, designed so the same source
markup works on phone, tablet, and desktop without conditional render
logic:

- **≤ 600px** — feature grid 1-up, hero meta grid 2-up, footer links 1-up.
- **≤ 820px** — primary nav collapses to a toggle, article rail goes
  inline, stats grid becomes 2×2, footer becomes 2-up.
- **≤ 940px** — feature grid 2-up.

## Voice — copy in product

Copy here follows the same institutional declarative voice as the
posters and the components kit's state messages.

- Hero headline: **declarative, all-caps display weight**. Two or three
  short lines. ("Operations infrastructure for the AI era.")
- Section heads: **bracketed mono index + sentence-case display
  headline**. ("[ 02 / OPERATIONS LOG ]" → "Operational telemetry.")
- Lede: **two or three sentences, body sans**. No "we"; the brand
  speaks of itself in third person.
- Callout band (orange): **all-caps mono slogan** with an archive ref
  on the right.
- Article body: see the prose styles in `colors_and_type.css`.
