"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/lib/products";

export default function ShopPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <PageBanner
        eyebrow="Gear"
        title="Broformer gear."
        subtitle="Studio-tested apparel and accessories, built for reformer sessions. Online ordering launches soon. Join the list to be first."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <PhotoBlock
                      label={product.name}
                      glow={i % 2 === 0 ? "top" : "bottom"}
                      className="aspect-square transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-red">
                        {product.category}
                      </p>
                      <h3 className="mt-0.5 text-sm font-bold text-ink">
                        {product.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-ink/70">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    {product.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto flex max-w-md flex-col items-center text-center">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white">
              <Mail size={20} strokeWidth={1.75} />
            </span>
            <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl">
              Get notified at launch
            </h2>
            <p className="mt-2 text-sm text-white/60">
              We&apos;ll email you the moment the Broformer shop opens.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSubmitted(true);
              }}
              className="mt-6 flex w-full gap-2"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Your email"
                className="w-full min-w-0 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-red/50"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-full bg-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink active:scale-95"
              >
                {submitted ? "Done" : "Notify Me"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
