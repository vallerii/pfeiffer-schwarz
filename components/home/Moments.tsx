"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Moment = { title: string; text: string; img: string; alt: string; space: number };

/** Ablauf als Reihe von Momenten, seitlich zu ziehen. Die Reihenfolge steht in den Worten. */
export function Moments({ title, items }: { title: string; items: Moment[] }) {
  const row = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const scroll = (dir: number) => row.current?.scrollBy({ left: dir * 312, behavior: "smooth" });
  return (
    <div>
      <div className="wrap flex items-end justify-between gap-6">
        <h2 className="h2">{title}</h2>
        <div className="hidden gap-2 sm:flex lg:hidden">
          <button type="button" onClick={() => scroll(-1)} aria-label="Zurück" className="flex h-12 w-12 items-center justify-center bg-paper text-navy transition-colors hover:bg-navy hover:text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg>
          </button>
          <button type="button" onClick={() => scroll(1)} aria-label="Weiter" className="flex h-12 w-12 items-center justify-center bg-paper text-navy transition-colors hover:bg-navy hover:text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg>
          </button>
        </div>
      </div>
      <div className="wrap mt-6 lg:hidden">
        <div className="h-1.5 bg-paper" aria-hidden="true">
          <div className="h-full bg-navy transition-[width] duration-200" style={{ width: `${Math.max(12, progress * 100)}%` }} />
        </div>
      </div>
      <ol
        ref={row}
        onScroll={(e) => {
          const el = e.currentTarget;
          setProgress(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth));
        }}
        className="mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:scroll-px-5 sm:gap-8 sm:px-5 lg:mx-auto lg:grid lg:max-w-(--container-site) lg:grid-cols-6 lg:gap-6 lg:overflow-visible lg:pb-0"
      >
        {items.map((m) => (
          <li key={m.title} className="flex w-[72vw] shrink-0 snap-start flex-col sm:w-[280px] lg:w-auto">
            <h3 className="t-lead leading-tight font-semibold">{m.title}</h3>
            <p className="mt-2 t-body leading-snug text-slate">{m.text}</p>
            <div style={{ height: m.space }} className="shrink-0 max-sm:max-h-16" />
            <div className="relative mt-auto aspect-[4/5] overflow-hidden bg-paper">
              <Image src={`/img/${m.img}`} alt={m.alt} fill sizes="(min-width: 640px) 280px, 72vw" className="object-cover" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
