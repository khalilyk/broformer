import {
  Dumbbell,
  Footprints,
  Heart,
  Hourglass,
  PersonStanding,
  StretchHorizontal,
  Target,
  Move,
  type LucideIcon,
} from "lucide-react";

export type Benefit = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  seoDescription: string;
  content: string[];
};

export const BENEFITS: Benefit[] = [
  {
    slug: "strength",
    title: "Strength",
    icon: Dumbbell,
    tagline: "Build functional strength that carries over to everything.",
    seoDescription:
      "How reformer Pilates builds real, functional strength for men, and why it complements a lifting program instead of replacing it.",
    content: [
      "Reformer strength training is built on resistance, not gravity: the machine's springs load your muscles through a full range of motion, in directions a barbell rarely challenges. That's why men who add reformer sessions to their week consistently report their heavy lifts feel more stable, not less.",
      "The strength you build on a reformer is functional by design: hips, shoulders and spine working together under control, rather than a single muscle group in isolation. It's the kind of strength that shows up when you're moving furniture, playing with your kids, or bracing under a heavy squat, not just the kind that shows up on a lifting chart.",
      "For most men, reformer Pilates isn't a replacement for the weight room. It's the missing piece that lets the weight room work better: correcting the small imbalances that heavy, repetitive lifting patterns create over time.",
    ],
  },
  {
    slug: "mobility",
    title: "Mobility",
    icon: Move,
    tagline: "Improve mobility and flexibility where men need it most.",
    seoDescription:
      "Why mobility, not just flexibility, is the training gap most men have, and how reformer Pilates closes it.",
    content: [
      "Mobility is different from flexibility: it's not just how far a joint can move, but how much control and strength you have throughout that range. Most men have plenty of raw flexibility in isolated stretches: what's missing is control at the end ranges that actually matter under load.",
      "A reformer builds exactly that. Every movement is resisted and controlled through the full range, which trains your body to own positions it could previously only pass through. That's why men who've never held a stretch in their life often see the biggest mobility gains from reformer training, it's active, not passive.",
      "The payoff shows up everywhere: deeper squats, safer overhead positions, hips that open instead of pinch. Mobility work doesn't need to feel like yoga to work: it just needs resistance in the right places.",
    ],
  },
  {
    slug: "core",
    title: "Core",
    icon: Target,
    tagline: "A stronger core for better posture, performance and control.",
    seoDescription:
      "Reformer Pilates builds true core strength: the deep stabilisers that support your spine, not just visible abs.",
    content: [
      "\"Core strength\" gets thrown around a lot, but reformer Pilates trains the part most programs miss: the deep stabilising muscles that hold your spine and pelvis steady while your arms and legs move independently. It's the difference between having visible abs and having a core that actually protects your back under load.",
      "Nearly every reformer exercise demands this kind of control: moving a limb against resistance while keeping the trunk still. Over weeks, that builds a core that works automatically, not one you have to consciously brace before every set.",
      "For men carrying lower-back tightness from sitting or heavy lifting, this is often the single biggest change reformer training makes: a spine that's supported from the inside, not just from bracing harder.",
    ],
  },
  {
    slug: "flexibility",
    title: "Flexibility",
    icon: StretchHorizontal,
    tagline: "Move better, feel better and do more of what you love.",
    seoDescription:
      "Flexibility training for men that doesn't feel like a yoga class: how reformer Pilates builds range of motion through resistance.",
    content: [
      "A lot of men avoid flexibility training because it's marketed as passive: long holds, quiet rooms, nothing to push against. Reformer Pilates is the opposite: every stretch happens under spring resistance, so you're building strength and range at the same time.",
      "That combination matters. Flexibility gained under load tends to stick, because your nervous system trusts the new range instead of guarding against it. It's why reformer clients often see faster, more durable flexibility gains than from static stretching alone.",
      "The result isn't just touching your toes. It's a body that moves the way it did ten years ago: fewer tight hips, less lower-back stiffness, and more range in the lifts and sports you actually care about.",
    ],
  },
  {
    slug: "sport",
    title: "Sport",
    icon: Footprints,
    tagline: "Better performance, less risk and faster recovery for your sport.",
    seoDescription:
      "How reformer Pilates improves athletic performance and recovery for men playing sport, from combat athletes to weekend footballers.",
    content: [
      "Most sports reward power and speed, and most training programs are built to chase both. What gets left behind is the control layer underneath: the hip stability, single-leg balance and rotational strength that keeps an athlete available, not just strong.",
      "Reformer Pilates trains exactly that layer. It's why you'll increasingly find it in the programming for combat-sport athletes, footballers and weekend warriors alike: it builds the connective strength around joints that raw power training tends to skip.",
      "The other benefit is recovery. The low-impact, high-control nature of reformer work makes it one of the few sessions you can genuinely do between hard training days, improving blood flow and mobility without adding fatigue.",
    ],
  },
  {
    slug: "sex",
    title: "Sex",
    icon: Heart,
    tagline: "Stronger hips, better endurance, more confidence. No further questions.",
    seoDescription:
      "The real, physical reasons hip strength, core control and endurance from reformer Pilates translate into better performance and confidence.",
    content: [
      "This is one of the least-discussed benefits of reformer training, but physiologically it's one of the most direct. Hip strength, pelvic floor control and core stability (all trained heavily on a reformer) are the same physical foundations that support performance and stamina.",
      "Reformer work specifically targets the hip flexors, glutes and deep core in coordinated, controlled movements: building the kind of strength and endurance that static stretching or isolated ab work doesn't reach.",
      "It's not a topic most gyms bring up directly, but the men who train consistently notice the difference. Stronger hips and better core control show up in performance, confidence and everyday movement alike, which is really the whole point of this training.",
    ],
  },
  {
    slug: "posture",
    title: "Posture",
    icon: PersonStanding,
    tagline: "Stand taller, move better and get rid of the aches.",
    seoDescription:
      "Fixing desk-driven posture with reformer Pilates: strengthening the muscles that hold you upright, not just stretching the tight ones.",
    content: [
      "Poor posture usually isn't a flexibility problem. It's a strength problem. Years at a desk teach your body to round forward, and stretching the tight chest and hip flexors only gets you halfway there. The other half is strengthening the muscles that are supposed to hold you upright: your upper back, glutes and deep core.",
      "Reformer Pilates trains that exact combination in a single session: pulling movements that build the upper-back strength most men are missing, alongside the core and hip work that keeps the pelvis in a neutral position instead of tilting forward.",
      "Most clients notice the change before they see it: less end-of-day back and neck ache, a taller feeling walking out of a session, and better positioning under a barbell without having to consciously think about it.",
    ],
  },
  {
    slug: "longevity",
    title: "Longevity",
    icon: Hourglass,
    tagline: "Stay strong, mobile and independent for years to come.",
    seoDescription:
      "Why reformer Pilates is one of the most effective forms of training for long-term joint health, balance and independence as men age.",
    content: [
      "The training that keeps you strong at 30 isn't necessarily the training that keeps you independent at 70. Balance, joint control and the strength to get up off the floor without using your hands matter more over decades than one-rep maxes do, and they're rarely trained directly.",
      "Reformer Pilates trains all three. The controlled, resistance-based movements build joint strength through full ranges of motion, while single-limb and balance-based exercises train the coordination that tends to fade first with age.",
      "Men who start reformer training in their 30s and 40s aren't just training for how they feel now. They're building the base that keeps them moving well, and moving independently, decades from now.",
    ],
  },
];

export function getBenefit(slug: string) {
  return BENEFITS.find((b) => b.slug === slug);
}
