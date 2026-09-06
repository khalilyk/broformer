"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { BENEFITS } from "@/lib/benefits";
import { getBenefitFaqs } from "@/lib/benefitFaqs";

const FAQS = [
  {
    category: "For Men",
    items: [
      {
        q: "Is reformer Pilates actually good for men?",
        a: "Yes. Reformer training builds functional strength, core control and mobility that carries directly into lifting, running and most sports. It's especially effective for correcting the imbalances heavy training can create.",
      },
      {
        q: "I've never done Pilates. What should I expect from my first class?",
        a: "Most beginner-friendly studios on Broformer run an intro or foundations class that walks you through the machine and basic movements. You don't need any prior experience: instructors expect first-timers.",
      },
      {
        q: "Is Broformer only for men's-only classes?",
        a: "No. We list both dedicated men's classes and mixed classes at studios that are genuinely welcoming to men. Each listing shows the class types on offer.",
      },
      {
        q: "Is it free to use Broformer to find a class?",
        a: "Completely free. Class pricing is set by each individual studio, and Broformer doesn't take a booking fee.",
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
        a: "Yes, email us at hello@broformer.com with any changes and we'll update it, usually within one business day.",
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

const BENEFIT_GROUPS = BENEFITS.map((benefit) => ({
  category: benefit.title,
  slug: benefit.slug as string | undefined,
  items: getBenefitFaqs(benefit.slug),
}));

const ALL_GROUPS = [...FAQS.map((g) => ({ ...g, slug: undefined as string | undefined })), ...BENEFIT_GROUPS];

function slugifyCategory(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function FaqPage() {
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_GROUPS;
    return ALL_GROUPS.map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      ),
    })).filter((group) => group.items.length > 0);
  }, [query]);

  const totalMatches = filteredGroups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <main>
      <PageBanner
        eyebrow="Support"
        title="Frequently asked questions."
        subtitle="Search below, or browse by category. Can't find what you're looking for? Reach out on our Contact page."
      />

      <section className="bg-paper py-10 md:py-12">
        <div className="container-x mx-auto max-w-2xl">
          <div className="flex items-center gap-3 rounded-full border border-ink/15 bg-cream px-5 py-3.5 shadow-sm focus-within:ring-2 focus-within:ring-red/30">
            <Search size={18} className="shrink-0 text-ink/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all questions..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink/45 focus:outline-none"
            />
          </div>
          {query && (
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-ink/40">
              {totalMatches} {totalMatches === 1 ? "result" : "results"} for &quot;{query}&quot;
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-1">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
                Categories
              </span>
              {ALL_GROUPS.map((group) => (
                <a
                  key={group.category}
                  href={`#${slugifyCategory(group.category)}`}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink/60 transition-colors hover:bg-paper hover:text-red"
                >
                  {group.category}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:hidden">
            {ALL_GROUPS.map((group) => (
              <a
                key={group.category}
                href={`#${slugifyCategory(group.category)}`}
                className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-red hover:text-red"
              >
                {group.category}
              </a>
            ))}
          </div>

          <div className="min-w-0">
            {filteredGroups.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-ink/15 px-6 py-16 text-center text-ink/40">
                No questions match &quot;{query}&quot;. Try a different search, or{" "}
                <Link href="/contact" className="font-bold text-red hover:text-ink">
                  contact us
                </Link>
                .
              </div>
            ) : (
              filteredGroups.map((group, gi) => (
                <Reveal
                  key={group.category}
                  delay={Math.min(gi, 4) * 0.06}
                  id={slugifyCategory(group.category)}
                  className="mb-10 scroll-mt-24"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                      {group.category}
                    </h2>
                    {group.slug && (
                      <Link
                        href={`/benefits/${group.slug}`}
                        className="text-xs font-bold text-red hover:text-ink"
                      >
                        More on {group.category} →
                      </Link>
                    )}
                  </div>
                  <div className="mt-2">
                    {group.items.map((item) => (
                      <AccordionItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </Reveal>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
