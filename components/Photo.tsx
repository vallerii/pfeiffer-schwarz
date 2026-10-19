import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Bild, das seinen Container füllt. Hintergrund in Navy-Ton, solange das Foto lädt oder fehlt. */
export function Photo({ src, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-navy-soft/15 ${className}`}>
      <Image
        src={`/img/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
