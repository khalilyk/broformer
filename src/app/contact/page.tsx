"use client";

import { ChevronDown, HelpCircle, MessageCircle, Store } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";
import { sendContactMessage } from "./actions";

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "Response time",
    detail: "Within 2 business days",
    note: "Usually faster. We're a small team, so every message gets a real reply from a real person.",
  },
  {
    icon: Store,
    title: "Own a studio?",
    detail: "List it in minutes",
    note: "Skip the inbox and submit your studio directly through our listing form.",
    link: { label: "List Your Studio →", href: "/list-your-studio" },
  },
  {
    icon: HelpCircle,
    title: "Quick question?",
    detail: "Check the FAQ first",
    note: "Common questions about finding a class or listing a studio are answered there.",
    link: { label: "Visit FAQ →", href: "/faq" },
  },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
];

const TOPICS = [
  "General question",
  "Finding a class",
  "Listing my studio",
  "Partnership enquiry",
  "Press",
  "Something else",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <main>
      <PageBanner
        eyebrow="Support"
        title="Get in touch."
        subtitle="Questions about finding a class, listing a studio, or anything else, we'd love to hear from you."
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
                    <p className="mt-0.5 text-sm text-ink/70">
                      {channel.detail}
                    </p>
                    <p className="mt-1 max-w-sm text-[13px] leading-relaxed text-ink/60">
                      {channel.note}
                    </p>
                    {channel.link && (
                      <Link
                        href={channel.link.href}
                        className="mt-1.5 inline-block text-[13px] font-bold text-red hover:text-ink"
                      >
                        {channel.link.label}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                Follow along
              </p>
              <div className="mt-4 flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink/60 transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red hover:text-white"
                  >
                    <social.icon className="h-[17px] w-[17px]" />
                  </a>
                ))}
              </div>
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
                    Thanks for reaching out. We&apos;ll reply within 2
                    business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setError("");
                    setSubmitting(true);
                    try {
                      const formData = new FormData(e.currentTarget);
                      await sendContactMessage(formData);
                      setSubmitted(true);
                    } catch {
                      setError("Something went wrong. Please try again.");
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className="space-y-4"
                >
                  <p className="text-sm leading-relaxed text-ink/50">
                    Fill this out and it goes straight to our team, no
                    ticket numbers, just a reply from a real person.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                        Name
                      </span>
                      <input
                        required
                        name="name"
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
                        name="email"
                        type="email"
                        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Topic
                    </span>
                    <div className="relative">
                    <select
                      required
                      name="topic"
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-ink/15 bg-cream px-4 py-3 pr-10 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink/40"
                    />
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                    />
                  </label>
                  {error && (
                    <p className="rounded-lg bg-red/10 px-3 py-2 text-xs font-semibold text-red">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full cursor-pointer rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink active:scale-95 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-center text-[12px] text-ink/40">
                    We read every message ourselves. No auto-responders.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
