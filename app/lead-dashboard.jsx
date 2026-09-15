"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  LuCalendarDays,
  LuChartColumn,
  LuChevronDown,
  LuMegaphone,
  LuTrophy,
  LuUser,
} from "react-icons/lu";

const RANGE_OPTIONS = [
  { id: "all", label: "All" },
  { id: "week", label: "This week" },
  { id: "month", label: "This month" },
  { id: "quarter", label: "This quarter" },
];

const PERIOD_OPTIONS = [
  { id: "mtd", label: "Month to Date (MTD)" },
  { id: "qtd", label: "Quarter to Date (QTD)" },
  { id: "ytd", label: "Year to Date (YTD)" },
  { id: "last", label: "Last month" },
];

const STAGE_META = [
  { id: "new", name: "New", color: "#c4b5fd" },
  { id: "contact", name: "Contact Made", color: "#fde68a" },
  { id: "demo", name: "Demo Scheduled", color: "#fef08a" },
  { id: "nego", name: "Negotiations Started", color: "#93c5fd" },
  { id: "won", name: "Won", color: "#99f6e4" },
  { id: "lost", name: "Lost", color: "#fda4af" },
];

const DASH = {
  all: {
    stats: {
      deals: { value: 412, change: "24.5%", up: true },
      created: { value: 128, change: "18.2%", up: true },
      contacts: { value: 186, change: "31.2%", up: true },
      won: { value: 64, change: "12.4%", up: true },
      lost: { value: 11, change: "3.8%", up: false },
    },
    stages: { new: 148, contact: 72, demo: 54, nego: 38, won: 64, lost: 11 },
    trend: {
      labels: ["20 Jun", "04 Jul", "18 Jul", "01 Aug", "15 Aug", "29 Aug", "12 Sep"],
      points: [42, 58, 51, 73, 66, 88, 81],
    },
  },
  week: {
    stats: {
      deals: { value: 28, change: "8.1%", up: true },
      created: { value: 9, change: "12.5%", up: true },
      contacts: { value: 14, change: "16.0%", up: true },
      won: { value: 4, change: "33.3%", up: true },
      lost: { value: 1, change: "0%", up: false },
    },
    stages: { new: 11, contact: 6, demo: 4, nego: 2, won: 4, lost: 1 },
    trend: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      points: [3, 5, 4, 7, 6, 2, 1],
    },
  },
  month: {
    stats: {
      deals: { value: 86, change: "14.8%", up: true },
      created: { value: 32, change: "9.4%", up: true },
      contacts: { value: 41, change: "21.6%", up: true },
      won: { value: 11, change: "10.0%", up: true },
      lost: { value: 3, change: "5.2%", up: false },
    },
    stages: { new: 28, contact: 18, demo: 14, nego: 12, won: 11, lost: 3 },
    trend: {
      labels: ["1 Sep", "5 Sep", "9 Sep", "12 Sep", "15 Sep"],
      points: [12, 18, 15, 22, 19],
    },
  },
  quarter: {
    stats: {
      deals: { value: 214, change: "19.6%", up: true },
      created: { value: 71, change: "15.3%", up: true },
      contacts: { value: 98, change: "27.1%", up: true },
      won: { value: 29, change: "11.5%", up: true },
      lost: { value: 7, change: "2.1%", up: false },
    },
    stages: { new: 68, contact: 41, demo: 32, nego: 24, won: 29, lost: 7 },
    trend: {
      labels: ["Jul", "Aug", "Sep"],
      points: [62, 74, 78],
    },
  },
};

const REPORTS = {
  mtd: {
    heading: "September, 2026",
    rows: [
      {
        name: "James Carter",
        leads: 28,
        won: 9,
        lost: 2,
        role: "Sales owner · London",
        deals: [
          { title: "Northstar Realty", stage: "Demo Scheduled", date: "14 Sep" },
          { title: "Brightline Interiors", stage: "New", date: "12 Sep" },
          { title: "Harbor Clinics", stage: "Won", date: "08 Sep" },
        ],
      },
      {
        name: "Emily Brooks",
        leads: 22,
        won: 7,
        lost: 1,
        role: "Sales owner · New York",
        deals: [
          { title: "Apex Software", stage: "Negotiations Started", date: "15 Sep" },
          { title: "Greenfield Farms", stage: "Won", date: "06 Sep" },
        ],
      },
      {
        name: "Michael Reed",
        leads: 19,
        won: 6,
        lost: 2,
        role: "Sales owner · Austin",
        deals: [
          { title: "Summit Builders", stage: "Contact Made", date: "13 Sep" },
          { title: "Oakridge Finance", stage: "Won", date: "03 Sep" },
        ],
      },
      {
        name: "Sarah Collins",
        leads: 17,
        won: 5,
        lost: 1,
        role: "Sales owner · Manchester",
        deals: [
          { title: "Silverline Media", stage: "New", date: "15 Sep" },
          { title: "Harbor Clinics", stage: "Lost", date: "02 Sep" },
        ],
      },
    ],
  },
  qtd: {
    heading: "Jul – Sep 2026",
    rows: [
      {
        name: "James Carter",
        leads: 74,
        won: 21,
        lost: 5,
        role: "Sales owner · London",
        deals: [
          { title: "Northstar Realty", stage: "Won", date: "18 Aug" },
          { title: "Blue Harbor Co.", stage: "Negotiations Started", date: "09 Sep" },
        ],
      },
      {
        name: "Emily Brooks",
        leads: 61,
        won: 18,
        lost: 4,
        role: "Sales owner · New York",
        deals: [
          { title: "Apex Software", stage: "Won", date: "22 Jul" },
          { title: "Brightline Interiors", stage: "Demo Scheduled", date: "11 Sep" },
        ],
      },
      {
        name: "Michael Reed",
        leads: 54,
        won: 15,
        lost: 4,
        role: "Sales owner · Austin",
        deals: [
          { title: "Summit Builders", stage: "Won", date: "04 Aug" },
        ],
      },
      {
        name: "Sarah Collins",
        leads: 48,
        won: 12,
        lost: 3,
        role: "Sales owner · Manchester",
        deals: [
          { title: "Silverline Media", stage: "Contact Made", date: "15 Sep" },
        ],
      },
      {
        name: "Daniel Hayes",
        leads: 39,
        won: 10,
        lost: 2,
        role: "Sales owner · Chicago",
        deals: [
          { title: "Pioneer Academy", stage: "New", date: "12 Sep" },
        ],
      },
    ],
  },
  ytd: {
    heading: "2026",
    rows: [
      {
        name: "James Carter",
        leads: 186,
        won: 52,
        lost: 11,
        role: "Sales owner · London",
        deals: [
          { title: "Northstar Realty", stage: "Won", date: "14 Sep" },
          { title: "Oakridge Finance", stage: "Won", date: "19 Mar" },
        ],
      },
      {
        name: "Emily Brooks",
        leads: 154,
        won: 41,
        lost: 9,
        role: "Sales owner · New York",
        deals: [
          { title: "Apex Software", stage: "Won", date: "02 Jun" },
        ],
      },
      {
        name: "Michael Reed",
        leads: 138,
        won: 36,
        lost: 8,
        role: "Sales owner · Austin",
        deals: [
          { title: "Summit Builders", stage: "Won", date: "11 May" },
        ],
      },
      {
        name: "Sarah Collins",
        leads: 121,
        won: 29,
        lost: 7,
        role: "Sales owner · Manchester",
        deals: [
          { title: "Silverline Media", stage: "Demo Scheduled", date: "15 Sep" },
        ],
      },
      {
        name: "Daniel Hayes",
        leads: 98,
        won: 22,
        lost: 6,
        role: "Sales owner · Chicago",
        deals: [
          { title: "Pioneer Academy", stage: "New", date: "08 Sep" },
        ],
      },
    ],
  },
  last: {
    heading: "August, 2026",
    rows: [
      {
        name: "James Carter",
        leads: 24,
        won: 8,
        lost: 2,
        role: "Sales owner · London",
        deals: [
          { title: "Greenfield Farms", stage: "Won", date: "27 Aug" },
          { title: "Harbor Clinics", stage: "Lost", date: "12 Aug" },
        ],
      },
      {
        name: "Emily Brooks",
        leads: 21,
        won: 6,
        lost: 1,
        role: "Sales owner · New York",
        deals: [
          { title: "Brightline Interiors", stage: "Won", date: "19 Aug" },
        ],
      },
      {
        name: "Michael Reed",
        leads: 18,
        won: 5,
        lost: 2,
        role: "Sales owner · Austin",
        deals: [
          { title: "Summit Builders", stage: "Contact Made", date: "30 Aug" },
        ],
      },
      {
        name: "Olivia Bennett",
        leads: 15,
        won: 4,
        lost: 1,
        role: "Sales owner · London",
        deals: [
          { title: "Northstar Realty", stage: "Demo Scheduled", date: "16 Aug" },
        ],
      },
    ],
  },
};

const STAT_META = [
  { id: "deals", label: "Total Deals", tone: "teal", Icon: LuChartColumn },
  { id: "created", label: "Deals Created – All", tone: "orange", Icon: LuCalendarDays },
  { id: "contacts", label: "Contacts Created – All", tone: "cyan", Icon: LuUser },
  { id: "won", label: "Pipelines Won – All", tone: "green", Icon: LuTrophy },
  { id: "lost", label: "Pipelines Lost – All", tone: "pink", Icon: LuMegaphone },
];

function useInView(threshold = 0.22) {
  const ref = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(node);
    const fallback = window.setTimeout(() => setLive(true), 900);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return [ref, live];
}

function useCount(to, live, duration = 700) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!live) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return undefined;
    }
    setValue(0);
    let start;
    let frame;
    const step = (time) => {
      if (!start) start = time;
      const progress = Math.min(1, (time - start) / duration);
      setValue(Math.round(to * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to, live, duration]);

  return value;
}

function SelectMenu({ value, options, onChange, compact }) {
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const current = options.find((item) => item.id === value) || options[0];

  useEffect(() => {
    function onDoc(event) {
      if (!box.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className={`ld-dropdown${compact ? " is-compact" : ""}`} ref={box}>
      <button
        type="button"
        className={`ld-select${compact ? " ld-select-sm" : ""}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((state) => !state)}
      >
        {current.label}
        <LuChevronDown size={14} strokeWidth={2.2} />
      </button>
      {open ? (
        <ul className="ld-menu" role="listbox">
          {options.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                role="option"
                aria-selected={option.id === value}
                className={option.id === value ? "is-on" : ""}
                onClick={() => {
                  onChange(option.id);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function StatCard({ label, value, change, up, tone, Icon, delay, live }) {
  const counted = useCount(value, live);
  return (
    <article className={`ld-stat ld-stat-${tone}`} style={{ animationDelay: delay }}>
      <div className="ld-stat-copy">
        <span className="ld-stat-label">{label}</span>
        <div className="ld-stat-row">
          <strong>{counted.toLocaleString("en-US")}</strong>
          <span className={`ld-delta${up ? " is-up" : " is-down"}`}>
            {up ? "▲" : "▼"} {change}
          </span>
        </div>
      </div>
      <span className="ld-stat-icon" aria-hidden="true">
        <Icon size={18} strokeWidth={2.1} />
      </span>
    </article>
  );
}

export default function LeadDashboard() {
  const [ref, live] = useInView();
  const [range, setRange] = useState("all");
  const [stage, setStage] = useState("all");
  const [period, setPeriod] = useState("mtd");
  const [animKey, setAnimKey] = useState(0);

  const snapshot = DASH[range];
  const report = REPORTS[period];

  useEffect(() => {
    setAnimKey((key) => key + 1);
  }, [range, stage]);

  const stages = useMemo(() => {
    return STAGE_META.map((item) => ({
      ...item,
      count: snapshot.stages[item.id],
    })).filter((item) => (stage === "all" ? true : item.id === stage));
  }, [snapshot, stage]);

  const stageMax = Math.max(20, ...STAGE_META.map((item) => snapshot.stages[item.id]));
  const stageTicks = [stageMax, Math.round(stageMax * 0.75), Math.round(stageMax * 0.5), Math.round(stageMax * 0.25), 0];

  const trend = snapshot.trend;
  const trendMax = Math.max(10, ...trend.points);
  const niceMax = Math.ceil(trendMax / 10) * 10;
  const yTicks = [niceMax, Math.round(niceMax * 0.66), Math.round(niceMax * 0.33), 0];

  const width = 420;
  const height = 228;
  const pad = { l: 42, r: 12, t: 14, b: 34 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const coords = trend.points.map((point, index) => {
    const x = pad.l + (index / Math.max(1, trend.points.length - 1)) * innerW;
    const y = pad.t + (1 - point / niceMax) * innerH;
    return [x, y, trend.labels[index]];
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x} ${y}`).join(" ");
  const area = `${line} L${coords.at(-1)[0]} ${pad.t + innerH} L${coords[0][0]} ${pad.t + innerH} Z`;

  const rows = report.rows;
  const totals = rows.reduce(
    (sum, row) => ({
      leads: sum.leads + row.leads,
      won: sum.won + row.won,
      lost: sum.lost + row.lost,
    }),
    { leads: 0, won: 0, lost: 0 },
  );

  const stageOptions = [
    { id: "all", label: "Filter: All" },
    ...STAGE_META.map((item) => ({ id: item.id, label: item.name })),
  ];

  return (
    <div
      ref={ref}
      className={`lead-dash${live ? " is-live" : ""}`}
      aria-label="Lead management dashboard preview"
    >
      <div className="ld-top">
        <div className="ld-stats">
          {STAT_META.map((item, index) => (
            <StatCard
              key={item.id}
              {...item}
              {...snapshot.stats[item.id]}
              label={item.label.replace(
                "– All",
                range === "all"
                  ? "– All"
                  : `– ${RANGE_OPTIONS.find((option) => option.id === range)?.label}`,
              )}
              live={live}
              delay={`${0.04 + index * 0.06}s`}
            />
          ))}
        </div>
        <SelectMenu value={range} options={RANGE_OPTIONS} onChange={setRange} />
      </div>

      <div className="ld-panels">
        <article className="ld-panel" style={{ animationDelay: "0.18s" }}>
          <header className="ld-panel-head">
            <h4>Deals in Stages</h4>
            <SelectMenu compact value={stage} options={stageOptions} onChange={setStage} />
          </header>
          <div className="ld-stage" key={`stage-${animKey}`}>
            <div className="ld-stage-chart">
              <div className="ld-y">
                {stageTicks.map((tick) => (
                  <span key={tick}>{tick}</span>
                ))}
              </div>
              <div className="ld-stage-plot">
                {stageTicks.slice(0, -1).map((tick) => (
                  <i key={tick} className="ld-grid-line" />
                ))}
                {stages.map((item, index) => (
                  <span className="ld-bar-col" key={item.id}>
                    <span
                      className="ld-bar"
                      style={{
                        height: `${Math.max((item.count / stageMax) * 100, 4)}%`,
                        background: item.color,
                        animationDelay: `${0.2 + index * 0.07}s`,
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <ul className="ld-legend">
              {STAGE_META.map((item) => (
                <li key={item.id}>
                  <i style={{ background: item.color }} />
                  <span>{item.name}</span>
                  <b>{snapshot.stages[item.id]}</b>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="ld-panel" style={{ animationDelay: "0.26s" }}>
          <header className="ld-panel-head">
            <h4>Deals</h4>
            <SelectMenu compact value={range} options={RANGE_OPTIONS} onChange={setRange} />
          </header>
          <div className="ld-chart-wrap" key={`line-${animKey}`}>
            <svg
              className="ld-line-svg"
              viewBox={`0 0 ${width} ${height}`}
              role="img"
              aria-label="Deals over time"
            >
              <defs>
                <linearGradient id="ldAreaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
                </linearGradient>
              </defs>
              {yTicks.map((tick) => {
                const y = pad.t + (1 - tick / niceMax) * innerH;
                return (
                  <g key={tick}>
                    <line x1={pad.l} x2={width - pad.r} y1={y} y2={y} className="ld-svg-grid" />
                    <text x={pad.l - 8} y={y + 3} className="ld-svg-tick">
                      {tick}
                    </text>
                  </g>
                );
              })}
              <text
                x="14"
                y={height / 2}
                className="ld-svg-axis"
                transform={`rotate(-90 14 ${height / 2})`}
              >
                Deals Count
              </text>
              <path d={area} className="ld-area" />
              <path d={line} className="ld-line" pathLength="1" />
              {coords.map(([x, y, label]) => (
                <circle key={label} className="ld-dot" cx={x} cy={y} r="3.5" />
              ))}
              {trend.labels.map((label, index) => {
                const x = pad.l + (index / Math.max(1, trend.labels.length - 1)) * innerW;
                return (
                  <text key={label} x={x} y={height - 8} className="ld-svg-x">
                    {label}
                  </text>
                );
              })}
            </svg>
          </div>
        </article>

        <article className="ld-panel ld-report" style={{ animationDelay: "0.34s" }}>
          <header className="ld-panel-head">
            <h4>Customer Report</h4>
            <SelectMenu compact value={period} options={PERIOD_OPTIONS} onChange={setPeriod} />
          </header>
          <div className="ld-table-wrap">
            <table className="ld-table">
              <thead>
                <tr>
                  <th>{report.heading}</th>
                  <th>Leads</th>
                  <th>Won</th>
                  <th>Lost</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.name} style={{ animationDelay: `${0.4 + index * 0.06}s` }}>
                    <td>{row.name}</td>
                    <td>{row.leads}</td>
                    <td>{row.won}</td>
                    <td>{row.lost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{totals.leads}</td>
                  <td>{totals.won}</td>
                  <td>{totals.lost}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </article>
      </div>
    </div>
  );
}
