import Link from "next/link";
import { site } from "@/lib/site";

/** Kennzahl: große Ziffer, kleine Beschriftung */
export function Stat({ value, label, todo }: { value: string; label: string; todo?: boolean }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className={`num font-display text-5xl leading-none font-semibold ${todo ? "text-stein/50" : "text-tanne"}`}>{value}</dd>
      <dd className="mt-2 text-[15px] text-stein">{label}</dd>
    </div>
  );
}

/**
 * Maßkette wie auf einer Bauzeichnung: Wert über der Maßlinie, Einheit darunter.
 * Für Projektkennzahlen (Zimmer, Wochen, m²).
 */
export function Masskette({ items, tone = "light" }: { items: [string, string][]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const line = dark ? "bg-weiss/50" : "bg-tanne/60";
  return (
    <dl className="grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map(([v, l], i) => {
        const todo = v.includes("[");
        return (
          <div key={l} className="text-center">
            <dt className="sr-only">{l}</dt>
            <dd className={`num font-display text-4xl leading-none font-semibold sm:text-5xl ${todo ? (dark ? "text-weiss/40" : "text-stein/50") : dark ? "text-weiss" : "text-tanne"}`}>
              {v.replace(/[[\]]/g, "")}
            </dd>
            <dd aria-hidden="true" className="relative mt-3 h-3">
              <span className={`absolute inset-x-0 top-1/2 h-px ${line}`} />
              <span className={`absolute top-0 left-0 h-3 w-px ${line}`} />
              {i === items.length - 1 && <span className={`absolute top-0 right-0 h-3 w-px ${line}`} />}
            </dd>
            <dd className={`mt-2 text-[15px] ${dark ? "text-weiss/70" : "text-stein"}`}>{l}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export function FinalCta({ title, text, href, cta }: { title: string; text: string; href: string; cta: string }) {
  return (
    <section className="bg-tanne text-weiss">
      <div className="wrap grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <h2 className="h2 text-weiss">{title}</h2>
          <p className="mt-5 text-lg text-weiss/75">
            <Todo text={text} />
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href={href} className="btn-primary min-h-14 px-8 text-[17px]">
            {cta}
          </Link>
          <a href={site.phoneHref} className="btn-light num min-h-14 px-8 text-[17px]">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items, tone = "light" }: { items: { name: string; href?: string }[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Brotkrumen" className={`flex flex-wrap items-center gap-2 text-[15px] ${dark ? "text-weiss/60" : "text-stein"}`}>
      {items.map((it, i) => (
        <span key={it.name} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {it.href ? (
            <Link href={it.href} className={dark ? "hover:text-weiss" : "hover:text-tanne"}>
              {it.name}
            </Link>
          ) : (
            <span className={dark ? "text-weiss" : "text-schiefer"} aria-current="page">
              {it.name}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: site.url + it.href })),
  };
}

/** Vertrauensleiste als Kachelreihe mit Fugen */
export function TrustStrip({ items }: { items: [string, string][] }) {
  return (
    <section className="bg-fuge p-(--spacing-fuge)">
      <dl className="fliesen mx-auto max-w-[1600px] grid-cols-2 lg:grid-cols-4">
        {items.map(([v, l]) => (
          <div key={l} className="bg-kalk px-6 py-8 sm:px-10">
            <dt className="sr-only">{l}</dt>
            <dd className={`font-display text-3xl leading-none font-semibold sm:text-4xl ${v.includes("[") ? "text-stein/50" : "text-tanne"}`}>{v}</dd>
            <dd className="mt-2 text-[15px] text-stein">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ProcessSteps({ title, steps, lead }: { title: string; steps: [string, string][]; lead?: string }) {
  return (
    <section className="section bg-tanne text-weiss">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="h2 text-weiss">{title}</h2>
          {lead && <p className="max-w-xl text-lg text-weiss/75 lg:justify-self-end">{lead}</p>}
        </div>
        <ol
          className={`fliesen mt-14 bg-tanne-tief p-(--spacing-fuge) sm:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          {steps.map(([t, text], i) => (
            <li key={t} className="bg-tanne-hell p-7 sm:p-8">
              <span className="num font-display text-6xl leading-none font-semibold text-messing">{i + 1}</span>
              <h3 className="mt-6 text-xl text-weiss">{t}</h3>
              <p className="mt-2 leading-relaxed text-weiss/75">
                <Todo text={text} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonials({ title, quotes, stars = true }: { title: string; quotes: string[]; stars?: boolean }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="h2 max-w-2xl">{title}</h2>
          <p className="text-stein">
            Google <span className="todo">[4,X]</span> von 5, <span className="todo">[X]</span> Bewertungen
          </p>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {quotes.map((q) => (
            <figure key={q} className="border-t-2 border-messing pt-7">
              {stars && (
                <p className="tracking-[0.2em] text-messing-dunkel" aria-label="5 von 5 Sternen">
                  ★★★★★
                </p>
              )}
              <blockquote className="mt-4 text-[1.3rem] leading-snug font-medium text-tanne">„{q}“</blockquote>
              <figcaption className="mt-6 text-[15px] text-stein">
                <span className="font-semibold text-schiefer">[Name]</span>, [Ort]
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ title, items }: { title: string; items: { name: string; text: string; href: string }[] }) {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="h2">{title}</h2>
        <ul className="fliesen mt-12 bg-fuge p-(--spacing-fuge) sm:grid-cols-2 lg:grid-cols-4">
          {items.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="group flex h-full min-h-40 flex-col justify-between gap-6 bg-kalk p-7 transition-colors hover:bg-tanne">
                <span className="font-display text-[1.75rem] leading-none font-semibold text-tanne group-hover:text-weiss">{r.name}</span>
                <span className="text-schiefer-2 group-hover:text-weiss/75">{r.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Text mit [Platzhaltern] → Platzhalter gelb markiert */
export function Todo({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? (
          <span key={i} className="todo">
            {p}
          </span>
        ) : (
          p
        ),
      )}
    </>
  );
}
