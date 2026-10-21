"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Todo } from "@/components/Blocks";

type Entry = { name: string; kind: string; year: string; img: string };

/** Referenzen als ruhige Liste; beim Überfahren erscheint rechts das Projektfoto. */
export function Ledger({ groups }: { groups: { name: string; rows: Entry[] }[] }) {
  const [hover, setHover] = useState<Entry | null>(null);
  const first = groups[0].rows[0];
  const shown = hover ?? first;
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-6" onMouseLeave={() => setHover(null)}>
      <div className="lg:col-span-6 lg:col-start-2">
        {groups.map((g) => (
          <div key={g.name} className="mt-8 first:mt-0">
            <p className="text-slate">{g.name}</p>
            <ul className="mt-1">
              {g.rows.map((r) => (
                <li key={r.name}>
                  <Link
                    href="/referenzen"
                    onMouseEnter={() => setHover(r)}
                    onFocus={() => setHover(r)}
                    className={`grid min-h-11 grid-cols-[1fr_auto] items-baseline gap-x-4 py-2 transition-colors sm:grid-cols-[55%_1fr_auto] ${
                      hover && hover !== r ? "text-slate" : "text-ink"
                    }`}
                  >
                    <span className="font-semibold"><Todo text={r.name} /></span>
                    <span className="small col-span-2 row-start-2 text-slate sm:col-span-1 sm:row-start-auto">{r.kind}</span>
                    <span className="num small col-start-2 row-start-1 text-right sm:col-start-auto"><Todo text={r.year} /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link href="/referenzen" className="link-arrow mt-10">
          Alle Referenzen ansehen
        </Link>
      </div>
      <figure className="hidden lg:col-span-4 lg:col-start-9 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/3] overflow-hidden bg-paper">
            <Image key={shown.img} src={`/img/${shown.img}`} alt="" fill sizes="30vw" className="object-cover" />
          </div>
          <figcaption className="small flex h-7 items-center bg-navy px-2.5 font-medium text-white">{shown.kind}</figcaption>
        </div>
      </figure>
    </div>
  );
}
