"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import PhotoBlock from "./PhotoBlock";
import Reveal from "./Reveal";

const TIPS = [
  {
    n: "1",
    slug: "speak-their-language",
    title: "Speak their language",
    description:
      "Use messaging that resonates with men. Focus on strength, performance and results.",
  },
  {
    n: "2",
    slug: "create-mens-classes",
    title: "Create men's classes",
    description:
      "Dedicated men's classes remove barriers and build community. Consistency is key.",
  },
  {
    n: "3",
    slug: "make-it-welcoming",
    title: "Make it welcoming",
    description:
      "Small changes in your space, communication and team can make a big difference.",
  },
  {
    n: "4",
    slug: "leverage-community",
    title: "Leverage community",
    description:
      "Encourage referrals, share transformations and build a men's community.",
  },
];

export default function StudioTips() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    scrollerRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section id="tips-for-studios" className="bg-cream py-20 md:py-28">
      <div className="container-x flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <Reveal className="lg:w-72 lg:shrink-0">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Tips For Studios
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            Bring more men through your doors.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Simple strategies that help studios attract, engage and retain
            more men in reformer Pilates classes.
          </p>
          <Link
            href="/journal"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-red"
          >
            See All Tips
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="relative flex-1">
          <div
            ref={scrollerRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible"
          >
            {TIPS.map((tip, i) => (
              <Reveal
                key={tip.n}
                delay={i * 0.08}
                className="h-full w-[68vw] shrink-0 snap-start sm:w-[40vw] lg:w-auto"
              >
                <Link
                  href={`/journal/${tip.slug}`}
                  className="group flex h-full cursor-pointer flex-col transition-transform duration-300 ease-out hover:-translate-y-1.5"
                >
                  <div className="overflow-hidden rounded-2xl ring-1 ring-transparent transition-shadow duration-300 group-hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.25)] group-hover:ring-ink/5">
                    <PhotoBlock
                      label={`Studio tip ${tip.n}: ${tip.title}`}
                      glow="top"
                      className="aspect-[3/4] transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-4 text-sm font-bold text-ink">
                      {tip.n}. {tip.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                      {tip.description}
                    </p>
                    <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-xs font-bold uppercase tracking-[0.08em] text-red">
                      Read more
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <button
            onClick={scrollNext}
            aria-label="Next tips"
            className="absolute right-0 top-1/3 hidden h-12 w-12 -translate-y-1/2 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-ink/15 bg-cream text-ink shadow-md transition-all duration-200 hover:bg-ink hover:text-white lg:flex"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
