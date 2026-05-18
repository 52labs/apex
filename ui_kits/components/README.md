# Apex — Components UI Kit

Composable, reusable components for product surfaces. Square corners, 1px
ink hairlines, mono labels, paper-tone scrims — the system's flat,
hairline-led elevation philosophy expressed as a kit instead of static
specimens.

This kit supersedes the static cards under `/preview` (those remain as
specimens). Anywhere you would have copied a CSS recipe out of a preview
card, import `kit.css` and use the documented classes / React wrappers
instead.

## Install

```html
<link rel="stylesheet" href="ui_kits/components/kit.css" />
<!-- Optional React wrappers -->
<script type="text/babel" src="ui_kits/components/components.jsx"></script>
```

`kit.css` `@import`s `colors_and_type.css`, so loading it brings the full
token set and base typography along with it.

## Components

| Class / Component | What it is |
|---|---|
| `.ax-btn` / `<AxButton>` | Button. Tones: `ink` (default), `accent`, `ghost`. Sizes: `sm`, `md`, `lg`. |
| `.ax-field` / `<AxField>` | Wrapper for label + control + hint. |
| `.ax-input` / `<AxInput>` | Text input. Square, mono, orange focus ring. |
| `.ax-textarea` / `<AxTextarea>` | Multi-line input. |
| `.ax-check` / `.ax-radio` | Native checkbox / radio, restyled. |
| `.ax-badge` / `<AxBadge>` | Inline chip. Tones: default / `ink` / `accent` / `ok` / `warn` / `error` / `info`. |
| `.ax-status` / `<AxStatus>` | Inline status (dot + label). Tones: `ok` / `warn` / `error` / `info` / `neutral`. |
| `.ax-status--block` / `<AxStatusBlock>` | Full-width status surface (banner). |
| `.ax-card` / `<AxCard>` | Card. Variants: default / `sunk` / `inverse`. |
| `.ax-modal` / `<AxModal>` | Dialog. Esc to close. |
| `.ax-popover` / `<AxPopover>` | Anchored disclosure. |
| `.ax-drawer` / `<AxDrawer>` | Side panel. Left or right. |
| `.ax-state` / `<AxEmptyState>` | Empty / zero state. |
| `.ax-state.ax-state--loading` / `<AxLoadingState>` | Loading state with teletype log. |
| `.ax-state` / `<AxErrorState>` | Error / fault state. |
| `.ax-progress` | Indeterminate progress bar (Apex's skeleton replacement). |

See `index.html` for a complete specimen of every component.

---

## Status — the semantic layer

`colors_and_type.css` now exposes a semantic status tier over the raw
`--signal-*` tokens. **In product, always reach for the semantic name,
never the raw signal.**

| Role | FG | BG-tint | Use for |
|---|---|---|---|
| `--status-ok` / `--status-ok-bg` | green | warm green-paper | Operating normally; healthy uplink; route committed. |
| `--status-warn` / `--status-warn-bg` | amber | warm amber-paper | Degraded but operating; throttling; soft deadline missed. |
| `--status-error` / `--status-error-bg` | red | warm red-paper | Uplink lost; commit refused; fault. |
| `--status-info` / `--status-info-bg` | blue | warm blue-paper | Queued; informational; awaiting external input. |
| `--status-neutral` / `--status-neutral-bg` | gray | paper-1 | Idle, decommissioned, archived. |

### Status form factors

1. **Dot** (`.ax-status[data-tone="ok"]`) — 8px square + label. Use in
   table cells and list rows. Most common form.
2. **Badge** (`.ax-badge--ok`) — Bordered chip. Use when the status is
   the primary information in a small space.
3. **Block / banner** (`.ax-status--block[data-tone="ok"]`) — Full
   surface with eyebrow + message. Use as a page-level callout.

### Rules

- **One status per row.** Don't stack `ok` and `warn` dots in the same
  context.
- **Status uses the dot first, color second.** Do not communicate state
  by color alone — always pair with a word (`OK`, `WARN`, `ERROR`,
  `INFO`) or a clear label.
- **Block banners get a title.** The eyebrow names the record (`REPORT
  ID · SUPPLY-CHAIN-482`), the message is the institutional sentence.

---

## Overlays — flat, hairline-led elevation

Apex avoids soft shadows. Overlays read as **paper laid over paper**: a
1px ink border, the existing `--shadow-overlay` for separation, and a
warm-paper-tinted scrim instead of the usual translucent black.

### Modal / dialog

`<AxModal eyebrow="..." title="..." footer={...}>`

- Centered, max-width 560px.
- Head: eyebrow chip (mono uppercase) + display title + close button.
- Body: prose in `--font-sans`.
- Foot: right-aligned action row on `--paper-1`.
- Esc closes. Scrim click closes.
- Entrance: scrim fades, panel slides 8px up with opacity.

### Popover

`<AxPopover open title="...">`

- Anchored disclosure for inline detail.
- 220–320px width, mono body.
- Pointed by a single rotated-square arrow.
- Use for hover/click reveals on data points; **not** for menus
  (use a drawer or a proper menu component instead).

### Drawer

`<AxDrawer side="right" title="...">`

- Right (default) or left edge.
- Full-height, 420px wide on desktop, full width on mobile.
- Entrance: slides in over the scrim (200ms, `--ease-out`).
- Use for record detail, filter panels, and side-effect-heavy forms
  that don't warrant a full page.

### Scrim

A single shared `.ax-scrim` element handles modal + drawer dim. The
scrim is `rgba(233,231,226,0.78)` — warm paper at 78% — never a
translucent black. This keeps the overlay world reading as the same
substrate as the page.

---

## Motion — per-component

The system's general motion principle is **mechanical, instant, no
bounce**. Each component reuses one of these tokens; don't invent new
easings inside a component.

| Token | Where | Behaviour |
|---|---|---|
| `--motion-hover` | Buttons, badges, status chips, popover/modal close. | 120ms cross-fade of bg/border/color. |
| `--motion-press` | Buttons. | 120ms transform reset (Apex does NOT scale on press; this exists so a future variant can). |
| `--motion-focus` | All focusable controls. | 120ms outline / inset shadow transition for the orange focus ring. |
| `--motion-overlay-in` | Modals, drawers, popovers entering. | 200ms `--ease-out` opacity + 4-8px translate. |
| `--motion-overlay-out` | Same, exiting. | 120ms `--ease-in` opacity + translate. |
| `--motion-reveal` | Teletype log reveal in loading states. | Sequenced `steps()` width on each line. |

### Component motion

| Component | Entrance | Hover | Press | Exit |
|---|---|---|---|---|
| Button | none | bg flips to orange, border to orange, color stays paper | (no transform) | n/a |
| Input | none | n/a | n/a | n/a |
| Badge | none | none | n/a | n/a |
| Status dot | none | none | n/a | n/a |
| Card | `ax-enter-up` (200ms, opacity + 6px translate) on mount of dynamic lists | n/a | n/a | n/a |
| Modal | scrim fade 120→200ms, panel fade + 8px translate-y | n/a | n/a | reverse, 120ms |
| Popover | fade + 4px translate-y, 200ms | n/a | n/a | reverse, 120ms |
| Drawer | translateX(100%→0), 200ms `--ease-out` | n/a | n/a | reverse, 120ms |
| Loading | `ax-teletype` per line, 1.2s `steps(28)`, staggered 1s apart | n/a | n/a | n/a |
| Progress | `ax-progress` indeterminate bar, 1.6s loop | n/a | n/a | n/a |

### Forbidden in motion

- Spring / bounce / overshoot easings on content. (`--ease-snap` is
  allowed on chrome state changes only — a chip selecting, a focus
  ring landing.)
- Skeleton shimmer. Apex uses the teletype log + indeterminate hairline
  progress bar instead.
- Scale-down on press. The system reads as rigid; "pressed" is a color
  change, not a transform.
- Confetti. Particle effects. Glow pulses.

---

## States — empty, loading, error

### Voice

Apex states keep the institutional declarative voice. Three rules:

1. **Name the record, not the user.** "Manifest empty.", not "You don't
   have any manifests yet."
2. **State the cause if known, the action if available.** "No dispatch
   records exist for the selected corridor. Filters may be too narrow."
3. **No apology, no hype, no emoji.** "Uplink lost." not "Oops! 😬 We
   lost the signal".

### Anatomy

```
[ EYEBROW STATUS — short code or category ]
DECLARATIVE TITLE.
Sentence-case explanation. One or two sentences max.
[primary action] [secondary action]
```

### Empty state

- Eyebrow uses ghost-gray dot.
- Title is a single declarative sentence, all caps, display weight.
- Always offer at least one action — even if it's "Clear filters".

### Loading state

- Eyebrow uses orange dot.
- Three teletype lines, each shorter than 60 chars; reveal staggered
  1s apart via `.ax-state__log-line`.
- Indeterminate `.ax-progress` bar at the bottom.
- Never show a skeleton placeholder.

### Error state

- Eyebrow uses red dot, includes a fault code (`F-08`).
- Title states the failure flatly ("Uplink lost.", "Commit refused.").
- Body explains the cause and required action.
- Primary action is usually `Acknowledge`; secondary is `Escalate` or
  `Retry`.

### Examples (voice)

| Scenario | Title | Body |
|---|---|---|
| No dispatch records | "Manifest empty." | "No dispatch records exist for the selected corridor. Filters may be too narrow." |
| No notifications | "Inbox clear." | "No new alerts in the last 24 hours. Active monitoring continues." |
| Permission denied | "Access restricted." | "Operator K. Park is not authorized for corridor EST-044. Request elevation via the dispatch desk." |
| Network failure | "Uplink lost." | "Vehicle AX-3897 has not reported in 90s. Operator acknowledgement required before AI escalation." |
| Loading first paint | "Streaming…" | (Teletype log: "Connecting to secure node.", "Streaming records.", "Indexing for retrieval.") |
