import Link from "next/link";
import { Photo } from "./Photo";

export type Trade = { name: string; text: string; href: string; img: string };

/**
 * Gewerke als Fliesenspiegel: jede Leistung eine Kachel mit eigenem Projektfoto,
 * dazwischen Fugen. Bleibt in der letzten Reihe Platz, füllt ihn eine Anfrage-Kachel.
 */
export function TradeIndex({
  trades,
  fill = { title: "Ihr Projekt passt nirgends rein?", text: "Erzählen Sie uns davon – wir sagen ehrlich, ob wir es übernehmen.", href: "/#anfrage", cta: "Projekt anfragen" },
}: {
  trades: Trade[];
  fill?: { title: string; text: string; href: string; cta: string };
}) {
  const rest = (3 - (trades.length % 3)) % 3;
  return (
    <ul className="fliesen bg-fuge p-(--spacing-fuge) sm:grid-cols-2 lg:grid-cols-3">
      {trades.map((t) => (
        <li key={t.href} className="bg-weiss">
          <Link href={t.href} className="group block h-full">
            <Photo src={t.img} alt={t.name} className="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            <span className="block p-6 sm:p-7">
              <span className="block font-display text-[1.9rem] leading-none font-semibold text-tanne underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-messing">
                {t.name}
              </span>
              <span className="mt-2 block text-schiefer-2">{t.text}</span>
            </span>
          </Link>
        </li>
      ))}
      {fill && (
        <li className={`bg-tanne text-weiss ${rest === 2 ? "lg:col-span-2" : ""} ${rest === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}>
          <div className="flex h-full min-h-56 flex-col justify-between gap-8 p-7 sm:p-9">
            <span>
              <span className="block font-display text-[2.2rem] leading-none font-semibold">{fill.title}</span>
              <span className="mt-3 block max-w-md text-weiss/75">{fill.text}</span>
            </span>
            <Link href={fill.href} className="btn-primary self-start">
              {fill.cta}
            </Link>
          </div>
        </li>
      )}
    </ul>
  );
}
