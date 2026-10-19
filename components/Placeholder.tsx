/** Fläche für Fotos, die der Kunde noch liefert (bewusst sichtbar, damit sie nicht vergessen werden) */
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgb(26_43_60/0.05)_14px_15px)] bg-navy/5 p-6 text-center text-sm text-slate ${className}`}
    >
      <span className="max-w-60">{label}</span>
    </div>
  );
}
