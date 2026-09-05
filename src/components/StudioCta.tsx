"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarCheck, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import PhotoBlock from "./PhotoBlock";
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
      <div className="container-x">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
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
          </Reveal>

          <div className="grid flex-1 grid-cols-2 gap-5 lg:grid-cols-4">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group cursor-default"
                >
                  <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-300 group-hover:ring-red/40 group-hover:shadow-[0_12px_30px_-8px_rgba(227,30,36,0.35)]">
                    <PhotoBlock
                      label={point.title}
                      glow="center"
                      icon={point.icon}
                      className="aspect-square transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                    {point.description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <Link
            href="/list-your-studio"
            className="block w-full rounded-full bg-red px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink active:scale-95"
          >
            List Your Studio
          </Link>
          <p className="mt-3 text-center text-xs text-white/40">
            Wherever you are — we welcome studios anywhere in the world.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
