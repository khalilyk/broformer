"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BENEFITS } from "@/lib/benefits";
import Reveal from "./Reveal";

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

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-6">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.slug} delay={i * 0.05} className="h-full">
              <Link href={`/benefits/${benefit.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex h-full cursor-pointer flex-col items-center rounded-2xl bg-cream px-5 py-8 text-center shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 group-hover:shadow-lg"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full border border-red/30 bg-paper text-red transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white">
                    <benefit.icon
                      size={34}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <h3 className="mt-5 text-base font-bold uppercase tracking-[0.1em] text-ink md:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {benefit.tagline}
                  </p>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
