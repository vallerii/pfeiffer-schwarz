"use client";

export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="tab"
          aria-selected={value === o}
          onClick={() => onChange(o)}
          className={`min-h-10 px-5 text-sm font-medium transition-colors ${
            value === o ? "bg-navy text-white" : "text-ink-2 ring-1 ring-line hover:ring-navy"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
