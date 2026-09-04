"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  Dumbbell,
  Footprints,
  Heart,
  Hourglass,
  PersonStanding,
  Target,
  Move,
} from "lucide-react";
import Reveal from "./Reveal";

const BENEFITS = [
  {
    icon: Dumbbell,
    title: "Strength",
    description: "Build functional strength that carries over to everything.",
  },
  {
    icon: Move,
    title: "Mobility",
    description: "Improve mobility and flexibility where men need it most.",
  },
  {
    icon: Target,
    title: "Core",
    description: "A stronger core for better posture, performance and control.",
  },
  {
    icon: Accessibility,
    title: "Flexibility",
    description: "Move better, feel better and do more of what you love.",
  },
  {
    icon: Footprints,
    title: "Sport",
    description: "Better performance, less risk and faster recovery for your sport.",
  },
  {
    icon: Heart,
    title: "Sex",
    description: "Stronger hips, better endurance, more confidence. No further questions.",
  },
  {
    icon: PersonStanding,
    title: "Posture",
    description: "Stand taller, move better and get rid of the aches.",
  },
  {
    icon: Hourglass,
    title: "Longevity",
    description: "Stay strong, mobile and independent for years to come.",
  },
];

export default function WhySection() {
  return (
    <section id="why-broformer" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Why Men Do Broformer
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl md:text-5xl">
            Stronger in Body. Better in Life.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-4 lg:gap-x-10 lg:gap-y-16">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex cursor-default flex-col items-center text-center"
              >
                <span className="grid h-24 w-24 place-items-center rounded-full border border-red/30 text-red transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white">
                  <benefit.icon
                    size={40}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
                <h3 className="mt-5 text-base font-bold uppercase tracking-[0.1em] text-ink md:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {benefit.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
