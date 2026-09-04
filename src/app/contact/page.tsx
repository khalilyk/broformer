"use client";

import { Mail, MessageCircle, Building2 } from "lucide-react";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

const CHANNELS = [
  {
    icon: Mail,
    title: "General enquiries",
    detail: "hello@broformer.com",
  },
  {
    icon: Building2,
    title: "Studios & partnerships",
    detail: "studios@broformer.com",
  },
  {
    icon: MessageCircle,
    title: "Response time",
    detail: "Within 2 business days",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <PageBanner
        eyebrow="Support"
        title="Get in touch."
        subtitle="Questions about finding a class, listing a studio, or anything else — we'd love to hear from you."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              {CHANNELS.map((channel) => (
                <div key={channel.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-red shadow-sm">
                    <channel.icon size={19} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">
                      {channel.title}
                    </p>
                    <p className="mt-0.5 text-sm text-ink/60">
                      {channel.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <h3 className="font-display text-xl uppercase text-ink">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    Thanks for reaching out — we&apos;ll reply within 2
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
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                        Name
                      </span>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Message
                    </span>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
