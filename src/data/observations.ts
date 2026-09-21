export type Observation = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  status: "published" | "placeholder";
  observed: string;
  whyInteresting: string;
  dataShowed: string;
  afterward: string;
  learned: string;
  tags: string[];
  disclaimer?: string;
};

export const observations: Observation[] = [
  {
    slug: "double-bottom-small-bottom-breakout",
    title: "Double Bottom → Small Bottom → Breakout",
    excerpt: "A micro-cap consolidation study — price action + volume + delivery. What was visible vs. what followed.",
    cover: "/observe/placeholders/obs-1.jpg",
    status: "published",
    observed: "Price formed double bottom base, then shallow pullback with contracting volume; delivery % rising on up days — base quality over prediction.",
    whyInteresting: "Constructive base; moving averages aligning; volume expansion on attempt distinguishes real breakout from noise.",
    dataShowed: "Breakout volume >20-day avg; delivery participation up; HRoC 570 conditions checked (anticipated_HRoC_570.afl / audit_HRoC_570.afl).",
    afterward: "Breakout + measured follow-through in some names; others failed — selection & risk define outcome, not pattern alone.",
    learned: "Wait for confirmation, define risk, avoid hindsight bias. Base quality > prediction — and log it before it happens.",
    tags: ["Price action", "Volume", "Breakout", "Micro-cap", "HRoC 570"],
  },
  {
    slug: "fno-crash-q60-m40",
    title: "FnO Crash Screen — Q60/M40 & F&O 300%/5% Study",
    excerpt: "Quantitative Backtesting Platform output — crash filter + F&O option-price spike screener. Observation, not a call.",
    cover: "/observe/placeholders/obs-2.jpg",
    status: "published",
    observed: "Screener flagged stress: F&O option high ≥300% vs prev + spot move ≥5%, then 20/60/252-day breakout check. Separately, AFL Q60/M40 crash quarters re-tested (Crash_Q60_M40_200S70_Explore_5_70_2.afl).",
    whyInteresting: "Systematic flag vs discretionary narrative — joins F&O bhav (fo*.zip→op*.csv) with NSE Bhavcopy; market-cap via FullName() handles SM/BE/RE quirks.",
    dataShowed: "Hits in fno_300pct_spot5pct_2024plus.csv with CE/PE, strike, expiry, breakout tags (20D/60D/252D). Crash AFL screens Q60/M40 under stress windows.",
    afterward: "Some flagged names recovered quickly, others did not — survivorship bias evident; walk-forward needed before any timing claim.",
    learned: "Screen = awareness, not timing. Position sizing & risk dominate. Next: PnL/drawdown engine + tear-sheet PDF per hit.",
    tags: ["Quant", "Screener", "F&O 300/5", "Crash Q60/M40", "Backtesting"],
  },
  {
    slug: "harmonic-fractal-xabc",
    title: "Harmonic / Fractal — XABC Structure (6-Loop Engine)",
    excerpt: "Harmonic Fractal XABC — 5-stage nested pattern → boom scan. Education, not forecast.",
    cover: "/observe/placeholders/obs-3.jpg",
    status: "published",
    observed: "X→A -3% (window low) →B +2% below X high →X2 below X→A2 -4% red →B2 25-85% retrace →C2 double-bottom → boom +5% in 1-5 days with volume spike.",
    whyInteresting: "Confluence of fib + structure near prior swing; 6 nested loops scan 2026-01-01→09-11 across 500-day preload.",
    dataShowed: "Hits in harmonic_fractal_XABC_YTD2026.csv: X/A/B/X2/A2/B2/C2 dates, falls/retrace/boom_gain%, pole%, greens_in5, vol_spike — e.g. boom_gain% +5-18% in walk.",
    afterward: "Pattern completed in some cases, failed in others — no guarantee; volume spike + pole% differentiate follow-through.",
    learned: "Patterns are hypotheses. Reaction > prediction. Package as walk-forward report + mplfinance tear-sheet, not just Excel.",
    tags: ["Harmonics", "Fractal XABC", "Quant", "Backtesting", "Education"],
  },
];
