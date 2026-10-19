"use client";

import { useState } from "react";
import { FilterTabs } from "./FilterTabs";
import { Photo } from "./Photo";

export type GalleryItem = { img: string; cat: string; place: string; alt: string; tall?: boolean };

/** Projektgalerie im Mauerwerk-Raster mit Filter */
export function Gallery({ items, cats }: { items: GalleryItem[]; cats?: readonly string[] }) {
  const [cat, setCat] = useState<string>(cats?.[0] ?? "");
  const list = items.filter((i) => !cats || cat === cats[0] || i.cat === cat);
  return (
    <>
      {cats && <FilterTabs label="Galerie filtern" options={cats} value={cat} onChange={setCat} />}
      <div className={`${cats ? "mt-12" : "mt-2"} columns-1 gap-6 sm:columns-2 lg:columns-3`}>
        {list.map((g) => (
          <figure key={g.img} className="mb-6 break-inside-avoid">
            <Photo src={g.img} alt={g.alt} className={`${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} sizes="(min-width: 1024px) 33vw, 50vw" />
            <figcaption className="mt-3 flex justify-between text-sm">
              <span className="text-ink-2">{g.place}</span>
              {cats && <span className="font-medium text-blue">{g.cat}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      {list.length === 0 && <p className="mt-12 text-slate">Für diese Kategorie folgen bald Projektfotos.</p>}
    </>
  );
}
