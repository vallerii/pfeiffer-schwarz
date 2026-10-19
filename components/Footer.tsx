import Link from "next/link";
import { Logo } from "./Logo";
import { bauNav, hotelNav, site } from "@/lib/site";

const company = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Karriere", href: "/karriere" },
  { label: "Für Generalunternehmer", href: "/generalunternehmer" },
  { label: "Downloads für Partner", href: "/downloads" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-24 text-white/70 lg:pb-0">
      <div className="wrap grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <Logo inverted />
          <address className="text-[15px] leading-7 not-italic">
            {site.legalName}
            <br />
            {site.street}, {site.zip} {site.city}
            <br />
            <a href={site.phoneHref} className="num text-white hover:underline">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="text-white hover:underline">
              {site.email}
            </a>
          </address>
        </div>
        <FooterCol title={hotelNav.label} href={hotelNav.href} items={hotelNav.items} />
        <FooterCol
          title={bauNav.label}
          href={bauNav.href}
          items={[...bauNav.items, { label: "Schadensanierung", href: "/schadensanierung/wasserschaden" }]}
        />
        <FooterCol title="Unternehmen" items={company} />
      </div>
      <div className="wrap flex flex-col gap-4 border-t border-white/10 py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/impressum" className="hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white">
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}

function FooterCol({ title, href, items }: { title: string; href?: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 font-display font-bold text-white">{href ? <Link href={href}>{title}</Link> : title}</p>
      <ul className="space-y-2.5 text-[15px]">
        {items.map((i) => (
          <li key={i.href + i.label}>
            <Link href={i.href} className="hover:text-white">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
