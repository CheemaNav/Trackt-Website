import { Plus_Jakarta_Sans } from "next/font/google";
import JsonLd from "./json-ld";
import { SEO, SITE_NAME, SITE_URL } from "./site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const ogImage = `${SITE_URL}/TracktCRM-Og.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TracktCRM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    images: [ogImage],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
