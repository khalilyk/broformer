import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-14 pt-32 md:pb-20 md:pt-40">
      <Image
        src="/header.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/50" />

      <div className="container-x">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
            {eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
