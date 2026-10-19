import type { EstimateStep } from "@/components/EstimateForm";
import type { GalleryItem } from "@/components/Gallery";
import type { FaqItem } from "@/components/Faq";
import type { Article } from "@/components/Articles";
import type { Trade } from "@/components/TradeIndex";

/**
 * Inhalte der Leistungsseiten „Bau & Innenausbau“.
 * Alles in [eckigen Klammern] sind Platzhalter, die mit dem Kunden abgestimmt werden.
 */
export type TradeContent = {
  slug: string;
  name: string; // Breadcrumb / Menü
  noun: string; // „Ihr … in der Region“
  metaTitle: string;
  metaDescription: string;
  h1: [string, string]; // zweiter Teil in Blau
  lead: string;
  benefits: string[];
  hero: [string, string, string];
  estimate: EstimateStep[];
  trust?: [string, string][];
  servicesTitle: string;
  servicesLead: string;
  services: [string, string][];
  galleryTitle: string;
  galleryCats?: string[];
  gallery: GalleryItem[];
  caseStudy?: { after: string; before?: string; title: string; stats: [string, string][]; alt: string };
  process?: [string, string][];
  costs?: { title: string; lead: string; factors: string[]; rows: [string, string][] };
  testimonials: string[];
  seo: { h2: string; intro: string; blocks: { h3: string; text: string }[] };
  faq: FaqItem[];
  articlesTitle: string;
  articles: Article[];
  related: { name: string; text: string; href: string }[];
  ctaTitle: string;
};

const WHEN: EstimateStep = { q: "Wann soll es losgehen?", opts: ["so bald wie möglich", "in 1–3 Monaten", "später", "noch offen"] };
const OBJECT: EstimateStep = { q: "Um welches Objekt geht es?", opts: ["Wohnung", "Haus", "Büro / Praxis", "Gewerbe / Hotel"] };

export const DEFAULT_PROCESS: [string, string][] = [
  ["Anfrage & Fotos", "Formular oben ausfüllen – erste Einschätzung in [48 h]."],
  ["Aufmaß & Beratung", "Vor Ort: Zustand prüfen, Material und Ausführung besprechen."],
  ["3D-Plan & Angebot", "Sie sehen das Ergebnis vorab und erhalten ein klares Angebot."],
  ["Ausführung & Abnahme", "Sauber, termingerecht, mit gemeinsamer Abnahme."],
];

export const DEFAULT_TRUST: [string, string][] = [
  ["20+ Jahre", "Handwerk aus Bad Laasphe"],
  ["ca. 40", "eigene Fachkräfte"],
  ["★ [4,X]", "[X] Google-Bewertungen"],
  ["Villeroy & Boch", "Premiumpartner"],
];

const fliesen: TradeContent = {
  slug: "fliesenarbeiten",
  name: "Fliesenarbeiten",
  noun: "Fliesenleger",
  metaTitle: "Fliesenleger Bad Laasphe & Siegen",
  metaDescription:
    "Fliesenarbeiten in Bad Laasphe, Siegen & Umgebung: Bad, Küche, Wohnraum, Terrasse. Eigene Fliesenleger, 3D-Planung, alles aus einer Hand. Kostenlose Einschätzung anfordern.",
  h1: ["Fliesenarbeiten in Bad Laasphe, Siegen", "& Umgebung"],
  lead: "Bad, Küche, Wohnraum oder Terrasse: Unsere eigenen Fliesenleger verlegen Keramik, Feinsteinzeug, Großformat und Naturstein – sauber, termintreu und zum klaren Angebot.",
  benefits: [
    "Eigene Fliesen-, Platten- & Mosaikleger – keine Subunternehmer",
    "3D-Planung Ihres Raums vor Baubeginn",
    "Alles aus einer Hand: Estrich, Abdichtung, Sanitär, Fliesen",
  ],
  hero: ["fliesen-dusche-1.jpg", "fliesen-waschtisch.jpg", "fliesen-wc.jpg"],
  estimate: [
    { q: "Wo sollen Fliesen hin?", hint: "Wählen Sie den Raum", opts: ["Bad / WC", "Küche", "Wohnraum / Flur", "Terrasse / Balkon", "Gewerbe / Hotel"] },
    { q: "Wie groß ist die Fläche?", hint: "Grobe Schätzung reicht", opts: ["bis 10 m²", "10–30 m²", "30–60 m²", "über 60 m²", "weiß nicht"] },
    { q: "Muss der alte Belag raus?", hint: "Wichtig für die Einschätzung", opts: ["Ja", "Nein, Neubau", "Weiß nicht"] },
    WHEN,
  ],
  trust: [
    ["20+ Jahre", "Erfahrung im Fliesenhandwerk"],
    ["[X] Bäder", "gefliest seit 2005"],
    ["★ [4,X]", "[X] Google-Bewertungen"],
    ["Villeroy & Boch", "Premiumpartner"],
  ],
  servicesTitle: "Was wir für Sie fliesen",
  servicesLead: "Vom kleinen Gäste-WC bis zur Hotel-Etage – mit dem passenden Untergrund gleich dazu.",
  services: [
    ["Badfliesen", "Wand und Boden, bodengleiche Duschen, Nischen"],
    ["Bodenfliesen Wohnraum", "Flur, Küche, Wohnzimmer – auch auf Fußbodenheizung"],
    ["Großformat & Feinsteinzeug", "Platten bis [120 × 260 cm], wenige Fugen"],
    ["Naturstein", "Marmor, Schiefer, Travertin – fachgerecht verlegt und imprägniert"],
    ["Mosaik", "Akzentflächen, Duschböden, Rundungen"],
    ["Küchenrückwand", "Fliesenspiegel klassisch oder großformatig"],
    ["Terrasse & Balkon", "Frostsichere Platten, Gefälle, Drainage"],
    ["Abdichtung & Untergrund", "Verbundabdichtung, Estrich, Ausgleich"],
    ["Reparatur & Schadensfall", "Einzelfliesen tauschen, nach Wasserschaden neu verlegen"],
  ],
  galleryTitle: "Unsere letzten Fliesenarbeiten",
  galleryCats: ["Alle", "Bad", "Boden", "Großformat", "Terrasse"],
  gallery: [
    { img: "fliesen-dusche-1.jpg", cat: "Großformat", place: "[Bad Laasphe]", alt: "Dusche mit großformatigen Fliesen in Steinoptik", tall: true },
    { img: "fliesen-bad-1.jpg", cat: "Bad", place: "[Siegen]", alt: "Badezimmer mit dunklem Waschtisch und Wandfliesen" },
    { img: "fliesen-waschtisch.jpg", cat: "Bad", place: "[Bad Berleburg]", alt: "Waschtisch vor gefliester Wand" },
    { img: "fliesen-dusche-3.jpg", cat: "Bad", place: "[Erndtebrück]", alt: "Bodengleiche Dusche mit Glaswand", tall: true },
    { img: "fliesen-boden.jpg", cat: "Boden", place: "[Netphen]", alt: "Wohnraum mit großformatigen Bodenfliesen" },
    { img: "fliesen-dusche-2.jpg", cat: "Großformat", place: "[Kreuztal]", alt: "Großformatige Wandfliesen im Duschbereich" },
    { img: "fliesen-wc.jpg", cat: "Bad", place: "[Biedenkopf]", alt: "Gäste-WC mit Vorwandinstallation und Wandfliesen", tall: true },
    { img: "fliesen-dusche-4.jpg", cat: "Bad", place: "[Marburg]", alt: "Dusche mit Regenbrause und Fliesen in Betonoptik" },
  ],
  caseStudy: {
    after: "fliesen-dusche-3.jpg",
    alt: "Badsanierung mit bodengleicher Dusche",
    title: "Altes Bad aus den 80ern → bodengleiche Dusche, Großformat",
    stats: [
      ["[X] m²", "Fläche"],
      ["[X] Tage", "Bauzeit"],
      ["60×120", "Format"],
    ],
  },
  process: [
    ["Anfrage & Fotos", "Formular oben ausfüllen – erste Einschätzung in [48 h]."],
    ["Aufmaß & Beratung", "Vor Ort: Untergrund prüfen, Fliesen auswählen."],
    ["3D-Plan & Angebot", "Sie sehen Ihr Bad vorab und erhalten ein klares Angebot."],
    ["Verlegung & Abnahme", "Sauber, termingerecht, mit gemeinsamer Abnahme."],
  ],
  costs: {
    title: "Was kosten Fliesenarbeiten?",
    lead: "Der Preis hängt vor allem von Untergrund, Format und Raum ab. Hier eine grobe Orientierung – das genaue Angebot gibt es nach dem Aufmaß.",
    factors: [
      "Zustand des Untergrunds (Altbelag entfernen, Ausgleich)",
      "Fliesenformat und Material (Großformat, Naturstein)",
      "Raum und Details (Dusche, Nischen, Gefälle)",
      "Abdichtung im Nassbereich",
    ],
    rows: [
      ["Bodenfliesen Standardformat", "€/m²"],
      ["Wandfliesen Bad", "€/m²"],
      ["Großformat ab 60×120", "€/m²"],
      ["Altbelag entfernen", "€/m²"],
    ],
  },
  testimonials: ["[Zitat: Bad neu gefliest, sauber gearbeitet …]", "[Zitat: Großformat im Wohnzimmer …]", "[Zitat: Terrasse / Gewerbe …]"],
  seo: {
    h2: "Fliesenleger in Bad Laasphe und Siegen-Wittgenstein",
    intro:
      "Fliesen sind langlebig, pflegeleicht und zeitlos – vorausgesetzt, sie werden fachgerecht verlegt. Seit 2005 übernimmt die PS Hotel- und Wohnbau GmbH (Pfeiffer & Schwarz) Fliesenarbeiten für Privatkunden, Gewerbe und Hotels in Bad Laasphe, im Kreis Siegen-Wittgenstein und darüber hinaus. Unser Team besteht aus eigenen Fliesen-, Platten- und Mosaiklegern.",
    blocks: [
      {
        h3: "Fliesen für Bad, Küche und Wohnraum",
        text: "Im Bad verlegen wir Wand- und Bodenfliesen, bauen bodengleiche Duschen und sorgen für eine normgerechte Abdichtung im Nassbereich. In Küche, Flur und Wohnzimmer sind Bodenfliesen auch auf Fußbodenheizung eine robuste Lösung. Für Terrassen und Balkone setzen wir frostsichere Platten mit dem richtigen Gefälle ein.",
      },
      {
        h3: "Großformatige Fliesen und Naturstein",
        text: "Großformate wirken ruhig und modern, verlangen aber einen absolut ebenen Untergrund und erfahrene Verleger. Naturstein wie Marmor oder Schiefer verlegen und imprägnieren wir materialgerecht.",
      },
      {
        h3: "Alles aus einer Hand",
        text: "Weil wir auch Estrich, Trockenbau, Sanitär und Malerarbeiten selbst ausführen, koordinieren Sie keine einzelnen Handwerker. Vor Baubeginn erstellen wir auf Wunsch eine 3D-Zeichnung, damit Sie Fliesen und Raumaufteilung schon vorher sehen.",
      },
    ],
  },
  faq: [
    { q: "Was kostet ein Fliesenleger pro m²?", a: "Das hängt von Untergrund, Format und Raum ab. Eine erste Einschätzung erhalten Sie kostenlos über das Formular, das genaue Angebot nach dem Aufmaß." },
    { q: "Wie lange dauert es, ein Bad zu fliesen?", a: "Ein durchschnittliches Bad dauert inklusive Abdichtung meist [X–X] Arbeitstage. Trocknungszeiten von Estrich und Abdichtung planen wir mit ein." },
    { q: "Kann man Fliesen auf alte Fliesen legen?", a: "Unter bestimmten Bedingungen ja – wenn der alte Belag fest und eben ist. Das prüfen wir beim Aufmaß." },
    { q: "Sind Fliesen auf Fußbodenheizung geeignet?", a: "Ja, Fliesen leiten Wärme sehr gut. Wichtig sind der richtige Kleber und das Aufheizprotokoll des Estrichs." },
    { q: "Bringen Sie die Fliesen mit oder kaufe ich selbst?", a: "Beides ist möglich. Über unsere Lieferanten erhalten Sie Beratung und Material aus einer Hand." },
    { q: "Übernehmen Sie auch Abdichtung und Sanitär?", a: "Ja. Abdichtung, Estrich, Sanitär und Malerarbeiten führen unsere eigenen Teams aus." },
    { q: "In welchen Orten arbeiten Sie?", a: "Rund um Bad Laasphe und im Kreis Siegen-Wittgenstein, größere Projekte bundesweit." },
  ],
  articlesTitle: "Mehr zum Thema Fliesen",
  articles: [
    { time: "5 Min.", title: "Großformatige Fliesen: Vor- und Nachteile im Überblick", text: "Wann sich 60×120 und größer lohnt – und was der Untergrund leisten muss.", img: "fliesen-dusche-2.jpg" },
    { time: "4 Min.", title: "Fliesen oder fugenloses Bad? Der ehrliche Vergleich", text: "Kosten, Bauzeit, Pflege – im direkten Vergleich mit Mein Zauberbad.", img: "fliesen-bad-1.jpg" },
    { time: "6 Min.", title: "Bodengleiche Dusche nachrüsten: Geht das im Altbau?", text: "Gefälle, Abdichtung, Aufbauhöhe – worauf es ankommt.", img: "fliesen-dusche-4.jpg" },
  ],
  related: [
    { name: "Sanitär", text: "Komplettes Bad", href: "/bau-innenausbau/sanitaer" },
    { name: "Putz & Estrich", text: "Der richtige Untergrund", href: "/bau-innenausbau/putz-estrich" },
    { name: "Bad in 3 Tagen", text: "Fugenlos statt Fliesen", href: "/bad-in-3-tagen" },
    { name: "Hotelbäder", text: "Für Hotels & Gewerbe", href: "/hotelrenovierung/hotelbaeder" },
  ],
  ctaTitle: "Neue Fliesen geplant?",
};

const maler: TradeContent = {
  slug: "malerarbeiten",
  name: "Malerarbeiten",
  noun: "Maler",
  metaTitle: "Maler Bad Laasphe & Siegen",
  metaDescription:
    "Malerarbeiten in Bad Laasphe, Siegen & Umgebung: Wände, Decken, Spachteltechnik, Treppenhäuser und Fassaden. Eigene Maler, sauber und termintreu. Jetzt Einschätzung anfordern.",
  h1: ["Malerarbeiten in Bad Laasphe, Siegen", "& Umgebung"],
  lead: "Unterschiedliche Farben, Strukturen und Oberflächen bieten viele Gestaltungsmöglichkeiten. Unsere Maler setzen die richtigen Akzente – in Wohnungen, Büros, Hotels und an der Fassade.",
  benefits: [
    "Eigene Maler mit modernen Maschinen – keine Subunternehmer",
    "Sauber und schnell, weil alle Gewerke Hand in Hand arbeiten",
    "Farb- und Materialberatung, auf Wunsch mit 3D-Visualisierung",
  ],
  hero: ["maler-1.jpg", "maler-2.jpg", "maler-3.jpg"],
  estimate: [
    { q: "Was soll gemacht werden?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Wände & Decken", "Fassade", "Treppenhaus", "Türen / Holz", "Spachteltechnik"] },
    OBJECT,
    { q: "Wie groß ist die Fläche?", hint: "Wohn- bzw. Nutzfläche, grob geschätzt", opts: ["bis 50 m²", "50–120 m²", "über 120 m²", "weiß nicht"] },
    WHEN,
  ],
  servicesTitle: "Was wir für Sie streichen und gestalten",
  servicesLead: "Vom frischen Anstrich bis zur Wand mit Charakter – innen wie außen.",
  services: [
    ["Wände & Decken", "Anstrich in Wohnräumen, Büros und Hotels"],
    ["Spachteltechnik", "Glatte Oberflächen bis Qualitätsstufe [Q4], Akzentwände"],
    ["Tapezierarbeiten", "Malervlies, Raufaser, Designtapeten"],
    ["Treppenhäuser", "Robuste Beschichtungen für stark genutzte Flächen"],
    ["Fassade", "Anstrich und Ausbesserung, passend zum Putz"],
    ["Lackierarbeiten", "Türen, Zargen, Heizkörper, Holzflächen"],
    ["Farbgestaltung", "Farbkonzepte für Wohnen, Gewerbe und Hotel"],
    ["Renovierung bei Auszug", "Schnell wieder vermietbar"],
    ["Nach Wasserschaden", "Trocknung abwarten, Flecken isolieren, neu streichen"],
  ],
  galleryTitle: "Unsere letzten Malerarbeiten",
  galleryCats: ["Alle", "Wohnen", "Gewerbe"],
  gallery: [
    { img: "maler-1.jpg", cat: "Gewerbe", place: "[Ort]", alt: "Blaue Akzentwand mit Holzlamellen", tall: true },
    { img: "maler-3.jpg", cat: "Wohnen", place: "[Ort]", alt: "Frisch gestrichener Raum mit rosé Wandfarbe" },
    { img: "maler-2.jpg", cat: "Wohnen", place: "[Ort]", alt: "Maler beim Streichen einer Wand mit der Rolle" },
    { img: "maler-6.jpg", cat: "Wohnen", place: "[Ort]", alt: "Renovierter Wohnraum mit Fenstern", tall: true },
    { img: "maler-4.jpg", cat: "Wohnen", place: "[Ort]", alt: "Farbfächer bei der Farbberatung" },
    { img: "innenausbau-5.jpg", cat: "Gewerbe", place: "[Ort]", alt: "Blaue Wand mit beleuchteter Nische" },
    { img: "maler-5.jpg", cat: "Wohnen", place: "[Ort]", alt: "Glatt gespachtelte weiße Wand" },
  ],
  process: DEFAULT_PROCESS,
  costs: {
    title: "Was kosten Malerarbeiten?",
    lead: "Entscheidend sind Untergrund, Fläche und gewünschte Oberfläche. Die Werte sind eine Orientierung – verbindlich ist das Angebot nach der Besichtigung.",
    factors: ["Zustand des Untergrunds (Risse, alte Tapete, Flecken)", "Gewünschte Oberfläche und Qualitätsstufe", "Raumhöhe, Treppenhaus, Gerüst", "Abdeck- und Schutzaufwand im bewohnten Objekt"],
    rows: [
      ["Wände & Decken streichen", "€/m²"],
      ["Malervlies + Anstrich", "€/m²"],
      ["Spachteln Q3 / Q4", "€/m²"],
      ["Fassadenanstrich", "€/m²"],
    ],
  },
  testimonials: ["[Zitat: Wohnung gestrichen, alles sauber abgedeckt …]", "[Zitat: Büro über das Wochenende gestrichen …]", "[Zitat: Treppenhaus / Fassade …]"],
  seo: {
    h2: "Maler in Bad Laasphe und Siegen-Wittgenstein",
    intro:
      "Ein guter Anstrich verändert einen Raum mehr als jede andere Maßnahme – vorausgesetzt, der Untergrund stimmt. Die Maler der PS Hotel- und Wohnbau GmbH arbeiten seit 2005 in Bad Laasphe, im Kreis Siegen-Wittgenstein und bundesweit für Privatkunden, Gewerbe und Hotels.",
    blocks: [
      {
        h3: "Innen: Wände, Decken, Spachteltechnik",
        text: "Wir bereiten Untergründe vor, schließen Risse, tapezieren mit Malervlies und streichen mit Farben, die zur Nutzung passen. Für besonders glatte Wände spachteln wir bis zur höchsten Qualitätsstufe – ideal bei Streiflicht und großen Fensterflächen.",
      },
      {
        h3: "Außen: Fassade und Treppenhaus",
        text: "An der Fassade prüfen wir zuerst Putz und Untergrund, bessern aus und streichen mit einem System, das zum Material passt. In Treppenhäusern setzen wir auf robuste, leicht zu reinigende Beschichtungen.",
      },
      {
        h3: "Im Zusammenspiel mit anderen Gewerken",
        text: "Weil Trockenbau, Putz und Fliesen aus demselben Team kommen, sind wir flexibler, schneller und sauberer auf der Baustelle. Sie haben einen Ansprechpartner statt mehrerer Handwerker.",
      },
    ],
  },
  faq: [
    { q: "Was kostet ein Maler pro m²?", a: "Das hängt vom Untergrund und der gewünschten Oberfläche ab. Nach einer kurzen Besichtigung erhalten Sie ein Festpreisangebot." },
    { q: "Muss ich die Möbel selbst ausräumen?", a: "Nein. Wir rücken Möbel in die Raummitte und decken alles sorgfältig ab. Empfindliche Gegenstände sollten Sie vorher sichern." },
    { q: "Wie lange dauert es, eine Wohnung zu streichen?", a: "Eine durchschnittliche Wohnung schaffen wir in der Regel in [X–X] Arbeitstagen – abhängig von Größe und Vorarbeiten." },
    { q: "Arbeiten Sie auch in bewohnten Räumen und im laufenden Betrieb?", a: "Ja. In Büros und Hotels arbeiten wir abschnittsweise und stimmen die Zeiten mit Ihnen ab." },
    { q: "Streichen Sie auch Fassaden?", a: "Ja, inklusive Ausbesserung von Putzschäden. Größere Putzarbeiten übernimmt unser eigenes Team." },
  ],
  articlesTitle: "Mehr zum Thema Wandgestaltung",
  articles: [
    { time: "5 Min.", title: "Wandgestaltung: Farbe, Tapete oder Putz?", text: "Was zu welchem Raum passt – und was es kostet.", img: "maler-4.jpg" },
    { time: "6 Min.", title: "Büro modernisieren ohne Betriebsunterbrechung", text: "Abschnittsweise planen, Lärm und Geruch minimieren.", img: "innenausbau-1.jpg" },
    { time: "5 Min.", title: "Generalunternehmer oder Einzelgewerke? Vor- und Nachteile", text: "Wann sich ein Ansprechpartner für alles lohnt.", img: "team-einsatz.jpg" },
  ],
  related: [
    { name: "Trockenbau", text: "Wände und Decken neu aufteilen", href: "/bau-innenausbau/trockenbau" },
    { name: "Putz & Estrich", text: "Innen- und Fassadenputz", href: "/bau-innenausbau/putz-estrich" },
    { name: "Innenausbau", text: "Komplett aus einer Hand", href: "/bau-innenausbau/innenausbau" },
    { name: "Hotelzimmer", text: "Renovierung im laufenden Betrieb", href: "/hotelrenovierung/hotelzimmer" },
  ],
  ctaTitle: "Neuer Anstrich geplant?",
};

const innenausbau: TradeContent = {
  slug: "innenausbau",
  name: "Innenausbau",
  noun: "Partner für Innenausbau",
  metaTitle: "Innenausbau Bad Laasphe & Siegen",
  metaDescription:
    "Innenausbau in Bad Laasphe, Siegen & Umgebung: Wohnungen, Altbauten, Büros, Praxen und Hotels. Trockenbau, Böden, Maler, Fliesen aus einer Hand. Jetzt Projekt anfragen.",
  h1: ["Innenausbau in Bad Laasphe, Siegen", "& Umgebung"],
  lead: "Renovierung, Bodenbeläge, Malerarbeiten, neue Raumaufteilung: Wir bauen Wohnungen, Altbauten, Büros und Hotels aus – mit eigenen Teams für alle wichtigen Gewerke.",
  benefits: [
    "Alle Gewerke aus einer Hand, ein Projektleiter",
    "3D-Planung, bevor die erste Wand gestellt wird",
    "Vom Wohnungsbau bis zu Hotel, Büro und Industrie",
  ],
  hero: ["innenausbau-1.jpg", "innenausbau-3.jpg", "innenausbau-2.jpg"],
  estimate: [
    { q: "Was planen Sie?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Raumaufteilung / Trennwände", "Böden", "Decken", "Malerarbeiten", "Bad / Sanitär", "Komplettausbau"] },
    OBJECT,
    { q: "Wie groß ist die Fläche?", hint: "Grobe Schätzung reicht", opts: ["bis 50 m²", "50–200 m²", "über 200 m²", "weiß nicht"] },
    WHEN,
  ],
  servicesTitle: "Was wir für Sie ausbauen",
  servicesLead: "Einzelne Räume oder ganze Etagen – mit allen Gewerken aus einem Team.",
  services: [
    ["Wohnungen & Häuser", "Renovierung und Modernisierung, auch im Altbau"],
    ["Büros & Praxen", "Arbeitsplätze, Besprechungsräume, Empfang"],
    ["Aufenthalts- & Sozialräume", "Kantine, Pausenräume, Umkleiden"],
    ["Raumaufteilung", "Trennwände, Türen, Glaselemente"],
    ["Decken & Akustik", "Abgehängte Decken, Akustikelemente, Licht"],
    ["Bodenbeläge", "Fliesen, Designbelag, Parkett, Teppich"],
    ["Wand & Oberfläche", "Spachtel, Farbe, Holzlamellen, Akzentwände"],
    ["Einbauten", "Nischen, Verkleidungen, Möbeleinbauten"],
    ["Hotel & Gastronomie", "Zimmer, Lobby, Restaurant – im laufenden Betrieb"],
  ],
  galleryTitle: "Aus unseren Innenausbau-Projekten",
  galleryCats: ["Alle", "Aufenthalt", "Gastro", "Details"],
  gallery: [
    { img: "innenausbau-1.jpg", cat: "Aufenthalt", place: "[Projekt, Ort]", alt: "Aufenthaltsbereich mit Holzlamellen und Sitzgruppe", tall: true },
    { img: "innenausbau-3.jpg", cat: "Gastro", place: "[Projekt, Ort]", alt: "Essbereich mit Pendelleuchten" },
    { img: "innenausbau-4.jpg", cat: "Gastro", place: "[Projekt, Ort]", alt: "Kantine mit Tischreihen" },
    { img: "innenausbau-2.jpg", cat: "Aufenthalt", place: "[Projekt, Ort]", alt: "Lounge mit Holzlamellenwand", tall: true },
    { img: "innenausbau-5.jpg", cat: "Details", place: "[Projekt, Ort]", alt: "Beleuchtete Wandnische in Blau" },
    { img: "innenausbau-6.jpg", cat: "Gastro", place: "[Projekt, Ort]", alt: "Speisebereich mit hellen Tischen" },
    { img: "maler-1.jpg", cat: "Details", place: "[Projekt, Ort]", alt: "Blaue Wand mit Holzlamellen" },
    { img: "innenausbau-7.jpg", cat: "Aufenthalt", place: "[Projekt, Ort]", alt: "Schlafraum mit Etagenbetten" },
  ],
  process: [
    ["Anfrage & Begehung", "Wir nehmen Ihre Wünsche auf und erfassen die Räume."],
    ["3D-Planung", "Raumkonzept, Materialien und Licht – vor dem ersten Handgriff."],
    ["Angebot & Bauzeitenplan", "Alle Positionen transparent, Termine verbindlich."],
    ["Ausführung & Übergabe", "Eigene Teams, ein Einsatzleiter vor Ort, gemeinsame Abnahme."],
  ],
  testimonials: ["[Zitat: Büro in [X] Wochen fertig …]", "[Zitat: Altbau komplett saniert …]", "[Zitat: Ein Ansprechpartner für alles …]"],
  seo: {
    h2: "Innenausbau in Bad Laasphe und Siegen-Wittgenstein",
    intro:
      "Beim Innenausbau entscheidet die Koordination: Trockenbau, Elektro- und Sanitärvorbereitung, Putz, Boden und Farbe müssen in der richtigen Reihenfolge ineinandergreifen. Die PS Hotel- und Wohnbau GmbH übernimmt das seit 2005 – vom Wohnungsbau und der Altbausanierung bis zur Gestaltung von Hotels, Büros und Industriegebäuden.",
    blocks: [
      {
        h3: "Planung vor dem ersten Handgriff",
        text: "Vor jedem Projekt steht ein ausführliches Beratungsgespräch. Auf Wunsch erstellen wir eine 3D-Planung, damit Raumaufteilung, Materialien und Licht feststehen, bevor gebaut wird. Daraus entstehen Raumbuch, Bestellliste und Bauzeitenplan.",
      },
      {
        h3: "Hochwertige Materialien, eigene Teams",
        text: "Wir setzen auf langlebige Materialien und führen die Kerngewerke mit festangestellten Fachkräften aus. Das spart Abstimmungsaufwand und sorgt für saubere Übergänge zwischen den Gewerken.",
      },
      {
        h3: "Für Privat, Gewerbe und Hotel",
        text: "Ob Eigentumswohnung, Arztpraxis oder Hotel-Etage: Wir planen um Ihren Alltag herum und arbeiten bei Bedarf abschnittsweise im laufenden Betrieb.",
      },
    ],
  },
  faq: [
    { q: "Übernehmen Sie den kompletten Innenausbau?", a: "Ja. Trockenbau, Putz, Estrich, Fliesen, Maler und Sanitär führen unsere eigenen Teams aus, weitere Gewerke koordinieren wir mit festen Partnern." },
    { q: "Wie lange dauert ein Büroausbau?", a: "Das hängt von Fläche und Umfang ab. Nach der Planung erhalten Sie einen verbindlichen Bauzeitenplan – typisch sind [X–X] Wochen." },
    { q: "Können Sie im laufenden Betrieb arbeiten?", a: "Ja. Wir arbeiten abschnittsweise und stimmen laute Arbeiten mit Ihnen ab – das ist bei Hotels und Büros unser Alltag." },
    { q: "Was kostet die 3D-Planung?", a: "[Antwort mit Kunden abstimmen: z. B. bei Auftrag kostenlos, sonst Pauschale.]" },
    { q: "Arbeiten Sie auch im Altbau?", a: "Ja, Altbausanierungen gehören zu unseren Schwerpunkten – inklusive Ausgleich schiefer Böden und Wände." },
  ],
  articlesTitle: "Mehr zum Thema Innenausbau",
  articles: [
    { time: "6 Min.", title: "Büro modernisieren ohne Betriebsunterbrechung", text: "Abschnittsweise planen, Lärm und Staub minimieren.", img: "innenausbau-4.jpg" },
    { time: "5 Min.", title: "Trockenbau oder Massivwand: Was passt wann?", text: "Kosten, Schallschutz, Bauzeit im Vergleich.", img: "trockenbau-1.jpg" },
    { time: "5 Min.", title: "Generalunternehmer oder Einzelgewerke? Vor- und Nachteile", text: "Wann sich ein Ansprechpartner für alles lohnt.", img: "team-einsatz.jpg" },
  ],
  related: [
    { name: "Trockenbau", text: "Wände, Decken, Schallschutz", href: "/bau-innenausbau/trockenbau" },
    { name: "Malerarbeiten", text: "Oberflächen und Farbe", href: "/bau-innenausbau/malerarbeiten" },
    { name: "Fliesenarbeiten", text: "Bad, Küche, Boden", href: "/bau-innenausbau/fliesenarbeiten" },
    { name: "Lobby & Gastro", text: "Für Hotels", href: "/hotelrenovierung/lobby-gastro" },
  ],
  ctaTitle: "Ausbau geplant?",
};

const trockenbau: TradeContent = {
  slug: "trockenbau",
  name: "Trockenbau",
  noun: "Trockenbauer",
  metaTitle: "Trockenbau Bad Laasphe & Siegen",
  metaDescription:
    "Trockenbau in Bad Laasphe, Siegen & Umgebung: Trennwände, abgehängte Decken, Vorsatzschalen, Dachausbau, Schallschutz. Meisterbetrieb mit eigenen Teams. Jetzt anfragen.",
  h1: ["Trockenbau in Bad Laasphe, Siegen", "& Umgebung"],
  lead: "Räume sollten sich den Anforderungen anpassen. Mit Trockenbau teilen wir Flächen flexibel auf – mit technisch exakten Konstruktionen für Wand, Decke und Boden.",
  benefits: ["Meisterbetrieb mit eigenen Trockenbauern", "Schnell, trocken, ohne lange Wartezeiten", "Spachtel, Farbe und Boden direkt im Anschluss"],
  hero: ["trockenbau-1.jpg", "trockenbau-2.jpg", "trockenbau-3.jpg"],
  estimate: [
    { q: "Was soll entstehen?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Trennwand", "Abgehängte Decke", "Vorsatzschale / Dämmung", "Dachausbau", "Schallschutz", "Brandschutz"] },
    OBJECT,
    { q: "Wie groß ist die Fläche?", hint: "Wand- oder Deckenfläche, grob", opts: ["bis 20 m²", "20–100 m²", "über 100 m²", "weiß nicht"] },
    WHEN,
  ],
  servicesTitle: "Was wir im Trockenbau umsetzen",
  servicesLead: "Für Wohn- und Geschäftsräume – vom einzelnen Raumteiler bis zur ganzen Etage.",
  services: [
    ["Trennwände", "Ständerwände mit Gipskarton, auch mit Türen und Glas"],
    ["Abgehängte Decken", "Für Technik, Licht und Akustik"],
    ["Vorsatzschalen", "Gerade Wände, Installationsebene, Innendämmung"],
    ["Dachausbau", "Dämmung und Verkleidung von Dachschrägen"],
    ["Schallschutz", "Für Hotelzimmer, Büros und Wohnungen"],
    ["Brandschutz", "Brandschutzwände und -verkleidungen nach Vorgabe"],
    ["Feuchtraum", "Imprägnierte Platten für Bad und Küche"],
    ["Akustikdecken", "Ruhe in Büros, Kantinen und Restaurants"],
    ["Spachtel & Oberfläche", "Qualitätsstufen Q1–Q4, fertig zum Streichen"],
  ],
  galleryTitle: "Aus unseren Trockenbau-Projekten",
  gallery: [
    { img: "trockenbau-1.jpg", cat: "Wand", place: "[Ort]", alt: "Neue Trockenbauwände im Rohbau", tall: true },
    { img: "trockenbau-2.jpg", cat: "Wand", place: "[Ort]", alt: "Trockenbau mit Feuchtraumplatten" },
    { img: "trockenbau-3.jpg", cat: "Wand", place: "[Ort]", alt: "Trockenbau-Konstruktion" },
    { img: "trockenbau-4.jpg", cat: "Decke", place: "[Ort]", alt: "Trockenbau an Wand und Decke", tall: true },
    { img: "trockenbau-5.jpg", cat: "Decke", place: "[Ort]", alt: "Raum mit Trockenbauwänden" },
    { img: "innenausbau-2.jpg", cat: "Ergebnis", place: "[Ort]", alt: "Fertiger Raum nach Trockenbau und Malerarbeiten" },
  ],
  process: DEFAULT_PROCESS,
  costs: {
    title: "Was kostet Trockenbau?",
    lead: "Der Preis hängt von Konstruktion, Beplankung und Anforderungen an Schall- und Brandschutz ab. Hier eine Orientierung – das Angebot folgt nach dem Aufmaß.",
    factors: ["Wandhöhe und Konstruktion (einfach / doppelt beplankt)", "Anforderungen an Schall- und Brandschutz", "Türen, Öffnungen, Anschlüsse", "Spachtelqualität Q1–Q4"],
    rows: [
      ["Trennwand einfach beplankt", "€/m²"],
      ["Trennwand doppelt beplankt", "€/m²"],
      ["Abgehängte Decke", "€/m²"],
      ["Vorsatzschale", "€/m²"],
    ],
  },
  testimonials: ["[Zitat: Neue Raumaufteilung im Büro …]", "[Zitat: Dachgeschoss ausgebaut …]", "[Zitat: Schallschutz im Hotel …]"],
  seo: {
    h2: "Trockenbau in Bad Laasphe und Siegen-Wittgenstein",
    intro:
      "Trockenbau ist schnell, flexibel und sauber: Wände, Decken und Verkleidungen entstehen ohne lange Trocknungszeiten und lassen sich später wieder anpassen. Als Meisterunternehmen plant und baut die PS Hotel- und Wohnbau GmbH Trockenbaukonstruktionen für Wohnungen, Büros, Praxen und Hotels – in Bad Laasphe, Siegen-Wittgenstein und bundesweit.",
    blocks: [
      {
        h3: "Raumaufteilung, die sich anpasst",
        text: "Mit Ständerwänden teilen wir Räume neu auf, integrieren Türen und Glaselemente und schaffen Platz für Leitungen. Abgehängte Decken nehmen Technik und Licht auf und verbessern die Akustik.",
      },
      {
        h3: "Schall- und Brandschutz",
        text: "Gerade in Hotels und Mehrfamilienhäusern entscheidet der Schallschutz über die Zufriedenheit. Wir wählen Konstruktion und Dämmung nach Anforderung und setzen Brandschutzwände nach Vorgabe um.",
      },
      {
        h3: "Fertig bis zur Oberfläche",
        text: "Nach dem Trockenbau spachteln wir in der gewünschten Qualitätsstufe, streichen oder fliesen direkt im Anschluss – ohne weitere Handwerker.",
      },
    ],
  },
  faq: [
    { q: "Wie schnell steht eine Trockenbauwand?", a: "Eine einfache Trennwand steht oft an [X] Tag(en). Spachteln und Streichen kommen danach – alles aus unserem Team." },
    { q: "Ist Trockenbau gut für den Schallschutz?", a: "Ja, mit der richtigen Konstruktion und Dämmung erreicht Trockenbau sehr gute Schallschutzwerte – oft bessere als eine dünne Massivwand." },
    { q: "Kann man an Trockenbauwände Schränke hängen?", a: "Ja. Für schwere Lasten planen wir Verstärkungen in der Wand ein – sagen Sie uns vorher, was hängen soll." },
    { q: "Geht Trockenbau auch im Bad?", a: "Ja, mit imprägnierten Feuchtraumplatten und fachgerechter Abdichtung. Fliesen verlegen wir direkt im Anschluss." },
    { q: "Sind Sie ein Meisterbetrieb?", a: "Ja, wir sind ein Meisterunternehmen im Trockenbau." },
  ],
  articlesTitle: "Mehr zum Thema Trockenbau",
  articles: [
    { time: "5 Min.", title: "Trockenbau oder Massivwand: Was passt wann?", text: "Kosten, Schallschutz, Bauzeit im Vergleich.", img: "trockenbau-1.jpg" },
    { time: "5 Min.", title: "Schallschutz bei der Hotelzimmer-Renovierung", text: "Was Gäste hören – und wie man es verhindert.", img: "hotel-zimmer.jpg" },
    { time: "6 Min.", title: "Büro modernisieren ohne Betriebsunterbrechung", text: "Abschnittsweise planen, Lärm und Staub minimieren.", img: "innenausbau-4.jpg" },
  ],
  related: [
    { name: "Innenausbau", text: "Komplett aus einer Hand", href: "/bau-innenausbau/innenausbau" },
    { name: "Malerarbeiten", text: "Spachteln und Streichen", href: "/bau-innenausbau/malerarbeiten" },
    { name: "Putz & Estrich", text: "Untergrund für Boden und Wand", href: "/bau-innenausbau/putz-estrich" },
    { name: "Hotelzimmer", text: "Mit Schallschutz", href: "/hotelrenovierung/hotelzimmer" },
  ],
  ctaTitle: "Neue Raumaufteilung geplant?",
};

const putzEstrich: TradeContent = {
  slug: "putz-estrich",
  name: "Putz & Estrich",
  noun: "Partner für Putz & Estrich",
  metaTitle: "Putz & Estrich Bad Laasphe & Siegen",
  metaDescription:
    "Innenputz, Fassadenputz und Estrich in Bad Laasphe, Siegen & Umgebung: Zementestrich, Trockenestrich, Dämm- und Ausgleichsestrich. Eigene Teams. Jetzt Einschätzung anfordern.",
  h1: ["Putz & Estrich in Bad Laasphe, Siegen", "& Umgebung"],
  lead: "Ob neue Fassade, frisch verputzte Innenwände oder der richtige Estrich unter Fliesen und Parkett: Wir schaffen den Untergrund, auf dem alles Weitere aufbaut.",
  benefits: ["Innen- und Außenputz, Estrich aus einem Team", "Beratung zum passenden Putz- und Estrichsystem", "Fliesen, Boden und Farbe direkt im Anschluss"],
  hero: ["putz-1.jpg", "estrich-1.jpg", "putz-2.jpg"],
  estimate: [
    { q: "Was brauchen Sie?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Innenputz", "Fassadenputz", "Estrich", "Ausgleich / Untergrund"] },
    { q: "Um welches Objekt geht es?", opts: ["Neubau", "Altbau / Sanierung", "Gewerbe / Hotel"] },
    { q: "Wie groß ist die Fläche?", hint: "Grobe Schätzung reicht", opts: ["bis 30 m²", "30–100 m²", "über 100 m²", "weiß nicht"] },
    WHEN,
  ],
  servicesTitle: "Putz und Estrich für jeden Untergrund",
  servicesLead: "Als Gestaltungselement, zur Dämmung oder als Basis für den Bodenbelag.",
  services: [
    ["Innenputz", "Kalk-, Gips- und Kalkzementputz für Wände und Decken"],
    ["Fassadenputz", "Neuputz und Sanierung, auch mit Wärmedämmung"],
    ["Dekorputz", "Strukturen und Oberflächen als Gestaltungselement"],
    ["Zementestrich", "Robust, auch für Nassräume und Gewerbe"],
    ["Trockenestrich", "Schnell belegbar, ideal im Altbau"],
    ["Dämm- & Ausgleichsestrich", "Trittschall- und Wärmedämmung, Höhenausgleich"],
    ["Estrich für Fußbodenheizung", "Mit Aufheizprotokoll und Belegreifmessung"],
    ["Gefälleestrich", "Für bodengleiche Duschen und Balkone"],
    ["Ausbesserung", "Risse, Putzschäden, Feuchteschäden"],
  ],
  galleryTitle: "Aus unseren Putz- und Estrichprojekten",
  galleryCats: ["Alle", "Putz", "Estrich"],
  gallery: [
    { img: "putz-1.jpg", cat: "Putz", place: "[Ort]", alt: "Mehrfamilienhaus mit neuem Fassadenputz", tall: true },
    { img: "estrich-1.jpg", cat: "Estrich", place: "[Ort]", alt: "Frisch eingebrachter Estrich" },
    { img: "putz-2.jpg", cat: "Putz", place: "[Ort]", alt: "Verputzte Wand" },
    { img: "putz-3.jpg", cat: "Putz", place: "[Ort]", alt: "Putzarbeiten" },
    { img: "putz-4.jpg", cat: "Putz", place: "[Ort]", alt: "Putzarbeiten an der Fassade", tall: true },
    { img: "putz-5.jpg", cat: "Putz", place: "[Ort]", alt: "Putzoberfläche" },
    { img: "putz-6.jpg", cat: "Putz", place: "[Ort]", alt: "Verputzter Raum" },
  ],
  process: DEFAULT_PROCESS,
  costs: {
    title: "Was kosten Putz und Estrich?",
    lead: "Entscheidend sind System, Schichtdicke und Zustand des Untergrunds. Die Werte sind eine Orientierung – das Angebot folgt nach dem Aufmaß.",
    factors: ["Putz- bzw. Estrichsystem", "Schichtdicke und Dämmung", "Zustand und Vorbereitung des Untergrunds", "Gerüst bei Fassadenarbeiten"],
    rows: [
      ["Innenputz", "€/m²"],
      ["Fassadenputz", "€/m²"],
      ["Zementestrich", "€/m²"],
      ["Trockenestrich", "€/m²"],
    ],
  },
  testimonials: ["[Zitat: Fassade neu verputzt …]", "[Zitat: Estrich im Neubau, termingerecht …]", "[Zitat: Altbau, schiefe Böden ausgeglichen …]"],
  seo: {
    h2: "Putz und Estrich in Bad Laasphe und Siegen-Wittgenstein",
    intro:
      "Putz und Estrich sieht man am Ende kaum – und doch hängt alles davon ab. Ein ebener, trockener Untergrund entscheidet darüber, ob Fliesen, Parkett und Farbe lange halten. Die PS Hotel- und Wohnbau GmbH führt Putz- und Estricharbeiten seit 2005 mit eigenen Teams aus, in Bad Laasphe, im Kreis Siegen-Wittgenstein und bundesweit.",
    blocks: [
      {
        h3: "Der passende Putz innen und außen",
        text: "Putz kann gestalten, dämmen oder vor Feuchtigkeit schützen. Welcher Putz zu Ihren Wänden und Ihrer Nutzung passt, klären wir gemeinsam – von Kalkputz im Altbau bis zum Fassadenputz mit Wärmedämmung.",
      },
      {
        h3: "Estrich als Basis für den Boden",
        text: "Estrich dient als Trittschall- und Wärmedämmung und gleicht Höhen aus. Ob Zementestrich, Trockenestrich oder Ausgleichs- und Dämmestrich: Wir wählen das System nach Belag, Bauzeit und Fußbodenheizung.",
      },
      {
        h3: "Belegreife und Weiterarbeit",
        text: "Wir messen die Restfeuchte, bevor Fliesen oder Parkett verlegt werden, und führen bei Fußbodenheizung das Aufheizprotokoll. Weil Fliesen und Böden aus demselben Team kommen, gibt es keine Lücken zwischen den Gewerken.",
      },
    ],
  },
  faq: [
    { q: "Wie lange muss Estrich trocknen?", a: "Zementestrich braucht als grobe Faustregel etwa eine Woche pro Zentimeter Dicke (bis ca. 4 cm, darüber deutlich länger) – abhängig von Raumklima und Heizung. Verbindlich ist die Restfeuchtemessung. Trockenestrich ist sofort belegbar." },
    { q: "Welcher Estrich eignet sich im Altbau?", a: "Oft Trockenestrich, weil er leicht ist und keine Feuchtigkeit einbringt. Wir prüfen Statik und Aufbauhöhe vor Ort." },
    { q: "Kann man Fliesen direkt auf neuen Estrich legen?", a: "Erst nach Erreichen der Belegreife. Wir messen die Restfeuchte, bevor wir fliesen." },
    { q: "Wann lohnt sich ein neuer Fassadenputz?", a: "Bei Rissen, Abplatzungen oder wenn ohnehin gedämmt wird. Wir beurteilen den Zustand bei einer Besichtigung." },
    { q: "Machen Sie auch kleine Ausbesserungen?", a: "Ja, auch Putzschäden nach Leitungsarbeiten oder Wasserschäden bessern wir aus." },
  ],
  articlesTitle: "Mehr zum Thema Putz & Estrich",
  articles: [
    { time: "6 Min.", title: "Estrich: Arten, Trocknungszeit, Belegreife", text: "Welcher Estrich wann passt – und wie lange er wirklich braucht.", img: "estrich-1.jpg" },
    { time: "5 Min.", title: "Fassade neu verputzen: Wann lohnt es sich?", text: "Schäden erkennen, Kosten einschätzen, richtig planen.", img: "putz-1.jpg" },
    { time: "5 Min.", title: "Wandgestaltung: Farbe, Tapete oder Putz?", text: "Was zu welchem Raum passt – und was es kostet.", img: "maler-4.jpg" },
  ],
  related: [
    { name: "Fliesenarbeiten", text: "Direkt auf den neuen Estrich", href: "/bau-innenausbau/fliesenarbeiten" },
    { name: "Malerarbeiten", text: "Farbe auf frischem Putz", href: "/bau-innenausbau/malerarbeiten" },
    { name: "Trockenbau", text: "Wände und Decken", href: "/bau-innenausbau/trockenbau" },
    { name: "Gebäudetrocknung", text: "Nach Wasserschaden", href: "/schadensanierung/gebaeudetrocknung" },
  ],
  ctaTitle: "Putz oder Estrich geplant?",
};

const sanitaer: TradeContent = {
  slug: "sanitaer",
  name: "Sanitär",
  noun: "Partner fürs Bad",
  metaTitle: "Badsanierung & Sanitär Bad Laasphe",
  metaDescription:
    "Sanitär und Badsanierung in Bad Laasphe, Siegen & Umgebung: Komplettbad, bodengleiche Dusche, barrierefreies Bad, Gäste-WC. Planung in 3D, alles aus einer Hand.",
  h1: ["Badsanierung & Sanitär in Bad Laasphe", "& Umgebung"],
  lead: "Sie möchten Ihr Bad gestalten, sanieren oder modernisieren? Wir planen Ihr Traumbad in 3D und bauen es komplett – Sanitär, Abdichtung, Fliesen und Licht aus einer Hand.",
  benefits: ["Komplettbad aus einer Hand, ein Ansprechpartner", "3D-Badplanung vor dem Umbau", "Auch barrierefrei – oder fugenlos in ca. 3 Tagen"],
  hero: ["sanitaer-1.jpg", "sanitaer-2.jpg", "fliesen-bad-1.jpg"],
  estimate: [
    { q: "Was ist geplant?", hint: "Wählen Sie den Umfang", opts: ["Komplettes Bad", "Dusche umbauen", "Gäste-WC", "Barrierefreies Bad", "Einzelne Objekte tauschen"] },
    { q: "Wie groß ist das Bad?", hint: "Grobe Schätzung reicht", opts: ["bis 5 m²", "5–10 m²", "über 10 m²", "weiß nicht"] },
    { q: "Fliesen oder fugenlos?", hint: "Wir beraten Sie zu beiden Varianten", opts: ["Fliesen", "Fugenlos (Bad in 3 Tagen)", "Noch offen"] },
    WHEN,
  ],
  trust: [
    ["20+ Jahre", "Badsanierung aus einer Hand"],
    ["[X] Bäder", "saniert seit 2005"],
    ["★ [4,X]", "[X] Google-Bewertungen"],
    ["Villeroy & Boch", "Premiumpartner"],
  ],
  servicesTitle: "Was wir im Bad für Sie umsetzen",
  servicesLead: "Vom Austausch einzelner Objekte bis zum kompletten Neubau des Bades.",
  services: [
    ["Komplettbad", "Planung, Rückbau, Installation, Fliesen, Licht"],
    ["Bodengleiche Dusche", "Mit Rinne oder Punktablauf, sicher abgedichtet"],
    ["Barrierefreies Bad", "Nach DIN 18040-2, auch mit Zuschuss bei Pflegegrad"],
    ["Gäste-WC", "Kompakte Lösungen mit Vorwandinstallation"],
    ["Vorwandinstallation", "Wandhängendes WC, Unterputz-Spülkasten"],
    ["Badmöbel & Objekte", "Waschtisch, Spiegel, Armaturen – u. a. Villeroy & Boch"],
    ["Badewanne raus, Dusche rein", "Umbau in wenigen Tagen"],
    ["Fugenloses Bad", "Mit Mein Zauberbad in ca. 3 Tagen"],
    ["Hotelbäder", "In Serie, mit festen Taktzeiten"],
  ],
  galleryTitle: "Unsere letzten Bäder",
  galleryCats: ["Alle", "Bad", "Dusche", "WC"],
  gallery: [
    { img: "sanitaer-1.jpg", cat: "Bad", place: "[Ort]", alt: "Bad mit freistehender Badewanne", tall: true },
    { img: "sanitaer-2.jpg", cat: "Bad", place: "[Ort]", alt: "Waschtisch mit beleuchtetem Spiegel und Holzwand" },
    { img: "fliesen-dusche-3.jpg", cat: "Dusche", place: "[Ort]", alt: "Bodengleiche Dusche mit Glaswand" },
    { img: "fliesen-wc.jpg", cat: "WC", place: "[Ort]", alt: "Gäste-WC mit Vorwandinstallation", tall: true },
    { img: "fliesen-bad-1.jpg", cat: "Bad", place: "[Ort]", alt: "Bad mit dunklem Waschtisch" },
    { img: "fliesen-dusche-4.jpg", cat: "Dusche", place: "[Ort]", alt: "Dusche mit Regenbrause" },
    { img: "sanitaer-3.jpg", cat: "Bad", place: "[Ort]", alt: "Renoviertes Badezimmer" },
  ],
  caseStudy: {
    after: "sanitaer-1.jpg",
    alt: "Komplettsanierung eines Badezimmers",
    title: "Altes Bad mit Wanne → offenes Bad mit freistehender Wanne",
    stats: [
      ["[X] m²", "Fläche"],
      ["[X] Tage", "Bauzeit"],
      ["[X]", "Gewerke"],
    ],
  },
  process: [
    ["Anfrage & Fotos", "Formular oben – erste Einschätzung in [48 h]."],
    ["Aufmaß & Beratung", "Leitungen, Abfluss und Wünsche vor Ort prüfen."],
    ["3D-Badplanung", "Sie sehen Ihr neues Bad und erhalten ein klares Angebot."],
    ["Umbau & Übergabe", "Alle Gewerke aus einer Hand, gemeinsame Abnahme."],
  ],
  testimonials: ["[Zitat: Komplettbad, alles aus einer Hand …]", "[Zitat: Barrierefreies Bad für die Eltern …]", "[Zitat: Gäste-WC in [X] Tagen …]"],
  seo: {
    h2: "Badsanierung in Bad Laasphe und Siegen-Wittgenstein",
    intro:
      "Bei einer Badsanierung greifen viele Gewerke ineinander: Sanitärinstallation, Elektro, Abdichtung, Estrich, Fliesen und Trockenbau. Die PS Hotel- und Wohnbau GmbH plant und baut Bäder seit 2005 komplett aus einer Hand – für Privatkunden, Vermieter und Hotels in Bad Laasphe, im Kreis Siegen-Wittgenstein und bundesweit.",
    blocks: [
      {
        h3: "Planung in 3D",
        text: "In einem unverbindlichen Beratungsgespräch halten wir Ihre Wünsche fest und kombinieren sie mit technisch umsetzbaren Lösungen. Die 3D-Planung zeigt Ihnen Raumaufteilung, Fliesen und Objekte, bevor der Umbau beginnt.",
      },
      {
        h3: "Barrierefrei und zukunftssicher",
        text: "Bodengleiche Duschen, unterfahrbare Waschtische und Haltegriffe machen das Bad für alle Lebensphasen nutzbar. Bei Pflegegrad sind Zuschüsse möglich – wir beraten Sie zu den Voraussetzungen.",
      },
      {
        h3: "Fliesen oder fugenlos",
        text: "Neben dem klassisch gefliesten Bad bieten wir mit Mein Zauberbad fugenlose Bäder an, die meist in rund drei Tagen fertig sind. Wir zeigen Ihnen ehrlich, welche Variante zu Ihrem Bad passt.",
      },
    ],
  },
  faq: [
    { q: "Was kostet eine Badsanierung?", a: "Das hängt von Größe, Ausstattung und Zustand ab. Nach dem Aufmaß und der 3D-Planung erhalten Sie ein Angebot mit allen Positionen." },
    { q: "Wie lange dauert eine Badsanierung?", a: "Ein Komplettbad dauert mit Fliesen in der Regel [X–X] Wochen. Ein fugenloses Bad mit Mein Zauberbad ist meist in ca. 3 Tagen fertig." },
    { q: "Gibt es Zuschüsse für ein barrierefreies Bad?", a: "Bei Pflegegrad kann die Pflegekasse wohnumfeldverbessernde Maßnahmen bezuschussen. Wir beraten Sie zu Voraussetzungen und Antrag." },
    { q: "Übernehmen Sie auch Elektro und Abdichtung?", a: "Abdichtung, Fliesen, Trockenbau und Sanitär machen unsere eigenen Teams, Elektro koordinieren wir mit festen Partnern." },
    { q: "Kann ich das Bad während des Umbaus nutzen?", a: "Meist nicht. Wir planen die Bauzeit so kurz wie möglich und sprechen Übergangslösungen mit Ihnen ab." },
  ],
  articlesTitle: "Mehr zum Thema Bad",
  articles: [
    { time: "6 Min.", title: "Badsanierung: Ablauf und Dauer Schritt für Schritt", text: "Was wann passiert – vom Rückbau bis zur Abnahme.", img: "sanitaer-2.jpg" },
    { time: "5 Min.", title: "Barrierefreies Bad: Welche Zuschüsse gibt es?", text: "Pflegekasse und weitere Programme im Überblick.", img: "fliesen-dusche-3.jpg" },
    { time: "4 Min.", title: "Fliesen oder fugenloses Bad? Der ehrliche Vergleich", text: "Kosten, Bauzeit, Pflege – im direkten Vergleich.", img: "fliesen-bad-1.jpg" },
  ],
  related: [
    { name: "Fliesenarbeiten", text: "Wand und Boden im Bad", href: "/bau-innenausbau/fliesenarbeiten" },
    { name: "Bad in 3 Tagen", text: "Fugenlos mit Mein Zauberbad", href: "/bad-in-3-tagen" },
    { name: "Trockenbau", text: "Vorwand und Feuchtraum", href: "/bau-innenausbau/trockenbau" },
    { name: "Hotelbäder", text: "In Serie für Hotels", href: "/hotelrenovierung/hotelbaeder" },
  ],
  ctaTitle: "Neues Bad geplant?",
};

export const trades = { fliesen, maler, innenausbau, trockenbau, putzEstrich, sanitaer };
export const tradeList: TradeContent[] = [fliesen, maler, innenausbau, trockenbau, putzEstrich, sanitaer];

/** Liste für Startseite und Übersicht „Bau & Innenausbau“ */
export const tradeIndex: Trade[] = [
  { name: "Fliesen", text: "Bad, Küche, Wohnraum, Terrasse – auch Großformat", href: "/bau-innenausbau/fliesenarbeiten", img: "fliesen-dusche-1.jpg" },
  { name: "Maler", text: "Wände, Decken, Spachteltechnik, Fassade", href: "/bau-innenausbau/malerarbeiten", img: "maler-1.jpg" },
  { name: "Innenausbau", text: "Büros, Praxen, Aufenthaltsräume schlüsselfertig", href: "/bau-innenausbau/innenausbau", img: "innenausbau-2.jpg" },
  { name: "Trockenbau", text: "Trennwände, Decken, Vorsatzschalen, Schallschutz", href: "/bau-innenausbau/trockenbau", img: "trockenbau-1.jpg" },
  { name: "Putz & Estrich", text: "Der richtige Untergrund für jeden Belag", href: "/bau-innenausbau/putz-estrich", img: "estrich-1.jpg" },
  { name: "Sanitär", text: "Komplettbäder, Vorwandinstallation, barrierefrei", href: "/bau-innenausbau/sanitaer", img: "sanitaer-2.jpg" },
  { name: "Brand- & Wasserschaden", text: "Trocknung, Sanierung, Abwicklung mit der Versicherung", href: "/schadensanierung/wasserschaden", img: "fliesen-boden.jpg" },
];
