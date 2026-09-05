"use client";

import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const SEARCH_PROMPTS = [
  "Sydney, Australia",
  "Melbourne, Australia",
  "London, UK",
  "Dubai, UAE",
  "New York, USA",
  "Los Angeles, USA",
  "Tokyo, Japan",
  "Toronto, Canada",
];

export default function SearchBar({ className = "" }: { className?: string }) {
  const [query, setQuery] = useState("");
  const typed = useTypewriter(SEARCH_PROMPTS);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(
          query ? `/studios?city=${encodeURIComponent(query)}#results` : "/studios#listings"
        );
      }}
      className={`flex max-w-xl gap-2 ${className}`}
    >
      <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-lg transition-shadow focus-within:shadow-xl focus-within:ring-2 focus-within:ring-red/40 md:py-4">
        <MapPin size={18} className="shrink-0 text-ink/50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={typed}
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink/45 focus:outline-none md:text-base"
        />
      </div>
      <button
        type="submit"
        aria-label="Search"
        className="group grid shrink-0 cursor-pointer place-items-center rounded-full bg-red px-6 transition-all duration-200 hover:bg-red-dark active:scale-95"
      >
        <Search
          size={20}
          className="text-white transition-transform duration-200 group-hover:scale-110"
        />
      </button>
    </form>
  );
}
