import type { Metadata } from "next";
import { RatgeberList } from "@/components/RatgeberList";
import { Breadcrumbs, FinalCta, breadcrumbSchema } from "@/components/Blocks";
import { articles } from "@/lib/ratgeber";

export const metadata: Metadata = {
  title: "Ratgeber: Wissen aus der Praxis",
  description:
    "Ratgeber für Hoteliers, Bauherren und Eigentümer: Hotelrenovierung, Fliesen, Bad, Trockenbau, Estrich und Wasserschaden – aus über 20 Jahren auf der Baustelle.",
  alternates: { canonical: "/ratgeber" },
};

export default function Ratgeber() {
  const sorted = [...articles].sort((a, b) => b.updated.localeCompare(a.updated));
  return (
    <>
      <section className="pt-8 pb-20 lg:pb-28">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Startseite", href: "/" }, { name: "Ratgeber" }]} />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h1 className="text-[2.9rem] leading-[0.95] sm:text-6xl lg:text-[4.6rem]">
              Wissen aus der Praxis
            </h1>
            <p className="lead">
              Tipps für Hoteliers, Bauherren und Eigentümer – aus über 20 Jahren auf der Baustelle. Ehrlich, verständlich und ohne
              Fachchinesisch.
            </p>
          </div>
          <div className="mt-14">
            <RatgeberList articles={sorted} />
          </div>
        </div>
      </section>
      <FinalCta title="Ihre Frage war nicht dabei?" text="Rufen Sie uns an oder schreiben Sie uns – wir antworten persönlich." href="/#anfrage" cta="Projekt anfragen" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Startseite", href: "/" }, { name: "Ratgeber", href: "/ratgeber" }])) }}
      />
    </>
  );
}
