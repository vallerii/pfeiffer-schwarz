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
          className={`min-h-11 rounded-(--radius-kante) px-5 text-[15px] font-medium transition-colors ${
            value === o ? "bg-tanne text-weiss" : "bg-weiss text-schiefer-2 ring-1 ring-fuge hover:ring-tanne"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
