import type { Metadata } from "next";
import { Globe2, Heart, Target } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About: Broformer",
  description:
    "Broformer is the global directory and movement connecting men with reformer Pilates studios worldwide.",
};

const VALUES = [
  {
    icon: Target,
    title: "Results, not trends",
    description:
      "We talk about reformer Pilates the way men actually think about training: strength, mobility, performance, recovery.",
  },
  {
    icon: Globe2,
    title: "A global directory",
    description:
      "Wherever you're travelling or moving to, Broformer helps you find a men's-friendly reformer class in minutes.",
  },
  {
    icon: Heart,
    title: "Built with studios",
    description:
      "We work directly with studio owners and instructors to make men's classes easier to run and easier to fill.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About Broformer"
        title="The global home of men's reformer Pilates."
        subtitle="We started Broformer because too many men were missing out on one of the most effective forms of training there is, simply because nobody had made the case for it."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <PhotoBlock label="A man training on a reformer machine" glow="center" className="aspect-[4/5]" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Reformer Pilates, repositioned.
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/60">
              <p>
                Reformer Pilates builds strength, mobility and core control
                better than almost anything else, but the way it&apos;s
                marketed rarely speaks to men. Broformer exists to close
                that gap.
              </p>
              <p>
                We built a directory that helps men find studios and
                classes that welcome them, and we built resources that
                help studios attract, engage and retain more men in
                reformer classes.
              </p>
              <p>
                It&apos;s the same effective training. We&apos;re just
                making sure more men know it&apos;s for them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              What We Believe
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              How we operate.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-red/30 text-red">
                    <value.icon size={28} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-24">
        <div className="container-x text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
              Our Goal
            </span>
            <p className="mt-3 font-display text-5xl text-white sm:text-6xl">
              1,000,000
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Men Moving Worldwide
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
