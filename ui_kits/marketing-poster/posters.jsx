// Three poster compositions, recreated from the source references.
// Each one is a pure function of the kit components above.

// ============================================================
// POSTER 1 — APEX LOGISTICS
// AI Operations Terminal. Mega split headline w/ orange bar
// slicing horizontally, vertical "NEW YORK CITY" running through,
// log block bottom-right, IDs in bottom-left.
// ============================================================
function PosterApexLogistics() {
  return (
    <PosterStage>
      {/* Top eyebrows */}
      <EyebrowChip style={{ position: "absolute", top: 24, left: 28 }}>EXPERIMENTAL SYSTEMS</EyebrowChip>
      <span style={{ position: "absolute", top: 30, left: "44%", fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.18em", color: "var(--fg-ghost)" }}>
        &gt;&gt;&gt;&gt;&gt;
      </span>
      <EyebrowChip style={{ position: "absolute", top: 24, right: 28 }}>AI ASSIST LAYER: ACTIVE</EyebrowChip>

      {/* Left-side ID block */}
      <div style={{ position: "absolute", top: 80, left: 28, fontFamily: "var(--font-mono)", color: "var(--fg-ghost)" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.08em" }}>SUPPLY-CHAIN-482</div>
        <div style={{ marginTop: 8, fontSize: 18, color: "var(--ink)", letterSpacing: "0.06em" }}>AI REPORTING</div>
        <div style={{ marginTop: 4, color: "var(--ink)" }}>_</div>
      </div>

      {/* Right-side mono header */}
      <div style={{ position: "absolute", top: 80, right: 28, width: 360, fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.55, letterSpacing: "0.05em", color: "var(--fg-ghost)" }}>
        <div>{"*".repeat(58)}</div>
        <div>*** APEX LOGISTICS // AI OPERATIONS TERMINAL ***</div>
        <div>*** REPORT ID: SUPPLY-CHAIN-482 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***</div>
        <div>*** STATUS: ACTIVE MONITORING &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***</div>
        <div>{"*".repeat(58)}</div>
      </div>

      {/* Mega split: APEX (left) and LOGISTICS (right) with vertical NEW YORK CITY between */}
      <div style={{ position: "absolute", top: "38%", left: 0, right: 0, transform: "translateY(-50%)" }}>
        <div style={{ position: "relative", height: 220, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", gap: 32 }}>
          {/* orange parallelogram bar slicing horizontally */}
          <div style={{
            position: "absolute",
            left: 28, right: 28,
            top: "50%", height: 56,
            transform: "translateY(-50%) skewX(-22deg)",
            background: "var(--orange)",
            mixBlendMode: "multiply",
            zIndex: 0,
          }} />
          {/* APEX */}
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 150, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--ink)",
            zIndex: 1, flexShrink: 0,
          }}>APEX</div>
          {/* vertical NEW YORK CITY block (centered in gap) */}
          <div style={{ position: "relative", zIndex: 2, flexShrink: 0, alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--ink)",
              writingMode: "vertical-rl", transform: "rotate(180deg)",
            }}>NEW YORK CITY</div>
          </div>
          {/* LOGISTICS */}
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 150, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--ink)",
            zIndex: 1, flexShrink: 0,
          }}>LOGISTICS</div>
        </div>
      </div>

      {/* Lower-left status line */}
      <div style={{ position: "absolute", bottom: 200, left: 28, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--ink)" }}>
        SAVING DATA TO SECURE NODE
      </div>
      <div style={{ position: "absolute", bottom: 200, right: 28, width: 360, fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--ink)" }}>
        Escalation: Dispatch AI ready for assist.
      </div>

      {/* Bottom-left IDs (ghost) */}
      <div style={{ position: "absolute", bottom: 26, left: 28, fontFamily: "var(--font-mono)", color: "var(--fg-ghost)", fontSize: 22, letterSpacing: "0.04em", lineHeight: 1.25 }}>
        <div>VEHICLE&nbsp;&nbsp;ID:&nbsp;AX-3897</div>
        <div>////////////</div>
        <div>ROUTE&nbsp;ID&nbsp;:&nbsp;EST-044</div>
      </div>

      {/* Bottom-right system insight */}
      <SystemLog
        style={{ position: "absolute", bottom: 26, right: 28, maxWidth: 420 }}
        entries={[
          { k: "Observation:", v: "Freight density spikes in western corridor." },
          { k: "Inference:", v: "Seasonal routing inefficiency detected." },
          { k: "Action:", v: "Deploy alternate route AI to assist dispatch ops." },
        ]}
        footer="Human validation required before network reroute."
      />
    </PosterStage>
  );
}

// ============================================================
// POSTER 2 — APEX LABS  (Text Labs–style)
// Two-stack mega headline left, "Center for AI Experiments" right,
// orange slogan chip + descriptor.
// ============================================================
function PosterApexLabs() {
  return (
    <PosterStage>
      {/* Top corner markers + eyebrow rows */}
      <CornerMarker corners={["tl"]} offset={20} />
      <span style={{ position: "absolute", top: 24, left: 56, fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.16em", color: "var(--ink)" }}>
        FUTURE OPERATIONS DEPARTMENT
      </span>
      <CornerMarker corners={["tl"]} offset={20} />
      <span className="corner-sq" style={{ position: "absolute", top: 24, left: "47%" }} />
      <span style={{ position: "absolute", top: 24, left: "calc(47% + 24px)", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.16em", color: "var(--ink)" }}>
        PROTOTYPE CLASS: GENERATIVE-01
      </span>
      <CornerMarker corners={["tr"]} offset={20} />

      {/* Left stacked headline */}
      <div style={{ position: "absolute", top: 100, left: 28 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 132, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--ink)" }}>
          Apex&nbsp;Labs
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 132, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--ink)" }}>
          New&nbsp;York&nbsp;City
        </div>
      </div>

      {/* Right secondary headline */}
      <div style={{ position: "absolute", top: 110, right: 28, textAlign: "right" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 18, justifyContent: "flex-end" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 64, lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--ink)" }}>/</span>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 64, lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--ink)", textAlign: "left" }}>
            Center&nbsp;for&nbsp;AI<br />Experiments
          </div>
        </div>
        <div style={{ marginTop: 60, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 14, fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.06em", color: "var(--ink)" }}>
          <span>U.S.A.</span>
          <span style={{
            width: 64, height: 26,
            background: "repeating-linear-gradient(to right, var(--paper-2) 0 3px, transparent 3px 5px)"
          }} />
          <span style={{ color: "var(--orange)", fontSize: 22 }}>✸</span>
        </div>
      </div>

      {/* Slogan + descriptor */}
      <div style={{ position: "absolute", bottom: 130, left: 28 }}>
        <EyebrowChip tone="accent" style={{ fontSize: 17, padding: "8px 14px" }}>
          BUILT TO OPTIMIZE HUMAN POTENTIAL
        </EyebrowChip>
        <div style={{ marginTop: 28, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.01em", color: "var(--ink)" }}>
          SYSTEM INDEX / LINGUISTIC RESEARCH DIV.
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 130, right: 28, display: "flex", alignItems: "flex-start", gap: 22 }}>
        <div style={{ width: 280, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.5, color: "var(--ink)" }}>
          Apex Laboratory operates at the intersection of computational linguistics and applied machine intelligence.
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, letterSpacing: "0.06em", color: "var(--ink)" }}>V.01</div>
      </div>

      {/* Bottom row */}
      <CornerMarker corners={["bl"]} offset={20} />
      <span style={{ position: "absolute", bottom: 24, left: 56, fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.16em", color: "var(--ink)" }}>
        //// AI-ENABLED INFRASTRUCTURE
      </span>
      <span className="corner-sq" style={{ position: "absolute", bottom: 24, left: "47%" }} />
      <span style={{ position: "absolute", bottom: 24, left: "calc(47% + 24px)", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.16em", color: "var(--ink)" }}>
        ARCHIVE REF: T-LAB-23421-U8-FWD
      </span>
      <CornerMarker corners={["br"]} offset={20} />
      <span style={{ position: "absolute", bottom: 240, right: 28, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--orange)", letterSpacing: "0.06em" }}>
        {"*".repeat(36)} &nbsp; <span style={{ color: "var(--ink)" }}>T-L</span>
      </span>
    </PosterStage>
  );
}

// ============================================================
// POSTER 3 — APEX ORBITAL  (Orbital Systems–style)
// Dot-matrix headline, vertical ghost type framing edges,
// corner brackets at four corners, data bars in background.
// ============================================================
function PosterApexOrbital() {
  return (
    <PosterStage>
      <CornerMarker kind="bracket" corners={["tl", "tr", "bl", "br"]} />

      {/* Top metadata row */}
      <div style={{ position: "absolute", top: 38, left: 0, right: 0, display: "flex", justifyContent: "space-around", fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.12em", color: "var(--ink)" }}>
        <span>SPACE TESTED</span>
        <span style={{ color: "var(--fg-ghost)" }}>/</span>
        <span>DEVELOPED FOR HIGH OUTPUT</span>
        <span style={{ color: "var(--fg-ghost)" }}>/</span>
        <span>ENERGY CAPTURE</span>
      </div>
      <div style={{ position: "absolute", top: 76, left: 0, right: 0, display: "flex", justifyContent: "space-around", fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.12em", color: "var(--ink)", alignItems: "center" }}>
        <span style={{ fontSize: 22 }}>:</span>
        <span>CONTINUOUS</span>
        <span style={{ fontSize: 22 }}>:</span>
        <span>DELIVERED</span>
        <span style={{ fontSize: 22 }}>:</span>
      </div>

      {/* Vertical edge ghost type */}
      <span className="vert ghost" style={{ position: "absolute", top: 100, left: 20, height: 240 }}>UNITED STATES OF AMERICA</span>
      <span className="vert ghost" style={{ position: "absolute", top: 100, right: 20, height: 240 }}>NATIONAL INFRASTRUCTURE</span>

      {/* Dot-matrix headline stack */}
      <div style={{ position: "absolute", top: 150, left: 60, right: 60, zIndex: 2 }}>
        <DotMatrixHeadline accent style={{ fontSize: 90 }}>APEX ORBITAL</DotMatrixHeadline>
        <DotMatrixHeadline style={{ fontSize: 78, marginTop: 8 }}>POWER --- U.S.A</DotMatrixHeadline>
        <DotMatrixHeadline style={{ fontSize: 78, marginTop: 4 }}>(OSP-01) &copy; 2026</DotMatrixHeadline>
      </div>

      {/* Background data bars */}
      <div className="databars" />

      {/* Bottom orange labels */}
      <div style={{ position: "absolute", bottom: 38, left: 0, right: 0, display: "flex", justifyContent: "space-around", fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.12em", color: "var(--orange)" }}>
        <span>THE GRID NEVER SLEEPS</span>
        <span>CLOSED LOOP ENERGY REGULATION</span>
        <span>AUTONOMOUS OPERATIONS</span>
      </div>
    </PosterStage>
  );
}

Object.assign(window, { PosterApexLogistics, PosterApexLabs, PosterApexOrbital });
