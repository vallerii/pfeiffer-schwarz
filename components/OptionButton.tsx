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
    "inline-flex min-h-12 items-center border px-5 text-[15px] font-medium transition-colors duration-150";
  const styles =
    tone === "dark"
      ? selected
        ? "border-white bg-white text-navy"
        : "border-white/25 text-white hover:border-white/70"
      : selected
        ? "border-navy bg-navy text-white"
        : "border-line text-ink hover:border-navy";
  return (
    <button type="button" aria-pressed={selected} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

export function Progress({ value, tone = "dark" }: { value: number; tone?: "dark" | "light" }) {
  return (
    <div className={`h-1 overflow-hidden ${tone === "dark" ? "bg-white/15" : "bg-line"}`}>
      <div
        className="h-full bg-blue-bright transition-[width] duration-500 ease-(--ease-out-soft)"
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
