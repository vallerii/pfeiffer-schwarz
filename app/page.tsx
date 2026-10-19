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
import { FinalCta, Stat } from "@/components/Blocks";
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
      {/* Hero: Projektfoto vollflächig, Quiz als eigene Fläche */}
      <section id="anfrage" className="relative isolate overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Photo src="innenausbau-1.jpg" alt="" className="h-full w-full" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/45" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep/80 to-transparent" />
        </div>
        <div className="wrap grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20 lg:py-28">
          <div>
            <h1 className="text-[2.1rem] leading-[1.05] font-extrabold text-white min-[420px]:text-[2.6rem] sm:text-6xl lg:text-[4.2rem]">
              Hotelrenovierung &amp; Innenausbau <span className="text-blue-bright">aus einer Hand.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Seit {site.since} renovieren wir Hotels im laufenden Betrieb und bauen Wohnungen, Häuser und Gewerbeflächen aus – mit rund
              40 eigenen Fachkräften aus Bad Laasphe.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#hotel" className="btn-light">
                Hotelrenovierung →
              </Link>
              <Link href="#bau" className="btn-light">
                Bau &amp; Innenausbau →
              </Link>
            </div>
            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-7 text-[15px] text-white/80">
              <li className="flex items-center gap-2">
                <Check light /> seit {site.since}
              </li>
              <li className="flex items-center gap-2">
                <Check light /> ca. 40 eigene Fachkräfte
              </li>
              <li className="flex items-center gap-2">
                <Check light /> Premiumpartner Villeroy &amp; Boch
              </li>
              <li className="flex items-center gap-2">
                <Check light /> Google ★ <span className="todo">[4,X]</span>
              </li>
            </ul>
          </div>
          <div className="-mx-4 border-t-4 border-blue-bright bg-navy px-6 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:mx-0 sm:px-10 sm:py-12 lg:px-12">
            <HeroQuiz />
          </div>
        </div>
      </section>

      {/* Zwei Bereiche */}
      <section className="section pb-0 sm:pb-0 lg:pb-0">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="h2">Zwei Bereiche. Ein Team.</h2>
            <p className="lead lg:justify-self-end">
              Ob Hotel mit 150 Zimmern oder Bad im Einfamilienhaus: Es arbeiten dieselben festangestellten Handwerker – mit einem
              Ansprechpartner für Sie.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <AreaPanel
              href="#hotel"
              img="hotel-zimmer-2.jpg"
              title="Hotelrenovierung"
              points={["Im laufenden Betrieb, etagenweise", "Generalunternehmer für alle Gewerke", "Inkl. Möbel, Textilien, Licht"]}
            />
            <AreaPanel
              href="#bau"
              img="innenausbau-1.jpg"
              title="Bau & Innenausbau"
              points={["Fliesen, Maler, Trockenbau, Sanitär u. v. m.", "Einzelgewerk oder Komplettsanierung", "Auch Brand- & Wasserschäden"]}
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
            <ul className="mt-10 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
              {hotelNav.items.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link href={item.href} className="group flex min-h-16 items-center justify-between gap-4 py-3">
                    <span className="font-semibold text-navy group-hover:text-blue">{item.label}</span>
                    <span aria-hidden="true" className="text-slate transition-transform group-hover:translate-x-1 group-hover:text-blue">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/hotelrenovierung#anfrage" className="btn-primary mt-10">
              Hotelprojekt anfragen
            </Link>
          </div>
          <figure>
            <div className="grid grid-cols-2 gap-2 overflow-hidden">
              <div className="relative">
                <Placeholder label="Vorher-Foto aus dem Projekt" className="aspect-[3/4] h-full" />
                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-semibold text-navy">Vorher</span>
              </div>
              <div className="relative">
                <Photo src="hotel-bad.jpg" alt="Renoviertes Hotelbad" className="aspect-[3/4] h-full" sizes="25vw" />
                <span className="absolute top-4 left-4 bg-blue px-3 py-1 text-xs font-semibold text-white">Nachher</span>
              </div>
            </div>
            <figcaption className="mt-8">
              <p className="text-sm text-slate">Projektbeispiel · 4*-Wellnesshotel · Sauerland</p>
              <p className="mt-1 font-display text-2xl font-bold text-navy">
                <span className="todo">[Projektname]</span>
              </p>
              <dl className="mt-6 grid grid-cols-3 border-t border-line pt-6">
                <Stat value="[62]" label="Zimmer" todo />
                <Stat value="[8]" label="Wochen" todo />
                <Stat value="[0]" label="Schließtage" todo />
              </dl>
              <Link href="/referenzen" className="link-arrow mt-6">
                Projekt ansehen →
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Bau & Innenausbau */}
      <section id="bau" className="section bg-paper">
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
          <div className="mt-16">
            <TradeIndex trades={tradeIndex} />
          </div>
          <Link
            href="/generalunternehmer"
            className="group mt-16 flex flex-col gap-4 border-t-2 border-navy pt-8 md:flex-row md:items-center md:justify-between"
          >
            <span>
              <span className="block font-display text-xl font-bold text-navy">Für Generalunternehmer</span>
              <span className="mt-1 block text-ink-2">Nachunternehmer mit allen Nachweisen: §48b, §13b, SOKA-BAU, Unbedenklichkeit.</span>
            </span>
            <span className="link-arrow shrink-0">Kapazität anfragen →</span>
          </Link>
        </div>
      </section>

      {/* So arbeiten wir */}
      <section className="section bg-navy text-white">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <h2 className="h2 text-white">So arbeiten wir</h2>
            <p className="max-w-xl text-lg text-white/70 lg:justify-self-end">
              Ein fester Ablauf, damit Sie jederzeit wissen, wo Ihr Projekt steht – vom ersten Entwurf bis zur Übergabe.
            </p>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-[5fr_7fr]">
            <Photo src="3d-planung.jpg" alt="3D-Zeichnung eines geplanten Raums" className="aspect-[4/3] bg-white" sizes="40vw" />
            <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {[
                ["3D-Planung", "Sie sehen das Ergebnis, bevor wir anfangen – Fliesen, Möbel, Licht."],
                ["Klares Angebot", "Alle Positionen transparent, persönlich besprochen."],
                ["Ein Ansprechpartner", "Ein Projektleiter vom ersten Termin bis zur Übergabe."],
                ["Eigene Teams", "Festangestellte Fachkräfte statt Subunternehmer-Kette."],
              ].map(([title, text], i) => (
                <li key={title} className="border-t border-white/20 pt-6">
                  <span className="num font-display text-5xl font-extrabold text-blue-bright">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-4 font-display text-xl font-bold">{title}</p>
                  <p className="mt-2 text-white/70">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mein Zauberbad */}
      <section className="section bg-blue-tint">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Placeholder label="Foto fugenloses Bad aus Mein-Zauberbad-Projekten" className="aspect-[4/3] lg:aspect-[5/6]" />
          <div>
            <h2 className="h2">
              Neues Bad in 3 Tagen – <span className="text-blue">fugenlos.</span>
            </h2>
            <p className="lead mt-6">
              Mit Mein Zauberbad renovieren wir Bäder ohne wochenlange Baustelle: kaum Abriss, kein Fugenputzen, verbindlicher Festpreis. Ideal
              für Privatkunden – und für Hotelbäder.
            </p>
            <ul className="mt-9 grid gap-x-8 gap-y-4 text-[17px] sm:grid-cols-2">
              {["Umbau in ca. 3 Tagen", "Fugenlos & pflegeleicht", "Festpreis vor Ort", "Barrierefrei möglich"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Check /> {t}
                </li>
              ))}
            </ul>
            <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-primary mt-10">
              Mehr auf meinzauberbad.de ↗
            </a>
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section className="section">
        <div className="wrap">
          <Projects />
        </div>
      </section>

      {/* Über uns */}
      <section className="section bg-paper">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h2">Handwerk aus Bad Laasphe – seit {site.since}.</h2>
            <p className="lead mt-6">
              Thomas Pfeiffer und Sascha Schwarz führen ein Team aus Fliesenlegern, Malern, Trockenbauern und Schreinern. Wir sind bundesweit
              im Einsatz – und bleiben persönlich erreichbar.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-y-8 border-y border-line py-8 sm:grid-cols-4">
              <Stat value="20+" label="Jahre" />
              <Stat value="~40" label="Fachkräfte" />
              <Stat value="[X]" label="Hotels" todo />
              <Stat value="[X]" label="Projekte" todo />
            </dl>
            <Link href="/ueber-uns" className="link-arrow mt-8">
              Mehr über uns →
            </Link>
          </div>
          <div className="relative">
            <Photo src="team-flotte.jpg" alt="Die Fahrzeugflotte von Pfeiffer & Schwarz am Firmensitz in Bad Laasphe" className="aspect-[4/3]" />
            <p className="mt-4 text-sm text-slate">Unser Firmensitz in Bad Laasphe · Teamfoto mit Thomas Pfeiffer &amp; Sascha Schwarz folgt</p>
          </div>
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
              <figure key={tag} className="border-l-2 border-blue pl-7">
                <p className="text-sm font-medium text-blue">{tag}</p>
                <blockquote className="mt-4 font-display text-xl leading-snug font-semibold text-navy">„{quote}“</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{name}</span>
                  <span className="block text-slate">{role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Notfall */}
      <section className="bg-blue text-white">
        <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-display text-2xl leading-snug font-bold sm:text-3xl">
            Wasser- oder Brandschaden? Wir helfen schnell – auch mit der Versicherung.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={site.phoneHref} className="btn bg-white text-blue hover:bg-white/90">
              Jetzt anrufen
            </a>
            <Link href="/schadensanierung/wasserschaden" className="btn-light">
              Schadensanierung →
            </Link>
          </div>
        </div>
      </section>

      <Faq title="Häufige Fragen" items={faq} />

      {/* Ratgeber */}
      <section className="section bg-paper">
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
    <Link href={href} className="group relative block overflow-hidden">
      <Photo src={img} alt={title} className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[5/4]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
        <p className="font-display text-3xl font-bold sm:text-4xl">{title}</p>
        <ul className="mt-5 space-y-1.5 text-white/85">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2.5">
              <Check light /> {p}
            </li>
          ))}
        </ul>
        <span className="mt-7 inline-flex items-center gap-2 font-semibold">
          Mehr erfahren <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
