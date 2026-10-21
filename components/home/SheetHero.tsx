import Link from "next/link";
import { Frame } from "@/components/Frame";
import { HeroQuiz } from "@/components/HeroQuiz";
import { LogoMark } from "@/components/Logo";
import { site } from "@/lib/site";

type F = { src: string; alt: string; label: string; ratio: string };
const L = "2.26/1"; // Hotelfotos im Querformat
const P = "3/4";
const Q = "4/3";

// Sechs Spalten eigener Projektfotos; Spalte 3 und 4 tragen in der Mitte das Türschild
const COLS: { offset: number; frames: F[] }[] = [
  { offset: 0, frames: [
    { src: "hotel-zimmer.jpg", alt: "Renoviertes Hotelzimmer", label: "Hotelzimmer", ratio: L },
    { src: "fliesen-dusche-1.jpg", alt: "Dusche mit großformatigen Fliesen", label: "Dusche, Großformat", ratio: P },
    { src: "maler-6.jpg", alt: "Frisch gestrichenes Zimmer", label: "Malerarbeiten", ratio: P },
    { src: "hotel-pool.jpg", alt: "Hotelpool", label: "Wellness", ratio: L },
  ] },
  { offset: -90, frames: [
    { src: "innenausbau-2.jpg", alt: "Aufenthaltsraum mit Holzlamellen", label: "Innenausbau", ratio: P },
    { src: "hotel-sauna.jpg", alt: "Hotelsauna", label: "Sauna", ratio: L },
    { src: "fliesen-bad-2.jpg", alt: "Waschtisch mit Spiegel", label: "Badsanierung", ratio: P },
    { src: "putz-1.jpg", alt: "Mehrfamilienhaus mit neuem Putz", label: "Fassadenputz", ratio: Q },
  ] },
  { offset: -40, frames: [
    { src: "hotel-bad-3.jpg", alt: "Hotelbad mit Holz und Naturstein", label: "Hotelbad", ratio: L },
    { src: "trockenbau-2.jpg", alt: "Trockenbau im Rohbau", label: "Trockenbau", ratio: P },
    { src: "maler-3.jpg", alt: "Gestrichener Raum", label: "Wandfarbe", ratio: P },
  ] },
  { offset: -130, frames: [
    { src: "innenausbau-4.jpg", alt: "Speiseraum nach dem Ausbau", label: "Gastro", ratio: P },
    { src: "sanitaer-3.jpg", alt: "Dusche mit Lichtleiste", label: "Sanitär", ratio: P },
    { src: "estrich-1.jpg", alt: "Frischer Estrich", label: "Estrich", ratio: P },
  ] },
  { offset: -20, frames: [
    { src: "team-einsatz.jpg", alt: "Monteur von Pfeiffer & Schwarz am Firmenwagen", label: "Unser Team", ratio: Q },
    { src: "fliesen-waschtisch.jpg", alt: "Waschtisch mit Holzablage", label: "Gäste-Bad", ratio: P },
    { src: "hotel-terrasse.jpg", alt: "Hotelterrasse am Abend", label: "Terrasse", ratio: L },
    { src: "maler-1.jpg", alt: "Raumteiler mit Lamellen", label: "Raumteiler", ratio: P },
  ] },
  { offset: -70, frames: [
    { src: "putz-5.jpg", alt: "Einfamilienhaus im Gerüst", label: "Neubau", ratio: Q },
    { src: "innenausbau-6.jpg", alt: "Kantine mit Holzverkleidung", label: "Büro & Kantine", ratio: P },
    { src: "sanitaer-2.jpg", alt: "Aufsatzwaschbecken mit Spiegel", label: "Waschtisch", ratio: P },
    { src: "hotel-spa.jpg", alt: "Ruhebecken im Spa", label: "Spa", ratio: L },
  ] },
];

function Column({ frames, offset, start, className = "" }: { frames: F[]; offset: number; start: number; className?: string }) {
  return (
    <div className={`lg:relative lg:min-h-0 lg:overflow-hidden ${className}`}>
      <div
        className="flex flex-col gap-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[calc(-1*var(--o))]"
        style={{ ["--o" as string]: `${-offset}px` }}
      >
        {frames.map((f, i) => (
          <Frame key={f.src} {...f} tone={start + i} fill priority={start < 6} className={i > 1 ? "max-lg:hidden" : ""} sizes="(min-width: 1024px) 16vw, 48vw" />
        ))}
      </div>
    </div>
  );
}

/** Spalte über bzw. unter dem Türschild */
function Part({ frames, start, top = false, col }: { frames: F[]; start: number; top?: boolean; col: string }) {
  return (
    <div className={`hidden min-h-0 flex-col gap-3 overflow-hidden lg:flex ${top ? "lg:row-start-1 justify-end" : "lg:row-start-3"} ${col}`}>
      {frames.map((f, i) => (
        <Frame key={f.src} {...f} tone={start + i} fill={!top} sizes="16vw" priority={top} imgClassName={top ? "max-h-[220px]" : ""} />
      ))}
    </div>
  );
}

export function SheetHero() {
  const [c1, c2, c3, c4, c5, c6] = COLS;
  return (
    <section id="anfrage" aria-labelledby="hero-title" className="overflow-hidden px-4 pb-14 sm:px-5 lg:pb-0">
      <div className="grid grid-cols-2 gap-2 pt-3 lg:min-h-[calc(100svh-100px)] lg:grid-cols-6 lg:grid-rows-[minmax(110px,14svh)_auto_minmax(110px,1fr)] lg:gap-3">
        {/* Das Türschild: blau wie die Arbeitsjacken, mit Loch für die Klinke */}
        <div className="relative col-span-2 bg-blue px-5 pt-14 pb-6 text-white sm:px-8 lg:col-span-3 lg:col-start-3 lg:row-start-2 lg:px-9">
          <span aria-hidden="true" className="absolute top-0 left-1/2 h-7 w-2 -translate-x-1/2 bg-white" />
          <span aria-hidden="true" className="absolute top-5 left-1/2 h-9 w-9 -translate-x-1/2 rounded-full bg-white" />
          <p className="flex items-center gap-2.5 t-lead leading-none font-semibold tracking-[-0.02em]">
            <LogoMark className="h-8 w-8 text-white" />
            Pfeiffer &amp; Schwarz
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[0.95] font-semibold tracking-[-0.04em] text-white sm:text-[3.6rem] lg:text-[min(4.7vw,4.8rem)]"
          >
            Hotelrenovierung &amp; Innenausbau.
          </h1>
          <p className="t-lead mt-5 max-w-[46ch] text-white">
            Aus einer Hand, mit 40 eigenen Fachkräften aus Bad Laasphe. Ihr Hotel bleibt geöffnet.
          </p>
          <div className="mt-7">
            <HeroQuiz />
          </div>
          <p className="small mt-5 flex flex-wrap gap-x-5 gap-y-1 font-medium">
            <a href={site.phoneHref} className="num underline">
              {site.phone}
            </a>
            <Link href="/referenzen" className="underline">
              Referenzen
            </Link>
            <Link href="/schadensanierung/wasserschaden" className="underline">
              Wasser- oder Brandschaden
            </Link>
          </p>
        </div>

        <Column {...c1} start={0} className="pt-[60px] lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:pt-0" />
        <Column {...c2} start={4} className="lg:col-start-2 lg:row-span-3 lg:row-start-1" />
        <Part frames={c3.frames.slice(0, 1)} start={2} top col="lg:col-start-3" />
        <Part frames={c4.frames.slice(0, 1)} start={1} top col="lg:col-start-4" />
        <Part frames={c5.frames.slice(0, 1)} start={3} top col="lg:col-start-5" />
        <Part frames={c3.frames.slice(1)} start={3} col="lg:col-start-3" />
        <Part frames={c4.frames.slice(1)} start={0} col="lg:col-start-4" />
        <Part frames={c5.frames.slice(1, 3)} start={2} col="lg:col-start-5" />
        <Column {...c6} start={1} className="hidden lg:col-start-6 lg:row-span-3 lg:row-start-1 lg:block" />
      </div>
    </section>
  );
}
