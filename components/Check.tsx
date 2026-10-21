/** Haken in Messing – ohne Kasten, damit Listen ruhig bleiben */
export function Check({ light = false }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`mt-[0.2em] h-[1.05em] w-[1.05em] shrink-0 ${light ? "text-messing" : "text-messing-dunkel"}`}>
      <path d="m3.5 10.5 4.2 4.2L16.5 5.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}
