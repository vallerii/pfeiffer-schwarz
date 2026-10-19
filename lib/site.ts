export const site = {
  name: "Pfeiffer & Schwarz",
  legalName: "PS Hotel- und Wohnbau GmbH",
  url: "https://www.pfeiffer-schwarz.com",
  phone: "02754 220430",
  phoneHref: "tel:+492754220430",
  email: "info@pfeiffer-schwarz.com",
  street: "Untere Espen 5",
  zip: "57334",
  city: "Bad Laasphe",
  region: "Siegen-Wittgenstein",
  since: 2005,
  staff: "ca. 40",
  zauberbadUrl: "https://meinzauberbad.de/",
};

export type NavItem = { label: string; href: string; note?: string };
export type NavGroup = { label: string; href: string; items: NavItem[]; extra?: { title: string; items: NavItem[] }[] };

export const hotelNav: NavGroup = {
  label: "Hotelrenovierung",
  href: "/hotelrenovierung",
  items: [
    { label: "Hotelzimmer", href: "/hotelrenovierung/hotelzimmer", note: "Etagenweise im laufenden Betrieb" },
    { label: "Hotelbäder", href: "/hotelrenovierung/hotelbaeder", note: "In Serie, mit festen Taktzeiten" },
    { label: "Wellness & Spa", href: "/hotelrenovierung/wellness-spa", note: "Sauna, Pool, Ruhebereiche" },
    { label: "Lobby & Gastro", href: "/hotelrenovierung/lobby-gastro", note: "Empfang, Bar, Restaurant" },
    { label: "Hotelmöbel", href: "/hotelrenovierung/hotelmoebel", note: "Möbel, Textilien, Licht" },
    { label: "Komplettsanierung", href: "/hotelrenovierung/komplettsanierung", note: "Ablauf als Generalunternehmer" },
  ],
};

export const bauNav: NavGroup = {
  label: "Bau & Innenausbau",
  href: "/bau-innenausbau",
  items: [
    { label: "Fliesenarbeiten", href: "/bau-innenausbau/fliesenarbeiten" },
    { label: "Malerarbeiten", href: "/bau-innenausbau/malerarbeiten" },
    { label: "Innenausbau", href: "/bau-innenausbau/innenausbau" },
    { label: "Trockenbau", href: "/bau-innenausbau/trockenbau" },
    { label: "Putz & Estrich", href: "/bau-innenausbau/putz-estrich" },
    { label: "Sanitär", href: "/bau-innenausbau/sanitaer" },
  ],
  extra: [
    {
      title: "Schadensanierung",
      items: [
        { label: "Wasserschaden", href: "/schadensanierung/wasserschaden" },
        { label: "Brandschaden", href: "/schadensanierung/brandschaden" },
        { label: "Gebäudetrocknung", href: "/schadensanierung/gebaeudetrocknung" },
      ],
    },
    {
      title: "Für Partner",
      items: [{ label: "Für Generalunternehmer", href: "/generalunternehmer" }],
    },
  ],
};

export const mainNav: (NavGroup | NavItem)[] = [
  hotelNav,
  bauNav,
  { label: "Bad in 3 Tagen", href: "/bad-in-3-tagen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
];

export const utilityNav: NavItem[] = [
  { label: "Karriere", href: "/karriere" },
  { label: "Downloads für Partner", href: "/downloads" },
];

export function isGroup(item: NavGroup | NavItem): item is NavGroup {
  return "items" in item;
}
