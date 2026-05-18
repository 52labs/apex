# fonts/

This folder is intentionally empty for now. The system loads its typefaces via Google Fonts CDN — see the `@import` at the top of `colors_and_type.css`.

## Substituting in the real fonts

If you have licensed `.woff2` files for the original faces (suspected to be Neue Haas Grotesk Display, IBM Plex Mono, and a custom LED dot-matrix), drop them in this folder and replace the Google Fonts `@import` with `@font-face` rules:

```css
@font-face {
  font-family: "Apex Display";
  src: url("./fonts/ApexDisplay-Bold.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}
```

Then update `--font-display` etc. in `colors_and_type.css` to reference the new family names.
