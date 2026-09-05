"use client";

import { Building2, Handshake, Megaphone, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { useTypewriter } from "@/hooks/useTypewriter";

const LOCATION_PROMPTS = [
  "Sydney, Australia",
  "London, UK",
  "Dubai, UAE",
  "New York, USA",
  "Toronto, Canada",
  "Singapore",
];

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
  const locationPlaceholder = useTypewriter(LOCATION_PROMPTS);

  return (
    <main>
      <PageBanner
        eyebrow="Partnerships"
        title="Partner with Broformer."
        subtitle="We work with studios, brands and organisations that want to help more men move, with a growing, engaged global audience behind every partnership."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_TYPES.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex cursor-default flex-col items-center rounded-2xl bg-paper p-6 text-center shadow-sm ring-1 ring-ink/10 transition-colors duration-300 hover:bg-ink"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-red/30 bg-cream text-red transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white">
                    <type.icon
                      size={26}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-ink transition-colors duration-300 group-hover:text-white">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-white/60">
                    {type.description}
                  </p>
                </motion.div>
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
                  Thanks, message sent
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
                <p className="text-sm leading-relaxed text-ink/50">
                  Tell us a bit about what you&apos;re building and how it
                  connects to men&apos;s reformer Pilates. Our partnerships
                  team reviews every submission personally and reaches out
                  when there&apos;s a genuine fit.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Full name" type="text" />
                  <Field label="Organisation" type="text" />
                  <Field label="Email" type="email" />
                  <Field label="Contact number" type="tel" />
                </div>
                <Field label="Location" type="text" placeholder={locationPlaceholder} />
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
