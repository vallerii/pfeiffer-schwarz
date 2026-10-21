import Image from "next/image";
import Link from "next/link";
import { MediaHero } from "@/components/home/MediaHero";
import { FloorPlan } from "@/components/home/FloorPlan";
import { Moments } from "@/components/home/Moments";
import { Frame, IconCta, Mark } from "@/components/Frame";
import { Todo } from "@/components/Blocks";
import { hotelNav, site } from "@/lib/site";

const hotelImages: Record<string, string> = {
  "/hotelrenovierung/hotelzimmer": "hotel-zimmer.jpg",
  "/hotelrenovierung/hotelbaeder": "hotel-bad-3.jpg",
  "/hotelrenovierung/wellness-spa": "hotel-spa.jpg",
  "/hotelrenovierung/lobby-gastro": "innenausbau-4.jpg",
  "/hotelrenovierung/hotelmoebel": "hotel-zimmer-2.jpg",
  "/hotelrenovierung/komplettsanierung": "hotel-terrasse.jpg",
};

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
  {
    q: "Arbeiten bei Ihnen Subunternehmer?",
    a: "Die Kerngewerke – Fliesen, Maler, Trockenbau, Innenausbau – führen rund 40 festangestellte Fachkräfte aus. Für Elektro und Licht arbeiten wir mit festen Partnern.",
  },
  {
    q: "Wie schnell bekomme ich ein Angebot?",
    a: "Nach dem Aufmaß vor Ort erhalten Sie in der Regel innerhalb von [X] Werktagen ein Angebot mit allen Positionen – bei Hotels zusätzlich mit Bauzeitenplan.",
  },
  {
    q: "Was ist Mein Zauberbad?",
    a: "Unser System für fugenlose Bäder: kaum Abriss, Umbau in ca. 3 Tagen, verbindlicher Festpreis. Ideal für Eigentümer und für Hotelbäder, die nur kurz gesperrt werden können.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

const tradeGroups = [
  {
    name: "Gewerke",
    rows: [
      { name: "Fliesenarbeiten", value: "Bad, Küche, Terrasse, Großformat", href: "/bau-innenausbau/fliesenarbeiten", img: "fliesen-dusche-2.jpg" },
      { name: "Malerarbeiten", value: "Wände, Decken, Spachteltechnik", href: "/bau-innenausbau/malerarbeiten", img: "maler-6.jpg" },
      { name: "Innenausbau", value: "Büros, Praxen, Gastro", href: "/bau-innenausbau/innenausbau", img: "innenausbau-3.jpg" },
      { name: "Trockenbau", value: "Wände, Decken, Schallschutz", href: "/bau-innenausbau/trockenbau", img: "trockenbau-1.jpg" },
      { name: "Putz & Estrich", value: "Innen, Fassade, Belegreife", href: "/bau-innenausbau/putz-estrich", img: "putz-3.jpg" },
      { name: "Sanitär", value: "Komplettbäder, barrierefrei", href: "/bau-innenausbau/sanitaer", img: "sanitaer-1.jpg" },
    ],
  },
  {
    name: "Schadensanierung",
    rows: [
      { name: "Wasserschaden", value: "Mit der Versicherung", href: "/schadensanierung/wasserschaden", img: "estrich-1.jpg" },
      { name: "Brandschaden", value: "Reinigung bis Übergabe", href: "/schadensanierung/brandschaden", img: "trockenbau-4.jpg" },
      { name: "Gebäudetrocknung", value: "Messen, trocknen, prüfen", href: "/schadensanierung/gebaeudetrocknung", img: "trockenbau-3.jpg" },
    ],
  },
  {
    name: "Für Partner",
    rows: [{ name: "Für Generalunternehmer", value: "§48b, §13b, SOKA-BAU", href: "/generalunternehmer", img: "team-einsatz.jpg" }],
  },
];

const moments = [
  { tag: "Aufmaß", title: "Zuerst kommen wir vorbei", text: "Ihr Projektleiter nimmt die Räume auf und hört zu, was Sie vorhaben.", img: "maler-2.jpg", alt: "Maler mit Farbrolle" },
  { tag: "3D-Planung", title: "Dann sehen Sie es vorher", text: "Fliesen, Möbel, Licht: in der 3D-Planung, bevor wir anfangen.", img: "fliesen-bad-3.jpg", alt: "Fertiges Bad mit Dachschräge" },
  { tag: "Angebot", title: "Danach ein klares Angebot", text: "Alle Positionen transparent und persönlich besprochen.", img: "maler-4.jpg", alt: "Farbfächer und Malerrolle" },
  { tag: "Ansprechpartner", title: "Ein Ansprechpartner bleibt", text: "Vom ersten Termin bis zur Übergabe dieselbe Person.", img: "innenausbau-7.jpg", alt: "Fertig ausgebautes Zimmer" },
  { tag: "Eigene Teams", title: "Unsere Teams bauen", text: "Festangestellte Fachkräfte statt Subunternehmer-Kette.", img: "trockenbau-2.jpg", alt: "Trockenbau im Rohbau" },
  { tag: "Übergabe", title: "Zum Schluss die Übergabe", text: "Gemeinsame Abnahme, sauber hinterlassen.", img: "fliesen-dusche-3.jpg", alt: "Fertige Dusche mit Glaswand" },
];

const references = [
  {
    name: "Hotel",
    rows: [
      { name: "[4*-Hotel, Sauerland]", kind: "62 Zimmer im laufenden Betrieb", year: "[2025]", img: "hotel-zimmer.jpg" },
      { name: "[Wellnesshotel]", kind: "Sauna und Ruhebereich", year: "[2024]", img: "hotel-sauna.jpg" },
      { name: "[Hotelbäder in Serie]", kind: "[X] Bäder in [X] Wochen", year: "[2024]", img: "hotel-bad-3.jpg" },
    ],
  },
  {
    name: "Bau",
    rows: [
      { name: "[Büro- und Aufenthaltsbereich, Siegen]", kind: "Trockenbau, Maler, Akustik", year: "[2025]", img: "innenausbau-1.jpg" },
      { name: "[Kantine, Bad Laasphe]", kind: "Innenausbau mit Holzverkleidung", year: "[2025]", img: "innenausbau-6.jpg" },
      { name: "[Mehrfamilienhaus, Wittgenstein]", kind: "Fassadenputz und Anstrich", year: "[2024]", img: "putz-3.jpg" },
    ],
  },
  {
    name: "Bad",
    rows: [
      { name: "[Badsanierung, Bad Laasphe]", kind: "Großformat, bodengleiche Dusche", year: "[2025]", img: "fliesen-dusche-1.jpg" },
      { name: "[Gäste-WC, Erndtebrück]", kind: "Wandfliesen, Vorwandinstallation", year: "[2024]", img: "fliesen-wc.jpg" },
    ],
  },
];

const quotes = [
  { tag: "Hotel", img: "hotel-terrasse.jpg", w: "lg:col-span-4", quote: "[Zitat Hotelier: Termin gehalten, Betrieb lief weiter]", role: "[Funktion], [Hotel]" },
  { tag: "Bau", img: "innenausbau-5.jpg", w: "lg:col-span-3", quote: "[Zitat Privat- oder Gewerbekunde]", role: "[Ort]" },
  { tag: "Bad", img: "sanitaer-2.jpg", w: "lg:col-span-3", quote: "[Zitat Badkunde]", role: "[Ort]" },
];

const articles = [
  { title: "Hotelrenovierung im laufenden Betrieb: So planen Sie ohne Umsatzverlust", img: "hotel-terrasse.jpg", tag: "Hotel, 6 Min.", href: "/ratgeber/hotelrenovierung-im-laufenden-betrieb" },
  { title: "Fliesen auf Fußbodenheizung: Darauf kommt es an", img: "fliesen-bad-1.jpg", tag: "Bau, 4 Min.", href: "/ratgeber" },
  { title: "Wasserschaden: Was zahlt die Versicherung – und was tun Sie zuerst?", img: "estrich-1.jpg", tag: "Schaden, 5 Min.", href: "/ratgeber" },
];

export default function Home() {
  return (
    <>
      <MediaHero />

      {/* Zwei Bereiche */}
      <section aria-labelledby="bereiche" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4" data-reveal>
            <h2 id="bereiche" className="h2">
              Zwei Bereiche. Ein Team.
            </h2>
            <p className="mt-6 font-medium text-ink">
              Ob Hotel mit 150 Zimmern oder Bad im Einfamilienhaus: Es arbeiten dieselben festangestellten Handwerker.
            </p>
            <p className="mt-4 text-ink-2">
              Fliesenleger, Maler, Trockenbauer und Schreiner aus Bad Laasphe – mit einem Ansprechpartner für Sie, vom ersten Aufmaß bis zur
              Übergabe.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <Link href="#hotel" className="group">
              <Frame src="hotel-zimmer-2.jpg" alt="Hotelzimmer mit Holzdecke und Bad" ratio="4/3" label="Hotelrenovierung" tone={0} sizes="(min-width: 1024px) 30vw, 100vw" />
              <p className="mt-3 text-ink-2">Im laufenden Betrieb, etagenweise. Alle Gewerke, inklusive Möbel, Textilien und Licht.</p>
            </Link>
            <Link href="#bau" className="group sm:mt-24">
              <Frame src="innenausbau-1.jpg" alt="Büro- und Aufenthaltsbereich nach dem Innenausbau" ratio="4/3" label="Bau & Innenausbau" tone={1} sizes="(min-width: 1024px) 30vw, 100vw" />
              <p className="mt-3 text-ink-2">Einzelgewerk oder Komplettsanierung für Wohnungen, Häuser, Büros. Auch Brand- und Wasserschäden.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel – Overtake „Exactly“: Medien links, rechts Überschrift, Text, CTA, gepunktete Linie, sechs Punkte */}
      <section id="hotel" aria-labelledby="hotel-title" className="px-3">
        <div className="panel grid gap-10 bg-paper p-3 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-(--radius-card) lg:min-h-[640px]">
            <Image src="/img/hotel-zimmer-2.jpg" alt="Renoviertes Hotelzimmer mit Holzdecke und offenem Bad" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-3 bottom-3 rounded-(--radius-card) bg-white p-5 sm:right-auto sm:w-[360px]">
              <FloorPlan />
            </div>
          </div>
          <div className="flex flex-col justify-center px-3 pb-8 sm:px-6 lg:py-12 lg:pr-12 lg:pl-0" data-reveal>
            <h2 id="hotel-title" className="h2">
              Ihr Hotel bleibt offen.
            </h2>
            <p className="t-lead mt-6 max-w-[38ch] text-slate">
              Wir renovieren etagenweise. Gesperrt ist nur, was gerade in Arbeit ist – mit Einsatzleiter vor Ort und allen Gewerken im eigenen Team.
            </p>
            <div className="mt-9">
              <IconCta href="/hotelrenovierung#anfrage">Hotelprojekt anfragen</IconCta>
            </div>
            <hr className="mt-10 border-0 border-t-2 border-dotted border-slate/40" />
            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {hotelNav.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex gap-3">
                    <span className="relative mt-0.5 h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white">
                      <Image src={`/img/${hotelImages[item.href]}`} alt="" fill sizes="44px" className="object-cover" />
                    </span>
                    <span>
                      <span className="block font-semibold text-navy underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-blue">
                        {item.label}
                      </span>
                      <span className="small block text-slate">{item.note}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mein Zauberbad */}
      <section aria-labelledby="bad-title" className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="order-last grid grid-cols-2 gap-3 lg:order-none lg:col-span-6">
            <Frame src="fliesen-dusche-4.jpg" alt="Dusche mit Wandplatten in Betonoptik" ratio="3/4" label="Badsanierung" tone={4} sizes="(min-width: 1024px) 25vw, 50vw" className="mt-16" />
            <Frame src="sanitaer-3.jpg" alt="Dusche mit großflächigen Wandplatten" ratio="3/4" label="Dusche, großflächig" tone={4} sizes="(min-width: 1024px) 25vw, 50vw" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <h2 id="bad-title" className="h2">
              Neues Bad in <Mark tone="peach">3 Tagen</Mark>.
            </h2>
            <p className="t-lead mt-6 text-ink-2">
              Für Ihr Zuhause und für Hotelbäder: Mit unserem System Mein Zauberbad gibt es kaum Abriss, keine Fugen und einen verbindlichen Festpreis.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {[
                ["ca. 3 Tage", "statt mehrerer Wochen Baustelle"],
                ["Festpreis", "steht nach der Beratung fest"],
                ["Fugenlos", "pflegeleicht, kein Schimmel in Fugen"],
                ["Barrierefrei", "auf Wunsch, mit Zuschuss bei Pflegegrad"],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="t-lead font-semibold text-navy">{t}</dt>
                  <dd className="mt-1 text-ink-2">{d}</dd>
                </div>
              ))}
            </dl>
            <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-primary mt-10">
              Mehr auf meinzauberbad.de
            </a>
          </div>
        </div>
      </section>

      {/* Bau & Innenausbau */}
      <section id="bau" aria-labelledby="bau-title" className="mx-3 rounded-(--radius-panel) bg-paper py-20 sm:py-28 lg:py-32">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12" data-reveal>
            <h2 id="bau-title" className="h2 lg:col-span-6">
              Bau &amp; Innenausbau
            </h2>
            <p className="text-ink-2 lg:col-span-5 lg:col-start-8 lg:self-end">
              Einzelne Gewerke oder komplette Sanierung – für Wohnungen, Häuser, Büros und Gewerbe in Siegen-Wittgenstein. Wählen Sie ein Gewerk.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {tradeGroups.flatMap((g) => g.rows).slice(0, 6).map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group block">
                  <Frame src={r.img} alt="" ratio="4/3" label={r.name} tone={1} large link sizes="(min-width: 1024px) 25vw, 50vw" />
                  <span className="mt-2 block text-ink-2">{r.value}</span>
                </Link>
              </li>
            ))}
            <li className="col-span-2 flex flex-col justify-between gap-6 rounded-(--radius-card) bg-white p-6">
              <div>
                <p className="t-lead font-semibold text-navy">Auch das gehört dazu</p>
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {tradeGroups.slice(1).flatMap((g) => g.rows).map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="group block">
                        <span className="font-semibold underline decoration-blue/30 decoration-2 group-hover:decoration-blue">{r.name}</span>
                        <span className="small block text-slate">{r.value}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/bau-innenausbau" className="link-arrow self-start">
                Alle Leistungen im Überblick
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* So arbeiten wir */}
      <section aria-label="So arbeiten wir" className="section">
        <Moments title="So arbeiten wir" items={moments} />
      </section>

      {/* Referenzen */}
      <section aria-labelledby="ref-title" className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <h2 id="ref-title" className="h2">
              Ausgewählte Projekte
            </h2>
            <Link href="/referenzen" className="link-arrow">
              Alle Referenzen
            </Link>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {references.flatMap((g) => g.rows.slice(0, 2).map((r) => ({ ...r, cat: g.name }))).map((r, i) => (
              <li key={r.name} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
                <Link href="/referenzen" className="group flex h-full flex-col">
                  <Frame
                    src={r.img}
                    alt=""
                    ratio={i === 0 ? "4/3" : "3/2"}
                    label={r.cat}
                    tone={r.cat === "Hotel" ? 0 : r.cat === "Bad" ? 4 : 1}
                    large
                    link
                    className={i === 0 ? "sm:flex-1" : ""}
                    imgClassName={i === 0 ? "sm:flex-1" : ""}
                    sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                  />
                  <span className="mt-3 block font-semibold">
                    <Todo text={r.name} />
                  </span>
                  <span className="block text-ink-2">{r.kind}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Über uns */}
      <section aria-labelledby="about-title" className="mx-3 rounded-(--radius-panel) bg-paper py-20 sm:py-28 lg:py-32">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
          <Frame
            src="team-einsatz.jpg"
            alt="Monteur von Pfeiffer & Schwarz in blauer Arbeitsjacke am Firmenwagen"
            ratio="4/3"
            label="Unser Team, unterwegs ab Bad Laasphe"
            tone={1}
            large
            className="order-last lg:order-none lg:col-span-6"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <h2 id="about-title" className="h2">
              Handwerk aus Bad Laasphe, seit {site.since}.
            </h2>
            <p className="t-lead mt-6 text-ink-2">
              Thomas Pfeiffer und Sascha Schwarz führen rund 40 angestellte Fliesenleger, Maler, Trockenbauer und Schreiner.{" "}
              <Mark tone="navy">Sie erkennen sie an der blauen Jacke.</Mark>
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["20+", "Jahre"],
                ["~40", "Fachkräfte"],
                ["[X]", "Hotels"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className={`h2 num ${v.includes("[") ? "text-slate/50" : "text-navy"}`}>{v.replace(/[[\]]/g, "")}</dd>
                  <dd className="small mt-2 text-slate">{l}</dd>
                </div>
              ))}
            </dl>
            <Link href="/ueber-uns" className="link-arrow mt-10">
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section aria-labelledby="stimmen-title" className="section">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="stimmen-title" className="h2">
              Was Kunden sagen
            </h2>
            <p className="text-slate">
              Google <span className="todo">[4,X]</span> von 5 bei <span className="todo">[X]</span> Bewertungen
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-3">
            {quotes.map((q) => (
              <figure key={q.tag} data-reveal>
                <Frame src={q.img} alt="" ratio="3/2" label={q.tag} tone={q.tag === "Hotel" ? 0 : q.tag === "Bad" ? 4 : 1} large sizes="(min-width: 640px) 33vw, 100vw" />
                <blockquote className="t-lead mt-5 max-w-[30ch] text-ink">
                  „<Todo text={q.quote} />“
                </blockquote>
                <figcaption className="mt-4 text-slate">
                  <span className="font-semibold text-ink">
                    <Todo text="[Name]" />
                  </span>
                  , <Todo text={q.role} />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Notfall */}
      <section aria-labelledby="notfall-title" className="mx-3 rounded-(--radius-panel) bg-navy text-white">
        <div className="wrap grid gap-8 py-16 lg:grid-cols-12 lg:items-end lg:gap-6 lg:py-20">
          <h2 id="notfall-title" className="h2 leading-[1.02] text-white lg:col-span-7">
            Wasser- oder Brandschaden?
          </h2>
          <div className="lg:col-span-5">
            <p className="t-lead text-white">Wir helfen schnell: Trocknung, Sanierung und Abwicklung mit Ihrer Versicherung.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={site.phoneHref} className="btn-light num">
                {site.phone} anrufen
              </a>
              <Link href="/schadensanierung/wasserschaden" className="btn bg-white/10 text-white hover:bg-white/20">
                Schadensanierung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ als Lesetext */}
      <section aria-labelledby="faq-title" className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
          <h2 id="faq-title" className="h2 lg:col-span-3">
            Häufige Fragen
          </h2>
          <div className="t-body leading-[1.55] lg:col-span-8 lg:col-start-5 lg:columns-2 lg:gap-14">
            {faq.map((f) => (
              <p key={f.q} className="mb-5 break-inside-avoid text-ink-2">
                <span className="font-semibold text-ink">{f.q}</span> <Todo text={f.a} />
              </p>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>

      {/* Ratgeber */}
      <section aria-labelledby="ratgeber-title" className="pb-24 sm:pb-32 lg:pb-40">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="ratgeber-title" className="h2">
              Wissen aus der Praxis
            </h2>
            <Link href="/ratgeber" className="link-arrow">
              Alle Artikel
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {articles.map((a, i) => (
              <Link key={a.title} href={a.href} className="group" data-reveal>
                <Frame src={a.img} alt="" ratio="3/2" label={a.tag} tone={a.tag.startsWith("Hotel") ? 0 : 1} sizes="(min-width: 640px) 33vw, 100vw" />
                <h3 className="mt-3 max-w-[30ch] t-lead leading-tight underline decoration-transparent decoration-2 group-hover:decoration-blue">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss: drei Fotos, dann ein Feld */}
      <section aria-labelledby="cta-title" className="mx-3 overflow-hidden rounded-(--radius-panel)">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {["hotel-bad-2.jpg", "innenausbau-3.jpg", "fliesen-bad-3.jpg"].map((src, i) => (
            <div key={src} className={`relative h-[32svh] min-h-56 sm:h-[40svh] ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
              <Image src={`/img/${src}`} alt="" fill sizes="33vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="bg-navy text-white">
          <div className="wrap grid gap-10 py-16 lg:min-h-[40svh] lg:grid-cols-12 lg:gap-6 lg:py-20">
            <div className="lg:col-span-7">
              <h2 id="cta-title" className="t-lead leading-[1.15] text-white">
                Hotel, Wohnung oder Gewerbe:{" "}
                <Link href="#anfrage" className="underline decoration-blue decoration-4 underline-offset-[6px] hover:decoration-white">
                  erzählen Sie uns von Ihrem Projekt
                </Link>
                .
              </h2>
              <p className="mt-8 text-white/80">
                Wir melden uns innerhalb von <span className="todo">[24 h]</span>. Lieber direkt sprechen?{" "}
                <a href={site.phoneHref} className="num text-white underline">
                  {site.phone}
                </a>
              </p>
            </div>
            <figure className="w-32 self-end justify-self-end lg:col-span-2 lg:col-start-11 lg:w-40">
              <div className="flex aspect-[4/5] items-center justify-center rounded-(--radius-card) bg-navy-soft p-3 text-center small text-white/75">
                <Todo text="[Foto Ansprechpartner]" />
              </div>
              <figcaption className="small mt-2 text-white/70">
                <Todo text="[Name], antwortet Ihnen" />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
