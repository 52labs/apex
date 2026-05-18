---
version: alpha
name: Apex
description: >
  AI-enabled operations and infrastructure design system. Industrial,
  calibrated, quiet-but-loud. Print-flat surfaces, hairline ink rules,
  one vermilion accent, mono metadata. Reads like research-lab signage,
  not a consumer app.
colors:
  # Paper -- warm light gray surface family. Never pure white.
  paper-0:       "#F2F0EB"   # lightest, raised surfaces
  paper:         "#E9E7E2"   # default page background
  paper-1:       "#DEDCD6"   # sunken panels
  paper-2:       "#C9C7C2"   # mid gray, decorative/ghosted type

  # Ink -- near-black foreground family. Never pure black.
  ink:           "#111111"   # primary foreground
  ink-2:         "#2A2A2A"   # secondary foreground
  ink-3:         "#5C5C5A"   # tertiary, captions
  ink-ghost:     "#ABA9A3"   # faint type, dropped-out metadata

  # Accent -- single vermilion-orange. The only saturated hue in the system.
  orange:        "#EE5314"
  orange-deep:   "#C8420C"   # press / hover
  orange-tint:   "#F38256"   # sparingly

  # Canonical semantic roles
  primary:       "{colors.ink}"
  on-primary:    "{colors.paper-0}"
  secondary:     "{colors.paper}"
  on-secondary:  "{colors.ink}"
  tertiary:      "{colors.orange}"
  on-tertiary:   "{colors.paper-0}"
  neutral:       "{colors.ink-3}"
  on-neutral:    "{colors.paper-0}"

  # Surfaces
  surface:           "{colors.paper}"
  surface-raised:    "{colors.paper-0}"
  surface-sunk:      "{colors.paper-1}"
  on-surface:        "{colors.ink}"
  on-surface-variant: "{colors.ink-3}"
  outline:           "{colors.ink}"
  outline-variant:   "{colors.paper-2}"

  # Status -- semantic. fg pairs on paper bg; bg pairs as status surface.
  success:        "#2E7D32"
  success-bg:     "#DDE7DC"
  warning:        "#E8A317"
  warning-bg:     "#EFE0BE"
  error:          "#D42018"
  error-bg:       "#EDD3CF"
  info:           "#0F4C81"
  info-bg:        "#D3DCE6"

typography:
  display-mega:
    fontFamily: Archivo
    fontSize: 168px
    fontWeight: 800
    lineHeight: 0.84
    letterSpacing: -0.025em
  display-lg:
    fontFamily: Archivo
    fontSize: 112px
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo
    fontSize: 72px
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Archivo
    fontSize: 48px
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Archivo
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.01em
  title-md:
    fontFamily: Archivo
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0.04em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  label-eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.08em
  condensed-lg:
    fontFamily: Archivo Narrow
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.01em
  dot-matrix-display:
    fontFamily: Workbench
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.02em
    fontVariation: '"BLED" -50, "SCAN" 0'

spacing:
  base:    16px
  xs:      4px
  sm:      8px
  md:      16px
  lg:      24px
  xl:      32px
  2xl:     48px
  3xl:     64px
  4xl:     96px
  5xl:     128px
  gutter:  24px
  margin:  32px

rounded:
  none:   0
  sm:     2px
  md:     4px
  full:   9999px

components:
  # ---------- Buttons ----------
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-0}"
    typography: "{typography.label-eyebrow}"
    rounded: "{rounded.none}"
    height: 40px
    padding: 0 16px
  button-primary-hover:
    backgroundColor: "{colors.ink-2}"
  button-primary-press:
    backgroundColor: "{colors.ink}"
  button-accent:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.paper-0}"
    typography: "{typography.label-eyebrow}"
    rounded: "{rounded.none}"
    height: 40px
    padding: 0 16px
  button-accent-hover:
    backgroundColor: "{colors.orange-deep}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label-eyebrow}"
    rounded: "{rounded.none}"
    height: 40px
    padding: 0 16px
  button-ghost-hover:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.paper-0}"

  # ---------- Badges / chips ----------
  badge:
    backgroundColor: "{colors.paper-1}"
    textColor: "{colors.ink}"
    typography: "{typography.label-eyebrow}"
    rounded: "{rounded.none}"
    padding: 4px 8px
  badge-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-0}"
  badge-accent:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.paper-0}"

  # ---------- Status ----------
  status-ok:
    backgroundColor: "{colors.success-bg}"
    textColor: "{colors.success}"
    typography: "{typography.mono-sm}"
  status-warn:
    backgroundColor: "{colors.warning-bg}"
    textColor: "{colors.warning}"
    typography: "{typography.mono-sm}"
  status-error:
    backgroundColor: "{colors.error-bg}"
    textColor: "{colors.error}"
    typography: "{typography.mono-sm}"
  status-info:
    backgroundColor: "{colors.info-bg}"
    textColor: "{colors.info}"
    typography: "{typography.mono-sm}"

  # ---------- Cards ----------
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 24px
  card-sunk:
    backgroundColor: "{colors.surface-sunk}"
    rounded: "{rounded.none}"
    padding: 24px
  card-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-0}"
    rounded: "{rounded.none}"
    padding: 24px

  # ---------- Inputs ----------
  input-field:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    height: 40px
    padding: 0 12px
  input-field-focus:
    backgroundColor: "{colors.surface-raised}"

  # ---------- Overlays ----------
  modal:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 32px
  drawer:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 24px
    width: 360px
  popover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 16px

  # ---------- Chrome ----------
  eyebrow-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-0}"
    typography: "{typography.label-eyebrow}"
    rounded: "{rounded.none}"
    padding: 4px 8px
  eyebrow-chip-accent:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.paper-0}"
---

# Apex Design System

## Overview

Apex is an **AI-enabled operations and infrastructure** brand. The reference
materials present it as *Apex Logistics*, an "AI Operations Terminal" running
supply-chain and dispatch intelligence. The visual identity reads like
industrial signage crossed with a research-lab dossier: warm paper backgrounds,
near-black grotesque display type, a single vermilion-orange accent, and
monospace metadata everywhere.

The voice is **third-person institutional** — Apex talks like a research
division reporting up the chain, not like a consumer app. There is almost no
"you," almost no "we." Copy is short, declarative, and reads like a teletype log.

**Vibe in three words:** Industrial · Calibrated · Quiet-but-loud.

**Avoid:** marketing superlatives, emoji, exclamation marks, first-person
plural, "Hey there," and any "built different" register. No bouncy spring
animations, neumorphism, glassmorphism, or photographic backgrounds.

## Colors

A four-axis palette: **paper** (warm light grays), **ink** (near-black),
**orange** (single accent, vermilion ~#EE5314), and **mid gray** (decorative
metadata). That is the whole system. There is no purple, no teal, no blue
except for limited status signaling.

- **Paper (#E9E7E2)** — the default page surface. Backgrounds are *never* pure
  white; pure white reads as "not Apex."
- **Ink (#111111)** — the primary foreground. *Never* pure black; pure black
  reads as "not Apex."
- **Orange (#EE5314)** — the sole accent. Used for the parallelogram bar
  slicing display headlines, the eyebrow-chip accent variant, hover flips on
  ghost buttons and links, and the primary action color when buttons need to
  shout. The accent must remain rare — one or two appearances per composition.
- **Neutral mid-gray (#5C5C5A / #ABA9A3)** — captions, ghosted metadata, the
  faint "dropped-out" type in poster backgrounds.

The semantic role token names follow the conventional `primary` / `secondary`
/ `tertiary` / `neutral` scheme: `primary` is **ink** (the structural
workhorse), `secondary` is **paper** (the surface), `tertiary` is **orange**
(the accent), and `neutral` is **mid-gray**.

Status hues exist for `success`, `warning`, `error`, `info` but are used
sparingly — Apex prefers ASCII words (`OK`, `FAIL`) and ink/orange semantics
over a multi-hue status palette. When a status surface is required, pair the
foreground hue with its `*-bg` tint; the pair holds AA contrast on warm paper.

## Typography

- **Display:** **Archivo** (neutral grotesque, Google Fonts substitute for
  Neue Haas Grotesk Display). Tight tracking, heavy weights (700–900).
  The mega-display use is the signature move: oversized, all caps, often with
  an orange parallelogram bar slicing horizontally through it.
- **Mono:** **JetBrains Mono** (substitute for IBM Plex Mono / Berkeley Mono).
  Used pervasively for metadata, IDs, eyebrow chips, log copy. Easily 30%+
  of every layout is mono — the mono presence is what gives Apex its
  "operations terminal" feel.
- **Body / reading:** **IBM Plex Sans** for long-form copy (articles, marketing
  body, docs). Archivo is too tight for reading blocks; the body sans is tuned
  for legibility at small sizes.
- **Dot-matrix:** **Workbench** (variable, `BLED` axis). Reserved for
  poster-grade hero headlines on a small subset of compositions. Some render
  targets ignore variable-font axes — fall back to JetBrains Mono if so.
- **Condensed:** **Archivo Narrow** for vertical or stacked secondary type.

### Casing rules

- **ALL CAPS** for metadata labels, eyebrows, footers, vertical type, and
  structural callouts.
- **Sentence case** for prose, log entries, and body reading text.
- **Title Case** for non-all-caps display headlines.
- **Mega display headlines** are usually all caps (`APEX LOGISTICS`).

### Metadata vocabulary

Apex leans into **archive/ID/version syntax** as decoration. These are not
real values; they are typographic texture. Use these shapes for filler chrome:
`ARCHIVE REF: T-LAB-23421-U8-FWD`, `PROTOTYPE CLASS: GENERATIVE-01`,
`REPORT ID: SUPPLY-CHAIN-482`, `V.01`, `(c) 2026`.

## Layout

Loose, asymmetric, grid-anchored. Compositions feel like a wall of stamps and
rubber-stamped IDs on a clean sheet — lots of empty paper, items hung from
invisible vertical / horizontal guides.

- **Edge-anchored chrome.** Corner brackets, eyebrow chips, and footer labels
  live tight to the four corners of the canvas. Center the eye on one mega
  element; everything else floats at the edges as metadata.
- **Vertical type is allowed and encouraged** (rotated `NEW YORK CITY`,
  `UNITED STATES OF AMERICA`).
- **Overlap is intentional.** The orange parallelogram bar slicing through
  `APEX LOGISTICS` is a brand move — the accent shape passes *behind or in
  front of* the type, never neatly beside it.
- **Spacing scale** is a 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px ladder.
  The `base` unit is 16px; `gutter` is 24px; outer page `margin` is 32px on
  desktop and shrinks proportionally on smaller viewports.
- **Container width** on web caps at 1240px (`.wb-wrap`). Below 820px,
  navigation collapses; below 600px, multi-column grids collapse to one.

## Elevation & Depth

Apex is **print-flat**. Elevation is signaled by background-color shifts
(`surface` → `surface-raised`) or by a 1px ink hairline — *not* by blurred
drop shadows.

- **Default elevation:** none. A card sits on a slightly lighter surface or is
  outlined by a single 1px ink rule.
- **Hairline rule:** 1px solid ink is the default border for cards, panels,
  inputs, and dividers. Gray hairlines (`outline-variant`) are used only for
  decorative gridding (forms, tables) where ink would be too loud.
- **One sanctioned shadow:** for genuinely floating overlays (modals, drawers),
  apply `0 24px 64px -12px rgba(17,17,17,0.32)` plus a paired scrim. Used
  sparingly; never on type, never on cards.
- **Transparency and blur:** avoided. The brand is opaque on paper. The only
  sanctioned overlay effect is the orange parallelogram bar passing over
  black type — a print-overlay impression, not CSS opacity.

## Shapes

The shape language is **hard-edged**. Square corners on UI chrome are part of
the brand, not a stylistic choice. The `rounded` scale tops out at 4px, used
sparingly on form inputs at most; everything else is `none`.

- **UI chrome (buttons, cards, panels, modals, drawers, inputs, badges,
  chips):** 0px radius.
- **Form inputs:** 0px preferred; up to 2px (`rounded.sm`) acceptable.
- **Tags, chips, pills:** 0px — they are rectangles, not pills.
- **Avatars:** square or fully circular (`rounded.full`), nothing between.
- **Physical-object mockups** (phone bezels, hardware renders): radii are
  allowed, but only on the represented object, not the surrounding UI.

Decorative shapes are: the **orange parallelogram bar** (a -22deg-skewed
rectangle behind a display headline), **corner brackets** (1–2px ink or
orange L-shapes at the canvas corners), **asterisk runs** (`********`) as
separators, and **solid square markers** as bullet equivalents.

## Components

Component guidance for the most common product surfaces. Full specimens
live in `ui_kits/components/`. The website kit (`ui_kits/website/`) shows
these wired into responsive page sections.

### Buttons

Three tones: **ink** (default, primary action), **accent** (vermilion-orange,
when the action needs to shout), **ghost** (chrome-flat with hover-flip to
orange-on-paper). All buttons are square, mono-labeled, 40px high at `md`,
and shift backgrounds on hover instead of scaling.

- **Hover (ink):** background lightens to `ink-2`.
- **Hover (accent):** background darkens to `orange-deep`.
- **Hover (ghost):** background flips to `orange`, text flips to `paper-0`.
- **Press:** background drops back to `ink`, no transform.
- **Focus:** 2px solid orange outline, 2px offset.

### Badges & status

Inline chips for metadata (`badge`) and inline status (`status-ok / warn /
error / info`). Mono uppercase labels. Status surfaces pair `*-bg` tints
with their foreground hue.

### Cards

A card is a *miniature poster*: lots of mono metadata top-left and top-right,
mega/display content centered or left-aligned, more mono at bottom corners.
Three variants: default (raised paper), `sunk` (paper-1), `inverse` (ink with
paper text). 1px ink rule or background shift defines the edge — never a
drop shadow.

### Inputs

Square, mono labels above, monospace placeholder. Orange focus ring (2px,
2px offset). 40px height at default size.

### Overlays

Modals, drawers, and popovers all share the raised paper surface, square
corners, and the single sanctioned shadow. Drawers default to 360px wide
and anchor right. All overlays close on `Esc` and on scrim click.

### State surfaces

Empty, loading, and error states use the same card chrome with a mono
operations-log message inside (`Observation: ... Inference: ... Action: ...`).
Never use illustrated empty states or skeleton shimmers — both fight the
industrial register.

### Iconography

The brand uses **typographic glyphs and brand marks**, not a conventional icon
set: asterisk runs, corner brackets, forward slashes, solid square markers.
For functional UI iconography (dashboard nav, etc.) use **Lucide** from CDN —
its thin-stroke square-cap visual aligns with the industrial register and
does not introduce a competing style. Emoji is never used.

## Do's and Don'ts

- **Do** use the orange accent rarely — one or two appearances per
  composition is the brand register. Two or more orange elements in one tile
  reads as a different system.
- **Do** keep all UI chrome square (0px radius). Reserve radii for represented
  physical objects, not the UI around them.
- **Do** use 1px ink hairlines as the default border. Gray hairlines only
  for decorative gridding.
- **Do** lean on mono metadata — eyebrow chips, archive IDs, version stamps,
  vertical type. The mono presence is what makes a layout feel Apex.
- **Do** maintain WCAG AA contrast (4.5:1 for normal text). The ink-on-paper
  pairing holds at all body sizes; check any orange-on-paper or status
  surface usage.

- **Don't** use pure white (`#FFF`) or pure black (`#000`). Paper and ink are
  warm; pure values break the register.
- **Don't** add drop shadows on type, soft elevation stacks, glassmorphism,
  neumorphism, or any blur effect. The brand is print-flat.
- **Don't** use rounded corners on UI chrome, buttons, inputs, badges, or
  panels.
- **Don't** use bouncy spring easings, confetti, skeleton shimmers, or
  illustrated empty states. Motion is mechanical: 120–200ms, sharp
  out-curves, no overshoot on content.
- **Don't** use emoji as iconography, anywhere. ASCII glyphs (`*`, `/`, `>`,
  `+`) are the brand-sanctioned equivalent.
- **Don't** mix Inter or Roboto into the system as display type — Archivo is
  the display face. IBM Plex Sans is the only sanctioned body face.
- **Don't** write marketing superlatives, exclamation marks, first-person
  plural ("we're so excited"), or "you" voice. The voice is institutional
  third-person.
