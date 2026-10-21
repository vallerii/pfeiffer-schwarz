"use client";

export function OptionButton({
  selected,
  onClick,
  children,
  tone = "light",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const base =
    "inline-flex min-h-12 items-center gap-2 rounded-(--radius-kante) border px-5 text-[16px] font-medium transition-colors duration-150";
  const styles =
    tone === "dark"
      ? selected
        ? "border-messing bg-messing text-tanne-tief"
        : "border-weiss/25 text-weiss hover:border-weiss/70"
      : selected
        ? "border-tanne bg-tanne text-weiss"
        : "border-fuge bg-weiss text-schiefer hover:border-tanne";
  return (
    <button type="button" aria-pressed={selected} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

/** Fortschritt als Reihe kleiner Kacheln: eine Kachel pro Schritt */
export function Progress({ current, total, tone = "light" }: { current: number; total: number; tone?: "dark" | "light" }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 flex-1 transition-colors duration-300 ${
            i < current ? (tone === "dark" ? "bg-messing" : "bg-tanne") : tone === "dark" ? "bg-weiss/15" : "bg-fuge"
          }`}
        />
      ))}
    </div>
  );
}

export async function sendInquiry(payload: Record<string, unknown>) {
  try {
    await fetch("/api/anfrage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    /* Formular zeigt trotzdem die Bestätigung; Fehlerbehandlung bei Anbindung ergänzen */
  }
}
