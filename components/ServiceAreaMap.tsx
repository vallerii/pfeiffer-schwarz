// Schematische Karte: Orte relativ zu Bad Laasphe (1 km ≈ 6 px). Für den Livegang ggf. durch eine echte Karte ersetzen.
const ORIGIN = { lat: 50.93, lon: 8.42 };
export const TOWNS: { name: string; lat: number; lon: number; side?: "left" | "right" }[] = [
  { name: "Bad Berleburg", lat: 51.05, lon: 8.39 },
  { name: "Erndtebrück", lat: 50.99, lon: 8.25, side: "right" },
  { name: "Hilchenbach", lat: 50.99, lon: 8.11 },
  { name: "Kreuztal", lat: 50.96, lon: 7.99 },
  { name: "Netphen", lat: 50.92, lon: 8.1 },
  { name: "Siegen", lat: 50.87, lon: 8.02 },
  { name: "Biedenkopf", lat: 50.91, lon: 8.53 },
  { name: "Marburg", lat: 50.81, lon: 8.77 },
  { name: "Dillenburg", lat: 50.74, lon: 8.29 },
];

const PX = 6;
const W = 460;
const H = 400;
const CX = 250;
const CY = 180;
const xy = (lat: number, lon: number) => [CX + (lon - ORIGIN.lon) * 70 * PX, CY + (ORIGIN.lat - lat) * 111 * PX];

export function ServiceAreaMap() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Einzugsgebiet rund um Bad Laasphe" className="block h-auto w-full max-w-full">
      {[10, 20, 30].map((km) => (
        <g key={km}>
          <circle cx={CX} cy={CY} r={km * PX} fill="none" stroke="var(--color-tanne)" strokeOpacity={0.14} strokeDasharray={km === 30 ? "4 6" : undefined} />
          <text x={CX + km * PX * 0.7 + 4} y={CY - km * PX * 0.7 - 4} fontSize="11" fill="var(--color-stein)">
            {km} km
          </text>
        </g>
      ))}
      <circle cx={CX} cy={CY} r={20 * PX} fill="var(--color-messing-dunkel)" fillOpacity={0.05} />
      {TOWNS.map((t) => {
        const [x, y] = xy(t.lat, t.lon);
        const left = t.side ? t.side === "left" : x < CX - 20;
        return (
          <g key={t.name}>
            <circle cx={x} cy={y} r={4.5} fill="var(--color-tanne)" />
            <text x={left ? x - 9 : x + 9} y={y + 4} fontSize="13" fontWeight={500} fill="var(--color-schiefer)" textAnchor={left ? "end" : "start"}>
              {t.name}
            </text>
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r={14} fill="var(--color-messing-dunkel)" fillOpacity={0.2} />
      <circle cx={CX} cy={CY} r={7} fill="var(--color-messing-dunkel)" />
      <text x={CX + 14} y={CY - 12} fontSize="14" fontWeight={700} fill="var(--color-messing-dunkel)">
        Bad Laasphe
      </text>
    </svg>
  );
}
