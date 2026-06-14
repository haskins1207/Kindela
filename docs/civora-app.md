# Civora — Application Prototype (Source Code)

> *Civora — the operating system for mission-driven nonprofits. Every donation, grant, and good — connected and visible.*

This file contains the full React source for the Civora dashboard prototype, presented as a documented Markdown file for reading and sharing.

**Note:** This is working React/JSX code. To run it (rather than read it), copy the code block below into a `.jsx` file in a React project, or into a React-capable artifact/sandbox. Pasted into a plain Markdown viewer it will display as code, not run.

## Overview

The prototype demonstrates the Civora design system in a functional dashboard with seven modules:

- **Dashboard** — greeting, live count-up stat cards, the Donation-to-Destination Tracer, and an attention panel.
- **Donors** — gifts (cash and in-kind) with tax-acknowledgment status.
- **Grants** — inbound and outbound pipeline with status, due dates, and owners.
- **Inventory** — donated-goods routing to the resale floor or partner nonprofits.
- **Accounting** — restricted vs. unrestricted fund accounting with reconciliation status.
- **Volunteers** — roles and logged hours.
- **Public Trust** — the public-facing transparency report with traceable donation flow.

It uses the Civora palette (deep indigo to beacon amber), Inter for UI and Space Grotesk for headlines, animated connection beams, count-up numbers, responsive mobile navigation, keyboard focus states, and respects `prefers-reduced-motion`.

## Source

```jsx
import React, { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
// CIVORA — The operating system for mission-driven nonprofits
// Every donation, grant, and good — connected and visible.
// Brand: civic gradient (deep indigo → beacon amber), Inter + Space Grotesk
// ─────────────────────────────────────────────────────────────

const C = {
  midnight: "#141B4D",
  harbor: "#243A8E",
  teal: "#2A9D8F",
  seafoam: "#4FB59A",
  amber: "#F2B14C",
  gold: "#F2B14C",
  text: "#10162E",
  gray: "#586079",
  light: "#F3F5FA",
  success: "#2E9E5B",
  warning: "#E8A317",
  error: "#D64545",
  info: "#2D7DD2",
};

const GRADIENT =
  "linear-gradient(135deg, #141B4D 0%, #243A8E 24%, #1E6FB0 46%, #2A9D8F 64%, #4FB59A 80%, #F2B14C 100%)";

// Count-up hook (respects reduced motion)
function useCountUp(target, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setVal(target); return; }
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

const fmtMoney = (n) =>
  "$" + Math.round(n).toLocaleString("en-US");

// ── Module data ────────────────────────────────────────────────
const MODULES = [
  { id: "dashboard", label: "Dashboard", icon: "▦" },
  { id: "donors", label: "Donors", icon: "♡" },
  { id: "grants", label: "Grants", icon: "⌖" },
  { id: "inventory", label: "Inventory", icon: "▣" },
  { id: "accounting", label: "Accounting", icon: "$" },
  { id: "volunteers", label: "Volunteers", icon: "⚑" },
  { id: "transparency", label: "Public Trust", icon: "◉" },
];

const grants = [
  { name: "Children's Resilience Fund", type: "Inbound", amount: 75000, status: "Submitted", due: "Jun 28", owner: "Kari W." },
  { name: "Sunrise Family Services (out)", type: "Outbound", amount: 18000, status: "Approved", due: "—", owner: "Amy M." },
  { name: "State Youth Crisis Block", type: "Inbound", amount: 120000, status: "Draft", due: "Jul 15", owner: "Kari W." },
  { name: "Partner: Haven House (out)", type: "Outbound", amount: 9500, status: "Disbursed", due: "—", owner: "Ashley G." },
];

const inventory = [
  { item: "Children's winter coats", qty: 142, dest: "Resale floor", value: 2130 },
  { item: "Toddler sneakers (pairs)", qty: 88, dest: "Partner: Haven House", value: 1320 },
  { item: "Plush toys", qty: 210, dest: "Resale floor", value: 1050 },
  { item: "School supply kits", qty: 64, dest: "Partner: Sunrise Family", value: 1920 },
];

const statusColor = (s) => ({
  Submitted: C.info, Approved: C.success, Draft: C.warning,
  Disbursed: C.teal, "Resale floor": C.amber,
}[s] || C.gray);

// ── Reusable bits ──────────────────────────────────────────────
function StatCard({ label, value, prefix = "", sub, accent }) {
  const v = useCountUp(value);
  return (
    <div style={{
      background: "#fff", borderRadius: 16, padding: "20px 22px",
      border: "1px solid #E4EAF0", boxShadow: "0 1px 2px rgba(11,42,74,0.04)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: accent }} />
      <div style={{ fontSize: 12, color: C.gray, fontWeight: 600, letterSpacing: 0.3, textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: 700, color: C.text, marginTop: 6, fontVariantNumeric: "tabular-nums" }}>
        {prefix}{Math.round(v).toLocaleString("en-US")}
      </div>
      {sub && <div style={{ fontSize: 12.5, color: C.success, marginTop: 4, fontWeight: 600 }}>{sub}</div>}
    </div>
  );
}

function Pill({ children, color }) {
  return (
    <span style={{
      fontSize: 11.5, fontWeight: 600, color, background: color + "1A",
      padding: "3px 10px", borderRadius: 999, whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

// ── Donation-to-Destination Tracer (signature component) ───────
function Tracer() {
  const [active, setActive] = useState(0);
  const flows = [
    { good: "142 winter coats", path: "Resale floor", result: "$2,130 unrestricted revenue", color: C.amber },
    { good: "88 sneakers", path: "Haven House", result: "Routed to children in crisis", color: C.teal },
    { good: "64 supply kits", path: "Sunrise Family", result: "Routed to partner nonprofit", color: C.harbor },
  ];
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % flows.length), 2600);
    return () => clearInterval(t);
  }, []);
  const f = flows[active];
  return (
    <div style={{
      background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E4EAF0",
    }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>
        Donation-to-Destination Tracer
      </div>
      <div style={{ fontSize: 12.5, color: C.gray, marginBottom: 20 }}>
        Every donated good, traced from the loading dock to its destination.
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Node label="Intake" sub={f.good} color={C.midnight} />
        <Beam color={f.color} />
        <Node label="Destination" sub={f.path} color={f.color} />
        <Beam color={f.color} />
        <Node label="Verified" sub={f.result} color={C.success} />
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 18, justifyContent: "center" }}>
        {flows.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={`Flow ${i + 1}`}
            style={{
              width: i === active ? 22 : 8, height: 8, borderRadius: 999, border: "none",
              background: i === active ? f.color : "#D5DEE6", cursor: "pointer",
              transition: "all .3s ease",
            }} />
        ))}
      </div>
    </div>
  );
}
function Node({ label, sub, color }) {
  return (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: color + "18",
        border: `2px solid ${color}`, margin: "0 auto 8px", display: "flex",
        alignItems: "center", justifyContent: "center", color, fontWeight: 700, fontSize: 18,
      }}>●</div>
      <div style={{ fontSize: 11, fontWeight: 700, color: C.text, textTransform: "uppercase", letterSpacing: 0.3 }}>{label}</div>
      <div style={{ fontSize: 12, color: C.gray, marginTop: 2, minHeight: 30 }}>{sub}</div>
    </div>
  );
}
function Beam({ color }) {
  return (
    <div style={{ flex: 0.7, height: 2, background: "#E4EAF0", position: "relative", borderRadius: 2, overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, background: color,
        animation: "beam 2.6s linear infinite", transformOrigin: "left",
      }} />
    </div>
  );
}

// ── Module views ───────────────────────────────────────────────
function Dashboard() {
  return (
    <>
      <SectionTitle>Good evening, Kari</SectionTitle>
      <p style={{ color: C.gray, fontSize: 14.5, margin: "0 0 22px" }}>
        The books are clean. Here's where everything stands tonight.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 18 }}>
        <StatCard label="Resale revenue (YTD)" value={284500} prefix="$" sub="▲ 12% vs last year" accent={C.amber} />
        <StatCard label="Grants secured" value={213000} prefix="$" sub="3 active in pipeline" accent={C.teal} />
        <StatCard label="Goods distributed" value={504} sub="to 2 partner orgs" accent={C.harbor} />
        <StatCard label="Active volunteers" value={37} sub="412 hours this month" accent={C.gold} />
      </div>
      <div className="civora-grid-2" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }}>
        <Tracer />
        <div style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E4EAF0" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 16 }}>Needs your attention</div>
          {[
            { t: "State Youth Crisis Block grant", d: "Due Jul 15 — draft started", c: C.warning },
            { t: "12 donated items awaiting routing", d: "Resale or partner?", c: C.info },
            { t: "May reconciliation balanced", d: "QuickBooks ↔ POS matched", c: C.success },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: i ? "1px solid #EEF2F6" : "none" }}>
              <div style={{ width: 8, height: 8, borderRadius: 999, background: a.c, marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: C.text }}>{a.t}</div>
                <div style={{ fontSize: 12.5, color: C.gray }}>{a.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Grants() {
  return (
    <>
      <SectionTitle>Grants</SectionTitle>
      <p style={{ color: C.gray, fontSize: 14.5, margin: "0 0 22px" }}>
        Inbound and outbound, in one calm pipeline. No deadline lunges at you from a calendar you forgot to check.
      </p>
      <Table
        cols={["Grant", "Direction", "Amount", "Status", "Due", "Owner"]}
        rows={grants.map((g) => [
          g.name,
          <Pill color={g.type === "Inbound" ? C.harbor : C.teal}>{g.type}</Pill>,
          fmtMoney(g.amount),
          <Pill color={statusColor(g.status)}>{g.status}</Pill>,
          g.due, g.owner,
        ])}
      />
    </>
  );
}

function Inventory() {
  return (
    <>
      <SectionTitle>Donated-goods inventory</SectionTitle>
      <p style={{ color: C.gray, fontSize: 14.5, margin: "0 0 22px" }}>
        Two rivers running out of the same donation — sold to fund the mission, or given to children in crisis. Both accounted for.
      </p>
      <Table
        cols={["Item", "Quantity", "Destination", "Est. value"]}
        rows={inventory.map((it) => [
          it.item, it.qty,
          <Pill color={it.dest.includes("Resale") ? C.amber : C.teal}>{it.dest}</Pill>,
          fmtMoney(it.value),
        ])}
      />
    </>
  );
}

function Donors() {
  const donors = [
    { n: "Margaret Ellison", g: "$5,000", k: "In-kind + cash", l: "Acknowledged" },
    { n: "Treasure Coast Rotary", g: "$12,500", k: "Grant", l: "Acknowledged" },
    { n: "Anonymous (coats)", g: "142 items", k: "In-kind", l: "Receipt sent" },
    { n: "James & Co. Realty", g: "$2,000", k: "Cash", l: "Pending letter" },
  ];
  return (
    <>
      <SectionTitle>Donors</SectionTitle>
      <p style={{ color: C.gray, fontSize: 14.5, margin: "0 0 22px" }}>
        Every gift — cash or in-kind — tracked, acknowledged, and Form 990–ready.
      </p>
      <Table
        cols={["Donor", "Gift", "Type", "Tax acknowledgment"]}
        rows={donors.map((d) => [
          d.n, d.g, d.k,
          <Pill color={d.l === "Pending letter" ? C.warning : C.success}>{d.l}</Pill>,
        ])}
      />
    </>
  );
}

function Accounting() {
  return (
    <>
      <SectionTitle>Fund accounting</SectionTitle>
      <p style={{ color: C.gray, fontSize: 14.5, margin: "0 0 22px" }}>
        Restricted vs. unrestricted, one click from a board deck or a 990.
      </p>
      <div className="civora-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <StatCard label="Unrestricted funds" value={186200} prefix="$" sub="Resale + unrestricted gifts" accent={C.amber} />
        <StatCard label="Restricted funds" value={97300} prefix="$" sub="Grant-designated" accent={C.harbor} />
      </div>
      <div style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E4EAF0", display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: C.success + "1A", color: C.success, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>✓</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>May reconciliation balanced</div>
          <div style={{ fontSize: 12.5, color: C.gray }}>POS, bank, and ledger all match. Your hands aren't shaking.</div>
        </div>
      </div>
    </>
  );
}

function Volunteers() {
  const vols = [
    { n: "Diane R.", r: "Store floor", h: 42 },
    { n: "Tracie M.", r: "Intake & sorting", h: 38 },
    { n: "Isabel R.", r: "Donor relations", h: 27 },
    { n: "Marcus T.", r: "Deliveries to partners", h: 31 },
  ];
  return (
    <>
      <SectionTitle>Volunteers</SectionTitle>
      <p style={{ color: C.gray, fontSize: 14.5, margin: "0 0 22px" }}>
        Schedules, hours, and roles — no more sticky notes or sign-up sheets.
      </p>
      <Table cols={["Volunteer", "Role", "Hours (month)"]} rows={vols.map((v) => [v.n, v.r, v.h])} />
    </>
  );
}

// ── Public transparency view (signature page) ──────────────────
function Transparency() {
  const rev = useCountUp(284500);
  const granted = useCountUp(27500);
  const goods = useCountUp(504);
  return (
    <>
      <div style={{
        background: GRADIENT, borderRadius: 20, padding: "40px 32px", color: "#fff",
        marginBottom: 22, position: "relative", overflow: "hidden",
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", opacity: 0.85 }}>
          The Children's Collective · Public Trust Report
        </div>
        <h2 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 34, fontWeight: 400,
          margin: "10px 0 8px", lineHeight: 1.1, maxWidth: 540,
        }}>
          Everything connected. Anyone can verify it.
        </h2>
        <p style={{ fontSize: 14.5, opacity: 0.92, maxWidth: 520, margin: 0 }}>
          Live, verifiable proof of where your generosity goes — every dollar, every donated coat, every child reached.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px,1fr))", gap: 16, marginBottom: 22 }}>
        <PublicStat label="Revenue raised for the mission" value={fmtMoney(rev)} note="From our resale store, YTD" />
        <PublicStat label="Granted to on-the-ground partners" value={fmtMoney(granted)} note="Outbound to Haven House & Sunrise" />
        <PublicStat label="Goods placed with children" value={Math.round(goods).toLocaleString()} note="Coats, shoes, supplies, toys" />
      </div>
      <div style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E4EAF0" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 6 }}>Where a recent donation went</div>
        <div style={{ fontSize: 12.5, color: C.gray, marginBottom: 18 }}>
          A donated plush rabbit with one ear, traced end to end.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Node label="Donated" sub="Anonymous, May 3" color={C.midnight} />
          <Beam color={C.teal} />
          <Node label="Routed" sub="Haven House" color={C.teal} />
          <Beam color={C.success} />
          <Node label="Delivered" sub="To a child, May 19" color={C.success} />
        </div>
      </div>
    </>
  );
}
function PublicStat({ label, value, note }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "22px 22px", border: "1px solid #E4EAF0", textAlign: "center" }}>
      <div style={{ fontSize: 32, fontWeight: 700, color: C.text, fontVariantNumeric: "tabular-nums" }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginTop: 6 }}>{label}</div>
      <div style={{ fontSize: 12, color: C.gray, marginTop: 4 }}>{note}</div>
    </div>
  );
}

// ── Shared layout helpers ──────────────────────────────────────
function SectionTitle({ children }) {
  return (
    <h1 style={{
      fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 30, fontWeight: 400,
      color: C.text, margin: "0 0 4px", lineHeight: 1.1,
    }}>{children}</h1>
  );
}
function Table({ cols, rows }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E4EAF0", overflow: "hidden" }}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
          <thead>
            <tr>{cols.map((c) => (
              <th key={c} style={{
                textAlign: "left", padding: "14px 18px", fontSize: 11.5, fontWeight: 700,
                color: C.gray, textTransform: "uppercase", letterSpacing: 0.4,
                background: C.light, borderBottom: "1px solid #E4EAF0",
              }}>{c}</th>
            ))}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid #EEF2F6" : "none" }}>
                {r.map((cell, j) => (
                  <td key={j} style={{ padding: "14px 18px", fontSize: 13.5, color: C.text, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── App shell ──────────────────────────────────────────────────
export default function CivoraApp() {
  const [active, setActive] = useState("dashboard");
  const [navOpen, setNavOpen] = useState(false);

  const views = {
    dashboard: <Dashboard />, donors: <Donors />, grants: <Grants />,
    inventory: <Inventory />, accounting: <Accounting />,
    volunteers: <Volunteers />, transparency: <Transparency />,
  };

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif", background: C.light,
      minHeight: "100vh", color: C.text, display: "flex",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        @keyframes beam { 0% { transform: scaleX(0);} 50%{transform:scaleX(1);} 100%{transform:scaleX(0); transform-origin:right;} }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
        .civora-nav-btn:hover { background: rgba(255,255,255,0.08) !important; }
        .civora-nav-btn:focus-visible { outline: 2px solid ${C.gold}; outline-offset: 2px; }
        @media (max-width: 860px) {
          .civora-side { position: fixed; z-index: 50; height: 100%; transform: translateX(-100%); transition: transform .25s ease; }
          .civora-side.open { transform: translateX(0); }
          .civora-burger { display: flex !important; }
          .civora-main { padding: 76px 18px 40px !important; }
          .civora-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Sidebar */}
      <aside className={`civora-side ${navOpen ? "open" : ""}`} style={{
        width: 230, background: C.midnight, color: "#fff", padding: "26px 16px",
        flexShrink: 0, display: "flex", flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 8px 24px" }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: GRADIENT }} />
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, lineHeight: 1, fontWeight: 700 }}>Civora</div>
            <div style={{ fontSize: 10, opacity: 0.6, letterSpacing: 1, textTransform: "uppercase" }}>Connected &amp; visible</div>
          </div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {MODULES.map((m) => {
            const on = active === m.id;
            return (
              <button key={m.id} className="civora-nav-btn"
                onClick={() => { setActive(m.id); setNavOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "11px 12px",
                  border: "none", borderRadius: 10, cursor: "pointer", textAlign: "left",
                  background: on ? "rgba(246,196,83,0.16)" : "transparent",
                  color: on ? C.gold : "rgba(255,255,255,0.82)",
                  fontSize: 14, fontWeight: on ? 600 : 500, fontFamily: "inherit",
                  position: "relative", transition: "background .15s",
                }}>
                {on && <span style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 3, background: C.gold, borderRadius: 3 }} />}
                <span style={{ width: 18, textAlign: "center", fontSize: 15 }}>{m.icon}</span>
                {m.label}
              </button>
            );
          })}
        </nav>
        <div style={{ marginTop: "auto", padding: "16px 10px 0", fontSize: 11.5, opacity: 0.55, lineHeight: 1.5 }}>
          The Children's Collective<br />of Florida
        </div>
      </aside>

      {/* Burger (mobile) */}
      <button className="civora-burger" onClick={() => setNavOpen((o) => !o)} aria-label="Toggle navigation"
        style={{
          display: "none", position: "fixed", top: 16, left: 16, zIndex: 60,
          width: 44, height: 44, borderRadius: 10, border: "none", background: C.midnight,
          color: "#fff", fontSize: 20, cursor: "pointer", alignItems: "center", justifyContent: "center",
        }}>≡</button>

      {/* Main */}
      <main className="civora-main" style={{ flex: 1, padding: "34px 40px 56px", maxWidth: 1080 }}>
        {views[active]}
      </main>
    </div>
  );
}

```
