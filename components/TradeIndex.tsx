"use client";

import Link from "next/link";
import { useState } from "react";
import { Photo } from "./Photo";

export type Trade = { name: string; text: string; href: string; img: string };

/** Liste der Gewerke: Zeilen statt Kacheln, das Foto links wechselt beim Überfahren. */
export function TradeIndex({ trades }: { trades: Trade[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden">
          {trades.map((t, i) => (
            <div
              key={t.href}
              className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== active}
            >
              <Photo src={t.img} alt={t.name} className="h-full w-full" sizes="40vw" />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-7 pt-24 text-white">
            <p className="font-display text-2xl font-bold">{trades[active].name}</p>
            <p className="text-white/75">Eigenes Foto aus einem unserer Projekte</p>
          </div>
        </div>
      </div>
      <ol className="border-t border-line">
        {trades.map((t, i) => (
          <li key={t.href} className="border-b border-line">
            <Link
              href={t.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:gap-8 sm:py-7"
            >
              <span className={`num w-8 font-display text-sm font-semibold ${i === active ? "text-blue" : "text-slate"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-xl font-bold text-navy transition-colors group-hover:text-blue sm:text-2xl">
                  {t.name}
                </span>
                <span className="mt-1 block text-ink-2">{t.text}</span>
              </span>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center border border-line text-navy transition group-hover:border-blue group-hover:bg-blue group-hover:text-white"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
