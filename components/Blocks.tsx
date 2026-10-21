import Link from "next/link";
import { site } from "@/lib/site";

export function Stat({ value, label, todo }: { value: string; label: string; todo?: boolean }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className={`num text-[clamp(2rem,1.3rem+3.2vw,4rem)] leading-none font-semibold tracking-[-0.03em] ${todo ? "text-slate/50" : "text-navy"}`}>{value}</dd>
      <dd className="small mt-2 text-slate">{label}</dd>
    </div>
  );
}

export function FinalCta({ title, text, href, cta }: { title: string; text: string; href: string; cta: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="wrap grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <h2 className="h2 text-white">{title}</h2>
          <p className="mt-5 text-white/80">
            <Todo text={text} />
          </p>
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
    <section className="px-4 sm:px-5">
      <dl className="mx-auto grid max-w-(--container-site) grid-cols-2 gap-2 lg:grid-cols-4">
        {items.map(([v, l]) => (
          <div key={l} className="bg-paper p-5 sm:p-6">
            <dt className="sr-only">{l}</dt>
            <dd className={`t-lead font-semibold ${v.includes("[") ? "text-slate/60" : "text-navy"}`}>{v}</dd>
            <dd className="small mt-1 text-slate">{l}</dd>
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
          {lead && <p className="max-w-xl text-white/80 lg:justify-self-end">{lead}</p>}
        </div>
        <ol className={`mt-14 grid gap-2 sm:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {steps.map(([t, text], i) => (
            <li key={t} className="bg-navy-soft p-6">
              <span className="num t-lead block font-semibold text-blue-pale">Schritt {i + 1}</span>
              <h3 className="t-lead mt-6 text-white">{t}</h3>
              <p className="mt-2 text-white/80">
                <Todo text={text} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Testimonials({ title, quotes }: { title: string; quotes: string[]; stars?: boolean }) {
  return (
    <section className="section">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-3">
          <h2 className="t-lead font-semibold text-navy">{title}</h2>
          <p className="small mt-3 text-slate">
            Google <span className="todo">[4,X]</span> von 5 bei <span className="todo">[X]</span> Bewertungen
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-9 lg:gap-6">
          {quotes.map((q) => (
            <figure key={q}>
              <blockquote className="max-w-[40ch] text-ink">„<Todo text={q} />“</blockquote>
              <figcaption className="small mt-4 text-slate">
                <span className="font-semibold text-ink">
                  <Todo text="[Name]" />
                </span>{" "}
                <Todo text="[Ort]" />
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
        <ul className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="group flex h-full min-h-36 flex-col justify-between gap-6 bg-paper p-6 transition-colors hover:bg-blue">
                <span className="t-lead font-semibold text-navy group-hover:text-white">{r.name}</span>
                <span className="text-ink-2 group-hover:text-white/85">{r.text}</span>
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
