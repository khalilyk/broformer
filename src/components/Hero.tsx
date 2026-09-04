"use client";

import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import PhotoBlock from "./PhotoBlock";

const POPULAR_CITIES = [
  "Sydney",
  "Melbourne",
  "London",
  "Dubai",
  "New York",
  "Los Angeles",
];

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink pt-16 md:min-h-[95vh] md:pt-20">
      <PhotoBlock
        label="A man training on a Pilates reformer machine"
        glow="bottom"
        className="absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/40 to-black/10" />

      <div className="container-x relative w-full pb-14 pt-24 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[15vw] uppercase leading-[0.9] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Stronger
          <br />
          Everywhere.
          <br />
          <span className="text-red">Built for Men.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-sm text-lg text-white/85 md:text-xl"
        >
          Find men&apos;s reformer classes around the world.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex max-w-xl gap-2"
        >
          <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-lg transition-shadow focus-within:shadow-xl focus-within:ring-2 focus-within:ring-red/40 md:py-4">
            <MapPin size={18} className="shrink-0 text-ink/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Enter suburb, city or postcode"
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
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Popular Cities
          </span>
          {POPULAR_CITIES.map((city) => (
            <a
              key={city}
              href="#find-a-class"
              className="underline-hover text-sm text-white/85 transition-colors hover:text-white"
            >
              {city}
            </a>
          ))}
          <a
            href="#find-a-class"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-red transition-colors hover:text-white"
          >
            View all cities
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
