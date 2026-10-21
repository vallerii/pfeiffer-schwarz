/** Fläche für Fotos, die der Kunde noch liefert: bewusst sichtbar, damit sie nicht vergessen werden */
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-paper p-6 text-center text-[14px] text-slate ${className}`}>
      <span className="max-w-60">{label}</span>
    </div>
  );
}
