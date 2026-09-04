"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative z-10 bg-cream py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
            <Image
              src="/header.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
            <div className="absolute inset-0 noise-texture mix-blend-overlay opacity-40" />

            <div className="relative flex flex-col items-center px-6 py-16 text-center sm:px-10 md:py-20">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                <Mail size={22} strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-3xl uppercase text-white sm:text-4xl">
                Stay In The Loop
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
                Tips, stories and the latest from the Broformer movement —
                straight to your inbox.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email) return;
                  setSubmitted(true);
                }}
                className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full min-w-0 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-red/50"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer rounded-full bg-red px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-white hover:text-ink active:scale-95"
                >
                  {submitted ? "Subscribed" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
