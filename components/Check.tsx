export function Check({ light = false }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-5 w-5 shrink-0 ${light ? "text-blue-bright" : "text-blue"}`}>
      <rect width="20" height="20" fill="currentColor" opacity={light ? 1 : 0.12} />
      <path d="m6 10.2 2.6 2.6L14 7.6" fill="none" stroke={light ? "#fff" : "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
