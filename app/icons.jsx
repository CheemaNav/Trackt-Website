import {
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  LuArrowRight,
  LuBoxes,
  LuBriefcase,
  LuBuilding2,
  LuCalendarCheck,
  LuCar,
  LuChartColumn,
  LuCheck,
  LuChevronDown,
  LuClock,
  LuFileText,
  LuGraduationCap,
  LuGripVertical,
  LuInbox,
  LuLayers,
  LuMail,
  LuMegaphone,
  LuMenu,
  LuMessageCircle,
  LuMessageSquare,
  LuPhone,
  LuPlane,
  LuPlus,
  LuRefreshCw,
  LuShieldCheck,
  LuSignature,
  LuSmartphone,
  LuSparkles,
  LuStethoscope,
  LuTag,
  LuType,
  LuUserCheck,
  LuUserSearch,
  LuUsers,
  LuX,
} from "react-icons/lu";

/** [src, intrinsic width, intrinsic height] */
const BRAND_LOGOS = {
  "Google Ads": ["/assets/brands/google-ads.svg", 48, 48],
  "Meta & Google Ads": ["/assets/brands/meta-google-ads.svg", 96, 40],
  Meta: ["/assets/brands/meta.svg", 48, 48],
  Gmail: ["/assets/brands/gmail.svg", 88, 66],
  "Google Calendar": ["/assets/brands/google-calendar.svg", 200, 200],
  Webhooks: ["/assets/brands/webhooks.svg", 190, 70],
  WhatsApp: ["/assets/brands/whatsapp.svg", 190, 70],
  Justdial: ["/assets/brands/justdial.svg", 190, 70],
  Instagram: ["/assets/brands/instagram.svg", 190, 70],
  TradeIndia: ["/assets/brands/tradeindia.svg", 190, 70],
  IndiaMART: ["/assets/brands/indiamart.svg", 190, 70],
  Shopify: ["/assets/brands/shopify.svg", 190, 70],
  LinkedIn: ["/assets/brands/linkedin.svg", 190, 70],
  WordPress: ["/assets/brands/wordpress.svg", 190, 70],
  Razorpay: ["/assets/brands/razorpay.svg", 160, 40],
  Delhivery: ["/assets/brands/delhivery.svg", 120, 40],
  Shiprocket: ["/assets/brands/shiprocket.png", 96, 96],
  Facebook: ["/assets/brands/facebook.svg", 190, 70],
  "99acres": ["/assets/brands/99acres.png", 192, 192],
  "Housing.com": ["/assets/brands/housing.svg", 48, 48],
  OLX: ["/assets/brands/olx.svg", 64, 32],
  Practo: ["/assets/brands/practo.svg", 120, 36],
  MagicBricks: ["/assets/brands/magicbricks.svg", 48, 48],
  Calendly: ["/assets/brands/calendly.svg", 48, 48],
  "Custom Forms": ["/assets/brands/custom-forms.svg", 48, 48],
};

const BRAND_ICONS = {
  Calling: LuPhone,
  "Email & SMS": LuMail,
  "Payments & e-sign": LuSignature,
};

export function BrandMark({ name }) {
  const Icon = BRAND_ICONS[name];
  if (Icon) {
    return (
      <span
        className={`brand-mark brand-mark-icon${name === "WhatsApp" ? " is-whatsapp" : ""}${name === "Calling" ? " is-call" : ""}`}
      >
        <Icon size={28} aria-hidden="true" />
      </span>
    );
  }
  const logo = BRAND_LOGOS[name];
  if (!logo) return null;
  const [src, width, height] = logo;
  return (
    <span className="brand-mark">
      <img
        src={`${src}?v=6`}
        alt={`${name} logo`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

export const SOCIALS = [
  { id: "facebook", label: "Facebook", Icon: FaFacebookF },
  { id: "instagram", label: "Instagram", Icon: FaInstagram },
  { id: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
  { id: "google", label: "Google Business Profile", Icon: FaGoogle },
];

export function AppleIcon({ size = 20 }) {
  return <FaApple size={size} color="#fff" />;
}

export function GooglePlayIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34A853" d="M3.18 20.82V3.18c0-.7.4-1.2.9-1.48L14.2 12 4.08 22.3c-.5-.28-.9-.78-.9-1.48z" />
      <path fill="#FBBC04" d="M17.55 14.55 14.2 12 4.08 22.3c.16.1.35.16.54.16.2 0 .4-.05.58-.16l12.35-7.05z" />
      <path fill="#4285F4" d="m17.55 9.45 3.08 1.76c.72.41.72 1.17 0 1.58l-3.08 1.76L14.2 12z" />
      <path fill="#EA4335" d="M14.2 12 4.08 1.7C3.9 1.8 3.72 1.86 3.54 1.86c-.2 0-.38.05-.56.16L14.2 12z" />
    </svg>
  );
}

export function CheckIcon({ size = 12 }) {
  return <LuCheck size={size} strokeWidth={3} />;
}

export function CloseIcon({ size = 12 }) {
  return <LuX size={size} strokeWidth={3} />;
}

export function MenuIcon({ size = 22 }) {
  return <LuMenu size={size} strokeWidth={2.4} />;
}

export function ArrowIcon({ size = 14 }) {
  return <LuArrowRight size={size} strokeWidth={2.4} />;
}

export function PlusIcon({ size = 18 }) {
  return <LuPlus size={size} strokeWidth={2.4} />;
}

export function FieldTextIcon({ size = 13 }) {
  return <LuType size={size} strokeWidth={2.4} />;
}

export function FieldEmailIcon({ size = 13 }) {
  return <LuMail size={size} strokeWidth={2.4} />;
}

export function FieldPhoneIcon({ size = 13 }) {
  return <LuPhone size={size} strokeWidth={2.4} />;
}

export function FieldDropdownIcon({ size = 13 }) {
  return <LuChevronDown size={size} strokeWidth={2.4} />;
}

export function ChevronDownIcon({ size = 14 }) {
  return <LuChevronDown size={size} strokeWidth={2.4} />;
}

export function FieldMessageIcon({ size = 13 }) {
  return <LuMessageSquare size={size} strokeWidth={2.4} />;
}

export function DragHandleIcon({ size = 13 }) {
  return <LuGripVertical size={size} strokeWidth={2.4} />;
}

export function ChannelCallIcon({ size = 14 }) {
  return <LuPhone size={size} strokeWidth={2.4} />;
}

export function ChannelWhatsAppIcon({ size = 14 }) {
  return <LuMessageCircle size={size} strokeWidth={2.4} />;
}

export function ChannelEmailIcon({ size = 14 }) {
  return <LuMail size={size} strokeWidth={2.4} />;
}

export function ChannelSnoozeIcon({ size = 14 }) {
  return <LuClock size={size} strokeWidth={2.4} />;
}

export function CaptureIcon({ size = 22 }) {
  return <LuInbox size={size} strokeWidth={2} />;
}

export function SiteVisitIcon({ size = 22 }) {
  return <LuCalendarCheck size={size} strokeWidth={2} />;
}

export function BrokerIcon({ size = 22 }) {
  return <LuUsers size={size} strokeWidth={2} />;
}

export function InventoryIcon({ size = 22 }) {
  return <LuBoxes size={size} strokeWidth={2} />;
}

export function ProjectPipelineIcon({ size = 22 }) {
  return <LuLayers size={size} strokeWidth={2} />;
}

export function AiLeadIcon({ size = 22 }) {
  return <LuSparkles size={size} strokeWidth={2} />;
}

export function ProposalIcon({ size = 22 }) {
  return <LuFileText size={size} strokeWidth={2} />;
}

export function RenewalIcon({ size = 22 }) {
  return <LuRefreshCw size={size} strokeWidth={2} />;
}

export function ConversationIcon({ size = 22 }) {
  return <LuMessageSquare size={size} strokeWidth={2} />;
}

export function LabelIcon({ size = 22 }) {
  return <LuTag size={size} strokeWidth={2} />;
}

export function ReminderIcon({ size = 22 }) {
  return <LuClock size={size} strokeWidth={2} />;
}

export function ReportIcon({ size = 22 }) {
  return <LuChartColumn size={size} strokeWidth={2} />;
}

export function ClientIcon({ size = 22 }) {
  return <LuBriefcase size={size} strokeWidth={2} />;
}

export function OwnerIcon({ size = 22 }) {
  return <LuUserCheck size={size} strokeWidth={2} />;
}

export function RealEstateIcon({ size = 22 }) {
  return <LuBuilding2 size={size} strokeWidth={2} />;
}

export function EducationIcon({ size = 22 }) {
  return <LuGraduationCap size={size} strokeWidth={2} />;
}

export function AgencyIcon({ size = 22 }) {
  return <LuMegaphone size={size} strokeWidth={2} />;
}

export function RecruitmentIcon({ size = 22 }) {
  return <LuUserSearch size={size} strokeWidth={2} />;
}

export function InsuranceIcon({ size = 22 }) {
  return <LuShieldCheck size={size} strokeWidth={2} />;
}

export function AutomotiveIcon({ size = 22 }) {
  return <LuCar size={size} strokeWidth={2} />;
}

export function HealthcareIcon({ size = 22 }) {
  return <LuStethoscope size={size} strokeWidth={2} />;
}

export function TravelIcon({ size = 22 }) {
  return <LuPlane size={size} strokeWidth={2} />;
}

export function MobileIcon({ size = 22 }) {
  return <LuSmartphone size={size} strokeWidth={2} />;
}

export function GoogleBadge() {
  return (
    <span className="google-badge">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#FFC107"
          d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7 12.9 19.6C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.1H42V20H24v8h11.3c-1.1 3.1-3.5 5.6-6.6 7.1l.1.1 6.3 5.3C36.7 41.3 44 36 44 24c0-1.3-.1-2.6-.4-3.9z"
        />
      </svg>
      Google
    </span>
  );
}
