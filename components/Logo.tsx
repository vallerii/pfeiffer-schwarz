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
        fontFamily="Hanken Grotesk Variable, sans-serif"
        fontWeight="650"
        fontSize="13"
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
      <LogoMark className={`h-9 w-9 shrink-0 sm:h-10 sm:w-10 ${inverted ? "text-white" : "text-navy"}`} />
      <span className="hidden flex-col leading-tight whitespace-nowrap min-[420px]:flex">
        <span className={`text-[19px] font-semibold tracking-[-0.02em] ${inverted ? "text-white" : "text-navy"}`}>
          Pfeiffer &amp; Schwarz
        </span>
        <span className={`hidden text-[13px] sm:block ${inverted ? "text-white/70" : "text-slate"}`}>PS Hotel- und Wohnbau GmbH</span>
      </span>
    </Link>
  );
}
