"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Row = { name: string; value: string; href: string; img: string };
type Group = { name: string; rows: Row[] };

/** Gewerke als zweiseitige Zeilen; rechts zeigt ein großes Foto das gewählte Gewerk. */
export function TradeRows({ groups }: { groups: Group[] }) {
  const all = groups.flatMap((g) => g.rows);
  const [active, setActive] = useState(all[0]);
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-5 lg:col-start-2">
        {groups.map((g) => (
          <div key={g.name} className="mt-10 first:mt-0">
            <p className="text-slate">{g.name}</p>
            <ul className="mt-2">
              {g.rows.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onMouseEnter={() => setActive(r)}
                    onFocus={() => setActive(r)}
                    className={`group flex min-h-11 items-baseline justify-between gap-6 py-1.5 transition-colors ${
                      active.href === r.href ? "text-navy" : "text-ink"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="relative h-4 w-4 shrink-0 translate-y-0.5 overflow-hidden rounded-full bg-paper">
                        <Image src={`/img/${r.img}`} alt="" fill sizes="16px" className="object-cover" />
                      </span>
                      <span className={`font-semibold underline decoration-2 ${active.href === r.href ? "decoration-blue" : "decoration-transparent"} group-hover:decoration-blue`}>
                        {r.name}
                      </span>
                    </span>
                    <span className="small text-right text-slate">{r.value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
        <figure className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper">
            {all.map((r) => (
              <Image
                key={r.href}
                src={`/img/${r.img}`}
                alt={r.name}
                fill
                sizes="40vw"
                className={`object-cover transition-opacity duration-500 ${r.href === active.href ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          <figcaption className="small flex h-7 items-center bg-blue px-2.5 font-medium text-white">{active.name}: eigenes Projektfoto</figcaption>
        </figure>
      </div>
    </div>
  );
}
