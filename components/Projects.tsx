"use client";

import Link from "next/link";
import { useState } from "react";
import { FilterTabs } from "./FilterTabs";
import { Photo } from "./Photo";

const CATS = ["Alle", "Hotel", "Bau", "Bad"] as const;
type Cat = (typeof CATS)[number];

// Platzhalter – echte Referenzen kommen über den Prozess „Fotos + Sprachnachricht“
const PROJECTS: { cat: Exclude<Cat, "Alle">; title: string; meta: string; img: string }[] = [
  { cat: "Hotel", title: "[4*-Hotel, Sauerland]", meta: "62 Zimmer in 8 Wochen, im laufenden Betrieb", img: "hotel-zimmer.jpg" },
  { cat: "Bau", title: "[Büro- und Aufenthaltsbereich, Siegen]", meta: "Trockenbau, Maler, Akustik, Boden", img: "innenausbau-1.jpg" },
  { cat: "Bad", title: "[Badsanierung, Bad Laasphe]", meta: "Großformat und bodengleiche Dusche", img: "fliesen-dusche-1.jpg" },
  { cat: "Hotel", title: "[Hotelbäder in Serie]", meta: "[X] Bäder in [X] Wochen", img: "hotel-bad-3.jpg" },
  { cat: "Bau", title: "[Wohnung, Bad Berleburg]", meta: "Malerarbeiten mit Spachteltechnik", img: "maler-1.jpg" },
  { cat: "Bad", title: "[Gäste-WC, Erndtebrück]", meta: "Wandfliesen und Vorwandinstallation", img: "fliesen-wc.jpg" },
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
      <div className="fliesen mt-14 bg-fuge p-(--spacing-fuge) md:grid-cols-3">
        {list.map((p, i) => (
          <Link key={p.title} href="/referenzen" className={`group flex flex-col bg-weiss ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <Photo
              src={p.img}
              alt={p.title}
              className={i === 0 ? "aspect-[4/3] md:aspect-auto md:flex-1" : "aspect-[4/3]"}
              sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            />
            <div className="p-6">
              <p className="text-[14px] font-semibold text-messing-dunkel">{p.cat}</p>
              <p className="mt-1 font-display text-[1.6rem] leading-[1.05] font-semibold text-tanne underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-messing">
                {p.title}
              </p>
              <p className="mt-1.5 text-[15px] text-schiefer-2">{p.meta}</p>
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
