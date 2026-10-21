"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Item = { name: string; note: string };
type Col = { name: string; items: Item[] };

/** Mein Zauberbad als Namensverzeichnis: alles in einer Größe, Erklärung erscheint rechts. */
export function BathIndex({ cols }: { cols: Col[] }) {
  const [note, setNote] = useState("Fahren Sie über einen Begriff – hier steht, was dahintersteckt.");
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
      {cols.map((c) => (
        <div key={c.name} className="lg:col-span-3">
          <p className="font-semibold text-navy">{c.name}</p>
          <ul className="mt-5 space-y-1 t-body leading-[1.3]">
            {c.items.map((i) => (
              <li key={i.name}>
                <button
                  type="button"
                  onMouseEnter={() => setNote(i.note)}
                  onFocus={() => setNote(i.note)}
                  className="text-left text-slate transition-colors hover:text-navy focus-visible:text-navy"
                >
                  {i.name}
                </button>
                <span className="mt-0.5 mb-2 block t-body text-slate lg:hidden">{i.note}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col justify-between gap-8 bg-blue p-6 text-white lg:col-span-3">
        <p className="t-body leading-snug" aria-live="polite">
          <span className="hidden lg:inline">{note}</span>
          <span className="lg:hidden">Fugenlose Bäder zum Festpreis über unser System Mein Zauberbad.</span>
        </p>
        <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-light self-start">
          Zu meinzauberbad.de
        </a>
      </div>
    </div>
  );
}
