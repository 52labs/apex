// Marketing-poster UI kit — atomic components.
// Loaded via <script type="text/babel" src="components.jsx"> in index.html.

// ---------- PosterStage ----------
function PosterStage({ children, style }) {
  const wrapRef = React.useRef(null);
  const stageRef = React.useRef(null);
  React.useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;
    const DESIGN_W = 1600;
    const fit = () => {
      const w = wrap.clientWidth;
      stage.style.transform = `scale(${w / DESIGN_W})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={wrapRef} className="stage-wrap" style={style}>
      <div ref={stageRef} className="stage">{children}</div>
    </div>
  );
}

// ---------- CornerMarker ----------
function CornerMarker({ kind = "square", corners = ["tl", "tr"], offset = 28 }) {
  if (kind === "bracket") {
    return <>
      {corners.includes("tl") && <span className="corner-bracket tl" />}
      {corners.includes("tr") && <span className="corner-bracket tr" />}
      {corners.includes("bl") && <span className="corner-bracket bl" />}
      {corners.includes("br") && <span className="corner-bracket br" />}
    </>;
  }
  // solid square markers
  const positions = {
    tl: { top: offset, left: offset },
    tr: { top: offset, right: offset },
    bl: { bottom: offset, left: offset },
    br: { bottom: offset, right: offset },
  };
  return <>
    {corners.map((c) => (
      <span key={c} className="corner-sq" style={{ position: "absolute", ...positions[c] }} />
    ))}
  </>;
}

// ---------- EyebrowChip ----------
function EyebrowChip({ children, tone = "ink", style }) {
  return <span className={`eyebrow ${tone === "accent" ? "accent" : ""} ${tone === "ghost" ? "ghost" : ""}`} style={style}>{children}</span>;
}

// ---------- MetaRow ----------
function MetaRow({ items, sep = "/", tone = "ink", marker = false, style }) {
  return (
    <span className={`meta-row ${tone === "ghost" ? "ghost" : ""}`} style={style}>
      {marker && <span className="sq" />}
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">{sep}</span>}
          <span>{it}</span>
        </React.Fragment>
      ))}
    </span>
  );
}

// ---------- MegaHeadline ----------
function MegaHeadline({ children, bar = true, skew = true, condensed = false, style }) {
  return (
    <div className="mega-wrap" style={style}>
      {bar && <span className={`mega-bar ${skew ? "" : "no-skew"}`} />}
      <span className={`mega-text ${condensed ? "condensed" : ""}`}>{children}</span>
    </div>
  );
}

// ---------- DotMatrixHeadline ----------
function DotMatrixHeadline({ children, accent = false, style }) {
  return <span className={`dotmatrix ${accent ? "accent" : ""}`} style={style}>{children}</span>;
}

// ---------- VerticalText ----------
function VerticalText({ children, tone = "ink", style }) {
  return <span className={`vert ${tone === "ghost" ? "ghost" : ""}`} style={style}>{children}</span>;
}

// ---------- AsciiSeparator ----------
function AsciiSeparator({ char = "*", count = 40, accent = false, style }) {
  return <span className={`ascii ${accent ? "accent" : ""}`} style={style}>{char.repeat(count)}</span>;
}

// ---------- SystemLog ----------
function SystemLog({ title = "[ SYSTEM INSIGHT LOG ]", entries, footer, style }) {
  return (
    <div className="syslog" style={style}>
      <div className="title">{title}</div>
      {entries.map((e, i) => (
        <div key={i}><span className="k">{e.k}</span> <span className="v">{e.v}</span></div>
      ))}
      {footer && <div style={{ color: "var(--orange)", marginTop: 4 }}>▪ {footer}</div>}
    </div>
  );
}

// Export to window so the page-level script can use them.
Object.assign(window, {
  PosterStage, CornerMarker, EyebrowChip, MetaRow,
  MegaHeadline, DotMatrixHeadline, VerticalText,
  AsciiSeparator, SystemLog,
});
