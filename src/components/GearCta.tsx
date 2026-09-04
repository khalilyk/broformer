import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function GearCta() {
  return (
    <section className="bg-paper py-14 md:py-16">
      <div className="container-x">
        <Reveal className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-cream px-6 py-8 text-center sm:flex-row sm:text-left md:px-10 md:py-10">
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-red sm:grid">
              <ShoppingBag size={20} strokeWidth={1.75} />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                Broformer Gear
              </span>
              <h2 className="mt-1 font-display text-2xl uppercase leading-none text-ink sm:text-3xl">
                Train like you mean it.
              </h2>
            </div>
          </div>
          <Link
            href="/shop"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-red"
          >
            Shop The Collection
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
