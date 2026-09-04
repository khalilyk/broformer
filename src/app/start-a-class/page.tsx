"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Apply",
    description: "Tell us about your background and where you'd like to run a class.",
  },
  {
    n: "02",
    title: "Get certified",
    description: "Complete the Broformer instructor playbook — programming, positioning, and how to talk to men about reformer training.",
  },
  {
    n: "03",
    title: "Launch",
    description: "Run your first class under the Broformer brand, with marketing assets and directory placement included.",
  },
];

export default function StartAClassPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <PageBanner
        eyebrow="For Instructors"
        title="Start a Broformer class."
        subtitle="Run a dedicated men's reformer class under the Broformer name — with the brand, the playbook and the directory traffic behind you."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl uppercase text-ink sm:text-3xl">
              How it works
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="text-center">
                  <span className="font-display text-4xl text-red">{step.n}</span>
                  <h3 className="mt-2 text-base font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-xl rounded-2xl bg-cream p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 size={40} className="mx-auto text-red" />
                <h3 className="mt-4 font-display text-xl uppercase text-ink">
                  Application received
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  We&apos;ll review your application and follow up within 5
                  business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="font-display text-xl uppercase text-ink">
                  Apply to instruct
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full name" placeholder="Your name" />
                  <Field label="Email" type="email" placeholder="you@email.com" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="City" placeholder="Where you'd like to teach" />
                  <Field label="Years teaching Pilates" placeholder="e.g. 3" />
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                    Your background
                  </span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Certifications, current studio, why you want to run a Broformer class..."
                    className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink active:scale-95"
                >
                  Submit Application
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
        {label}
      </span>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
      />
    </label>
  );
}
