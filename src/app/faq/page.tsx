"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    category: "For Men",
    items: [
      {
        q: "Is reformer Pilates actually good for men?",
        a: "Yes — reformer training builds functional strength, core control and mobility that carries directly into lifting, running and most sports. It's especially effective for correcting the imbalances heavy training can create.",
      },
      {
        q: "I've never done Pilates. What should I expect from my first class?",
        a: "Most beginner-friendly studios on Broformer run an intro or foundations class that walks you through the machine and basic movements. You don't need any prior experience — instructors expect first-timers.",
      },
      {
        q: "Is Broformer only for men's-only classes?",
        a: "No. We list both dedicated men's classes and mixed classes at studios that are genuinely welcoming to men. Each listing shows the class types on offer.",
      },
      {
        q: "Is it free to use Broformer to find a class?",
        a: "Completely free. Class pricing is set by each individual studio — Broformer doesn't take a booking fee.",
      },
    ],
  },
  {
    category: "For Studios",
    items: [
      {
        q: "How much does it cost to list my studio?",
        a: "Listing your studio in the Broformer directory is free. We make money through optional studio resources and brand partnerships, not by charging studios to be discovered.",
      },
      {
        q: "How long does it take to get listed?",
        a: "Most listings are reviewed and published within 2 business days of submitting the form on our List Your Studio page.",
      },
      {
        q: "Can I update my listing after it's live?",
        a: "Yes — email us at hello@broformer.com with any changes and we'll update it, usually within one business day.",
      },
      {
        q: "Do I need to run a men's-only class to be listed?",
        a: "No. We list any studio that offers reformer Pilates and is genuinely welcoming to men, whether that's a dedicated class or a mixed one.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className="text-[15px] font-bold text-ink">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-red transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-sm leading-relaxed text-ink/60">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Support"
        title="Frequently asked questions."
        subtitle="Can't find what you're looking for? Reach out on our Contact page."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x mx-auto max-w-2xl">
          {FAQS.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1} className="mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                {group.category}
              </h2>
              <div className="mt-2">
                {group.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
