import type { Metadata, Viewport } from "next";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hotelrenovierung & Innenausbau aus einer Hand | Pfeiffer & Schwarz",
    template: "%s | Pfeiffer & Schwarz",
  },
  description:
    "Hotelrenovierung im laufenden Betrieb, Fliesen, Maler, Trockenbau und Sanitär aus Bad Laasphe – seit 2005, mit rund 40 eigenen Fachkräften. Jetzt Projekt anfragen.",
  openGraph: { type: "website", locale: "de_DE", siteName: site.name },
};

export const viewport: Viewport = {
  themeColor: "#1032cf",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: "+49 2754 220430",
  email: site.email,
  foundingDate: String(site.since),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  areaServed: ["Siegen-Wittgenstein", "Deutschland"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </body>
    </html>
  );
}
