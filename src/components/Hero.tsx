"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowGroup from "./GlowGroup";
import SearchBar from "./SearchBar";

const POPULAR_CITIES = [
  "Sydney",
  "Melbourne",
  "London",
  "Dubai",
  "New York",
  "Los Angeles",
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink pt-24 md:min-h-[95vh] md:pt-28">
      <header className="contents">
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
            Reformer Pilates builds strength, mobility and core control.
            Learn why men are doing it, and find a class near you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <SearchBar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Popular Cities
            </span>
            <GlowGroup className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
              {POPULAR_CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/studios?city=${encodeURIComponent(city)}#results`}
                  className="text-sm text-white/85 transition-colors hover:text-white"
                >
                  {city}
                </Link>
              ))}
            </GlowGroup>
            <Link
              href="/studios#listings"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-red transition-colors hover:text-white"
            >
              View all cities
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </header>

      <motion.button
        type="button"
        aria-label="Scroll down"
        onClick={() =>
          document.getElementById("the-movement")?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.7 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
