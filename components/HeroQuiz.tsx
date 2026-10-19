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
      <div className="mb-4 flex min-h-8 items-center justify-between text-sm text-white/60">
        <span className="num">{label}</span>
        {!isStart && !done && (
          <button type="button" onClick={back} className="font-medium text-white hover:underline">
            ← Zurück
          </button>
        )}
      </div>
      <Progress value={pct} />

      <div className="mt-8">
        {isStart && (
          <>
            <p className="font-display text-2xl font-bold sm:text-3xl">Was möchten Sie renovieren?</p>
            <p className="mt-2 text-white/60">In vier Klicks zur passenden Ansprechperson.</p>
            <ul className="mt-7 border-t border-white/15">
              {(Object.keys(PATHS) as PathId[]).map((id) => (
                <li key={id} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => {
                      setPath(id);
                      setStep(0);
                    }}
                    className="group flex min-h-18 w-full items-center gap-4 py-4 text-left"
                  >
                    <span className="flex-1">
                      <span className="block text-lg font-semibold">{PATHS[id].title}</span>
                      <span className="block text-sm text-white/55">{PATHS[id].sub}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center border border-white/25 transition group-hover:border-blue-bright group-hover:bg-blue-bright"
                    >
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {q && (
          <>
            <p className="font-display text-2xl font-bold sm:text-3xl">{q.q}</p>
            {q.hint && <p className="mt-2 text-white/60">{q.hint}</p>}
            <div className="mt-7 flex flex-wrap gap-2.5">
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
                className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-40"
              >
                Weiter
              </button>
            )}
          </>
        )}

        {isBad && (
          <>
            <p className="font-display text-2xl font-bold sm:text-3xl">Neues Bad in 3 Tagen</p>
            <p className="mt-3 leading-relaxed text-white/70">
              Fugenlose Bäder zum Festpreis – über unser System Mein Zauberbad. Planung in 3D, Umbau in der Regel in drei Tagen.
            </p>
            <a href={site.zauberbadUrl} target="_blank" rel="noopener" className="btn-primary mt-8 w-full">
              Weiter zu meinzauberbad.de ↗
            </a>
            <button type="button" onClick={() => setContact(true)} className="mt-4 w-full py-2 text-sm font-medium text-white/80 hover:text-white">
              Lieber direkt Rückruf anfordern
            </button>
          </>
        )}

        {isContact && (
          <form onSubmit={submit}>
            <p className="font-display text-2xl font-bold sm:text-3xl">Fast geschafft.</p>
            <p className="mt-2 text-white/60">
              Wir melden uns innerhalb von <span className="todo">[24 h]</span>.
            </p>
            <div className="mt-7 grid gap-4">
              <DarkField label="PLZ / Ort des Objekts" name="ort" autoComplete="postal-code" />
              <DarkField label="Name" name="name" autoComplete="name" required />
              <DarkField label="Telefon" name="telefon" type="tel" autoComplete="tel" required />
            </div>
            <button type="submit" className="btn-primary mt-7 w-full">
              Anfrage senden
            </button>
            <p className="mt-3 text-xs text-white/50">
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
            <span className="flex h-14 w-14 items-center justify-center bg-blue-bright text-2xl" aria-hidden="true">
              ✓
            </span>
            <p className="mt-6 font-display text-2xl font-bold sm:text-3xl">Danke! Ihre Anfrage ist da.</p>
            <p className="mt-2 text-white/70">
              <span className="todo">[Name Projektleiter]</span> ruft Sie zurück.
            </p>
            <button type="button" onClick={reset} className="btn-light mt-8">
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
    <label className="grid gap-1.5 text-sm font-medium text-white/75">
      {label}
      <input
        {...props}
        className="h-12 border border-white/20 bg-white/5 px-4 text-base text-white placeholder:text-white/40 focus:border-blue-bright focus:outline-none"
      />
    </label>
  );
}
