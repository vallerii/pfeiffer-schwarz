"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FLOORS = [4, 3, 2, 1];
const ROOMS = 6;
const WEEKS = 8; // zwei Wochen je Etage

/**
 * Beispielplan: ein Haus mit vier Etagen à sechs Zimmern. Ein Foto liegt über allen Zimmern;
 * die Etage, die gerade renoviert wird, trägt das blaue Türschild – der Rest bleibt buchbar.
 */
export function OccupancyBoard() {
  const [week, setWeek] = useState(3);
  const board = useRef<HTMLDivElement>(null);
  // Signatur: der Plan öffnet sich einmal wie ein Verschluss, sobald er ins Bild kommt
  useEffect(() => {
    const el = board.current;
    const watch = el?.parentElement; // clip-path verdeckt das Ziel selbst; beobachtet wird der Rahmen
    if (!el || !watch) return;
    if (!("IntersectionObserver" in window)) return void el.classList.add("in");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(watch);
    return () => io.disconnect();
  }, []);
  const floorInWork = FLOORS[FLOORS.length - 1 - Math.floor((week - 1) / 2)]; // Woche 1–2: Etage 1, …
  const done = FLOORS.filter((f) => f < floorInWork).length;
  const bookable = FLOORS.length * ROOMS - ROOMS;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-8">
        <div
          ref={board}
          data-shutter
          className="grid grid-cols-6 overflow-hidden [container-type:inline-size]"
          style={{ ["--g" as string]: "clamp(5px, 0.55vw, 8px)", gap: "var(--g)" }}
          role="img"
          aria-label={`Beispielplan: Etage ${floorInWork} wird renoviert, ${bookable} von ${FLOORS.length * ROOMS} Zimmern bleiben buchbar.`}
        >
          {FLOORS.map((floor, row) =>
            Array.from({ length: ROOMS }, (_, col) => {
              const working = floor === floorInWork;
              const fresh = floor < floorInWork;
              const nr = `${floor}${String(col + 1).padStart(2, "0")}`; // Zimmernummer, keine Aufzählung – taste-skill-ignore
              return (
                <div key={nr} className="relative aspect-square overflow-hidden bg-paper">
                  {!working && (
                    <div
                      className="absolute"
                      style={{
                        width: "100cqw",
                        height: "calc((100cqw - 5 * var(--g)) / 6 * 4 + 3 * var(--g))",
                        left: `calc(-${col} * ((100cqw - 5 * var(--g)) / 6 + var(--g)))`,
                        top: `calc(-${row} * ((100cqw - 5 * var(--g)) / 6 + var(--g)))`,
                      }}
                    >
                      <Image
                        src="/img/hotel-zimmer.jpg"
                        alt=""
                        fill
                        sizes="66vw"
                        className={`object-cover transition-[filter] duration-500 ${fresh ? "" : "opacity-60 grayscale"}`}
                      />
                    </div>
                  )}
                  {working && (
                    <div className="absolute inset-0 flex flex-col justify-between bg-blue p-2 text-white sm:p-3">
                      {col === 0 ? (
                        <span className="small leading-tight font-semibold sm:t-body">Bitte nicht stören</span>
                      ) : (
                        <span aria-hidden="true" className="mx-auto mt-1 h-3 w-3 rounded-full bg-white sm:h-4 sm:w-4" />
                      )}
                      <span className="num small font-medium">{nr}</span>
                    </div>
                  )}
                  {!working && (
                    <span className="num absolute bottom-1 left-1 bg-white px-1.5 small font-medium text-ink">{nr}</span>
                  )}
                </div>
              );
            }),
          )}
        </div>
        <p className="small mt-3 text-slate">
          Beispielplan eines Hauses mit 24 Zimmern. Farbig: fertig renoviert, grau: noch nicht renoviert, blau: in Arbeit. Alle anderen Zimmer bleiben belegt.
        </p>
      </div>

      <div className="lg:col-span-4" data-reveal>
        <h2 id="hotel-title" className="h2">
          Ihr Hotel bleibt offen.
        </h2>
        <p className="mt-5 text-ink-2">
          Wir renovieren etagenweise. Gesperrt ist nur, was gerade in Arbeit ist – mit Einsatzleiter vor Ort und allen Gewerken im
          eigenen Team.
        </p>
        <div className="mt-8">
          <p id="woche-label" className="font-semibold">
            Bauzeit: Woche {week} von {WEEKS}
          </p>
          <div role="group" aria-labelledby="woche-label" className="mt-3 grid grid-cols-8 gap-1.5">
            {Array.from({ length: WEEKS }, (_, i) => i + 1).map((w) => (
              <button
                key={w}
                type="button"
                aria-pressed={w === week}
                aria-label={`Woche ${w}`}
                onClick={() => setWeek(w)}
                className={`num h-11 t-body font-semibold transition-colors ${w === week ? "bg-blue text-white" : "bg-paper text-ink hover:bg-blue-tint"}`}
              >
                {w}
              </button>
            ))}
          </div>
          <p className="mt-5 t-lead leading-snug font-semibold" aria-live="polite">
            <span className="num">{bookable}</span> von 24 Zimmern buchbar. Etage {floorInWork} in Arbeit
            {done > 0 && (
              <>
                , <span className="num">{done}</span> {done === 1 ? "Etage" : "Etagen"} fertig
              </>
            )}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
