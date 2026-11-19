import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui";
import { Navbar, StickyCta } from "@/components/interactive";
import { siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/seo";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mwega | Business systems consultancy for established founders", template: "%s" },
  description: siteConfig.description,
  openGraph: { siteName: siteConfig.companyName, type: "website", locale: "en_KE", url: "/" },
  twitter: { card: "summary_large_image" },
};
export const viewport = { themeColor: "#0A1020" };

/* Scroll-reveal content starts hidden and is shown by a script. This keeps it visible when scripts are off. */
const withoutScripts = ".mw .reveal{opacity:1!important;transform:none!important}";

const jsonLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: "Mwega", url: siteUrl, email: siteConfig.email, telephone: "+254718367110",
  description: siteConfig.description, areaServed: "Kenya", address: { "@type": "PostalAddress", addressLocality: "Embu", addressCountry: "KE" },
  knowsAbout: ["Business systems consulting", "Business process improvement", "Business intelligence", "Digital transformation", "Business automation"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={display.variable + " " + sans.variable}>
      <body className="mw">
        <noscript><style dangerouslySetInnerHTML={{ __html: withoutScripts }} /></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#mw-main" className="skip">Skip to content</a>
        <Navbar />
        <main id="mw-main" tabIndex={-1}>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
