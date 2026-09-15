"use client";

import { useState } from "react";
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
  const [dragId, setDragId] = useState(null);
  const [overStage, setOverStage] = useState(null);

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
      current.map((deal) =>
        deal.id === id ? { ...deal, stage, hot: stage === "lost" ? deal.hot : false } : deal,
      ),
    );
    setDragId(null);
    setOverStage(null);
  }

  return (
    <div className="pipe-board" aria-label="Sales pipeline board">
      <div className="pipe-toolbar" aria-hidden="true">
        <div className="pipe-toolbar-left">
          <div className="pipe-view-toggle">
            <span className="pipe-tool is-seg is-on">
              <LuColumns3 size={15} strokeWidth={2.2} />
              Pipeline
            </span>
            <span className="pipe-tool is-seg">
              <LuList size={15} strokeWidth={2.2} />
              List
            </span>
          </div>
          <span className="pipe-tool is-add">
            <LuPlus size={15} strokeWidth={2.4} />
            Lead
          </span>
          <span className="pipe-tool">
            <LuUpload size={15} strokeWidth={2.2} />
            Import
          </span>
          <span className="pipe-tool">
            <LuDownload size={15} strokeWidth={2.2} />
            Export
          </span>
          <span className="pipe-tool is-icon">
            <LuRotateCcw size={15} strokeWidth={2.2} />
          </span>
          <span className="pipe-tool">Filters</span>
        </div>
        <div className="pipe-toolbar-right">
          <span className="pipe-search">
            <LuSearch size={15} strokeWidth={2.2} />
            <span>Search by title, email, company</span>
          </span>
          <span className="pipe-tool">
            <LuColumns3 size={15} strokeWidth={2.2} />
            Default Pipeline
            <LuChevronDown size={14} strokeWidth={2.2} />
          </span>
          <span className="pipe-tool is-icon">
            <LuPencil size={15} strokeWidth={2.2} />
          </span>
        </div>
      </div>

      <div className="pipe-subbar">
        <p>
          <b>{deals.length}</b> deals match current filters
          <span> · Drag a card to another stage</span>
        </p>
        <span className="pipe-pill">Pipeline: Default Pipeline</span>
      </div>

      <div className="pipe-cols">
        {STAGES.map((stage) => {
          const cards = deals.filter((deal) => deal.stage === stage.id);
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
    </div>
  );
}
