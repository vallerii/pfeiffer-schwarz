import Link from "next/link";

/** Vereinfachte Bildmarke nach dem bestehenden Firmenlogo (Haus + „PS“). Für den Livegang durch die Original-SVG ersetzen. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} fill="none">
      <path d="M6 22 24 6l18 16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 20v22h26V20" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <text
        x="24"
        y="37"
        textAnchor="middle"
        fontFamily="Barlow Condensed, sans-serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        PS
      </text>
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Pfeiffer & Schwarz – zur Startseite">
      <LogoMark className={`h-10 w-10 ${inverted ? "text-weiss" : "text-tanne"}`} />
      <span className="flex flex-col leading-tight whitespace-nowrap">
        <span className={`font-display text-[21px] leading-none font-semibold ${inverted ? "text-weiss" : "text-tanne"}`}>
          Pfeiffer &amp; Schwarz
        </span>
        <span className={`${inverted ? "text-weiss/60" : "text-stein"} mt-1 text-[12.5px]`}>PS Hotel- und Wohnbau GmbH</span>
      </span>
    </Link>
  );
}
