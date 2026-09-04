import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function GearCta() {
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/bros.png"
              alt="Men training together on reformer machines"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
            <div className="absolute inset-0 noise-texture mix-blend-overlay opacity-40" />

            <div className="relative flex flex-col items-center px-6 py-16 text-center sm:px-10 md:py-20">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                <ShoppingBag size={22} strokeWidth={1.75} />
              </span>
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-red">
                Broformer Gear
              </span>
              <h2 className="mt-2 font-display text-3xl uppercase text-white sm:text-4xl">
                Train like you mean it.
              </h2>
              <Link
                href="/shop"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink"
              >
                Shop The Collection
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
