import type { Metadata } from "next";
import Link from "next/link";
import { EstimateForm } from "./EstimateForm";
import { Gallery } from "./Gallery";
import { BeforeAfter } from "./BeforeAfter";
import { ServiceAreaMap, TOWNS } from "./ServiceAreaMap";
import { ReadMore } from "./ReadMore";
import { Faq } from "./Faq";
import { Articles } from "./Articles";
import { Photo } from "./Photo";
import { Check } from "./Check";
import {
  Breadcrumbs,
  FinalCta,
  Masskette,
  ProcessSteps,
  RelatedLinks,
  Testimonials,
  Todo,
  TrustStrip,
  breadcrumbSchema,
} from "./Blocks";
import { DEFAULT_PROCESS, DEFAULT_TRUST, type TradeContent } from "@/lib/trades";
import { site } from "@/lib/site";

export function tradeMetadata(t: TradeContent): Metadata {
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/bau-innenausbau/${t.slug}` },
  };
}

/** Vorlage für alle Gewerke-Seiten unter /bau-innenausbau (Struktur nach Wireframe „Fliesenarbeiten“) */
export function TradePage({ t }: { t: TradeContent }) {
  const crumbs = [
    { name: "Startseite", href: "/" },
    { name: "Bau & Innenausbau", href: "/bau-innenausbau" },
    { name: t.name, href: `/bau-innenausbau/${t.slug}` },
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: t.name,
      provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: "+49 2754 220430" },
      areaServed: ["Bad Laasphe", ...TOWNS.map((x) => x.name)],
    },
    breadcrumbSchema(crumbs),
  ];

  return (
    <>
      {/* Hero als Fliesenspiegel + Formular */}
      <section id="anfrage" className="bg-fuge p-(--spacing-fuge)">
        <div className="fliesen mx-auto max-w-[1600px] lg:grid-cols-12">
          <div className="bg-tanne px-6 pt-8 pb-12 text-weiss sm:px-10 lg:col-span-7 lg:px-14 lg:pb-16">
            <Breadcrumbs tone="dark" items={crumbs.map((c, i) => (i === crumbs.length - 1 ? { name: c.name } : c))} />
            <h1 className="mt-12 text-[2.9rem] leading-[0.95] font-semibold text-weiss sm:text-7xl xl:text-[5rem]">
              {t.h1[0]} {t.h1[1]}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-weiss/80 sm:text-[1.25rem]">{t.lead}</p>
            <ul className="mt-9 space-y-2.5 text-[17px] text-weiss/90">
              {t.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check light /> {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="bg-kalk px-5 py-9 sm:px-10 sm:py-12 lg:col-span-5 lg:row-span-2 lg:px-12">
            <div className="lg:sticky lg:top-28">
              <EstimateForm source={t.name} steps={t.estimate} />
            </div>
          </aside>
          <div className="fliesen grid-cols-[2fr_1fr_1fr] lg:col-span-7">
            <Photo src={t.hero[0]} alt={`${t.name}: Projektfoto`} className="min-h-48 sm:min-h-72" priority sizes="(min-width: 1024px) 30vw, 50vw" />
            <Photo src={t.hero[1]} alt={`${t.name}: Detail`} className="min-h-48 sm:min-h-72" sizes="15vw" />
            <Photo src={t.hero[2]} alt={`${t.name}: weiteres Projekt`} className="min-h-48 sm:min-h-72" sizes="15vw" />
          </div>
        </div>
      </section>

      <TrustStrip items={t.trust ?? DEFAULT_TRUST} />

      {/* Leistungen */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="h2">{t.servicesTitle}</h2>
            <p className="lead lg:justify-self-end">{t.servicesLead}</p>
          </div>
          <ul className="fliesen mt-14 bg-fuge p-(--spacing-fuge) sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map(([title, text]) => (
              <li key={title} className="bg-weiss p-7">
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-schiefer-2">
                  <Todo text={text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Galerie */}
      <section className="section bg-kalk">
        <div className="wrap">
          <h2 className="h2">{t.galleryTitle}</h2>
          <p className="lead mt-5 mb-10">Echte Projekte unserer Teams – keine Stockfotos.</p>
          <Gallery items={t.gallery} cats={t.galleryCats} />
          <Link href="/referenzen" className="btn-ghost mt-8">
            Mehr Projekte ansehen
          </Link>
        </div>
      </section>

      {/* Vorher / Nachher */}
      {t.caseStudy && (
        <section className="section">
          <div className="wrap grid items-center gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
            <BeforeAfter after={t.caseStudy.after} before={t.caseStudy.before} alt={t.caseStudy.alt} />
            <div>
              <p className="text-[15px] text-stein">
                Projektbeispiel aus <span className="todo">[Ort]</span>
              </p>
              <h2 className="mt-2 text-4xl leading-none sm:text-5xl">{t.caseStudy.title}</h2>
              <div className="mt-8">
                <Masskette items={t.caseStudy.stats} />
              </div>
              <p className="mt-6 text-schiefer-2">
                <span className="todo">[2–3 Sätze: Ausgangslage, Lösung, Ergebnis.]</span>
              </p>
            </div>
          </div>
        </section>
      )}

      <ProcessSteps title="So läuft Ihr Projekt ab" steps={t.process ?? DEFAULT_PROCESS} />

      {/* Kosten */}
      {t.costs && (
        <section className="section">
          <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="h2">{t.costs.title}</h2>
              <p className="lead mt-6">{t.costs.lead}</p>
              <ul className="mt-8 space-y-3 text-schiefer-2">
                {t.costs.factors.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <table className="w-full text-left text-[17px]">
                <caption className="sr-only">Richtwerte {t.name}</caption>
                <thead>
                  <tr className="border-b-2 border-tanne text-sm text-stein">
                    <th className="py-3 font-medium">Leistung</th>
                    <th className="py-3 text-right font-medium">Richtwert</th>
                  </tr>
                </thead>
                <tbody>
                  {t.costs.rows.map(([l, unit]) => (
                    <tr key={l} className="border-b border-fuge">
                      <td className="py-5">{l}</td>
                      <td className="num py-5 text-right font-semibold whitespace-nowrap text-tanne">
                        ab <span className="todo">[X]</span> {unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-stein">Preise zzgl. Material. Verbindlich ist das Angebot nach dem Aufmaß.</p>
            </div>
          </div>
        </section>
      )}

      {/* Einzugsgebiet */}
      <section className="section bg-kalk">
        <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <ServiceAreaMap />
          </div>
          <div>
            <h2 className="h2">Ihr {t.noun} in der Region</h2>
            <p className="lead mt-6">Von unserem Sitz in Bad Laasphe sind wir schnell bei Ihnen. Größere Projekte übernehmen wir bundesweit.</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Bad Laasphe", ...TOWNS.map((x) => x.name)].map((n, i) => (
                <li key={n} className={`rounded-(--radius-kante) px-4 py-2 text-[15px] font-medium ${i === 0 ? "bg-tanne text-weiss" : "bg-weiss text-tanne ring-1 ring-fuge"}`}>
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stein">
              <span className="todo">[Orte mit Kunden abstimmen · später ggf. eigene Ortsseiten]</span>
            </p>
          </div>
        </div>
      </section>

      <Testimonials title={`Was Kunden über unsere ${t.name === "Sanitär" ? "Bäder" : t.name} sagen`} quotes={t.testimonials} />

      {/* SEO-Text */}
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="wrap max-w-3xl">
          <article className="text-[17px] leading-relaxed text-schiefer-2 [&_h2]:mb-5 [&_h2]:text-4xl [&_h2]:leading-none [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-4 [&_ul]:mb-4">
            <ReadMore>
              <h2>{t.seo.h2}</h2>
              <p>{t.seo.intro}</p>
              {t.seo.blocks.map((b) => (
                <div key={b.h3}>
                  <h3>{b.h3}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
              <h3>Ihr Weg zum Angebot</h3>
              <ul>
                <li>Formular ausfüllen und Fotos hochladen</li>
                <li>Aufmaß und Beratung vor Ort</li>
                <li>3D-Plan und verbindliches Angebot</li>
              </ul>
              <p>
                <span className="todo">[Text auf 600–800 Wörter ausbauen · Keyword-Recherche vorher]</span>
              </p>
            </ReadMore>
          </article>
        </div>
      </section>

      <div className="border-t border-fuge" />
      <Faq title={`Häufige Fragen zu ${t.name}`} items={t.faq} />

      {/* Ratgeber */}
      <section className="section bg-kalk">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="h2">{t.articlesTitle}</h2>
              <p className="lead mt-5">Ausführliche Antworten auf die Fragen, die uns Kunden am häufigsten stellen.</p>
            </div>
            <Link href="/ratgeber" className="btn-ghost shrink-0">
              Alle Artikel
            </Link>
          </div>
          <Articles items={t.articles} />
        </div>
      </section>

      <RelatedLinks title="Passt auch zu Ihrem Projekt" items={t.related} />

      <FinalCta title={t.ctaTitle} text="Fotos schicken, Einschätzung in [48 h] erhalten." href="#anfrage" cta="Kostenlose Einschätzung" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
