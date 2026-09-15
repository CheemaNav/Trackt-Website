import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata = {
  title: "TracktCRM — AI-Powered CRM Software for Sales Teams",
  description:
    "TracktCRM is an easy-to-use AI CRM software that helps you manage leads, track your sales pipeline, and close deals faster. Try it free — no credit card required.",
  keywords: [
    "CRM software",
    "sales CRM",
    "lead management software",
    "sales pipeline management",
    "AI CRM software",
    "CRM for small business",
  ],
  openGraph: {
    type: "website",
    title: "TracktCRM — AI-Powered CRM Software for Sales Teams",
    description:
      "TracktCRM is an easy-to-use AI CRM software that helps you manage leads, track your sales pipeline, and close deals faster. Try it free — no credit card required.",
    siteName: "TracktCRM",
    images: ["/assets/tracktcrm-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TracktCRM — AI-Powered CRM Software for Sales Teams",
    description:
      "AI CRM software for lead management, sales pipeline tracking and automated follow-ups. Start your free trial — no credit card required.",
    images: ["/assets/tracktcrm-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
