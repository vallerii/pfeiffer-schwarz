import Image from "next/image";
import Link from "next/link";
import { HeroQuiz } from "@/components/HeroQuiz";
import { IconCta } from "@/components/Frame";
import { site } from "@/lib/site";

/**
 * Overtake „Media hero with floating product card“ (Spartan): Foto-Paneel mit 12px Rand und 20px Radius,
 * links die Überschrift in zwei Tönen, Text und Pfeil-CTA, rechts die schwebende Karte – hier das Anfrage-Quiz.
 * Darunter Beleg-Text und Logoleiste.
 */
export function MediaHero() {
  return (
    <section id="anfrage" aria-labelledby="hero-title" className="px-3 pt-3">
      <div className="panel relative isolate lg:min-h-[max(680px,calc(100svh-112px))]">
        <Image src="/img/fliesen-bad-3.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/55 lg:bg-transparent lg:bg-[linear-gradient(90deg,rgb(255_255_255/0.94)_0%,rgb(255_255_255/0.86)_38%,rgb(255_255_255/0)_70%)]" />

        <div className="grid gap-10 px-5 pt-24 pb-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-16 lg:pt-[clamp(120px,18svh,190px)] lg:pb-10">
          <div className="max-w-[720px] pb-2">
            <h1 id="hero-title" className="text-[2.6rem] leading-[1.06] font-semibold tracking-[-0.04em] sm:text-[3.6rem] lg:text-[70px] lg:leading-[77px]">
              <span className="text-navy/45">Hotelrenovierung &amp; Innenausbau.</span> <span className="text-navy">Aus einer Hand.</span>
            </h1>
            <p className="t-lead mt-6 max-w-[34ch] text-ink-2">
              Mit rund 40 eigenen Fachkräften aus Bad Laasphe – Ihr Hotel bleibt während der Arbeiten geöffnet.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <IconCta href="#quiz">Projekt anfragen</IconCta>
              <a href={site.phoneHref} className="num font-semibold text-navy underline decoration-blue decoration-2 underline-offset-4">
                {site.phone}
              </a>
            </div>
          </div>

          <div id="quiz" className="rounded-(--radius-panel) bg-blue p-6 text-white shadow-[0_24px_60px_-28px_rgb(11_16_38/0.55)] sm:p-7">
            <HeroQuiz compact />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-(--container-site) flex-col gap-6 px-2 py-8 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-[60ch] text-ink-2">
          <span className="font-semibold text-navy">Seit {site.since}</span> renovieren wir Hotels im laufenden Betrieb und bauen Wohnungen, Häuser und
          Gewerbe aus.
        </p>
        <ul className="flex flex-wrap items-center gap-3">
          <li className="relative h-12 w-[108px] overflow-hidden rounded-xl">
            <Image src="/img/vb-premiumpartner.jpg" alt="Villeroy & Boch Premiumpartner" fill sizes="108px" className="object-cover" />
          </li>
          <li className="rounded-full bg-paper px-4 py-2.5 text-[15px] font-medium text-navy">Premiumpartner Villeroy &amp; Boch</li>
          <li className="rounded-full bg-paper px-4 py-2.5 text-[15px] font-medium text-navy">
            Google <span className="todo">[4,X]</span> von 5
          </li>
          <li>
            <Link href="/referenzen" className="rounded-full bg-paper px-4 py-2.5 text-[15px] font-medium text-navy hover:bg-line">
              Referenzen ansehen
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
