"use client";

import { useState } from "react";

/** SEO-Text: vollständig im HTML, eingeklappt nur per CSS */
export function ReadMore({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`relative overflow-hidden transition-[max-height] duration-500 ${open ? "max-h-[4000px]" : "max-h-72"}`}>
        {children}
        {!open && <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-weiss to-transparent" />}
      </div>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="link-arrow mt-4">
        {open ? "Weniger anzeigen" : "Weiterlesen"}
      </button>
    </div>
  );
}
