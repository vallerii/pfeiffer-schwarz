import Link from "next/link";
import { Photo } from "./Photo";
import { articleByTitle, type RatgeberArticle } from "@/lib/ratgeber";

export type Article = { tag?: string; time: string; title: string; text: string; img: string; href?: string };

export const formatMonth = (iso: string) => new Date(iso).toLocaleDateString("de-DE", { month: "long", year: "numeric" });

export function fromRatgeber(a: RatgeberArticle, withTag = true): Article {
  return { tag: withTag ? a.cat : undefined, time: `${a.minutes} Min.`, title: a.title, text: a.description, img: a.img, href: `/ratgeber/${a.slug}` };
}

/** Ratgeber-Teaser: Bild, Meta, Titel – ohne Kartenrahmen. Verlinkt automatisch auf den passenden Artikel. */
export function Articles({ items }: { items: Article[] }) {
  return (
    <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-3">
      {items.map((a) => {
        const match = articleByTitle(a.title);
        const href = a.href ?? (match ? `/ratgeber/${match.slug}` : "/ratgeber");
        return (
          <article key={a.title} className="group relative flex flex-col">
            <Photo src={a.img} alt="" className="aspect-[3/2]" sizes="(min-width: 768px) 33vw, 100vw" />
            <p className="mt-5 flex gap-3 text-sm text-stein">
              {a.tag && <span className="font-medium text-messing-dunkel">{a.tag}</span>}
              <span>
                {a.time} Lesezeit{match && <> · {formatMonth(match.updated)}</>}
              </span>
            </p>
            <h3 className="mt-2 text-xl leading-snug font-semibold">
              <Link href={href} className="after:absolute after:inset-0 group-hover:text-messing-dunkel">
                {a.title}
              </Link>
            </h3>
            <p className="mt-2 text-schiefer-2">{a.text}</p>
          </article>
        );
      })}
    </div>
  );
}
