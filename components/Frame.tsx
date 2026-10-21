import Image from "next/image";

/** Farbstreifen unter jedem Bild – wie die Leiste auf einem Kontaktbogen. Vier Töne im Wechsel. */
export const STRIPS = [
  "bg-blue text-white",
  "bg-navy text-white",
  "bg-paper text-ink",
  "bg-blue-pale text-ink",
] as const;

type Props = {
  src: string;
  alt: string;
  label?: string;
  tone?: number;
  /** CSS aspect-ratio des Bildes, z. B. "3/4" */
  ratio?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Auf großen Bildschirmen teilt sich der Rahmen die Spaltenhöhe mit seinen Nachbarn */
  fill?: boolean;
};

export function Frame({ src, alt, label, tone = 0, ratio = "4/3", className = "", imgClassName = "", sizes = "(min-width: 1024px) 17vw, 50vw", priority, fill }: Props) {
  const [w, h] = ratio.split("/").map(Number);
  return (
    <figure className={`flex flex-col ${fill ? "lg:min-h-0" : ""} ${className}`} style={fill ? { flex: `${h / w} 1 0` } : undefined}>
      <div
        className={`relative w-full overflow-hidden bg-paper ${fill ? "lg:min-h-0 lg:flex-1 lg:aspect-auto!" : ""} ${imgClassName}`}
        style={{ aspectRatio: ratio }}
      >
        <Image src={`/img/${src}`} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {label && (
        <figcaption className={`small flex h-7 shrink-0 items-center truncate px-2.5 font-medium ${STRIPS[tone % STRIPS.length]}`}>
          {label}
        </figcaption>
      )}
    </figure>
  );
}
