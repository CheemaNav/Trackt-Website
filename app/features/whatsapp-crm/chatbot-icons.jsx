import { FaWhatsapp } from "react-icons/fa6";
import { LuCalendarCheck, LuPlus, LuTag } from "react-icons/lu";

const INK = "#1c1f3b";
const BLOB = "#ffd89a";
const GREEN = "#128c7e";

function Spot({ children, blob = { cx: 40, cy: 22, r: 17 } }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      stroke={INK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx={blob.cx} cy={blob.cy} r={blob.r} fill={BLOB} stroke="none" />
      {children}
    </svg>
  );
}

function TemplatesSpot() {
  return (
    <Spot>
      <rect x="12" y="14" width="17" height="17" rx="4" />
      <rect x="34" y="14" width="17" height="17" rx="4" />
      <rect x="12" y="36" width="17" height="17" rx="4" fill={INK} />
      <rect x="34" y="36" width="17" height="17" rx="4" />
      <path d="M38 42h9M38 47h6" />
      <path d="M16.5 22.5l3 3 5-6" stroke={GREEN} />
    </Spot>
  );
}

function MenuSpot() {
  return (
    <Spot blob={{ cx: 42, cy: 20, r: 16 }}>
      <path d="M14 12h32a5 5 0 0 1 5 5v17a5 5 0 0 1-5 5H24l-8 6v-6h-2a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5z" />
      <circle cx="18" cy="21" r="1.6" fill={INK} stroke="none" />
      <circle cx="18" cy="28" r="1.6" fill={INK} stroke="none" />
      <path d="M23 21h18M23 28h13" />
      <rect x="27" y="46" width="26" height="9" rx="4.5" fill={INK} stroke="none" />
    </Spot>
  );
}

function StartSpot() {
  return (
    <Spot blob={{ cx: 24, cy: 22, r: 16 }}>
      <circle cx="32" cy="32" r="15" />
      <path d="M34 22l-8 12h6l-2 9 8-12h-6z" fill={INK} />
      <circle cx="12" cy="12" r="3" />
      <circle cx="53" cy="14" r="3" />
      <circle cx="52" cy="51" r="3" />
      <path d="M14.5 14.5l4 4M50.5 16.5l-4 4M49.5 48.5l-4-4" strokeDasharray="2 3" />
      <rect x="9" y="47" width="7" height="7" rx="1.5" fill={INK} stroke="none" />
    </Spot>
  );
}

function HandoverSpot() {
  return (
    <Spot blob={{ cx: 42, cy: 22, r: 16 }}>
      <rect x="9" y="14" width="18" height="15" rx="4" />
      <circle cx="15" cy="21.5" r="1.4" fill={INK} stroke="none" />
      <circle cx="21" cy="21.5" r="1.4" fill={INK} stroke="none" />
      <path d="M18 14v-4" />
      <circle cx="44" cy="22" r="6" />
      <path d="M33 42c1-6 5.5-9 11-9s10 3 11 9" />
      <path d="M14 38c0 8 6 12 14 12h6" />
      <path d="M30 46l4 4-4 4" />
    </Spot>
  );
}

function LeadSpot() {
  return (
    <Spot blob={{ cx: 44, cy: 18, r: 14 }}>
      <rect x="9" y="18" width="40" height="30" rx="5" />
      <circle cx="21" cy="29" r="4.5" />
      <path d="M14 41c1.5-4 4-6 7-6s5.5 2 7 6" />
      <path d="M33 28h10M33 34h7" />
      <path d="M40 46h13a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3H40a3 3 0 0 0-3 3v14l4-3z" fill={INK} />
      <path d="M42 38.5h8" stroke="#fff" />
    </Spot>
  );
}

function ShieldSpot() {
  return (
    <Spot blob={{ cx: 22, cy: 20, r: 15 }}>
      <path d="M32 9l17 6v14c0 11-7.5 19-17 24-9.5-5-17-13-17-24V15z" />
      <path d="M24.5 31l5.5 5.5 10-11" stroke={GREEN} strokeWidth="2.6" />
      <rect x="49" y="44" width="7" height="7" rx="1.5" fill={INK} stroke="none" />
    </Spot>
  );
}

export const CHATBOT_SPOTS = {
  templates: TemplatesSpot,
  menu: MenuSpot,
  start: StartSpot,
  handover: HandoverSpot,
  lead: LeadSpot,
  shield: ShieldSpot,
};

export const CHATBOT_TEMPLATE_ICONS = {
  whatsapp: FaWhatsapp,
  tag: LuTag,
  calendar: LuCalendarCheck,
  plus: LuPlus,
};
