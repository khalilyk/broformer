import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import PhotoBlock from "./PhotoBlock";
import Reveal from "./Reveal";

const FEATURED_PRODUCTS = PRODUCTS.slice(0, 4);

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

              <div className="mt-9 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {FEATURED_PRODUCTS.map((product) => (
                  <Link
                    key={product.slug}
                    href="/shop"
                    className="group/product text-center"
                  >
                    <div className="overflow-hidden rounded-xl ring-1 ring-white/15 transition-shadow duration-300 group-hover/product:shadow-[0_0_28px_4px_rgba(255,255,255,0.3)]">
                      <PhotoBlock
                        label={product.name}
                        glow="center"
                        className="aspect-square transition-transform duration-500 ease-out group-hover/product:scale-105"
                      />
                    </div>
                    <p className="mt-2 text-xs font-bold text-white">
                      {product.name}
                    </p>
                    <p className="text-[11px] text-white/50">
                      {product.price}
                    </p>
                  </Link>
                ))}
              </div>

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
