"use client";

import { useState } from "react";
import { OptionButton, Progress, sendInquiry } from "./OptionButton";
import { site } from "@/lib/site";

export type EstimateStep = { q: string; hint?: string; opts: string[]; multi?: boolean };
export type ContactField = { name: string; label: string; type?: string; autoComplete?: string; required?: boolean };

const DEFAULT_FIELDS: ContactField[] = [
  { name: "ort", label: "PLZ / Ort", autoComplete: "postal-code" },
  { name: "name", label: "Name", autoComplete: "name", required: true },
  { name: "kontakt", label: "Telefon oder E-Mail", required: true },
];

type Props = {
  steps: EstimateStep[];
  source: string;
  title?: string;
  fields?: ContactField[];
  uploads?: boolean;
  contactTitle?: string;
  contactHint?: string;
  submitLabel?: string;
  responseTime?: string;
  tone?: "light" | "dark";
};

/** Mehrstufige Anfrage: Fragen → (Fotos &) Kontakt → Bestätigung. Für Leistungsseiten (hell) und das Hotel-Quiz (dunkel). */
export function EstimateForm({
  steps,
  source,
  title = "Kostenlose Einschätzung",
  fields = DEFAULT_FIELDS,
  uploads = true,
  contactTitle = "Fotos & Kontakt",
  contactHint = "Mit Fotos können wir den Aufwand schon vorab einschätzen.",
  submitLabel = "Einschätzung anfordern",
  responseTime = "[48 h]",
  tone = "light",
}: Props) {
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState<Record<number, string[]>>({});
  const [files, setFiles] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const dark = tone === "dark";
  const total = steps.length + 1;
  const isContact = !done && step >= steps.length;
  const q = !done && !isContact ? steps[step] : null;
  const picked = sel[step] ?? [];
  const current = done ? total : step + 1;
  const pct = done ? 100 : ((current - 1) / total) * 100;
  const summary = steps
    .map((_, i) => sel[i]?.join(", "))
    .filter(Boolean)
    .join(" · ");

  const c = {
    title: dark ? "text-white" : "text-navy",
    muted: dark ? "text-white/60" : "text-slate",
    body: dark ? "text-white/75" : "text-ink-2",
    line: dark ? "border-white/15" : "border-line",
    link: dark ? "text-white" : "text-navy",
  };

  function pick(label: string) {
    if (!q) return;
    if (q.multi) {
      setSel({ ...sel, [step]: picked.includes(label) ? picked.filter((x) => x !== label) : [...picked, label] });
    } else {
      setSel({ ...sel, [step]: [label] });
      setStep(step + 1);
    }
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries([...new FormData(e.currentTarget)].filter(([, v]) => typeof v === "string"));
    const answers = Object.fromEntries(steps.map((s, i) => [s.q, sel[i] ?? []]));
    await sendInquiry({ quelle: source, antworten: answers, fotos: files, ...data });
    setDone(true);
  }

  function reset() {
    setStep(0);
    setSel({});
    setFiles([]);
    setDone(false);
  }

  return (
    <div aria-live="polite">
      <p className={`font-display text-xl font-bold ${c.title}`}>{title}</p>
      <div className={`mt-1 flex min-h-7 items-center justify-between gap-4 text-sm ${c.muted}`}>
        <span className="num">{done ? "Fertig" : `Schritt ${current} von ${total}`}</span>
        {step > 0 && !done && (
          <button type="button" onClick={() => setStep(step - 1)} className={`font-medium hover:underline ${c.link}`}>
            ← Zurück
          </button>
        )}
      </div>
      <div className="mt-3">
        <Progress value={pct} tone={tone} />
      </div>

      <div className="mt-8 min-h-72">
        {q && (
          <>
            <p className={`font-display text-2xl font-bold ${c.title}`}>{q.q}</p>
            {q.hint && <p className={`mt-1.5 ${c.muted}`}>{q.hint}</p>}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {q.opts.map((o) => (
                <OptionButton key={o} tone={tone} selected={picked.includes(o)} onClick={() => pick(o)}>
                  {o}
                </OptionButton>
              ))}
            </div>
            {q.multi && (
              <button
                type="button"
                disabled={picked.length === 0}
                onClick={() => setStep(step + 1)}
                className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-40"
              >
                Weiter
              </button>
            )}
          </>
        )}

        {isContact && (
          <form onSubmit={submit} className="grid gap-4">
            <p className={`font-display text-2xl font-bold ${c.title}`}>{contactTitle}</p>
            {contactHint && <p className={`-mt-2 ${c.muted}`}>{contactHint}</p>}
            {uploads && (
              <label
                className={`flex cursor-pointer items-center gap-4 border border-dashed px-5 py-4 ${
                  dark ? "border-white/30 hover:border-blue-bright" : "border-navy/30 hover:border-blue"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center ${dark ? "bg-white/10 text-white" : "bg-blue-tint text-blue"}`}
                  aria-hidden="true"
                >
                  ↑
                </span>
                <span className="text-[15px]">
                  <span className={`block font-semibold ${c.title}`}>
                    {files.length ? `${files.length} Foto(s) ausgewählt` : "Fotos hochladen (optional)"}
                  </span>
                  <span className={`text-sm ${c.muted}`}>JPG, PNG · bis 5 Bilder</span>
                </span>
                <input
                  type="file"
                  name="fotos"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => setFiles([...(e.target.files ?? [])].slice(0, 5).map((f) => f.name))}
                />
              </label>
            )}
            {fields.map(({ label, ...f }) => (
              <label key={f.name} className={`grid gap-1.5 text-sm font-medium ${c.body}`}>
                {label}
                <input
                  {...f}
                  className={`h-12 border px-4 text-base focus:outline-none ${
                    dark
                      ? "border-white/20 bg-white/5 text-white focus:border-blue-bright"
                      : "border-line bg-white text-ink focus:border-blue"
                  }`}
                />
              </label>
            ))}
            <button type="submit" className="btn-primary mt-2 w-full">
              {submitLabel}
            </button>
            <p className={`text-xs ${c.muted}`}>
              Antwort in <span className="todo">{responseTime}</span> · unverbindlich ·{" "}
              <a href="/datenschutz" className="underline">
                Datenschutz
              </a>
            </p>
          </form>
        )}

        {done && (
          <div>
            <span className="flex h-14 w-14 items-center justify-center bg-blue-bright text-2xl text-white" aria-hidden="true">
              ✓
            </span>
            <p className={`mt-6 font-display text-2xl font-bold ${c.title}`}>Danke, wir melden uns!</p>
            <p className={`mt-2 ${c.body}`}>Ihre Angaben: {summary}</p>
            <p className={`mt-1 ${c.body}`}>Nächster Schritt: Rückruf und Termin vor Ort.</p>
            <button type="button" className={`mt-8 ${dark ? "btn-light" : "btn-ghost"}`} onClick={reset}>
              Neue Anfrage
            </button>
          </div>
        )}
      </div>

      <p className={`mt-6 border-t pt-5 text-sm ${c.line} ${c.body}`}>
        Lieber anrufen?{" "}
        <a href={site.phoneHref} className={`num font-semibold ${dark ? "text-white" : "text-blue"}`}>
          {site.phone}
        </a>
      </p>
    </div>
  );
}
