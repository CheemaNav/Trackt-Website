"use client";

import { useMemo, useState } from "react";
import {
  LuBanknote,
  LuCalendarDays,
  LuChevronDown,
  LuClock,
  LuColumns3,
  LuDownload,
  LuList,
  LuMail,
  LuPencil,
  LuPhone,
  LuPlus,
  LuRotateCcw,
  LuSearch,
  LuUpload,
} from "react-icons/lu";

const PIPELINES = ["Default Pipeline", "Enterprise Pipeline"];

const STAGES = [
  { id: "new", name: "New", tone: "purple" },
  { id: "won", name: "Won", tone: "green" },
  { id: "lost", name: "Lost", tone: "red" },
  { id: "junk", name: "Junk", tone: "gray" },
];

const SEED = [
  {
    id: "d1",
    stage: "new",
    title: "James Carter",
    owner: "James Carter",
    phone: "555-0142",
    when: "Today",
    amount: 0,
    country: "United States",
  },
  {
    id: "d2",
    stage: "new",
    title: "Emily Brooks",
    owner: "Emily Brooks",
    phone: "555-0198",
    when: "Today",
    amount: 0,
    country: "United States",
  },
  {
    id: "d3",
    stage: "new",
    title: "Michael Reed",
    owner: "Michael Reed",
    phone: "555-0114",
    when: "2h ago",
    amount: 420,
    country: "United Kingdom",
  },
  {
    id: "d4",
    stage: "won",
    title: "Apex Software",
    owner: "Emily Brooks",
    phone: "555-0177",
    when: "Today",
    amount: 9000,
    country: "United States",
  },
  {
    id: "d5",
    stage: "won",
    title: "Harbor Clinics",
    owner: "Sarah Collins",
    note: "QA follow-up",
    phone: "555-0160",
    when: "3mo ago",
    amount: 9000,
    country: "United States",
  },
  {
    id: "d6",
    stage: "lost",
    title: "VP Sales",
    company: "Acme Inc",
    email: "sales@acme.com",
    phone: "15551234567",
    due: "May 16",
    when: "3mo ago",
    amount: 10000,
    country: "United States",
    tags: ["VIP", "Hot Lead"],
    hot: true,
  },
];

const EXTRA_LEADS = [
  { title: "Olivia Bennett", owner: "Olivia Bennett", phone: "555-0133", country: "United States" },
  { title: "Daniel Hayes", owner: "Daniel Hayes", phone: "555-0188", country: "Canada" },
  { title: "Sarah Collins", owner: "Sarah Collins", phone: "555-0129", country: "United Kingdom" },
];

function money(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function DealCard({ deal, dragging, onDragStart, onDragEnd }) {
  return (
    <article
      className={`pipe-card${deal.hot ? " is-hot" : ""}${dragging ? " is-dragging" : ""}`}
      draggable
      onDragStart={(event) => onDragStart(event, deal.id)}
      onDragEnd={onDragEnd}
    >
      <div className="pipe-card-top">
        <h5>{deal.title}</h5>
        {deal.company ? <p>{deal.company}</p> : <p>Sales: {deal.owner}</p>}
        {deal.note ? <p>{deal.note}</p> : null}
      </div>
      {deal.email ? (
        <p className="pipe-meta">
          <LuMail size={13} strokeWidth={2.1} />
          {deal.email}
        </p>
      ) : null}
      {deal.phone ? (
        <p className="pipe-meta">
          <LuPhone size={13} strokeWidth={2.1} />
          {deal.phone}
        </p>
      ) : null}
      <p className="pipe-meta">
        {deal.due ? <LuCalendarDays size={13} strokeWidth={2.1} /> : <LuClock size={13} strokeWidth={2.1} />}
        {deal.due ? (
          <>
            <span className="pipe-due">{deal.due}</span>
            <span>· {deal.when}</span>
          </>
        ) : (
          deal.when
        )}
      </p>
      {deal.tags?.length ? (
        <div className="pipe-tags">
          {deal.tags.map((tag) => (
            <span className={`pipe-tag${tag === "Hot Lead" ? " is-hot" : ""}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="pipe-card-foot">
        <span>
          <LuBanknote size={13} strokeWidth={2.1} />
          {money(deal.amount)}
        </span>
        <em>{deal.country}</em>
        <b>{deal.title.slice(0, 1)}</b>
      </div>
    </article>
  );
}

export default function PipelineBoard() {
  const [deals, setDeals] = useState(SEED);
  const [view, setView] = useState("pipeline");
  const [query, setQuery] = useState("");
  const [pipeline, setPipeline] = useState(PIPELINES[0]);
  const [pipeOpen, setPipeOpen] = useState(false);
  const [dragId, setDragId] = useState(null);
  const [overStage, setOverStage] = useState(null);
  const [added, setAdded] = useState(0);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return deals;
    return deals.filter((deal) =>
      [deal.title, deal.owner, deal.company, deal.email, deal.phone]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [deals, query]);

  function handleDragStart(event, id) {
    event.dataTransfer.setData("text/plain", id);
    event.dataTransfer.effectAllowed = "move";
    setDragId(id);
  }

  function handleDragEnd() {
    setDragId(null);
    setOverStage(null);
  }

  function handleDrop(event, stage) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain") || dragId;
    if (!id) return;
    setDeals((current) =>
      current.map((deal) => (deal.id === id ? { ...deal, stage, hot: stage === "lost" ? deal.hot : false } : deal)),
    );
    setDragId(null);
    setOverStage(null);
  }

  function addLead() {
    const template = EXTRA_LEADS[added % EXTRA_LEADS.length];
    setDeals((current) => [
      {
        id: `n-${Date.now()}`,
        stage: "new",
        when: "Just now",
        amount: 0,
        ...template,
      },
      ...current,
    ]);
    setAdded((count) => count + 1);
    setView("pipeline");
  }

  return (
    <div className="pipe-board" aria-label="Sales pipeline board">
      <div className="pipe-toolbar">
        <div className="pipe-toolbar-left">
          <div className="pipe-view-toggle" role="group" aria-label="Board view">
            <button
              type="button"
              className={`pipe-tool is-seg${view === "pipeline" ? " is-on" : ""}`}
              onClick={() => setView("pipeline")}
            >
              <LuColumns3 size={15} strokeWidth={2.2} />
              Pipeline
            </button>
            <button
              type="button"
              className={`pipe-tool is-seg${view === "list" ? " is-on" : ""}`}
              onClick={() => setView("list")}
            >
              <LuList size={15} strokeWidth={2.2} />
              List
            </button>
          </div>
          <button type="button" className="pipe-tool is-add" onClick={addLead}>
            <LuPlus size={15} strokeWidth={2.4} />
            Lead
          </button>
          <button type="button" className="pipe-tool">
            <LuUpload size={15} strokeWidth={2.2} />
            Import
          </button>
          <button type="button" className="pipe-tool">
            <LuDownload size={15} strokeWidth={2.2} />
            Export
          </button>
          <button type="button" className="pipe-tool is-icon" aria-label="Refresh">
            <LuRotateCcw size={15} strokeWidth={2.2} />
          </button>
          <button type="button" className="pipe-tool">
            Filters
          </button>
        </div>
        <div className="pipe-toolbar-right">
          <label className="pipe-search">
            <LuSearch size={15} strokeWidth={2.2} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, email, company"
            />
          </label>
          <div className="pipe-dropdown">
            <button
              type="button"
              className="pipe-tool"
              aria-expanded={pipeOpen}
              onClick={() => setPipeOpen((open) => !open)}
            >
              <LuColumns3 size={15} strokeWidth={2.2} />
              {pipeline}
              <LuChevronDown size={14} strokeWidth={2.2} />
            </button>
            {pipeOpen ? (
              <ul className="pipe-menu" role="listbox">
                {PIPELINES.map((name) => (
                  <li key={name}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={pipeline === name}
                      className={pipeline === name ? "is-on" : ""}
                      onClick={() => {
                        setPipeline(name);
                        setPipeOpen(false);
                      }}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <button type="button" className="pipe-tool is-icon" aria-label="Edit pipeline">
            <LuPencil size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="pipe-subbar">
        <p>
          <b>{filtered.length}</b> deals match current filters
          {view === "pipeline" ? <span> · Drag a card to another stage</span> : null}
        </p>
        <span className="pipe-pill">Pipeline: {pipeline}</span>
      </div>

      {view === "list" ? (
        <div className="pipe-list">
          <table>
            <thead>
              <tr>
                <th>Deal</th>
                <th>Stage</th>
                <th>Owner</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((deal) => (
                <tr key={deal.id}>
                  <td>{deal.title}</td>
                  <td>{STAGES.find((stage) => stage.id === deal.stage)?.name}</td>
                  <td>{deal.owner || deal.company || "—"}</td>
                  <td>{money(deal.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="pipe-cols">
          {STAGES.map((stage) => {
            const cards = filtered.filter((deal) => deal.stage === stage.id);
            const total = cards.reduce((sum, deal) => sum + deal.amount, 0);
            return (
              <section
                className={`pipe-col${overStage === stage.id ? " is-over" : ""}`}
                key={stage.id}
                onDragOver={(event) => {
                  event.preventDefault();
                  setOverStage(stage.id);
                }}
                onDragLeave={() => setOverStage((current) => (current === stage.id ? null : current))}
                onDrop={(event) => handleDrop(event, stage.id)}
              >
                <header className={`pipe-col-head is-${stage.tone}`}>
                  <h4>
                    <i />
                    {stage.name}
                  </h4>
                  <p>
                    {cards.length} Leads · {money(total)}
                  </p>
                </header>
                <div className="pipe-col-body">
                  {cards.map((deal) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      dragging={dragId === deal.id}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                    />
                  ))}
                  {cards.length === 0 ? <p className="pipe-empty">Drop a deal here</p> : null}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
