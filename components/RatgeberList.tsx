"use client";

import Link from "next/link";
import { useState } from "react";
import { FilterTabs } from "./FilterTabs";
import { Photo } from "./Photo";
import { Articles, formatMonth, fromRatgeber } from "./Articles";
import { CATS, type RatgeberArticle } from "@/lib/ratgeber";

export function RatgeberList({ articles }: { articles: RatgeberArticle[] }) {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Alle");
  const list = articles.filter((a) => cat === "Alle" || a.cat === cat);
  const [first, ...rest] = list;
  return (
    <>
      <FilterTabs label="Artikel filtern" options={CATS} value={cat} onChange={setCat} />
      {first && (
        <article className="group relative mt-12 grid gap-8 border-b border-line pb-14 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-14">
          <Photo src={first.img} alt="" className="aspect-[16/10]" sizes="(min-width: 1024px) 58vw, 100vw" priority />
          <div>
            <p className="flex gap-3 text-sm text-slate">
              <span className="font-medium text-blue">{first.cat}</span>
              <span>
                {first.minutes} Min. Lesezeit · {formatMonth(first.updated)}
              </span>
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">
              <Link href={`/ratgeber/${first.slug}`} className="after:absolute after:inset-0 group-hover:text-blue">
                {first.title}
              </Link>
            </h2>
            <p className="mt-4 text-lg text-ink-2">{first.description}</p>
            <span className="link-arrow mt-6">Artikel lesen →</span>
          </div>
        </article>
      )}
      {rest.length > 0 && <Articles items={rest.map((a) => fromRatgeber(a))} />}
    </>
  );
}
