export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="wrap max-w-3xl">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-ink-2 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold">{children}</div>
      </div>
    </section>
  );
}
