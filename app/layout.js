import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import WhatsAppFloat from "./components/whatsapp-float";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import NavigationProgress from "./components/navigation-progress";
import { DemoRequestProvider } from "./components/demo-request-provider";
import { OrganizationJsonLd } from "./json-ld";
import { HOME_URL, SITE_NAME, SITE_URL } from "./site";
import { PAGE_SEO } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const GA_MEASUREMENT_ID = "G-947EJKYD0S";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_SEO["/"].title,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGE_SEO["/"].description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: HOME_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-US"
      className={plusJakarta.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <OrganizationJsonLd />
        <DemoRequestProvider>
          <NavigationProgress />
          <div className="home site-shell">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
          <WhatsAppFloat />
        </DemoRequestProvider>
      </body>
    </html>
  );
}
