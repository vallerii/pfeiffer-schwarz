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
            <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              Bau &amp; Innenausbau in Bad Laasphe, Siegen <span className="text-blue">&amp; Umgebung</span>
            </h1>
            <div>
              <p className="lead">
                Einzelne Gewerke oder komplette Sanierung – für Wohnungen, Häuser, Büros, Praxen und Gewerbe. Mit rund 40 eigenen Fachkräften
                und einem Ansprechpartner für alles.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink-2">
                <li className="flex items-center gap-2">
                  <Check /> seit {site.since}
                </li>
                <li className="flex items-center gap-2">
                  <Check /> eigene Teams
                </li>
                <li className="flex items-center gap-2">
                  <Check /> 3D-Planung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="wrap">
          <TradeIndex trades={tradeIndex} />
        </div>
      </section>

      <section className="border-y border-line">
        <div className="wrap grid md:grid-cols-2 md:divide-x md:divide-line">
          <Link href="/schadensanierung/wasserschaden" className="group block py-10 md:pr-10">
            <span className="block font-display text-2xl font-bold text-navy group-hover:text-blue">Wasser- oder Brandschaden?</span>
            <span className="mt-2 block text-ink-2">Trocknung, Sanierung und Abwicklung mit der Versicherung – aus einer Hand.</span>
            <span className="link-arrow mt-5">Schadensanierung →</span>
          </Link>
          <Link href="/generalunternehmer" className="group block border-t border-line py-10 md:border-t-0 md:pl-10">
            <span className="block font-display text-2xl font-bold text-navy group-hover:text-blue">Für Generalunternehmer</span>
            <span className="mt-2 block text-ink-2">Nachunternehmer mit allen Nachweisen: §48b, §13b, SOKA-BAU, Unbedenklichkeit.</span>
            <span className="link-arrow mt-5">Kapazität anfragen →</span>
          </Link>
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
