"use client";

export function OptionButton({
  selected,
  onClick,
  children,
  tone = "dark",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const base =
    "inline-flex min-h-11 items-center px-4 t-body font-medium transition-colors duration-150";
  const styles =
    tone === "dark"
      ? selected
        ? "bg-white text-blue"
        : "bg-white/12 text-white hover:bg-white/25"
      : selected
        ? "bg-blue text-white"
        : "bg-paper text-ink hover:bg-blue-tint";
  return (
    <button type="button" aria-pressed={selected} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

export function Progress({ value, tone = "dark" }: { value: number; tone?: "dark" | "light" }) {
  return (
    <div className={`h-1.5 overflow-hidden ${tone === "dark" ? "bg-white/20" : "bg-paper"}`}>
      <div
        className={`h-full transition-[width] duration-500 ease-(--ease-out-soft) ${tone === "dark" ? "bg-white" : "bg-blue"}`}
        style={{ width: `${Math.max(4, value)}%` }}
      />
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
