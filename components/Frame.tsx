import Image from "next/image";

/**
 * Overtake-Karte: abgerundetes Foto, Kategorie als Pille auf dem Bild.
 * Töne: 0 Hotel (Blau), 1 alles andere (Blau-Schwarz), 2 neutral (Weiß), 3 Immergrün-Hell, 4 Bad (Pfirsich).
 */
export const STRIPS = ["bg-blue text-white", "bg-navy text-white", "bg-white text-ink", "bg-blue-pale text-ink", "bg-peach text-ink"] as const;

type Props = {
  src: string;
  alt: string;
  label?: string;
  tone?: number;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  muted?: boolean;
  link?: boolean;
  large?: boolean;
};

export function Frame({
  src,
  alt,
  label,
  tone = 0,
  ratio = "4/3",
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 17vw, 50vw",
  priority,
  fill,
  muted,
  link,
  large,
}: Props) {
  const [w, h] = ratio.split("/").map(Number);
  return (
    <figure className={`flex flex-col ${fill ? "lg:min-h-0" : ""} ${className}`} style={fill ? { flex: `${Math.max(h / w, 0.9)} 1 0` } : undefined}>
      <div
        className={`relative w-full overflow-hidden rounded-(--radius-card) bg-paper ${fill ? "lg:min-h-0 lg:flex-1 lg:aspect-auto!" : ""} ${imgClassName}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={`/img/${src}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${muted ? "opacity-85 saturate-[0.6]" : ""} ${link ? "transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.04]" : ""}`}
        />
        {label && (
          <figcaption
            className={`absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full font-medium ${
              large ? "px-4 py-1.5 text-[15px]" : "small px-3 py-1"
            } ${STRIPS[tone % STRIPS.length]}`}
          >
            {label}
          </figcaption>
        )}
        {link && (
          <span
            aria-hidden="true"
            className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-colors duration-200 group-hover:bg-blue group-hover:text-white"
          >
            <Arrow className="h-4 w-4" />
          </span>
        )}
      </div>
    </figure>
  );
}

export function Arrow({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path d="M4 10h11M10.5 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Overtake-Hauptaktion: Pille mit runder Pfeil-Kachel */
export function IconCta({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a href={href} className="btn-icon" {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue">
        <Arrow />
      </span>
      {children}
    </a>
  );
}

/** Hervorgehobene Aussage im Text */
export function Mark({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "navy" | "white" | "peach" }) {
  const c = tone === "blue" ? "bg-blue text-white" : tone === "navy" ? "bg-blue-pale text-ink" : tone === "peach" ? "bg-peach text-ink" : "bg-white text-navy";
  return <mark className={`${c} box-decoration-clone rounded-[0.3em] px-[0.22em]`}>{children}</mark>;
}
