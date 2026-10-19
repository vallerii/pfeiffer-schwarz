import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/** Inline: [Text](/pfad), **fett**, [Platzhalter] */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|(\[[^\]]+\])/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      const cls = "font-semibold text-blue underline decoration-blue/30 underline-offset-4 hover:decoration-blue";
      out.push(
        href.startsWith("/") ? (
          <Link key={k++} href={href} className={cls}>
            {m[1]}
          </Link>
        ) : (
          <a key={k++} href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
            {m[1]}
          </a>
        ),
      );
    } else if (m[3]) {
      out.push(
        <strong key={k++} className="font-semibold text-navy">
          {m[3]}
        </strong>,
      );
    } else if (m[4]) {
      out.push(
        <span key={k++} className="todo">
          {m[4]}
        </span>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function headings(md: string) {
  return md
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ text: l.slice(3), id: slug(l.slice(3)) }));
}

/** Rendert das einfache Markdown der Ratgeber-Artikel */
export function Prose({ md }: { md: string }) {
  const blocks = md.trim().split(/\n\s*\n/);
  return (
    <div className="text-[18px] leading-[1.75] text-ink-2">
      {blocks.map((b, i) => {
        const lines = b.split("\n");
        if (b.startsWith("## ")) {
          const t = b.slice(3);
          return (
            <h2 key={i} id={slug(t)} className="mt-14 mb-5 scroll-mt-28 text-2xl leading-tight font-bold sm:text-3xl">
              {t}
            </h2>
          );
        }
        if (b.startsWith("### ")) return <h3 key={i} className="mt-10 mb-3 text-xl font-bold">{b.slice(4)}</h3>;
        if (b.startsWith("> "))
          return (
            <aside key={i} className="my-8 border-l-4 border-blue bg-blue-tint px-6 py-5 text-[17px] text-navy">
              {inline(lines.map((l) => l.replace(/^> ?/, "")).join(" "))}
            </aside>
          );
        if (lines.every((l) => l.startsWith("- ")))
          return (
            <ul key={i} className="my-6 space-y-3">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-4">
                  <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-blue" aria-hidden="true" />
                  <span>{inline(l.slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        if (lines.every((l) => /^\d+\. /.test(l)))
          return (
            <ol key={i} className="my-6 space-y-3">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-4">
                  <span className="num w-6 shrink-0 font-display font-bold text-blue">{String(j + 1).padStart(2, "0")}</span>
                  <span>{inline(l.replace(/^\d+\. /, ""))}</span>
                </li>
              ))}
            </ol>
          );
        return (
          <p key={i} className="mb-5">
            {lines.map((l, j) => (
              <Fragment key={j}>
                {j > 0 && " "}
                {inline(l)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
