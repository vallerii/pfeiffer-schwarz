/** Fläche für Fotos, die der Kunde noch liefert: leerer Fliesenspiegel, bewusst sichtbar. `seamless` für fugenlose Flächen. */
export function Placeholder({ label, className = "", seamless = false }: { label: string; className?: string; seamless?: boolean }) {
  const grid = seamless
    ? "bg-gradient-to-br from-kalk-tief to-fuge"
    : "bg-kalk-tief bg-[linear-gradient(var(--color-fuge)_1px,transparent_1px),linear-gradient(90deg,var(--color-fuge)_1px,transparent_1px)] bg-[size:48px_48px]";
  return (
    <div className={`flex items-center justify-center p-6 text-center text-[15px] text-stein ${grid} ${className}`}>
      <span className={`max-w-60 px-3 py-1 ${seamless ? "" : "bg-kalk-tief"}`}>{label}</span>
    </div>
  );
}
