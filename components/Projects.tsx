"use client";

import Link from "next/link";
import { useState } from "react";
import { FilterTabs } from "./FilterTabs";
import { Photo } from "./Photo";

const CATS = ["Alle", "Hotel", "Bau", "Bad"] as const;
type Cat = (typeof CATS)[number];

// Platzhalter – echte Referenzen kommen über den Prozess „Fotos + Sprachnachricht“
const PROJECTS: { cat: Exclude<Cat, "Alle">; title: string; meta: string; img: string }[] = [
  { cat: "Hotel", title: "[4*-Hotel, Sauerland]", meta: "62 Zimmer · 8 Wochen · im laufenden Betrieb", img: "hotel-zimmer.jpg" },
  { cat: "Bau", title: "[Büro- und Aufenthaltsbereich, Siegen]", meta: "Trockenbau · Maler · Akustik · Boden", img: "innenausbau-1.jpg" },
  { cat: "Bad", title: "[Badsanierung, Bad Laasphe]", meta: "Großformat · bodengleiche Dusche", img: "fliesen-dusche-1.jpg" },
  { cat: "Hotel", title: "[Hotelbäder in Serie]", meta: "[X] Bäder · [X] Wochen", img: "hotel-bad-3.jpg" },
  { cat: "Bau", title: "[Wohnung, Bad Berleburg]", meta: "Malerarbeiten · Spachteltechnik", img: "maler-1.jpg" },
  { cat: "Bad", title: "[Gäste-WC, Erndtebrück]", meta: "Wandfliesen · Vorwandinstallation", img: "fliesen-wc.jpg" },
];

export function Projects() {
  const [cat, setCat] = useState<Cat>("Alle");
  const list = PROJECTS.filter((p) => cat === "Alle" || p.cat === cat).slice(0, 3);
  return (
    <>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2 className="h2">Ausgewählte Projekte</h2>
          <p className="lead mt-5">Hotels, Wohnungen und Gewerbe – fotografiert von unseren Teams auf der Baustelle.</p>
        </div>
        <FilterTabs label="Projekte filtern" options={CATS} value={cat} onChange={setCat} />
      </div>
      <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
        {list.map((p, i) => (
          <Link key={p.title} href="/referenzen" className={`group block ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <Photo
              src={p.img}
              alt={p.title}
              className={`${i === 0 ? "aspect-[4/3] md:aspect-auto md:h-[calc(100%-5.5rem)]" : "aspect-[4/3]"}`}
              sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-blue">{p.cat}</p>
                <p className="mt-1 font-display text-lg font-bold text-navy group-hover:text-blue">{p.title}</p>
                <p className="mt-0.5 text-sm text-ink-2">{p.meta}</p>
              </div>
              <span aria-hidden="true" className="mt-6 text-navy transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-14">
        <Link href="/referenzen" className="btn-ghost">
          Alle Referenzen
        </Link>
      </div>
    </>
  );
}
