# UI Kit — Marketing Poster

Recreates the poster system that defines the Apex visual identity. Three of the source compositions (Apex Logistics, Text Labs–style, Orbital Systems) are reproduced as composable React components.

**Important:** This is the *only* UI kit in this design system, because the only artifacts shared by the user were marketing posters. There is no product UI source. If a product codebase or Figma file exists, please attach it via the Import menu and we will produce a product-screen UI kit alongside this one.

## Components

| Component | Purpose |
|---|---|
| `PosterStage` | Outer canvas frame — sets the 16:9 paper background and registers the eight edge anchors (TL/TC/TR/ML/MR/BL/BC/BR) where chrome elements dock. |
| `CornerMarker` | Solid orange square or bracket marker. Used as a brand-stamp at canvas corners. |
| `EyebrowChip` | Black or orange mono chip. The standard top-of-poster label. |
| `MetaRow` | A run of mono metadata separated by `/` slashes. |
| `MegaHeadline` | Oversized Archivo Black display with optional orange parallelogram bar slicing through. |
| `DotMatrixHeadline` | Workbench dot-matrix display. |
| `VerticalText` | Rotated label, used for `NEW YORK CITY` / `U.S.A` style edge type. |
| `SystemLog` | The Observation / Inference / Action callout block. |
| `AsciiSeparator` | A run of `*`, `/`, or `>` characters in mono. |
