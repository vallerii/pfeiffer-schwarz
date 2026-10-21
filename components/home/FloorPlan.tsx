/**
 * Schema statt Erklärtext: drei Etagen eines Hotels während der Renovierung.
 * Blau wie das Türschild „Bitte nicht stören“ = gerade in Arbeit; alles andere bleibt buchbar.
 */
const FLOORS = [
  { name: "3. Etage", state: "buchbar, Renovierung folgt", cls: "bg-line" },
  { name: "2. Etage", state: "in Arbeit, gesperrt", cls: "bg-blue", working: true },
  { name: "1. Etage", state: "fertig und wieder buchbar", cls: "bg-blue-pale" },
];

export function FloorPlan() {
  return (
    <figure aria-label="Beispiel: Renovierung Etage für Etage">
      <ul className="space-y-2">
        {FLOORS.map((f) => (
          <li key={f.name} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-center gap-4">
            <span className="grid grid-cols-6 gap-1" aria-hidden="true">
              {Array.from({ length: 6 }, (_, i) => (
                <span key={i} className={`relative aspect-square rounded-[4px] ${f.cls}`}>
                  {f.working && <span className="absolute top-[18%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white" />}
                </span>
              ))}
            </span>
            <span className="small leading-tight">
              <span className="block font-semibold text-ink">{f.name}</span>
              <span className={f.working ? "font-medium text-blue" : "text-slate"}>{f.state}</span>
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="small mt-4 text-slate">Beispiel: Gäste wohnen weiter, nur eine Etage ist gesperrt.</figcaption>
    </figure>
  );
}
