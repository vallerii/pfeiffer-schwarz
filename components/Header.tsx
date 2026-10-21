"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { isGroup, mainNav, site, utilityNav, type NavGroup } from "@/lib/site";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        className="flex min-h-12 items-center gap-1.5 text-[16px] font-medium text-navy hover:text-blue"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label}
        <Chevron open={open} />
      </button>
      <div
        className={`absolute top-full left-1/2 z-40 -translate-x-1/2 pt-3 ${open ? "block" : "hidden"}`}
      >
        <div className="menu-shadow flex gap-10 bg-paper p-7">
          <ul className="w-64">
            <li>
              <Link href={group.href} className="mb-2 block pb-2 font-semibold text-navy underline decoration-blue decoration-2 hover:text-blue">
                {group.label} im Überblick
              </Link>
            </li>
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 text-[15px] text-ink hover:text-blue">
                  {item.label}
                  {item.note && <span className="block text-[13px] text-slate">{item.note}</span>}
                </Link>
              </li>
            ))}
          </ul>
          {group.extra && (
            <div className="w-56 space-y-6 pl-2">
              {group.extra.map((block) => (
                <div key={block.title}>
                  <p className="mb-2 text-[13px] font-semibold text-slate">{block.title}</p>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block py-1.5 text-[15px] hover:text-blue">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  // Seiten mit eigenem Anfrageformular springen dorthin, alle anderen zum Quiz auf der Startseite
  const formHref = pathname.startsWith("/bau-innenausbau/") || pathname === "/hotelrenovierung" ? "#anfrage" : "/#anfrage";

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <div className="bg-paper text-[13px] text-ink-2">
        <div className="wrap flex min-h-9 items-center justify-between gap-6">
          <span className="hidden sm:inline">
            {site.street}, {site.zip} {site.city} · bundesweit im Einsatz
          </span>
          <nav aria-label="Service" className="flex items-center gap-5">
            {utilityNav.map((item) => (
              <Link key={item.href} href={item.href} className="hidden hover:text-blue md:inline">
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-blue">
              <span className="h-2 w-2 rounded-full bg-blue" aria-hidden="true" />
              Wasser- oder Brandschaden?
            </a>
          </nav>
        </div>
      </div>

      <header
        className="sticky top-0 z-30 bg-white"
      >
        <div className="wrap flex min-h-16 items-center gap-3 sm:gap-8">
          <Logo />
          <nav aria-label="Hauptnavigation" className="ml-auto hidden items-center gap-6 whitespace-nowrap 2xl:gap-8 xl:flex">
            {mainNav.map((item) =>
              isGroup(item) ? (
                <DesktopDropdown key={item.href} group={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[16px] font-medium hover:text-blue ${pathname === item.href ? "text-blue" : "text-navy"}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto hidden items-center gap-5 xl:ml-0 xl:flex">
            <a href={site.phoneHref} className="num hidden text-sm font-semibold whitespace-nowrap text-navy hover:text-blue 2xl:block">
              {site.phone}
            </a>
            <Link href={formHref} className="btn-primary whitespace-nowrap">
              Projekt anfragen
            </Link>
          </div>
          {/* Auf kleinen Bildschirmen bleiben Anrufen und Anfragen in der fixierten Kopfzeile */}
          <div className="ml-auto flex items-center gap-1.5 xl:hidden">
            <a href={site.phoneHref} aria-label={`Anrufen: ${site.phone}`} className="flex h-11 w-11 items-center justify-center bg-paper text-navy">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M6.6 3.5h3l1.4 4.2-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4.2 1.4v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </a>
            <Link href={formHref} className="btn-primary min-h-11 px-4" onClick={() => setMenuOpen(false)}>
              Anfragen
            </Link>
          </div>
          <button
            type="button"
            className="-mr-2 flex h-12 w-11 shrink-0 items-center justify-center text-navy xl:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-current transition ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>

        {/* Mobiles Menü */}
        <div
          className={`fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-white xl:hidden ${menuOpen ? "block" : "hidden"}`}
        >
          <nav aria-label="Mobile Navigation" className="wrap pt-2 pb-32">
            {mainNav.map((item) =>
              isGroup(item) ? (
                <div key={item.href}>
                  <button
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between text-xl font-semibold text-navy"
                    aria-expanded={openGroup === item.href}
                    onClick={() => setOpenGroup(openGroup === item.href ? null : item.href)}
                  >
                    {item.label}
                    <Chevron open={openGroup === item.href} />
                  </button>
                  {openGroup === item.href && (
                    <ul className="pb-5">
                      <li>
                        <Link href={item.href} className="block py-2.5 font-semibold text-blue">
                          Überblick
                        </Link>
                      </li>
                      {[...item.items, ...(item.extra?.flatMap((b) => b.items) ?? [])].map((sub) => (
                        <li key={sub.href}>
                          <Link href={sub.href} className="block py-2.5 text-ink">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-14 items-center text-xl font-semibold text-navy"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-6 flex flex-col gap-1 text-ink-2">
              {utilityNav.map((item) => (
                <Link key={item.href} href={item.href} className="py-2">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

    </>
  );
}
