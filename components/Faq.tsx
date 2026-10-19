export type FaqItem = { q: string; a: string };

/** Aufklappbare Fragen (ohne JavaScript) + Schema FAQPage */
export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="h2">{title}</h2>
          <p className="mt-5 max-w-sm text-ink-2">
            Ihre Frage ist nicht dabei? Rufen Sie uns an – wir antworten lieber persönlich.
          </p>
        </div>
        <div className="border-t border-line">
          {items.map((item, i) => (
            <details key={item.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="relative h-4 w-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-blue after:absolute after:top-0 after:left-1/2 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-blue after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-2xl pb-6 text-[17px] leading-relaxed text-ink-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
