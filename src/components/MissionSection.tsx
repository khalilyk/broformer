import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoBlock from "./PhotoBlock";
import Reveal from "./Reveal";

export default function MissionSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            Why We Built This
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
            Discipline should be simple to start.
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink/70">
            <p>
              Broformer started with a simple observation: reformer Pilates
              does more for strength, mobility and mental discipline than
              almost anything else — but hardly any man tries it, because
              nothing about how it&apos;s marketed speaks to him.
            </p>
            <p>
              We didn&apos;t build this to sell a workout. We built it to
              give men an easy way in — a class that holds you accountable,
              a community that keeps you consistent, and a reason to
              actually show up for yourself every week.
            </p>
            <p>
              Because the hardest part of getting stronger was never the
              exercise. It was starting — and then not quitting on
              yourself.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-red transition-colors hover:text-ink"
          >
            Read Our Full Story
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl">
            <PhotoBlock
              label="A man committing to his training"
              glow="center"
              className="aspect-[4/5]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
