"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MEN_MOVING = 24;
const GOAL = 1_000_000;

function formatCounter(n: number) {
  const padded = Math.round(n).toString().padStart(6, "0");
  return `${padded.slice(0, 3)},${padded.slice(3)}`;
}

function Counter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("000,000");
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, MEN_MOVING, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(formatCounter(v)),
    });
    return () => controls.stop();
  }, [inView, count]);

  return (
    <span ref={ref} className="font-display text-5xl tabular-nums text-red md:text-6xl">
      {display}
    </span>
  );
}

export default function MovementBar() {
  return (
    <section id="the-movement" className="border-y border-white/10 bg-charcoal py-10 md:py-12">
      <div className="container-x flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-red/40 text-red">
            <Globe size={22} strokeWidth={1.5} />
          </span>
          <p className="leading-tight">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              The Movement
            </span>
            <span className="font-display text-xl uppercase text-white md:text-2xl">
              More Men. <span className="text-red">More Movement.</span>
            </span>
          </p>
        </motion.div>

        <div className="hidden h-14 w-px bg-white/15 md:block" />

        <div className="flex items-center gap-4">
          <Counter />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Men
            <br />
            Moving
          </span>
        </div>

        <div className="hidden h-14 w-px bg-white/15 md:block" />

        <motion.p
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="leading-tight"
        >
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Our Goal
          </span>
          <span className="text-lg text-white md:text-xl">
            {GOAL.toLocaleString()} men moving worldwide.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
