"use client";

import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import GlowLink from "./GlowLink";

const POPULAR_CITIES = [
  "Sydney",
  "Melbourne",
  "London",
  "Dubai",
  "New York",
  "Los Angeles",
];

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

export default function Hero() {
  const [query, setQuery] = useState("");
  const typed = useTypewriter(SEARCH_PROMPTS);
  const router = useRouter();

  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink pt-24 md:min-h-[95vh] md:pt-28">
      <Image
        src="/header.png"
        alt="A man training on a Pilates reformer machine"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
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
          className="mt-6 max-w-sm text-sm text-white/85 md:text-base"
        >
          Reformer Pilates builds strength, mobility and core control —
          learn why men are doing it, and find a class near you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              query ? `/find-a-class?city=${encodeURIComponent(query)}` : "/find-a-class"
            );
          }}
          className="mt-8 flex max-w-xl gap-2"
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
            <GlowLink
              key={city}
              href={`/find-a-class?city=${encodeURIComponent(city)}`}
              className="text-sm text-white/85 transition-colors hover:text-white"
            >
              {city}
            </GlowLink>
          ))}
          <Link
            href="/find-a-class"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-red transition-colors hover:text-white"
          >
            View all cities
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {[
            { label: "List Your Studio", href: "/list-your-studio" },
            { label: "Buy Gear", href: "/shop" },
            { label: "Learn More", href: "/#why-broformer" },
          ].map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="group relative inline-flex overflow-hidden rounded-full border border-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:border-red"
            >
              <span className="absolute inset-0 -translate-x-full bg-red transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative">{pill.label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
