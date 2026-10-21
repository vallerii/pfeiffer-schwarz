import Image from "next/image";

/**
 * Фирменный знак: фото с плашкой, приваренной к нижнему краю – как подпись на контактном листе.
 * Плашки: синяя (по умолчанию), антрацит, светлая (спокойная, для фона вокруг главного).
 */
export const STRIPS = ["bg-blue text-white", "bg-navy text-white", "bg-paper text-ink-2", "bg-blue-pale text-ink"] as const;

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
  /** Bild leicht zurückgenommen (Hintergrund rund um das Türschild) */
  muted?: boolean;
  /** Teil eines Links: beim Überfahren wird die Plakette blau und das Foto rückt leicht heran */
  link?: boolean;
  /** größere Plakette mit Fließtext-Größe */
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
        className={`relative w-full overflow-hidden bg-paper ${fill ? "lg:min-h-0 lg:flex-1 lg:aspect-auto!" : ""} ${imgClassName}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={`/img/${src}`}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${muted ? "opacity-80 saturate-[0.55]" : ""} ${link ? "transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.04]" : ""}`}
        />
      </div>
      {label && (
        <figcaption
          className={`flex shrink-0 items-center truncate font-medium transition-colors duration-200 ${
            large ? "min-h-10 px-3.5 t-body" : "small h-7 px-2.5"
          } ${STRIPS[tone % STRIPS.length]} ${link ? "underline decoration-transparent decoration-2 underline-offset-4 group-hover:decoration-current group-focus-visible:decoration-current" : ""}`}
        >
          {label}
        </figcaption>
      )}
    </figure>
  );
}

/** Dieselbe Plakette im Text: hebt eine Aussage hervor, sparsam einsetzen */
export function Mark({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "navy" | "white" }) {
  const c = tone === "blue" ? "bg-blue text-white" : tone === "navy" ? "bg-navy text-white" : "bg-white text-navy";
  return <mark className={`${c} box-decoration-clone px-[0.22em] py-[0.02em]`}>{children}</mark>;
}
