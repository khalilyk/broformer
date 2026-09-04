"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="border-t border-ink/10 bg-paper py-14">
      <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <Reveal className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-ink">
            <Mail size={19} strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-display text-xl uppercase text-ink">
              Stay In The Loop
            </h3>
            <p className="mt-1 text-sm text-ink/60">
              Tips, stories and the latest from the Broformer movement.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:w-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              setSubmitted(true);
            }}
            className="flex w-full max-w-md gap-2"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Your email"
              className="w-full min-w-0 rounded-full border border-ink/15 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 transition-shadow focus:outline-none focus:ring-2 focus:ring-red/30"
            />
            <button
              type="submit"
              className="shrink-0 cursor-pointer rounded-full bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-red active:scale-95"
            >
              {submitted ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
