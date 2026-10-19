"use client";

import { useState } from "react";
import { Photo } from "./Photo";
import { Placeholder } from "./Placeholder";

/** Vorher/Nachher-Regler. `before` leer lassen, solange kein Vorher-Foto vorliegt. */
export function BeforeAfter({ before, after, alt }: { before?: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] overflow-hidden select-none">
      <Photo src={after} alt={`Nachher: ${alt}`} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before ? (
          <Photo src={before} alt={`Vorher: ${alt}`} className="h-full w-full" />
        ) : (
          <Placeholder label="Vorher-Foto aus demselben Blickwinkel" className="h-full w-full bg-paper" />
        )}
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-navy shadow-lg">
          ⇔
        </span>
      </div>
      <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold text-navy">Vorher</span>
      <span className="absolute top-4 right-4 bg-blue px-3 py-1 text-xs font-semibold text-white">Nachher</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Vorher/Nachher vergleichen"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
