import type { Metadata } from "next";
import Link from "next/link";
import { TradeIndex } from "@/components/TradeIndex";
import { Projects } from "@/components/Projects";
import { Check } from "@/components/Check";
import { Breadcrumbs, FinalCta, ProcessSteps, breadcrumbSchema } from "@/components/Blocks";
import { DEFAULT_PROCESS, tradeIndex } from "@/lib/trades";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bau & Innenausbau in Bad Laasphe & Siegen",
  description:
    "Fliesen, Maler, Innenausbau, Trockenbau, Putz & Estrich und Sanitär aus Bad Laasphe – einzeln oder als Komplettsanierung, mit eigenen Fachkräften. Seit 2005.",
  alternates: { canonical: "/bau-innenausbau" },
};

const crumbs = [
  { name: "Startseite", href: "/" },
  { name: "Bau & Innenausbau", href: "/bau-innenausbau" },
];

export default function BauInnenausbau() {
  return (
    <>
      <section className="pt-8 pb-16 lg:pb-24">
        <div className="wrap">
          <Breadcrumbs items={[crumbs[0], { name: "Bau & Innenausbau" }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <h1 className="text-[2.9rem] leading-[0.95] sm:text-6xl lg:text-[4.6rem]">
              Bau &amp; Innenausbau in Bad Laasphe, Siegen &amp; Umgebung
            </h1>
            <div>
              <p className="lead">
                Einzelne Gewerke oder komplette Sanierung – für Wohnungen, Häuser, Büros, Praxen und Gewerbe. Mit rund 40 eigenen Fachkräften
                und einem Ansprechpartner für alles.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-schiefer-2">
                <li className="flex gap-2">
                  <Check /> Seit {site.since}
                </li>
                <li className="flex gap-2">
                  <Check /> Eigene Teams
                </li>
                <li className="flex gap-2">
                  <Check /> 3D-Planung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6 lg:pb-8">
        <div className="wrap">
          <TradeIndex trades={tradeIndex} />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="wrap">
          <div className="fliesen bg-fuge p-(--spacing-fuge) md:grid-cols-2">
            <Link href="/schadensanierung/wasserschaden" className="group block bg-schiefer p-8 text-weiss sm:p-10">
              <span className="block font-display text-[2.2rem] leading-none font-semibold">Wasser- oder Brandschaden?</span>
              <span className="mt-3 block max-w-md text-weiss/75">Trocknung, Sanierung und Abwicklung mit der Versicherung – aus einer Hand.</span>
              <span className="mt-6 inline-block font-semibold underline decoration-messing decoration-2 underline-offset-[6px]">Schadensanierung</span>
            </Link>
            <Link href="/generalunternehmer" className="group block bg-kalk p-8 sm:p-10">
              <span className="block font-display text-[2.2rem] leading-none font-semibold text-tanne">Für Generalunternehmer</span>
              <span className="mt-3 block max-w-md text-schiefer-2">Nachunternehmer mit allen Nachweisen: §48b, §13b, SOKA-BAU, Unbedenklichkeit.</span>
              <span className="mt-6 inline-block font-semibold text-tanne underline decoration-messing decoration-2 underline-offset-[6px]">Kapazität anfragen</span>
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps title="So arbeiten wir" lead="Ein fester Ablauf für jedes Gewerk – damit Sie jederzeit wissen, wo Ihr Projekt steht." steps={DEFAULT_PROCESS} />

      <section className="section">
        <div className="wrap">
          <Projects />
        </div>
      </section>

      <FinalCta title="Erzählen Sie uns von Ihrem Projekt." text="Wohnung, Haus oder Gewerbe – wir melden uns innerhalb von [24 h]." href="/#anfrage" cta="Projekt anfragen" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }} />
    </>
  );
}
