import Link from "next/link";
import { LogoMark } from "./Logo";
import { bauNav, hotelNav, site } from "@/lib/site";

const company = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Karriere", href: "/karriere" },
  { label: "Für Generalunternehmer", href: "/generalunternehmer" },
  { label: "Downloads für Partner", href: "/downloads" },
];

/** Abschluss als letzte zwei Reihen des Kontaktbogens: gefüllte Kacheln, jede Zelle genutzt. */
export function Footer() {
  return (
    <footer className="px-4 pt-2 pb-4 sm:px-5 sm:pt-3 sm:pb-5">
      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-12">
        <div className="col-span-2 flex min-h-56 flex-col justify-between gap-8 bg-paper p-5 sm:p-6 lg:col-span-4">
          <p className="max-w-[24ch] t-lead leading-[1.15] font-semibold tracking-[-0.02em] text-navy">
            Hotelrenovierung und Innenausbau mit eigenen Teams.
          </p>
          <p className="small text-slate">
            © {new Date().getFullYear()} {site.legalName} ·{" "}
            <Link href="/impressum" className="underline">
              Impressum
            </Link>{" "}
            ·{" "}
            <Link href="/datenschutz" className="underline">
              Datenschutz
            </Link>
          </p>
        </div>
        <nav aria-label={hotelNav.label} className="bg-paper p-5 sm:p-6 lg:col-span-2">
          <Link href={hotelNav.href} className="font-semibold text-navy">
            {hotelNav.label}
          </Link>
          <ul className="mt-3 space-y-1.5 t-body text-ink-2">
            {hotelNav.items.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-blue">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={bauNav.label} className="bg-paper p-5 sm:p-6 lg:col-span-2">
          <Link href={bauNav.href} className="font-semibold text-navy">
            {bauNav.label}
          </Link>
          <ul className="mt-3 space-y-1.5 t-body text-ink-2">
            {[...bauNav.items, { label: "Schadensanierung", href: "/schadensanierung/wasserschaden" }].map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-blue">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Unternehmen" className="col-span-2 bg-paper p-5 sm:col-span-1 sm:p-6 lg:col-span-2">
          <p className="font-semibold text-navy">Unternehmen</p>
          <ul className="mt-3 space-y-1.5 t-body text-ink-2">
            {company.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-blue">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-2 flex flex-col justify-between gap-6 bg-paper p-5 sm:col-span-1 sm:p-6 lg:col-span-2">
          <address className="t-body leading-relaxed text-ink-2 not-italic">
            {site.street}
            <br />
            {site.zip} {site.city}
          </address>
          <div>
            <a href={site.phoneHref} className="num block t-lead font-semibold text-navy hover:text-blue">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block t-body text-ink-2 underline decoration-blue hover:text-blue">
              {site.email}
            </a>
          </div>
        </div>

        <div className="col-span-2 flex min-h-40 items-center justify-center overflow-hidden bg-navy px-4 text-white lg:col-span-8 lg:min-h-80">
          <p className="flex items-center gap-[0.25em] text-[clamp(2.4rem,8.4vw,8.6rem)] leading-none font-semibold tracking-[-0.045em] whitespace-nowrap">
            <LogoMark className="h-[0.9em] w-[0.9em] text-white" />
            Pfeiffer &amp; Schwarz
          </p>
        </div>
        <Link
          href="/#anfrage"
          className="group col-span-2 flex min-h-48 flex-col justify-between bg-blue p-5 text-white transition-colors hover:bg-blue-bright sm:p-6 lg:col-span-4 lg:min-h-80"
        >
          <span className="t-lead leading-[1.05] font-semibold tracking-[-0.02em]">Projekt anfragen</span>
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 self-end transition-transform duration-300 group-hover:translate-x-1">
            <path d="M6 24h34M28 11l13 13-13 13" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
