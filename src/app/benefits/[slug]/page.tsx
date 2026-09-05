import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, HelpCircle, Search } from "lucide-react";
import AccordionItem from "@/components/AccordionItem";
import GearCta from "@/components/GearCta";
import PhotoBlock from "@/components/PhotoBlock";
import Reveal from "@/components/Reveal";
import SearchBar from "@/components/SearchBar";
import { BENEFITS, getBenefit } from "@/lib/benefits";
import { getBenefitFaqs } from "@/lib/benefitFaqs";

export function generateStaticParams() {
  return BENEFITS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const benefit = getBenefit(slug);
  if (!benefit) return {};
  return {
    title: `${benefit.title}: Why Men Do Broformer`,
    description: benefit.seoDescription,
  };
}

export default async function BenefitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const benefit = getBenefit(slug);
  if (!benefit) notFound();

  const others = BENEFITS.filter((b) => b.slug !== slug);
  const faqs = getBenefitFaqs(slug);
  const faqMid = Math.ceil(faqs.length / 2);
  const faqColOne = faqs.slice(0, faqMid);
  const faqColTwo = faqs.slice(faqMid);

  return (
    <main>
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-ink pb-14 pt-32 md:min-h-[65vh] md:pb-20 md:pt-40">
        <Image
          src="/header.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/40" />

        <div className="container-x">
          <Reveal>
            <Link
              href="/#why-broformer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              Why Broformer
            </Link>
            <div className="mt-6 flex items-center gap-5">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-red/40 text-red md:h-24 md:w-24">
                <benefit.icon size={38} strokeWidth={1.5} />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                  Why Men Do Broformer
                </span>
                <h1 className="font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {benefit.title}
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
              {benefit.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <PhotoBlock
                label={benefit.title}
                glow="center"
                icon={benefit.icon}
                className="aspect-[16/7]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-6">
              {benefit.content.map((paragraph, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-ink px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-red/40 text-red">
                <Search size={22} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-2xl uppercase text-white sm:text-3xl">
                Ready to feel it for yourself?
              </h3>
              <p className="mt-1.5 text-sm text-white/60">
                Find a men&apos;s-friendly reformer class near you.
              </p>
              <div className="mt-6 flex justify-center">
                <SearchBar />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="grid h-14 w-14 mx-auto place-items-center rounded-full border border-red/40 text-red">
              <HelpCircle size={22} strokeWidth={1.75} />
            </span>
            <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-red">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-white sm:text-4xl">
              Questions men ask about {benefit.title.toLowerCase()}.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              Straight answers to the most common questions about how
              reformer Pilates builds {benefit.title.toLowerCase()}, so you
              know exactly what to expect before your first class.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-10 sm:grid-cols-2">
            <div>
              {faqColOne.map((faq, i) => (
                <AccordionItem key={i} q={faq.q} a={faq.a} dark />
              ))}
            </div>
            <div>
              {faqColTwo.map((faq, i) => (
                <AccordionItem key={i} q={faq.q} a={faq.a} dark />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x text-center">
          <h2 className="font-display text-2xl uppercase text-ink sm:text-3xl">
            More reasons men do Broformer
          </h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-5">
            {others.map((b, i) => (
              <Reveal
                key={b.slug}
                delay={i * 0.05}
                className="h-full w-[calc(50%-0.625rem)] sm:w-[calc(25%-0.9375rem)]"
              >
                <Link href={`/benefits/${b.slug}`} className="group block h-full">
                  <div className="flex h-full min-h-[228px] cursor-pointer flex-col items-center rounded-2xl bg-cream p-5 text-center shadow-sm ring-1 ring-ink/10 transition-colors duration-300 hover:bg-ink">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-red/30 bg-paper text-red transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white">
                      <b.icon
                        size={24}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>
                    <div className="mt-3 flex flex-1 flex-col">
                      <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-ink transition-colors duration-300 group-hover:text-white">
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-snug text-ink/55 transition-colors duration-300 group-hover:text-white/60">
                        {b.tagline}
                      </p>
                      <span className="mt-auto inline-flex w-fit items-center gap-1 self-center pt-2 text-xs font-bold text-red">
                        Learn more
                        <ArrowRight
                          size={12}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GearCta />
    </main>
  );
}
