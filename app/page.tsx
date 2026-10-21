import Image from "next/image";
import Link from "next/link";
import { SheetHero } from "@/components/home/SheetHero";
import { OccupancyBoard } from "@/components/home/OccupancyBoard";
import { TradeRows } from "@/components/home/TradeRows";
import { Moments } from "@/components/home/Moments";
import { BathIndex } from "@/components/home/BathIndex";
import { Ledger } from "@/components/home/Ledger";
import { Frame } from "@/components/Frame";
import { Todo } from "@/components/Blocks";
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
  { title: "Zuerst kommen wir vorbei", text: "Ihr Projektleiter nimmt die Räume auf und hört zu, was Sie vorhaben.", img: "team-einsatz.jpg", alt: "Monteur am Firmenwagen", space: 120 },
  { title: "Dann sehen Sie es vorher", text: "Fliesen, Möbel, Licht: in der 3D-Planung, bevor wir anfangen.", img: "fliesen-bad-3.jpg", alt: "Fertiges Bad mit Dachschräge", space: 40 },
  { title: "Danach ein klares Angebot", text: "Alle Positionen transparent und persönlich besprochen.", img: "maler-4.jpg", alt: "Farbfächer und Malerrolle", space: 96 },
  { title: "Ein Ansprechpartner bleibt", text: "Vom ersten Termin bis zur Übergabe dieselbe Person.", img: "innenausbau-7.jpg", alt: "Fertig ausgebautes Zimmer", space: 16 },
  { title: "Unsere Teams bauen", text: "Festangestellte Fachkräfte statt Subunternehmer-Kette.", img: "trockenbau-2.jpg", alt: "Trockenbau im Rohbau", space: 140 },
  { title: "Zum Schluss die Übergabe", text: "Gemeinsame Abnahme, sauber hinterlassen.", img: "sanitaer-3.jpg", alt: "Fertige Dusche mit Lichtleiste", space: 64 },
];

const bathCols = [
  {
    name: "So läuft es",
    items: [
      { name: "Beratung zu Hause", note: "Wir schauen uns Ihr Bad an und besprechen Wünsche, Maße und Budget." },
      { name: "Planung in 3D", note: "Sie sehen das neue Bad, bevor der erste Handgriff passiert." },
      { name: "Verbindlicher Festpreis", note: "Der Preis steht nach der Beratung fest – ohne Nachträge." },
      { name: "Umbau in ca. 3 Tagen", note: "Kaum Abriss: Die fugenlosen Flächen kommen auf den vorhandenen Untergrund." },
      { name: "Übergabe", note: "Sauber, fertig, benutzbar." },
    ],
  },
  {
    name: "Was dazugehört",
    items: [
      { name: "Fugenlose Wände", note: "Keine Fugen, kein Schimmel in Fugen, kein Nachputzen." },
      { name: "Bodengleiche Dusche", note: "Ebenerdig, auch im Altbau oft möglich." },
      { name: "Barrierefreie Ausführung", note: "Bewegungsflächen, Haltegriffe, rutschhemmende Böden." },
      { name: "Armaturen von Villeroy & Boch", note: "Als Premiumpartner beraten wir zu Keramik und Armaturen." },
    ],
  },
  {
    name: "Für wen",
    items: [
      { name: "Eigenheim und Wohnung", note: "Wer nicht wochenlang ohne Bad sein möchte." },
      { name: "Hotelbäder", note: "Wenn Zimmer nur wenige Tage gesperrt werden können." },
      { name: "Mit Pflegegrad", note: "Für barrierefreie Umbauten gibt es Zuschüsse der Pflegekasse – wir helfen beim Antrag." },
    ],
  },
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
      <SheetHero />

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

      {/* Hotel: Belegungsplan */}
      <section id="hotel" aria-labelledby="hotel-title" className="bg-paper py-24 sm:py-32 lg:py-40">
        <div className="wrap">
          <OccupancyBoard />
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <h3 className="t-lead lg:col-span-4">Was wir in Ihrem Hotel renovieren</h3>
            <ul className="grid gap-x-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              {hotelNav.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group block py-2.5">
                    <span className="font-semibold underline decoration-transparent decoration-2 group-hover:decoration-blue">{item.label}</span>
                    <span className="small block text-slate">{item.note}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:ml-[calc(33.333%+0.5rem)]">
            <Link href="/hotelrenovierung#anfrage" className="btn-primary">
              Hotelprojekt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Bau & Innenausbau */}
      <section id="bau" aria-labelledby="bau-title" className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12" data-reveal>
            <h2 id="bau-title" className="h2 lg:col-span-6 lg:col-start-2">
              Bau &amp; Innenausbau
            </h2>
            <p className="text-ink-2 lg:col-span-4 lg:col-start-8 lg:self-end">
              Einzelne Gewerke oder komplette Sanierung – für Wohnungen, Häuser, Büros und Gewerbe in Siegen-Wittgenstein.
            </p>
          </div>
          <div className="mt-14">
            <TradeRows groups={tradeGroups} />
          </div>
        </div>
      </section>

      {/* So arbeiten wir */}
      <section aria-label="So arbeiten wir" className="pb-24 sm:pb-32 lg:pb-40">
        <Moments title="So arbeiten wir" items={moments} />
      </section>

      {/* Mein Zauberbad */}
      <section aria-labelledby="bad-title" className="bg-paper py-24 sm:py-32 lg:py-40">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12" data-reveal>
            <h2 id="bad-title" className="h2 lg:col-span-7">
              Neues Bad in 3 Tagen, ohne Fugen.
            </h2>
            <p className="text-ink-2 lg:col-span-4 lg:col-start-9 lg:self-end">
              Mit Mein Zauberbad renovieren wir Bäder ohne wochenlange Baustelle: kaum Abriss, verbindlicher Festpreis.
            </p>
          </div>
          <div className="mt-16">
            <BathIndex cols={bathCols} />
          </div>
        </div>
      </section>

      {/* Referenzen */}
      <section aria-labelledby="ref-title" className="section">
        <div className="wrap">
          <h2 id="ref-title" className="h2 lg:ml-[calc(8.333%+0.5rem)]" data-reveal>
            <span>Ausgewählte Projekte</span>
          </h2>
          <div className="mt-12">
            <Ledger groups={references} />
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section aria-labelledby="about-title" className="bg-paper py-24 sm:py-32 lg:py-36">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
          <dl className="small grid grid-cols-3 gap-4 text-slate lg:order-first lg:col-span-2 lg:grid-cols-1 lg:content-start lg:pt-3">
            <div>
              <dt>Sitz</dt>
              <dd className="font-medium text-ink">{site.street}, {site.city}</dd>
            </div>
            <div>
              <dt>Seit</dt>
              <dd className="font-medium text-ink">{site.since}</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={site.phoneHref} className="num font-medium text-ink underline decoration-blue">{site.phone}</a>
              </dd>
            </div>
          </dl>
          <div className="order-first lg:order-none lg:col-span-10" data-reveal>
            <h2 id="about-title" className="sr-only">
              Über uns
            </h2>
            <p className="t-lead leading-[1.2] tracking-[-0.015em] text-slate">
              <span className="relative float-left mt-1.5 mr-3 h-[3.6em] w-[3.6em] overflow-hidden bg-blue">
                <Image src="/img/team-einsatz.jpg" alt="Monteur von Pfeiffer & Schwarz in blauer Arbeitsjacke" fill sizes="140px" className="object-cover" />
              </span>
              <span className="text-ink">Thomas Pfeiffer und Sascha Schwarz</span> führen rund 40 angestellte Fliesenleger, Maler, Trockenbauer
              und Schreiner aus Bad Laasphe. Sie erkennen sie an der blauen Jacke.
            </p>
            <p className="mt-6 t-lead leading-[1.2] tracking-[-0.015em] text-slate">
              Bundesweit im Einsatz, persönlich erreichbar.{" "}
              <Link href="/ueber-uns" className="text-ink underline decoration-blue decoration-2">
                Mehr über uns
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section aria-labelledby="stimmen-title" className="section">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-6">
          <h2 id="stimmen-title" className="t-lead lg:col-span-2">
            Was Kunden sagen
          </h2>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-10 lg:grid-cols-10 lg:gap-2">
            {quotes.map((q) => (
              <figure key={q.tag} className={q.w} data-reveal>
                <div className="relative h-[110px] overflow-hidden bg-paper">
                  <Image src={`/img/${q.img}`} alt="" fill sizes="30vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 t-body">
                  <span className="font-semibold text-ink">
                    <Todo text="[Name]" />
                  </span>{" "}
                  <span className="text-slate">
                    <Todo text={q.role} />, {q.tag}
                  </span>
                </figcaption>
                <blockquote className="mt-2 max-w-[42ch] pr-4 t-body leading-snug text-ink">
                  „<Todo text={q.quote} />“
                </blockquote>
              </figure>
            ))}
          </div>
          <p className="small text-slate lg:col-span-10 lg:col-start-3">
            Google <span className="todo">[4,X]</span> von 5 bei <span className="todo">[X]</span> Bewertungen
          </p>
        </div>
      </section>

      {/* Notfall */}
      <section aria-labelledby="notfall-title" className="bg-blue text-white">
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
              <Link href="/schadensanierung/wasserschaden" className="btn bg-white/12 text-white hover:bg-white/25">
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
                <Frame src={a.img} alt="" ratio="3/2" label={a.tag} tone={i + 1} sizes="(min-width: 640px) 33vw, 100vw" />
                <h3 className="mt-3 max-w-[30ch] t-lead leading-tight underline decoration-transparent decoration-2 group-hover:decoration-blue">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss: drei Fotos, dann ein Feld */}
      <section aria-labelledby="cta-title">
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
              <div className="flex aspect-[4/5] items-center justify-center bg-navy-soft p-3 text-center small text-white/75">
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
