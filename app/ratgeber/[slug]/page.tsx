import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Prose, headings } from "@/components/Prose";
import { Articles, formatMonth, fromRatgeber } from "@/components/Articles";
import { Breadcrumbs, FinalCta, breadcrumbSchema } from "@/components/Blocks";
import { articleBySlug, articles } from "@/lib/ratgeber";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = articleBySlug((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/ratgeber/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, images: [`/img/${a.img}`] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const a = articleBySlug((await params).slug);
  if (!a) notFound();

  const toc = headings(a.body);
  const more = [...articles.filter((x) => x.slug !== a.slug && x.cat === a.cat), ...articles.filter((x) => x.cat !== a.cat)].slice(0, 3);
  const crumbs = [
    { name: "Startseite", href: "/" },
    { name: "Ratgeber", href: "/ratgeber" },
    { name: a.title, href: `/ratgeber/${a.slug}` },
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.description,
      image: `${site.url}/img/${a.img}`,
      dateModified: a.updated,
      author: { "@type": "Organization", name: site.name },
      publisher: { "@type": "Organization", name: site.legalName },
      mainEntityOfPage: `${site.url}/ratgeber/${a.slug}`,
    },
    breadcrumbSchema(crumbs),
  ];

  return (
    <>
      <article>
        <header className="pt-8">
          <div className="wrap">
            <Breadcrumbs items={[crumbs[0], crumbs[1], { name: a.title }]} />
            <div className="mt-10 max-w-4xl">
              <p className="flex flex-wrap gap-3 text-sm text-stein">
                <Link href="/ratgeber" className="font-medium text-messing-dunkel hover:underline">
                  {a.cat}
                </Link>
                <span>
                  {a.minutes} Min. Lesezeit · Aktualisiert {formatMonth(a.updated)}
                </span>
              </p>
              <h1 className="mt-4 text-[2.6rem] leading-[0.98] sm:text-6xl">{a.title}</h1>
              <p className="lead mt-6">{a.description}</p>
            </div>
          </div>
          <div className="wrap mt-12">
            <Photo src={a.img} alt="" className="aspect-[16/9] lg:aspect-[21/9]" priority sizes="100vw" />
          </div>
        </header>

        <div className="wrap grid gap-14 py-16 lg:grid-cols-[minmax(0,720px)_1fr] lg:gap-20 lg:py-20">
          <div className="min-w-0">
            <Prose md={a.body} />
            <p className="mt-12 border-t border-fuge pt-6 text-sm text-stein">
              Stand: {formatMonth(a.updated)}. Die Inhalte ersetzen keine individuelle Beratung vor Ort.
            </p>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {toc.length > 0 && (
              <nav aria-label="Inhalt" className="hidden border-t-2 border-tanne pt-5 lg:block">
                <p className="font-display font-semibold text-tanne">Inhalt</p>
                <ol className="mt-4 space-y-2.5 text-[15px]">
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-schiefer-2 hover:text-messing-dunkel">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="mt-10 border-t-4 border-messing bg-tanne p-8 text-white">
              <p className="font-display text-xl font-semibold">Projekt in Planung?</p>
              <p className="mt-2 text-white/70">Wir beraten Sie persönlich – vom ersten Aufmaß bis zur Übergabe.</p>
              <Link href={a.service.href} className="btn-primary mt-6 w-full">
                {a.service.label}
              </Link>
              <a href={site.phoneHref} className="num mt-4 block text-center text-sm font-semibold text-white/80 hover:text-white">
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </article>

      <section className="section bg-kalk">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="h2">Weiterlesen</h2>
            <Link href="/ratgeber" className="btn-ghost shrink-0">
              Alle Artikel
            </Link>
          </div>
          <Articles items={more.map((x) => fromRatgeber(x))} />
        </div>
      </section>

      <FinalCta title="Fragen zu Ihrem Projekt?" text="Wir melden uns innerhalb von [24 h] – persönlich." href="/#anfrage" cta="Projekt anfragen" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
