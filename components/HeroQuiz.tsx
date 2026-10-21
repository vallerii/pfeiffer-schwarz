"use client";

import { useState } from "react";
import { OptionButton, Progress, sendInquiry } from "./OptionButton";
import { site } from "@/lib/site";

type Step = { q: string; hint?: string; multi?: boolean; opts: string[] };
type PathId = "hotel" | "bau" | "bad" | "schaden";

const PATHS: Record<PathId, { title: string; sub: string; steps: Step[] }> = {
  hotel: {
    title: "Hotel",
    sub: "Zimmer, Bäder, Spa, Lobby",
    steps: [
      { q: "Was möchten Sie renovieren?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Zimmer", "Bäder", "Wellness & Spa", "Lobby / Gastro", "Komplett"] },
      { q: "Wie viele Zimmer betrifft es?", hint: "Eine grobe Schätzung reicht", opts: ["bis 20", "20–60", "60–150", "über 150"] },
      { q: "Wann soll es losgehen?", hint: "Wir planen um Ihre Belegung herum", opts: ["in 3 Monaten", "in 6 Monaten", "später", "noch offen"] },
    ],
  },
  bau: {
    title: "Wohnung, Haus oder Gewerbe",
    sub: "Fliesen, Maler, Trockenbau, Sanitär …",
    steps: [
      { q: "Welche Arbeiten brauchen Sie?", hint: "Mehrfachauswahl möglich", multi: true, opts: ["Fliesen", "Maler", "Trockenbau", "Innenausbau", "Putz & Estrich", "Sanitär", "Komplett"] },
      { q: "Um welches Objekt geht es?", opts: ["Wohnung", "Haus", "Büro", "Gewerbe"] },
      { q: "Wann soll es losgehen?", opts: ["sofort", "in 1–3 Monaten", "später", "noch offen"] },
    ],
  },
  bad: { title: "Bad in 3 Tagen", sub: "Fugenlos, Festpreis – Mein Zauberbad", steps: [] },
  schaden: {
    title: "Wasser- oder Brandschaden",
    sub: "Schnelle Hilfe, Abwicklung mit Versicherung",
    steps: [
      { q: "Was ist passiert?", opts: ["Wasserschaden", "Brandschaden", "Schimmel"] },
      { q: "Ist die Versicherung schon informiert?", hint: "Wir unterstützen bei der Abwicklung", opts: ["Ja", "Nein", "Weiß nicht"] },
    ],
  },
};

export function HeroQuiz() {
  const [path, setPath] = useState<PathId | null>(null);
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState<Record<string, string[]>>({});
  const [contact, setContact] = useState(false);
  const [done, setDone] = useState(false);

  const cfg = path ? PATHS[path] : null;
  const steps = cfg?.steps ?? [];
  const isStart = !path;
  const isBad = path === "bad" && !contact && !done;
  const isContact = !done && !!path && (contact || (path !== "bad" && step >= steps.length));
  const q = !isStart && !isBad && !isContact && !done ? steps[step] : null;
  const total = path ? steps.length + 2 : 5;
  const current = isStart ? 1 : done || isContact ? total : step + 2;
  const pct = done ? 100 : ((current - 1) / (total - 1)) * 100;
  const key = `${path}-${step}`;
  const picked = sel[key] ?? [];

  function pick(label: string) {
    if (!q) return;
    if (q.multi) {
      setSel({ ...sel, [key]: picked.includes(label) ? picked.filter((x) => x !== label) : [...picked, label] });
    } else {
      setSel({ ...sel, [key]: [label] });
      setStep(step + 1);
    }
  }
  function back() {
    if (contact && path === "bad") return setContact(false);
    if (path === "bad" || step === 0) {
      setPath(null);
      setStep(0);
      setContact(false);
      return;
    }
    setContact(false);
    setStep(step - 1);
  }
  function reset() {
    setPath(null);
    setStep(0);
    setSel({});
    setContact(false);
    setDone(false);
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await sendInquiry({ quelle: "Startseite-Quiz", bereich: path, antworten: sel, ...data });
    setDone(true);
  }

  const label = done ? "Fertig" : isBad ? "Bad in 3 Tagen" : `Schritt ${current} von ${total}`;

  return (
    <div className="text-white" aria-live="polite">
      {!isStart && (
        <>
      <div className="small mb-3 flex min-h-8 items-center justify-between text-white/75">
        <span className="num">{label}</span>
        {!isStart && !done && (
          <button type="button" onClick={back} className="font-semibold text-white underline">
            Zurück
          </button>
        )}
      </div>
      <Progress value={pct} />
        </>
      )}

      <div className={isStart ? "" : "mt-5"}>
        {isStart && (
          <>
            <p className="t-body font-semibold">Was möchten Sie renovieren?</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(Object.keys(PATHS) as PathId[]).map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => {
                      setPath(id);
                      setStep(0);
                    }}
                    className="group flex h-full w-full flex-col gap-1 bg-white p-3.5 text-left text-blue transition-colors duration-200 hover:bg-navy hover:text-white focus-visible:bg-navy focus-visible:text-white"
                  >
                    <span className="block t-body leading-tight font-semibold">{PATHS[id].title}</span>
                    <span className="small block text-ink-2 group-hover:text-white/80 group-focus-visible:text-white/80">{PATHS[id].sub}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {q && (
          <>
            <p className="t-lead leading-tight font-semibold">{q.q}</p>
            {q.hint && <p className="small mt-1.5 text-white/75">{q.hint}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              {q.opts.map((o) => (
                <OptionButton key={o} selected={picked.includes(o)} onClick={() => pick(o)}>
                  {o}
                </OptionButton>
              ))}
            </div>
            {q.multi && (
              <button
                type="button"
                disabled={picked.length === 0}
                onClick={() => setStep(step + 1)}
                className="btn-light mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40"
              >
                Weiter
              </button>
            )}
          </>
        )}

        {isBad && (
          <>
            <p className="t-lead leading-tight font-semibold">Neues Bad in 3 Tagen</p>
            <p className="mt-2 leading-snug text-white/85">
              Fugenlose Bäder zum Festpreis – über unser System Mein Zauberbad. Planung in 3D, Umbau in der Regel in drei Tagen.
            </p>
            <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-light mt-6 w-full">
              Weiter zu meinzauberbad.de ↗
            </a>
            <button type="button" onClick={() => setContact(true)} className="mt-2 w-full py-2 t-body font-semibold text-white underline">
              Lieber direkt Rückruf anfordern
            </button>
          </>
        )}

        {isContact && (
          <form onSubmit={submit}>
            <p className="t-lead leading-tight font-semibold">Fast geschafft.</p>
            <p className="small mt-1.5 text-white/80">
              Wir melden uns innerhalb von <span className="todo">[24 h]</span>.
            </p>
            <div className="mt-4 grid gap-3">
              <DarkField label="PLZ / Ort des Objekts" name="ort" autoComplete="postal-code" />
              <DarkField label="Name" name="name" autoComplete="name" required />
              <DarkField label="Telefon" name="telefon" type="tel" autoComplete="tel" required />
            </div>
            <button type="submit" className="btn-light mt-5 w-full">
              Anfrage senden
            </button>
            <p className="small mt-2 text-white/80">
              Mit dem Absenden stimmen Sie der{" "}
              <a href="/datenschutz" className="underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </form>
        )}

        {done && (
          <div className="py-6">
            <span className="flex h-12 w-12 items-center justify-center bg-white text-blue" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" /></svg>
            </span>
            <p className="mt-5 t-lead leading-tight font-semibold">Danke! Ihre Anfrage ist da.</p>
            <p className="mt-2 text-white/85">
              <span className="todo">[Name Projektleiter]</span> ruft Sie zurück.
            </p>
            <button type="button" onClick={reset} className="btn-light mt-6">
              Neue Anfrage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function DarkField({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="small grid gap-1 font-medium text-white/85">
      {label}
      <input
        {...props}
        className="h-11 bg-white px-3 text-base text-ink focus:outline-2 focus:outline-offset-2 focus:outline-white"
      />
    </label>
  );
}
