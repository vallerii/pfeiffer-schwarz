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
        className="flex min-h-12 items-center gap-1.5 text-[15px] font-medium text-tanne hover:text-messing-dunkel"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {group.label}
        <Chevron open={open} />
      </button>
      <div
        className={`absolute top-full left-1/2 z-40 -translate-x-1/2 pt-3 transition duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="flex gap-10 bg-white p-7 shadow-[0_24px_60px_-20px_rgba(16,28,40,0.35)] ring-1 ring-tanne/5">
          <ul className="w-64">
            <li>
              <Link href={group.href} className="mb-2 block border-b border-fuge pb-3 font-display font-semibold text-tanne hover:text-messing-dunkel">
                {group.label} im Überblick
              </Link>
            </li>
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 text-[15px] text-schiefer hover:text-messing-dunkel">
                  {item.label}
                  {item.note && <span className="block text-[13px] text-stein">{item.note}</span>}
                </Link>
              </li>
            ))}
          </ul>
          {group.extra && (
            <div className="w-56 space-y-6 border-l border-fuge pl-10">
              {group.extra.map((block) => (
                <div key={block.title}>
                  <p className="mb-2 text-[13px] font-semibold text-stein">{block.title}</p>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block py-1.5 text-[15px] hover:text-messing-dunkel">
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Seiten mit eigenem Anfrageformular springen dorthin, alle anderen zum Quiz auf der Startseite
  const formHref = pathname.startsWith("/bau-innenausbau/") || pathname === "/hotelrenovierung" ? "#anfrage" : "/#anfrage";

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <div className="bg-tanne-tief text-[13px] text-white/70">
        <div className="wrap flex min-h-9 items-center justify-between gap-6">
          <span className="hidden sm:inline">
            {site.street}, {site.zip} {site.city} · bundesweit im Einsatz
          </span>
          <nav aria-label="Service" className="flex items-center gap-5">
            {utilityNav.map((item) => (
              <Link key={item.href} href={item.href} className="hidden hover:text-white md:inline">
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-2 font-semibold text-white">
              <span className="h-2 w-2 bg-messing ring-4 ring-messing/25" aria-hidden="true" />
              Wasser- oder Brandschaden?
            </a>
          </nav>
        </div>
      </div>

      <header
        className={`sticky top-0 z-30 bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_1px_0_0_var(--color-fuge)]" : ""
        }`}
      >
        <div className="wrap flex min-h-20 items-center gap-8">
          <Logo />
          <nav aria-label="Hauptnavigation" className="ml-auto hidden items-center gap-6 whitespace-nowrap 2xl:gap-8 xl:flex">
            {mainNav.map((item) =>
              isGroup(item) ? (
                <DesktopDropdown key={item.href} group={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium hover:text-messing-dunkel ${pathname === item.href ? "text-messing-dunkel" : "text-tanne"}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto hidden items-center gap-5 xl:ml-0 xl:flex">
            <a href={site.phoneHref} className="num hidden text-sm font-semibold whitespace-nowrap text-tanne hover:text-messing-dunkel 2xl:block">
              {site.phone}
            </a>
            <Link href={formHref} className="btn-primary whitespace-nowrap">
              Projekt anfragen
            </Link>
          </div>
          <button
            type="button"
            className="ml-auto flex h-12 w-12 items-center justify-center text-tanne xl:hidden"
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
          className={`fixed inset-x-0 top-20 bottom-0 z-30 overflow-y-auto bg-white transition xl:hidden ${
            menuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <nav aria-label="Mobile Navigation" className="wrap pt-2 pb-32">
            {mainNav.map((item) =>
              isGroup(item) ? (
                <div key={item.href} className="border-b border-fuge">
                  <button
                    type="button"
                    className="flex min-h-16 w-full items-center justify-between font-display text-xl font-semibold text-tanne"
                    aria-expanded={openGroup === item.href}
                    onClick={() => setOpenGroup(openGroup === item.href ? null : item.href)}
                  >
                    {item.label}
                    <Chevron open={openGroup === item.href} />
                  </button>
                  {openGroup === item.href && (
                    <ul className="pb-5">
                      <li>
                        <Link href={item.href} className="block py-2.5 font-semibold text-messing-dunkel">
                          Überblick
                        </Link>
                      </li>
                      {[...item.items, ...(item.extra?.flatMap((b) => b.items) ?? [])].map((sub) => (
                        <li key={sub.href}>
                          <Link href={sub.href} className="block py-2.5 text-schiefer">
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
                  className="flex min-h-16 items-center border-b border-fuge font-display text-xl font-semibold text-tanne"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-6 flex flex-col gap-1 text-schiefer-2">
              {utilityNav.map((item) => (
                <Link key={item.href} href={item.href} className="py-2">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Fixierte Leiste auf dem Smartphone */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-fuge bg-white/95 p-2 backdrop-blur lg:hidden">
        <a href={site.phoneHref} className="btn-ghost">
          Anrufen
        </a>
        <Link href={formHref} className="btn-primary" onClick={() => setMenuOpen(false)}>
          Anfragen
        </Link>
      </div>
    </>
  );
}
