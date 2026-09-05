"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AccordionItem({
  q,
  a,
  dark = false,
}: {
  q: string;
  a: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl px-5 py-4 shadow-sm transition-colors duration-300 ${
        dark ? "bg-white/5 ring-1 ring-white/10" : "bg-cream ring-1 ring-ink/5"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
      >
        <span className={`text-sm font-bold ${dark ? "text-white" : "text-ink"}`}>
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`mt-0.5 shrink-0 text-red transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`mt-2 text-[13px] leading-relaxed ${
              dark ? "text-white/60" : "text-ink/60"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
