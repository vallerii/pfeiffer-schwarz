import type { Metadata } from "next";
import Link from "next/link";
import { EstimateForm } from "@/components/EstimateForm";
import { TradeIndex, type Trade } from "@/components/TradeIndex";
import { Photo } from "@/components/Photo";
import { Placeholder } from "@/components/Placeholder";
import { Check } from "@/components/Check";
import { Faq } from "@/components/Faq";
import { Articles } from "@/components/Articles";
import { BeforeAfter } from "@/components/BeforeAfter";
import {
  Breadcrumbs,
  FinalCta,
  ProcessSteps,
  RelatedLinks,
  Testimonials,
  TrustStrip,
  breadcrumbSchema,
} from "@/components/Blocks";
import { hotelNav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hotelrenovierung im laufenden Betrieb",
  description:
    "Hotelrenovierung als Generalunternehmer: Zimmer, Bäder, Wellness, Lobby und Möbel – im laufenden Betrieb, mit 3D-Planung und Einsatzleiter vor Ort. Seit 2005, bundesweit.",
  alternates: { canonical: "/hotelrenovierung" },
};

const areaImages: Record<string, string> = {
  "/hotelrenovierung/hotelzimmer": "hotel-zimmer.jpg",
  "/hotelrenovierung/hotelbaeder": "hotel-bad-3.jpg",
  "/hotelrenovierung/wellness-spa": "hotel-spa.jpg",
  "/hotelrenovierung/lobby-gastro": "hotel-terrasse.jpg",
  "/hotelrenovierung/hotelmoebel": "hotel-zimmer-2.jpg",
  "/hotelrenovierung/komplettsanierung": "hotel-bad.jpg",
};
const areas: Trade[] = hotelNav.items.map((i) => ({ name: i.label, text: i.note ?? "", href: i.href, img: areaImages[i.href] }));

const trades = [
  "Trockenbau & Schallschutz",
  "Fliesen & Hotelbäder",
  "Sanitär & Vorwandinstallation",
  "Maler & Oberflächen",
  "Bodenbeläge & Teppich",
  "Möbel & Einbauten",
  "Textilien & Vorhänge",
  "Licht & Elektro (mit Partnern)",
];

const faq = [
  {
    q: "Können Sie wirklich im laufenden Hotelbetrieb arbeiten?",
    a: "Ja, das ist unser Normalfall. Wir renovieren etagen- oder zimmerweise, legen laute Arbeiten in abgestimmte Zeitfenster und halten Wege für Gäste frei. Ein Einsatzleiter ist dauerhaft vor Ort.",
  },
  {
    q: "Übernehmen Sie das komplette Projekt als Generalunternehmer?",
    a: "Ja. Von der 3D-Planung über alle Gewerke bis zu Möbeln, Textilien und Licht koordinieren wir alles. Sie haben einen Projektleiter als Ansprechpartner.",
  },
  {
    q: "Wie lange dauert die Renovierung eines Hotelzimmers?",
    a: "Das hängt vom Umfang ab. Typisch sind [X–X] Arbeitstage pro Zimmer, in Serie arbeiten wir mehrere Zimmer parallel. Den genauen Takt legen wir im Bauzeitenplan fest.",
  },
  {
    q: "Was kostet eine Hotelzimmer-Renovierung?",
    a: "Von der Auffrischung bis zur Kernsanierung mit Bad ist die Spanne groß. Nach Begehung und 3D-Planung erhalten Sie ein Angebot pro Zimmertyp mit allen Positionen.",
  },
  {
    q: "Arbeiten Sie bundesweit?",
    a: "Ja. Unser Sitz ist in Bad Laasphe (Siegen-Wittgenstein), Hotelprojekte übernehmen wir in ganz Deutschland.",
  },
  {
    q: "Können Hotelbäder schneller erneuert werden?",
    a: "Ja. Mit fugenlosen Bädern (Mein Zauberbad) ist ein Bad meist in ca. 3 Tagen fertig – ideal, wenn Zimmer nur kurz gesperrt werden können.",
  },
];

const crumbs = [
  { name: "Startseite", href: "/" },
  { name: "Hotelrenovierung", href: "/hotelrenovierung" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hotelrenovierung",
    provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: "+49 2754 220430" },
    areaServed: "DE",
  },
  breadcrumbSchema(crumbs),
];

export default function Hotelrenovierung() {
  return (
    <>
      {/* Hero mit Hotel-Quiz */}
      <section id="anfrage" className="bg-navy text-white">
        <div className="wrap pt-8 pb-20 lg:pb-28">
          <Breadcrumbs tone="dark" items={[crumbs[0], { name: "Hotelrenovierung" }]} />
          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_460px] lg:gap-20">
            <div className="min-w-0">
              <h1 className="text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-6xl">
                Hotelrenovierung im laufenden Betrieb – <span className="text-blue-bright">aus einer Hand.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Planung, Beratung, Koordination und Ausführung: Wir renovieren Zimmer, Bäder, Wellnessbereiche und Lobbys, während Ihre Gäste
                weiter bei Ihnen wohnen.
              </p>
              <ul className="mt-8 space-y-3 text-[17px] text-white/90">
                {[
                  "Etagenweise Planung um Ihre Belegung herum",
                  "Generalunternehmer für alle Gewerke – inkl. Möbel, Textilien, Licht",
                  "Projektleiter und Einsatzleiter dauerhaft vor Ort",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check light /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-12 grid grid-cols-5 gap-3">
                <Photo src="hotel-zimmer.jpg" alt="Renoviertes Hotelzimmer" className="col-span-3 aspect-[4/3]" priority sizes="(min-width: 1024px) 35vw, 60vw" />
                <div className="col-span-2 grid gap-3">
                  <Photo src="hotel-bad.jpg" alt="Hotelbad nach der Renovierung" className="" sizes="20vw" />
                  <Photo src="hotel-spa.jpg" alt="Wellnessbereich eines Hotels" className="" sizes="20vw" />
                </div>
              </div>
            </div>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-t-4 border-blue-bright bg-navy-soft px-6 py-8 sm:p-10">
                <EstimateForm
                  tone="dark"
                  source="Hotelrenovierung"
                  title="Hotelprojekt anfragen"
                  uploads={false}
                  contactTitle="Fast geschafft."
                  contactHint="Ihr Projektleiter meldet sich persönlich."
                  submitLabel="Projekt anfragen"
                  responseTime="[24 h]"
                  steps={[
                    { q: "Was für ein Haus ist es?", opts: ["Stadt- / Businesshotel", "Ferien- / Wellnesshotel", "Tagungshotel", "Pension / Gasthof", "Hotelgruppe"] },
                    { q: "Wie viele Zimmer hat das Haus?", hint: "Eine grobe Schätzung reicht", opts: ["bis 20", "20–60", "60–150", "über 150"] },
                    { q: "Was möchten Sie renovieren?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Zimmer", "Bäder", "Wellness & Spa", "Lobby / Gastro", "Möbel & Textilien", "Komplett"] },
                    { q: "Wann soll es losgehen?", hint: "Wir planen um Ihre Belegung herum", opts: ["in 3 Monaten", "in 6 Monaten", "in 12 Monaten", "noch offen"] },
                    { q: "Bleibt das Hotel währenddessen geöffnet?", opts: ["Ja, etagenweise", "Teilweise geschlossen", "Komplett geschlossen", "noch offen"] },
                  ]}
                  fields={[
                    { name: "hotel", label: "Hotel", autoComplete: "organization" },
                    { name: "ort", label: "PLZ / Ort", autoComplete: "postal-code" },
                    { name: "name", label: "Ihr Name", autoComplete: "name", required: true },
                    { name: "telefon", label: "Telefon", type: "tel", autoComplete: "tel", required: true },
                    { name: "email", label: "E-Mail (optional)", type: "email", autoComplete: "email" },
                  ]}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <TrustStrip
        items={[
          ["seit 2005", "Handwerk aus Bad Laasphe"],
          ["ca. 40", "eigene Fachkräfte"],
          ["[X] Hotels", "renoviert"],
          ["Villeroy & Boch", "Premiumpartner"],
        ]}
      />

      {/* Bereiche */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="h2">Was wir in Ihrem Hotel renovieren</h2>
            <p className="lead lg:justify-self-end">
              Einzelne Bereiche oder das ganze Haus – jeweils mit den Abläufen, die ein Hotelbetrieb braucht.
            </p>
          </div>
          <div className="mt-16">
            <TradeIndex trades={areas} />
          </div>
        </div>
      </section>

      {/* Generalunternehmer */}
      <section className="section bg-paper">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Photo src="hotel-zimmer-2.jpg" alt="Hotelzimmer mit neuen Möbeln und Textilien" className="aspect-[4/5]" />
          </div>
          <div>
            <h2 className="h2">Ein Generalunternehmer statt zehn Handwerker</h2>
            <p className="lead mt-6">
              Wir übernehmen die komplette Kommunikation zwischen den Gewerken und mit den Lieferanten. Sie konzentrieren sich auf Ihre Gäste –
              wir arbeiten hinter den Kulissen.
            </p>
            <ul className="mt-10 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
              {trades.map((t) => (
                <li key={t} className="flex min-h-14 items-center gap-3 border-b border-line py-3 font-medium text-navy">
                  <Check /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-2">
              Als <strong className="text-navy">Premiumpartner von Villeroy &amp; Boch</strong> beraten wir Sie zu Keramik, Armaturen und
              Badmöbeln – passend zu Ihrem Haus.
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps
        title="So läuft Ihre Hotelrenovierung ab"
        lead="Vier Phasen, ein Projektleiter – vom ersten Gespräch bis zur Übergabe des letzten Zimmers."
        steps={[
          ["Planung", "Ihr Projektleiter nimmt die Räume mit 3D-Technik auf. Unsere Planer erstellen 3D-Zeichnungen, Raumbuch, Bestelllisten und einen Bauzeitenplan passend zu Ihrer Belegung."],
          ["Beratung", "Auf Basis der Vorplanung erhalten Sie ein exaktes Angebot. Wir besprechen alle Positionen persönlich vor Ort – transparent und verständlich."],
          ["Koordination", "Wir stimmen alle Gewerke und Lieferanten ab und sorgen für einen reibungslosen Ablauf mit Housekeeping, Rezeption und Technik."],
          ["Ausführung", "Ein eingearbeiteter Einsatzleiter ist immer vor Ort und das Bindeglied zwischen Ihnen, den Handwerkern und dem Projektleiter."],
        ]}
      />

      {/* Im laufenden Betrieb */}
      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h2 className="h2">Ihre Gäste merken möglichst wenig davon</h2>
            <p className="lead mt-6">Jedes gesperrte Zimmer kostet Umsatz. Deshalb planen wir die Baustelle wie einen Teil Ihres Hotelbetriebs.</p>
          </div>
          <ol className="border-t border-line">
            {[
              ["Etagenweise Bauabschnitte", "Gesperrt wird nur, was gerade in Arbeit ist – der Rest bleibt buchbar."],
              ["Feste Lärmzeiten", "Laute Arbeiten in abgestimmten Zeitfenstern, außerhalb von Frühstück und Nachtruhe."],
              ["Saubere Wege", "Eigene Materialwege, Staubschutz und tägliche Reinigung der Baustellenbereiche."],
              ["Termintreue", "Bauzeitenplan nach Belegung und Saison – mit Puffer für Lieferzeiten."],
            ].map(([t, text], i) => (
              <li key={t} className="grid grid-cols-[auto_1fr] gap-6 border-b border-line py-7">
                <span className="num font-display text-sm font-semibold text-blue">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-xl font-bold text-navy">{t}</span>
                  <span className="mt-1 block text-ink-2">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projektbeispiel */}
      <section className="section bg-paper">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <BeforeAfter after="hotel-bad-3.jpg" alt="Hotelbad-Renovierung" />
          <div>
            <p className="text-sm text-slate">Projektbeispiel · 4*-Wellnesshotel · Sauerland</p>
            <h2 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">
              <span className="todo">[Projektname]</span>
            </h2>
            <dl className="mt-8 grid grid-cols-3 border-y border-line py-6">
              {[
                ["[62]", "Zimmer"],
                ["[8]", "Wochen"],
                ["[0]", "Schließtage"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-3xl font-extrabold text-slate/50">{v}</dd>
                  <dd className="text-sm text-slate">{l}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-ink-2">
              <span className="todo">[Ausgangslage, Lösung, Ergebnis – Hotelname nur mit Freigabe]</span>
            </p>
            <Link href="/referenzen" className="link-arrow mt-6">
              Alle Hotelprojekte →
            </Link>
          </div>
        </div>
      </section>

      {/* Hotelbäder in 3 Tagen */}
      <section className="bg-blue-tint">
        <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-display text-2xl font-bold text-navy sm:text-3xl">Hotelbäder in ca. 3 Tagen – fugenlos.</p>
            <p className="mt-3 max-w-2xl text-ink-2">
              Wenn Zimmer nur kurz gesperrt werden können: Mit Mein Zauberbad erneuern wir Bäder ohne wochenlange Baustelle, zum Festpreis.
            </p>
          </div>
          <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-primary">
            Mehr auf meinzauberbad.de ↗
          </a>
        </div>
      </section>

      <Testimonials
        title="Was Hoteliers über uns sagen"
        stars={false}
        quotes={["[Zitat Hotelier: Termin gehalten, Betrieb lief weiter]", "[Zitat: Ein Ansprechpartner für alle Gewerke]", "[Zitat: Gäste haben kaum etwas gemerkt]"]}
      />

      <div className="border-t border-line" />
      <Faq title="Häufige Fragen zur Hotelrenovierung" items={faq} />

      <section className="section bg-paper">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="h2">Wissen für Hoteliers</h2>
              <p className="lead mt-5">Planung, Kosten und Ablauf – aus über 20 Jahren auf Hotelbaustellen.</p>
            </div>
            <Link href="/ratgeber" className="btn-ghost shrink-0">
              Alle Artikel
            </Link>
          </div>
          <Articles
            items={[
              { time: "8 Min.", title: "Hotelrenovierung im laufenden Betrieb: So planen Sie ohne Umsatzverlust", text: "Etagenweise Planung, Lärmzeiten, Gästekommunikation.", img: "hotel-terrasse.jpg" },
              { time: "6 Min.", title: "Hotelzimmer renovieren: Kosten pro Zimmer und Kostenfaktoren", text: "Wovon das Budget abhängt – und wo sich sparen lässt.", img: "hotel-zimmer-2.jpg" },
              { time: "5 Min.", title: "Checkliste: Hotelrenovierung vor der Saison in 12 Wochen", text: "Was wann entschieden werden muss.", img: "hotel-spa.jpg" },
            ]}
          />
        </div>
      </section>

      <RelatedLinks
        title="Auch interessant für Ihr Haus"
        items={[
          { name: "Sanitär & Bäder", text: "Komplettbäder in Serie", href: "/bau-innenausbau/sanitaer" },
          { name: "Trockenbau", text: "Schallschutz zwischen Zimmern", href: "/bau-innenausbau/trockenbau" },
          { name: "Innenausbau", text: "Lobby, Restaurant, Büros", href: "/bau-innenausbau/innenausbau" },
          { name: "Wasserschaden", text: "Schnelle Hilfe im Hotel", href: "/schadensanierung/wasserschaden" },
        ]}
      />

      <FinalCta title="Sprechen wir über Ihr Hotel." text="Ihr Projektleiter meldet sich innerhalb von [24 h] – persönlich." href="#anfrage" cta="Hotelprojekt anfragen" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
