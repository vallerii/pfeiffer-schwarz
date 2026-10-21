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
      <div className={`${cats ? "mt-10" : "mt-2"} fliesen grid-flow-dense bg-fuge p-(--spacing-fuge) grid-cols-2 lg:grid-cols-3`}>
        {list.map((g) => (
          <figure key={g.img} className={`relative bg-weiss ${g.tall ? "row-span-2" : ""}`}>
            <Photo src={g.img} alt={g.alt} className={g.tall ? "h-full min-h-64" : "aspect-[4/3]"} sizes="(min-width: 1024px) 33vw, 50vw" />
            <figcaption className="absolute bottom-0 left-0 max-w-[85%] bg-weiss px-3 py-1.5 text-[14px] text-schiefer-2">
              {g.place}
              {cats && <span className="font-semibold text-messing-dunkel">, {g.cat}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      {list.length === 0 && <p className="mt-12 text-stein">Für diese Kategorie folgen bald Projektfotos.</p>}
    </>
  );
}
