import Link from "next/link";
import { site } from "@/lib/site";

export function Stat({ value, label, todo }: { value: string; label: string; todo?: boolean }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className={`num font-display text-4xl font-extrabold ${todo ? "text-slate/50" : "text-navy"}`}>{value}</dd>
      <dd className="mt-1 text-sm text-slate">{label}</dd>
    </div>
  );
}

export function FinalCta({ title, text, href, cta }: { title: string; text: string; href: string; cta: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="wrap grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="h2 text-white">{title}</h2>
          <p className="mt-5 text-lg text-white/70">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href={href} className="btn-primary min-h-14 px-8 text-base">
            {cta}
          </Link>
          <a href={site.phoneHref} className="btn-light num min-h-14 px-8 text-base">
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
    <nav aria-label="Brotkrumen" className={`flex flex-wrap items-center gap-2 text-sm ${dark ? "text-white/60" : "text-slate"}`}>
      {items.map((it, i) => (
        <span key={it.name} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {it.href ? (
            <Link href={it.href} className={dark ? "hover:text-white" : "hover:text-blue"}>
              {it.name}
            </Link>
          ) : (
            <span className={dark ? "text-white" : "text-ink"} aria-current="page">
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

export function TrustStrip({ items }: { items: [string, string][] }) {
  return (
    <section className="border-y border-line">
      <dl className="wrap grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
        {items.map(([v, l]) => (
          <div key={l} className="py-8 lg:px-8 lg:first:pl-0">
            <dt className="sr-only">{l}</dt>
            <dd className={`font-display text-2xl font-extrabold sm:text-3xl ${v.includes("[") ? "text-slate/50" : "text-navy"}`}>{v}</dd>
            <dd className="mt-1 text-sm text-slate">{l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ProcessSteps({ title, steps, lead }: { title: string; steps: [string, string][]; lead?: string }) {
  return (
    <section className="section bg-navy text-white">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="h2 text-white">{title}</h2>
          {lead && <p className="max-w-xl text-lg text-white/70 lg:justify-self-end">{lead}</p>}
        </div>
        <ol className={`mt-14 grid gap-10 sm:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {steps.map(([t, text], i) => (
            <li key={t} className="border-t border-white/20 pt-6">
              <span className="num font-display text-5xl font-extrabold text-blue-bright">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{t}</h3>
              <p className="mt-2 leading-relaxed text-white/70">
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
          <p className="text-slate">
            Google ★ <span className="todo">[4,X]</span> · <span className="todo">[X]</span> Bewertungen
          </p>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {quotes.map((q) => (
            <figure key={q} className="border-l-2 border-blue pl-7">
              {stars && (
                <p className="text-blue" aria-label="5 von 5 Sternen">
                  ★★★★★
                </p>
              )}
              <blockquote className="mt-4 font-display text-xl leading-snug font-semibold text-navy">„{q}“</blockquote>
              <figcaption className="mt-6 text-sm text-slate">
                <span className="font-semibold text-ink">[Name]</span> · [Ort]
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
        <ul className="mt-12 grid border-t border-line sm:grid-cols-2 sm:gap-x-12">
          {items.map((r) => (
            <li key={r.href} className="border-b border-line">
              <Link href={r.href} className="group flex min-h-24 items-center justify-between gap-6 py-5">
                <span>
                  <span className="block font-display text-2xl font-bold text-navy group-hover:text-blue">{r.name}</span>
                  <span className="text-ink-2">{r.text}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-line transition group-hover:border-blue group-hover:bg-blue group-hover:text-white"
                >
                  →
                </span>
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
