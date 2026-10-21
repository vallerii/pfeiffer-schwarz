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
  Masskette,
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
      {/* Hero als Fliesenspiegel mit Hotel-Quiz */}
      <section id="anfrage" className="bg-fuge p-(--spacing-fuge)">
        <div className="fliesen mx-auto max-w-[1600px] lg:grid-cols-12">
          <div className="bg-tanne px-6 pt-8 pb-12 text-weiss sm:px-10 lg:col-span-7 lg:px-14 lg:pb-16">
            <Breadcrumbs tone="dark" items={[crumbs[0], { name: "Hotelrenovierung" }]} />
            <h1 className="mt-12 text-[2.9rem] leading-[0.95] font-semibold text-weiss sm:text-7xl xl:text-[5.2rem]">
              Hotelrenovierung im laufenden Betrieb.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-weiss/80 sm:text-[1.25rem]">
              Planung, Beratung, Koordination und Ausführung aus einer Hand: Wir renovieren Zimmer, Bäder, Wellnessbereiche und Lobbys, während
              Ihre Gäste weiter bei Ihnen wohnen.
            </p>
            <ul className="mt-9 space-y-2.5 text-[17px] text-weiss/90">
              {[
                "Etagenweise Planung um Ihre Belegung herum",
                "Generalunternehmer für alle Gewerke – inklusive Möbel, Textilien, Licht",
                "Projektleiter und Einsatzleiter dauerhaft vor Ort",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check light /> {t}
                </li>
              ))}
            </ul>
          </div>
          <aside className="bg-kalk px-5 py-9 sm:px-10 sm:py-12 lg:col-span-5 lg:row-span-2 lg:px-12">
            <div className="lg:sticky lg:top-28">
              <EstimateForm
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
          <div className="fliesen grid-cols-[2fr_1fr_1fr] lg:col-span-7">
            <Photo src="hotel-zimmer.jpg" alt="Renoviertes Hotelzimmer" className="min-h-48 sm:min-h-72" priority sizes="(min-width: 1024px) 30vw, 50vw" />
            <Photo src="hotel-bad.jpg" alt="Hotelbad nach der Renovierung" className="min-h-48 sm:min-h-72" sizes="15vw" />
            <Photo src="hotel-spa.jpg" alt="Wellnessbereich eines Hotels" className="min-h-48 sm:min-h-72" sizes="15vw" />
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
            <TradeIndex
              trades={areas}
              fill={{
                title: "Ihr Haus, Ihre Belegung",
                text: "Nennen Sie uns Zimmerzahl und Zeitfenster – wir melden uns mit einem ersten Bauzeitenplan.",
                href: "#anfrage",
                cta: "Hotelprojekt anfragen",
              }}
            />
          </div>
        </div>
      </section>

      {/* Generalunternehmer */}
      <section className="section bg-kalk">
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
            <ul className="mt-10 grid border-t border-fuge sm:grid-cols-2 sm:gap-x-10">
              {trades.map((t) => (
                <li key={t} className="flex min-h-14 items-center gap-3 border-b border-fuge py-3 font-medium text-tanne">
                  <Check /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-schiefer-2">
              Als <strong className="text-tanne">Premiumpartner von Villeroy &amp; Boch</strong> beraten wir Sie zu Keramik, Armaturen und
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
          <ul className="fliesen bg-fuge p-(--spacing-fuge) sm:grid-cols-2">
            {[
              ["Etagenweise Bauabschnitte", "Gesperrt wird nur, was gerade in Arbeit ist – der Rest bleibt buchbar."],
              ["Feste Lärmzeiten", "Laute Arbeiten in abgestimmten Zeitfenstern, außerhalb von Frühstück und Nachtruhe."],
              ["Saubere Wege", "Eigene Materialwege, Staubschutz und tägliche Reinigung der Baustellenbereiche."],
              ["Termintreue", "Bauzeitenplan nach Belegung und Saison – mit Puffer für Lieferzeiten."],
            ].map(([t, text]) => (
              <li key={t} className="bg-kalk p-7">
                <span className="block font-display text-[1.75rem] leading-none font-semibold text-tanne">{t}</span>
                <span className="mt-3 block text-schiefer-2">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projektbeispiel */}
      <section className="section bg-kalk">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <BeforeAfter after="hotel-bad-3.jpg" alt="Hotelbad-Renovierung" />
          <div>
            <p className="text-[15px] text-stein">Projektbeispiel: 4*-Wellnesshotel im Sauerland</p>
            <h2 className="mt-2 text-4xl leading-none sm:text-5xl">
              <span className="todo">[Projektname]</span>
            </h2>
            <div className="mt-8">
              <Masskette
                items={[
                  ["[62]", "Zimmer"],
                  ["[8]", "Wochen"],
                  ["[0]", "Schließtage"],
                ]}
              />
            </div>
            <p className="mt-6 text-schiefer-2">
              <span className="todo">[Ausgangslage, Lösung, Ergebnis – Hotelname nur mit Freigabe]</span>
            </p>
            <Link href="/referenzen" className="link-arrow mt-6">
              Alle Hotelprojekte
            </Link>
          </div>
        </div>
      </section>

      {/* Hotelbäder in 3 Tagen */}
      <section className="section">
        <div className="wrap">
        <div className="grid items-center gap-10 rounded-[28px] bg-kalk px-8 py-12 sm:px-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-display text-[2.2rem] leading-none font-semibold text-tanne sm:text-[2.6rem]">Hotelbäder in ca. 3 Tagen – fugenlos.</p>
            <p className="mt-3 max-w-2xl text-schiefer-2">
              Wenn Zimmer nur kurz gesperrt werden können: Mit Mein Zauberbad erneuern wir Bäder ohne wochenlange Baustelle, zum Festpreis.
            </p>
          </div>
          <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-primary rounded-full px-8">
            Mehr auf meinzauberbad.de ↗
          </a>
        </div>
        </div>
      </section>

      <Testimonials
        title="Was Hoteliers über uns sagen"
        stars={false}
        quotes={["[Zitat Hotelier: Termin gehalten, Betrieb lief weiter]", "[Zitat: Ein Ansprechpartner für alle Gewerke]", "[Zitat: Gäste haben kaum etwas gemerkt]"]}
      />

      <div className="border-t border-fuge" />
      <Faq title="Häufige Fragen zur Hotelrenovierung" items={faq} />

      <section className="section bg-kalk">
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
