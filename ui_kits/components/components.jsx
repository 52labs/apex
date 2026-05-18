// Apex -- Components UI kit (React wrappers around kit.css).
// Loaded via <script type="text/babel" src="components.jsx">.
// All components are thin wrappers: they apply the right class names
// and forward props/children. No state, no styling logic in JS.

// ---------- Button ----------
function AxButton({ tone = "ink", size = "md", block = false, as: As = "button", className = "", children, ...rest }) {
  const cls = [
    "ax-btn",
    tone === "accent" ? "ax-btn--accent" : "",
    tone === "ghost"  ? "ax-btn--ghost"  : "",
    size === "sm" ? "ax-btn--sm" : "",
    size === "lg" ? "ax-btn--lg" : "",
    block ? "ax-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");
  return <As className={cls} {...rest}>{children}</As>;
}

// ---------- Field (label + input + hint) ----------
function AxField({ label, hint, error, children }) {
  return (
    <label className="ax-field">
      {label && <span className="ax-label">{label}</span>}
      {children}
      {error ? <span className="ax-hint ax-hint--error">{error}</span> : hint ? <span className="ax-hint">{hint}</span> : null}
    </label>
  );
}
function AxInput({ invalid = false, className = "", ...rest }) {
  return <input className={`ax-input ${className}`} aria-invalid={invalid || undefined} {...rest} />;
}
function AxTextarea({ invalid = false, className = "", ...rest }) {
  return <textarea className={`ax-textarea ${className}`} aria-invalid={invalid || undefined} {...rest} />;
}
function AxCheckbox({ checked, onChange, label }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: "var(--t-sm)", color: "var(--ink)", cursor: "pointer" }}>
      <input type="checkbox" className="ax-check" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

// ---------- Badge ----------
function AxBadge({ tone = "default", children, className = "" }) {
  const tones = { default: "", ink: "ax-badge--ink", accent: "ax-badge--accent", ok: "ax-badge--ok", warn: "ax-badge--warn", error: "ax-badge--error", info: "ax-badge--info" };
  return <span className={`ax-badge ${tones[tone] || ""} ${className}`}>{children}</span>;
}

// ---------- Status ----------
function AxStatus({ tone = "neutral", children }) {
  return (
    <span className="ax-status" data-tone={tone}>
      <span className="ax-status__dot" />
      <span>{children}</span>
    </span>
  );
}
function AxStatusBlock({ tone = "info", title, children }) {
  return (
    <div className="ax-status ax-status--block" data-tone={tone} role={tone === "error" ? "alert" : "status"}>
      <span className="ax-status__dot" />
      <span className="ax-status__body">
        {title && <span className="ax-status__title">{title}</span>}
        <span className="ax-status__msg">{children}</span>
      </span>
    </div>
  );
}

// ---------- Card ----------
function AxCard({ variant = "default", head, title, foot, children, className = "" }) {
  const v = variant === "sunk" ? "ax-card--sunk" : variant === "inverse" ? "ax-card--inverse" : "";
  return (
    <div className={`ax-card ${v} ${className}`}>
      {head && <div className="ax-card__head">{head}</div>}
      {title && <div className="ax-card__title">{title}</div>}
      {children && <div className="ax-card__body">{children}</div>}
      {foot && <div className="ax-card__foot">{foot}</div>}
    </div>
  );
}

// ---------- Modal ----------
function AxModal({ open, onClose, eyebrow, title, children, footer }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  return <>
    <div className="ax-scrim" data-open={open || undefined} onClick={onClose} />
    <div className="ax-modal" data-open={open || undefined} role="dialog" aria-modal="true">
      <div className="ax-modal__head">
        <div className="ax-modal__head-left">
          {eyebrow && <span className="ax-modal__eyebrow">{eyebrow}</span>}
          {title && <span className="ax-modal__title">{title}</span>}
        </div>
        <button className="ax-modal__close" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="ax-modal__body">{children}</div>
      {footer && <div className="ax-modal__foot">{footer}</div>}
    </div>
  </>;
}

// ---------- Popover ----------
// Caller positions it (style={{ top, left }}) — primitive only.
function AxPopover({ open, title, children, style }) {
  return (
    <div className="ax-popover" data-open={open || undefined} style={style} role="dialog">
      <div className="ax-popover__arrow" />
      {title && <div className="ax-popover__head">{title}</div>}
      <div className="ax-popover__body">{children}</div>
    </div>
  );
}

// ---------- Drawer ----------
function AxDrawer({ open, onClose, side = "right", title, children, footer }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  return <>
    <div className="ax-scrim" data-open={open || undefined} onClick={onClose} />
    <aside className={`ax-drawer ${side === "left" ? "ax-drawer--left" : ""}`} data-open={open || undefined} role="dialog" aria-modal="true">
      <div className="ax-drawer__head">
        <span className="ax-drawer__title">{title}</span>
        <button className="ax-drawer__close" onClick={onClose} aria-label="Close">×</button>
      </div>
      <div className="ax-drawer__body">{children}</div>
      {footer && <div className="ax-drawer__foot">{footer}</div>}
    </aside>
  </>;
}

// ---------- State patterns ----------
function AxEmptyState({ eyebrow = "NO RECORDS", title, message, actions }) {
  return (
    <div className="ax-state">
      <span className="ax-state__eyebrow"><span className="ax-status__dot" style={{ background: "var(--ink-ghost)" }} />{eyebrow}</span>
      {title && <h3 className="ax-state__title">{title}</h3>}
      {message && <p className="ax-state__msg">{message}</p>}
      {actions && <div className="ax-state__actions">{actions}</div>}
    </div>
  );
}
function AxLoadingState({ eyebrow = "PROCESSING", title, lines = ["Connecting to secure node.", "Streaming records.", "Indexing for retrieval."], actions }) {
  return (
    <div className="ax-state ax-state--loading">
      <span className="ax-state__eyebrow"><span className="ax-status__dot" style={{ background: "var(--orange)" }} />{eyebrow}</span>
      {title && <h3 className="ax-state__title">{title}</h3>}
      <div className="ax-state__log">
        {lines.map((l, i) => <span key={i} className="ax-state__log-line">▪ {l}</span>)}
      </div>
      <div className="ax-progress" style={{ width: "100%" }} />
      {actions && <div className="ax-state__actions">{actions}</div>}
    </div>
  );
}
function AxErrorState({ eyebrow = "FAULT DETECTED", code, title, message, actions }) {
  return (
    <div className="ax-state">
      <span className="ax-state__eyebrow"><span className="ax-status__dot" style={{ background: "var(--status-error)" }} />{eyebrow}{code ? ` · ${code}` : ""}</span>
      {title && <h3 className="ax-state__title">{title}</h3>}
      {message && <p className="ax-state__msg">{message}</p>}
      {actions && <div className="ax-state__actions">{actions}</div>}
    </div>
  );
}

// Export to window for cross-script use.
Object.assign(window, {
  AxButton, AxField, AxInput, AxTextarea, AxCheckbox,
  AxBadge, AxStatus, AxStatusBlock, AxCard,
  AxModal, AxPopover, AxDrawer,
  AxEmptyState, AxLoadingState, AxErrorState,
});
