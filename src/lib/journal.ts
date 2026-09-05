export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "speak-their-language",
    category: "Tips For Studios",
    title: "Speak their language",
    excerpt:
      "Use messaging that resonates with men. Focus on strength, performance and results.",
    readTime: "4 min read",
    content: [
      "Most reformer Pilates marketing is written for one audience, and it shows. Soft, wellness-first language works well for a lot of people, but it rarely speaks to the man scrolling past your studio's Instagram post on his way to a gym membership.",
      "That doesn't mean stripping out everything that makes Pilates effective. It means leading with what men are already motivated by: strength, performance, recovery, and results they can measure. \"Build a stronger back\" lands harder than \"find your centre.\" \"Improve your squat depth\" lands harder than \"connect with your breath.\"",
      "The workout doesn't need to change. The words describing it do. Studios that make this shift consistently see more men book a first class, and more importantly, come back for a second.",
    ],
  },
  {
    slug: "create-mens-classes",
    category: "Tips For Studios",
    title: "Create men's classes",
    excerpt:
      "Dedicated men's classes remove barriers and build community. Consistency is key.",
    readTime: "5 min read",
    content: [
      "Walking into a reformer studio for the first time is intimidating enough without also being the only man in the room. A dedicated men's class removes that barrier entirely, and it gives studios a clear, marketable offering.",
      "The classes don't need to be permanent fixtures from day one. Start with one slot a week at a consistent time. Consistency matters more than frequency early on: men are more likely to commit to something that's predictably on the calendar than to a one-off trial class.",
      "Once the class has a regular group attending, word of mouth does most of the marketing for you. Men bring their training partners, their brothers, their co-workers. A men's class that works becomes self-sustaining.",
    ],
  },
  {
    slug: "make-it-welcoming",
    category: "Tips For Studios",
    title: "Make it welcoming",
    excerpt:
      "Small changes in your space, communication and team can make a big difference.",
    readTime: "3 min read",
    content: [
      "Welcoming isn't just about who's in the room. It's about the hundred small signals a studio sends before a class even starts. The imagery on your website. The tone of your booking confirmation email. Whether a front-desk team member makes eye contact and says hello.",
      "None of this requires a redesign. It requires a walkthrough: sit in your own waiting area as if you were a first-time male client and notice what you notice. Most studios find two or three quick fixes (a changing-room sign, a class description, a photo on the wall) that shift the room's feel without shifting its identity.",
    ],
  },
  {
    slug: "leverage-community",
    category: "Tips For Studios",
    title: "Leverage community",
    excerpt:
      "Encourage referrals, share transformations and build a men's community.",
    readTime: "4 min read",
    content: [
      "Men are more likely to try something new because a friend told them to than because an ad told them to. That makes referrals the highest-leverage growth channel a studio has, if there's a reason to talk about the class in the first place.",
      "Give people something worth sharing: a before/after strength benchmark, a milestone board, a group chat for the regulars. Broformer studios that build an actual community, not just a class roster, see referral rates that paid marketing can't match.",
    ],
  },
  {
    slug: "why-men-avoid-pilates",
    category: "Guides",
    title: "Why most men avoid Pilates, and what changes their mind",
    excerpt:
      "The real reasons men skip reformer classes have less to do with the workout and more to do with how it's positioned.",
    readTime: "6 min read",
    content: [
      "Ask a man why he's never tried reformer Pilates and the answer is rarely \"I don't think it would work.\" It's usually some version of \"it's not for me\": a perception problem, not a fitness problem.",
      "That perception is built from decades of marketing aimed almost exclusively at women, class names that emphasise flexibility over strength, and studios where a first-time male visitor genuinely is an outlier. None of that reflects what reformer training actually does: build serious core and hip strength, correct imbalances that show up in every other sport, and accelerate recovery between heavy lifting sessions.",
      "The studios changing this fastest are the ones treating positioning as seriously as programming: different photography, different class names, a men's-specific entry point, while keeping the training itself exactly as effective.",
    ],
  },
  {
    slug: "reformer-vs-weights",
    category: "Guides",
    title: "Reformer Pilates vs. the weight room: what each one is actually for",
    excerpt:
      "It's not a replacement for strength training. It's the piece most lifting programs are missing.",
    readTime: "5 min read",
    content: [
      "Reformer Pilates and a barbell program aren't competing for the same job. One builds maximal strength and size. The other builds the control, stability and range of motion that let you use that strength safely, and keep using it as you get older.",
      "Most men who add reformer sessions to an existing lifting routine notice the same thing within a few weeks: heavier lifts feel more stable, nagging shoulder or lower-back tightness eases, and recovery between sessions improves. It's not about picking one over the other. It's about the strength training you already do finally having a foundation under it.",
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
