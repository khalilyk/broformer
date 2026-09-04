"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarCheck, TrendingUp, Users } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: Users,
    title: "Reach more men",
    description: "Get your classes in front of a global audience.",
  },
  {
    icon: CalendarCheck,
    title: "Fill more classes",
    description: "More visibility. More bookings. More movement.",
  },
  {
    icon: TrendingUp,
    title: "Join the movement",
    description: "Be part of a global mission to get 1,000,000 men moving.",
  },
  {
    icon: BadgeCheck,
    title: "Use the Broformer brand",
    description: "Run branded Broformer classes and stand out in your market.",
  },
];

export default function StudioCta() {
  return (
    <section id="for-studios" className="bg-ink py-20 md:py-28">
      <div className="container-x flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
        <Reveal className="lg:w-[30%] lg:shrink-0">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            For Studios
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl">
            Got men&apos;s classes?
            <br />
            <span className="text-red">Let&apos;s get them moving.</span>
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
            List your studio on Broformer and connect with thousands of men
            looking for reformer classes.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              id="list-your-studio"
              href="#list-your-studio"
              className="rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink active:scale-95"
            >
              List Your Studio
            </a>
            <a
              href="#find-a-class"
              className="rounded-full border border-white/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink active:scale-95"
            >
              Start A Broformer Class
            </a>
          </div>
        </Reveal>

        <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-red/40 text-red transition-colors duration-300 hover:bg-red hover:text-white">
                  <point.icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                  {point.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
