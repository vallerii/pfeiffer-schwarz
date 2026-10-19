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
      {/* Hero + Formular */}
      <section id="anfrage" className="pt-8 pb-20 lg:pb-28">
        <div className="wrap">
          <Breadcrumbs items={crumbs.map((c, i) => (i === crumbs.length - 1 ? { name: c.name } : c))} />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
            <div className="min-w-0">
              <h1 className="text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
                {t.h1[0]} <span className="text-blue">{t.h1[1]}</span>
              </h1>
              <p className="lead mt-7">{t.lead}</p>
              <ul className="mt-8 space-y-3 text-[17px]">
                {t.benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Check /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-12 grid grid-cols-5 gap-3">
                <Photo src={t.hero[0]} alt={`${t.name}: Projektfoto`} className="col-span-3 aspect-[4/3]" priority sizes="(min-width: 1024px) 35vw, 60vw" />
                <div className="col-span-2 grid gap-3">
                  <Photo src={t.hero[1]} alt={`${t.name}: Detail`} className="" sizes="20vw" />
                  <Photo src={t.hero[2]} alt={`${t.name}: weiteres Projekt`} className="" sizes="20vw" />
                </div>
              </div>
            </div>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-t-4 border-blue bg-paper px-6 py-8 sm:p-10">
                <EstimateForm source={t.name} steps={t.estimate} />
              </div>
            </aside>
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
          <ol className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map(([title, text], i) => (
              <li key={title} className="border-t border-line py-7">
                <span className="num text-sm font-semibold text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-1.5 text-ink-2">
                  <Todo text={text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Galerie */}
      <section className="section bg-paper">
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
              <p className="text-sm text-slate">
                Projektbeispiel · <span className="todo">[Ort]</span>
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">{t.caseStudy.title}</h2>
              <dl className="mt-8 grid grid-cols-3 border-y border-line py-6">
                {t.caseStudy.stats.map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-display text-2xl font-extrabold text-navy">{v}</dd>
                    <dd className="text-sm text-slate">{l}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-ink-2">
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
              <ul className="mt-8 space-y-3 text-ink-2">
                {t.costs.factors.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-blue" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <table className="w-full text-left text-[17px]">
                <caption className="sr-only">Richtwerte {t.name}</caption>
                <thead>
                  <tr className="border-b-2 border-navy text-sm text-slate">
                    <th className="py-3 font-medium">Leistung</th>
                    <th className="py-3 text-right font-medium">Richtwert</th>
                  </tr>
                </thead>
                <tbody>
                  {t.costs.rows.map(([l, unit]) => (
                    <tr key={l} className="border-b border-line">
                      <td className="py-5">{l}</td>
                      <td className="py-5 text-right font-semibold whitespace-nowrap text-navy">
                        ab <span className="todo">[X]</span> {unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-slate">Preise zzgl. Material. Verbindlich ist das Angebot nach dem Aufmaß.</p>
            </div>
          </div>
        </section>
      )}

      {/* Einzugsgebiet */}
      <section className="section bg-paper">
        <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <ServiceAreaMap />
          </div>
          <div>
            <h2 className="h2">Ihr {t.noun} in der Region</h2>
            <p className="lead mt-6">Von unserem Sitz in Bad Laasphe sind wir schnell bei Ihnen. Größere Projekte übernehmen wir bundesweit.</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Bad Laasphe", ...TOWNS.map((x) => x.name)].map((n, i) => (
                <li key={n} className={`px-4 py-2 text-[15px] font-medium ${i === 0 ? "bg-blue text-white" : "bg-white text-navy"}`}>
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate">
              <span className="todo">[Orte mit Kunden abstimmen · später ggf. eigene Ortsseiten]</span>
            </p>
          </div>
        </div>
      </section>

      <Testimonials title={`Was Kunden über unsere ${t.name === "Sanitär" ? "Bäder" : t.name} sagen`} quotes={t.testimonials} />

      {/* SEO-Text */}
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="wrap max-w-3xl">
          <article className="text-[17px] leading-relaxed text-ink-2 [&_h2]:mb-5 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-4 [&_ul]:mb-4">
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

      <div className="border-t border-line" />
      <Faq title={`Häufige Fragen zu ${t.name}`} items={t.faq} />

      {/* Ratgeber */}
      <section className="section bg-paper">
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
