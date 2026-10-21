import Link from "next/link";
import { HeroQuiz } from "@/components/HeroQuiz";
import { Photo } from "@/components/Photo";
import { Placeholder } from "@/components/Placeholder";
import { TradeIndex } from "@/components/TradeIndex";
import { tradeIndex } from "@/lib/trades";
import { Projects } from "@/components/Projects";
import { Faq } from "@/components/Faq";
import { Articles } from "@/components/Articles";
import { Check } from "@/components/Check";
import { FinalCta, Masskette, Stat } from "@/components/Blocks";
import { hotelNav, site } from "@/lib/site";

const faq = [
  {
    q: "Können Sie im laufenden Hotelbetrieb arbeiten?",
    a: "Ja, das ist unser Normalfall. Wir renovieren etagen- oder zimmerweise, stimmen Lärmzeiten mit Ihrer Belegung ab und haben einen Einsatzleiter dauerhaft vor Ort.",
  },
  {
    q: "Übernehmen Sie auch einzelne Gewerke?",
    a: "Ja. Sie können uns für ein einzelnes Gewerk wie Fliesen oder Malerarbeiten beauftragen – oder für die komplette Sanierung aus einer Hand.",
  },
  {
    q: "In welchen Regionen sind Sie tätig?",
    a: "Unser Sitz ist in Bad Laasphe. In Siegen-Wittgenstein und den Nachbarkreisen sind wir für alle Projekte da, Hotelprojekte und größere Aufträge übernehmen wir bundesweit.",
  },
  {
    q: "Was kostet eine 3D-Planung?",
    a: "[Antwort mit Kunden abstimmen: z. B. bei Auftrag kostenlos, sonst Pauschale.]",
  },
  {
    q: "Wie läuft es bei einem Wasserschaden mit der Versicherung?",
    a: "Wir dokumentieren den Schaden, trocknen das Gebäude, sanieren und stimmen uns direkt mit Ihrer Versicherung oder dem Gutachter ab. Sie haben einen Ansprechpartner für alles.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero als Fliesenspiegel: Überschrift, Fotos und Quiz als Kacheln, dazwischen Fugen */}
      <section id="anfrage" className="bg-fuge p-(--spacing-fuge)">
        <div className="fliesen mx-auto max-w-[1600px] lg:grid-cols-12 lg:grid-rows-[auto_minmax(340px,1fr)]">
          <div className="flex flex-col justify-between gap-12 bg-tanne px-6 py-12 text-weiss sm:px-10 sm:py-14 lg:col-span-7 lg:px-14 lg:pt-16 lg:pb-12">
            <div>
              <h1 className="text-[3.1rem] leading-[0.95] font-semibold text-weiss sm:text-7xl xl:text-[5.6rem]">
                Hotelrenovierung &amp; Innenausbau aus einer Hand.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-weiss/80 sm:text-[1.25rem]">
                Seit {site.since} renovieren wir Hotels im laufenden Betrieb und bauen Wohnungen, Häuser und Gewerbeflächen aus – mit rund
                40 eigenen Fachkräften aus Bad Laasphe.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-2.5 text-[16px] text-weiss/85 sm:grid-cols-2">
              <li className="flex gap-2.5">
                <Check light /> Seit {site.since} am Markt
              </li>
              <li className="flex gap-2.5">
                <Check light /> Rund 40 eigene Fachkräfte
              </li>
              <li className="flex gap-2.5">
                <Check light /> Premiumpartner Villeroy &amp; Boch
              </li>
              <li className="flex gap-2.5">
                <Check light /> Google <span className="todo">[4,X]</span> von 5
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-10 bg-kalk px-5 py-9 sm:px-10 sm:py-12 lg:col-span-5 lg:row-span-2 lg:px-12 lg:py-14">
            <HeroQuiz />
            <p className="border-t border-fuge pt-5 text-[15px] text-schiefer-2">
              Lieber persönlich?{" "}
              <a href={site.phoneHref} className="num font-semibold text-tanne underline decoration-messing underline-offset-4">
                {site.phone}
              </a>
              , Mo–Fr <span className="todo">[7–17 Uhr]</span>
            </p>
          </div>

          <div className="fliesen grid-cols-[3fr_2fr] lg:col-span-7">
            <Photo src="hotel-zimmer-2.jpg" alt="Renoviertes Hotelzimmer mit Holzdecke" className="min-h-56" priority sizes="(min-width: 1024px) 35vw, 60vw" />
            <Photo src="fliesen-dusche-1.jpg" alt="Dusche mit großformatigen Fliesen" className="min-h-56" priority sizes="(min-width: 1024px) 25vw, 40vw" />
          </div>
        </div>
      </section>

      {/* Zwei Bereiche */}
      <section className="section pb-0 sm:pb-0 lg:pb-0">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="h2">Zwei Bereiche. Ein Team.</h2>
            <p className="lead lg:justify-self-end">
              Ob Hotel mit 150 Zimmern oder Bad im Einfamilienhaus: Es arbeiten dieselben festangestellten Handwerker – mit einem
              Ansprechpartner für Sie.
            </p>
          </div>
          <div className="fliesen mt-14 bg-fuge p-(--spacing-fuge) md:grid-cols-2">
            <AreaPanel
              href="#hotel"
              img="hotel-zimmer.jpg"
              title="Hotelrenovierung"
              points={["Im laufenden Betrieb, etagenweise", "Generalunternehmer für alle Gewerke", "Inklusive Möbel, Textilien und Licht"]}
            />
            <AreaPanel
              href="#bau"
              img="innenausbau-1.jpg"
              title="Bau & Innenausbau"
              points={["Fliesen, Maler, Trockenbau, Sanitär und mehr", "Einzelgewerk oder Komplettsanierung", "Auch Brand- und Wasserschäden"]}
            />
          </div>
        </div>
      </section>

      {/* Hotelrenovierung */}
      <section id="hotel" className="section">
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h2">Hotelrenovierung im laufenden Betrieb</h2>
            <p className="lead mt-6">
              Jedes gesperrte Zimmer kostet Umsatz. Wir planen um Ihre Belegung herum – mit Einsatzleiter dauerhaft vor Ort und allen Gewerken
              im eigenen Team.
            </p>
            <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {hotelNav.items.map((item) => (
                <li key={item.href} className="border-b border-fuge">
                  <Link href={item.href} className="group block py-4">
                    <span className="block text-[17px] font-semibold text-tanne underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-messing">
                      {item.label}
                    </span>
                    <span className="block text-[15px] text-stein">{item.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/hotelrenovierung#anfrage" className="btn-primary mt-10">
              Hotelprojekt anfragen
            </Link>
          </div>
          <figure>
            <div className="fliesen grid-cols-2 bg-fuge p-(--spacing-fuge)">
              <div className="relative">
                <Placeholder label="Vorher-Foto aus dem Projekt" className="aspect-[3/4] h-full" />
                <span className="absolute top-3 left-3 bg-weiss px-3 py-1 text-[13px] font-semibold text-tanne">Vorher</span>
              </div>
              <div className="relative">
                <Photo src="hotel-bad.jpg" alt="Renoviertes Hotelbad" className="aspect-[3/4] h-full" sizes="25vw" />
                <span className="absolute top-3 left-3 bg-messing px-3 py-1 text-[13px] font-semibold text-tanne-tief">Nachher</span>
              </div>
            </div>
            <figcaption className="mt-8">
              <p className="text-[15px] text-stein">Projektbeispiel: 4*-Wellnesshotel im Sauerland</p>
              <p className="mt-1 font-display text-3xl leading-none font-semibold text-tanne">
                <span className="todo">[Projektname]</span>
              </p>
              <div className="mt-8">
                <Masskette
                  items={[
                    ["[62]", "Zimmer"],
                    ["[8]", "Wochen"],
                    ["[0]", "Schließtage"],
                  ]}
                />
              </div>
              <Link href="/referenzen" className="link-arrow mt-8">
                Projekt ansehen
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Bau & Innenausbau */}
      <section id="bau" className="section bg-kalk">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="h2">Bau &amp; Innenausbau</h2>
              <p className="lead mt-5">Einzelne Gewerke oder komplette Sanierung – für Wohnungen, Häuser, Büros und Gewerbe.</p>
            </div>
            <Link href="/bau-innenausbau" className="btn-ghost shrink-0">
              Alle Leistungen
            </Link>
          </div>
          <div className="mt-14">
            <TradeIndex
              trades={tradeIndex}
              fill={{
                title: "Für Generalunternehmer",
                text: "Nachunternehmer mit allen Nachweisen: §48b, §13b, SOKA-BAU, Unbedenklichkeit.",
                href: "/generalunternehmer",
                cta: "Kapazität anfragen",
              }}
            />
          </div>
        </div>
      </section>

      {/* So arbeiten wir – echte Abfolge, daher nummeriert */}
      <section className="section bg-tanne text-weiss">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="h2 text-weiss">So arbeiten wir</h2>
            <p className="max-w-xl text-lg text-weiss/75 lg:justify-self-end">
              Ein fester Ablauf, damit Sie jederzeit wissen, wo Ihr Projekt steht – vom ersten Entwurf bis zur Übergabe.
            </p>
          </div>
          <div className="fliesen mt-14 bg-tanne-tief p-(--spacing-fuge) lg:grid-cols-[5fr_7fr]">
            <Photo src="3d-planung.jpg" alt="3D-Zeichnung eines geplanten Raums" className="aspect-[4/3] bg-weiss lg:aspect-auto" sizes="40vw" />
            <ol className="fliesen sm:grid-cols-2">
              {[
                ["3D-Planung", "Sie sehen das Ergebnis, bevor wir anfangen – Fliesen, Möbel, Licht."],
                ["Klares Angebot", "Alle Positionen transparent, persönlich besprochen."],
                ["Ein Ansprechpartner", "Ein Projektleiter vom ersten Termin bis zur Übergabe."],
                ["Eigene Teams", "Festangestellte Fachkräfte statt Subunternehmer-Kette."],
              ].map(([title, text], i) => (
                <li key={title} className="bg-tanne-hell p-7 sm:p-8">
                  <span className="num font-display text-6xl leading-none font-semibold text-messing">{i + 1}</span>
                  <p className="mt-6 text-xl font-semibold">{title}</p>
                  <p className="mt-2 text-weiss/75">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mein Zauberbad: die einzige Fläche ohne Fugen */}
      <section className="section">
        <div className="wrap">
          <div className="grid items-stretch overflow-hidden rounded-[28px] bg-kalk lg:grid-cols-2">
            <Placeholder label="Foto fugenloses Bad aus Mein-Zauberbad-Projekten" seamless className="aspect-[4/3] lg:aspect-auto lg:min-h-[560px]" />
            <div className="p-8 sm:p-12 lg:p-16">
              <h2 className="h2">Neues Bad in 3 Tagen – fugenlos.</h2>
              <p className="lead mt-6">
                Mit Mein Zauberbad renovieren wir Bäder ohne wochenlange Baustelle: kaum Abriss, kein Fugenputzen, verbindlicher Festpreis.
                Ideal für Privatkunden – und für Hotelbäder.
              </p>
              <ul className="mt-9 grid gap-x-8 gap-y-3 text-[17px] sm:grid-cols-2">
                {["Umbau in ca. 3 Tagen", "Fugenlos und pflegeleicht", "Festpreis vor Ort", "Barrierefrei möglich"].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check /> {t}
                  </li>
                ))}
              </ul>
              <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-primary mt-10 rounded-full px-8">
                Mehr auf meinzauberbad.de ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section className="section pt-0 sm:pt-0 lg:pt-0">
        <div className="wrap">
          <Projects />
        </div>
      </section>

      {/* Über uns */}
      <section className="section bg-kalk">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h2">Handwerk aus Bad Laasphe – seit {site.since}.</h2>
            <p className="lead mt-6">
              Thomas Pfeiffer und Sascha Schwarz führen ein Team aus Fliesenlegern, Malern, Trockenbauern und Schreinern. Wir sind bundesweit
              im Einsatz – und bleiben persönlich erreichbar.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              <Stat value="20+" label="Jahre" />
              <Stat value="~40" label="Fachkräfte" />
              <Stat value="[X]" label="Hotels" todo />
              <Stat value="[X]" label="Projekte" todo />
            </dl>
            <Link href="/ueber-uns" className="link-arrow mt-10">
              Mehr über uns
            </Link>
          </div>
          <figure>
            <div className="bg-fuge p-(--spacing-fuge)">
              <Photo src="team-flotte.jpg" alt="Die Fahrzeugflotte von Pfeiffer & Schwarz am Firmensitz in Bad Laasphe" className="aspect-[4/3]" />
            </div>
            <figcaption className="mt-4 text-[15px] text-stein">Unser Firmensitz in Bad Laasphe. Ein Teamfoto mit Thomas Pfeiffer und Sascha Schwarz folgt.</figcaption>
          </figure>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="section">
        <div className="wrap">
          <h2 className="h2">Was unsere Kunden sagen</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              ["Hotel", "[Zitat Hotelier: Termin gehalten, Betrieb lief weiter]", "[Name]", "[Funktion], [Hotel]"],
              ["Bau", "[Zitat Privat- oder Gewerbekunde]", "[Name]", "[Ort]"],
              ["Bad", "[Zitat Badkunde]", "[Name]", "[Ort]"],
            ].map(([tag, quote, name, role]) => (
              <figure key={tag} className="border-t-2 border-messing pt-7">
                <p className="text-[14px] font-semibold text-messing-dunkel">{tag}</p>
                <blockquote className="mt-4 text-[1.3rem] leading-snug font-medium text-tanne">„{quote}“</blockquote>
                <figcaption className="mt-6 text-[15px]">
                  <span className="font-semibold text-schiefer">{name}</span>
                  <span className="block text-stein">{role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Notfall */}
      <section className="bg-schiefer text-weiss">
        <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <p className="flex max-w-2xl gap-4 font-display text-[2rem] leading-[1.05] font-semibold sm:text-[2.4rem]">
            <span className="mt-3 h-3 w-3 shrink-0 rounded-full bg-messing ring-6 ring-messing/25" aria-hidden="true" />
            Wasser- oder Brandschaden? Wir helfen schnell – auch mit der Versicherung.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn-primary">
              Jetzt anrufen
            </a>
            <Link href="/schadensanierung/wasserschaden" className="btn-light">
              Schadensanierung
            </Link>
          </div>
        </div>
      </section>

      <Faq title="Häufige Fragen" items={faq} />

      {/* Ratgeber */}
      <section className="section bg-kalk">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="h2">Wissen aus der Praxis</h2>
              <p className="lead mt-5">Tipps für Hoteliers, Bauherren und Eigentümer – aus über 20 Jahren auf der Baustelle.</p>
            </div>
            <Link href="/ratgeber" className="btn-ghost shrink-0">
              Alle Artikel
            </Link>
          </div>
          <Articles
            items={[
              {
                tag: "Hotel",
                time: "6 Min.",
                title: "Hotelrenovierung im laufenden Betrieb: So planen Sie ohne Umsatzverlust",
                text: "Etagenweise Planung, Lärmzeiten, Gästekommunikation – die wichtigsten Schritte.",
                img: "hotel-terrasse.jpg",
              },
              {
                tag: "Bau",
                time: "4 Min.",
                title: "Fliesen auf Fußbodenheizung: Darauf kommt es an",
                text: "Kleber, Aufheizprotokoll, Format – was Sie vor der Verlegung wissen sollten.",
                img: "fliesen-boden.jpg",
              },
              {
                tag: "Schaden",
                time: "5 Min.",
                title: "Wasserschaden: Was zahlt die Versicherung – und was tun Sie zuerst?",
                text: "Checkliste für die ersten 24 Stunden nach dem Schaden.",
                img: "estrich-1.jpg",
              },
            ]}
          />
        </div>
      </section>

      <FinalCta title="Erzählen Sie uns von Ihrem Projekt." text="Hotel, Wohnung oder Gewerbe – wir melden uns innerhalb von [24 h]." href="#anfrage" cta="Projekt anfragen" />
    </>
  );
}

function AreaPanel({ href, img, title, points }: { href: string; img: string; title: string; points: string[] }) {
  return (
    <Link href={href} className="group flex flex-col bg-weiss">
      <Photo src={img} alt={title} className="aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col p-7 sm:p-10">
        <p className="font-display text-[2.6rem] leading-none font-semibold text-tanne underline decoration-transparent decoration-2 underline-offset-[8px] group-hover:decoration-messing">
          {title}
        </p>
        <ul className="mt-5 space-y-1.5 text-schiefer-2">
          {points.map((p) => (
            <li key={p} className="flex gap-2.5">
              <Check /> {p}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
