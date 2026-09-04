"use client";

import { Building2, Handshake, Megaphone, ShoppingBag } from "lucide-react";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

const PARTNER_TYPES = [
  {
    icon: Building2,
    title: "Studio Networks",
    description: "Multi-location studios and franchises looking to launch men's programming at scale.",
  },
  {
    icon: ShoppingBag,
    title: "Equipment & Apparel",
    description: "Reformer manufacturers and activewear brands reaching a male reformer audience.",
  },
  {
    icon: Handshake,
    title: "Corporate Wellness",
    description: "Companies building movement and recovery into employee wellness programs.",
  },
  {
    icon: Megaphone,
    title: "Media & Creators",
    description: "Fitness media and creators covering the shift toward men in reformer Pilates.",
  },
];

export default function PartnerWithUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <PageBanner
        eyebrow="Partnerships"
        title="Partner with Broformer."
        subtitle="We work with studios, brands and organisations that want to help more men move — with a growing, engaged global audience behind every partnership."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_TYPES.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-red/30 text-red">
                    <type.icon size={26} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-ink">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    {type.description}
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
                <h3 className="font-display text-xl uppercase text-ink">
                  Thanks — message sent
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Our partnerships team will get back to you within a few
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
                  Tell us about your organisation
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Organisation
                    </span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                    What did you have in mind?
                  </span>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
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
          </Reveal>
        </div>
      </section>
    </main>
  );
}
