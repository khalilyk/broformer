export type Studio = {
  slug: string;
  name: string;
  city: string;
  country: string;
  classTypes: string[];
  description: string;
};

export const STUDIOS: Studio[] = [
  {
    slug: "iron-reform-sydney",
    name: "Iron Reform",
    city: "Sydney",
    country: "Australia",
    classTypes: ["Men's Only", "Beginners"],
    description: "Strength-focused reformer sessions in the CBD, with a dedicated men's class every weekday morning.",
  },
  {
    slug: "the-frame-studio-melbourne",
    name: "The Frame Studio",
    city: "Melbourne",
    country: "Australia",
    classTypes: ["Mixed", "Athletic Performance"],
    description: "A performance-first studio working with local footy and rugby clubs on off-season conditioning.",
  },
  {
    slug: "reform-house-london",
    name: "Reform House",
    city: "London",
    country: "UK",
    classTypes: ["Men's Only", "Rehab & Recovery"],
    description: "London's first dedicated men's reformer studio, built with physiotherapists on staff.",
  },
  {
    slug: "core-collective-dubai",
    name: "Core Collective",
    city: "Dubai",
    country: "UAE",
    classTypes: ["Mixed", "Executive Express"],
    description: "45-minute express sessions built for busy schedules, in the heart of DIFC.",
  },
  {
    slug: "steel-studio-new-york",
    name: "Steel Studio",
    city: "New York",
    country: "USA",
    classTypes: ["Men's Only", "Athletic Performance"],
    description: "High-intensity reformer classes in Chelsea, popular with combat-sport athletes.",
  },
  {
    slug: "form-and-function-los-angeles",
    name: "Form & Function",
    city: "Los Angeles",
    country: "USA",
    classTypes: ["Mixed", "Rehab & Recovery"],
    description: "A rehab-informed studio working with a client base recovering from injury or surgery.",
  },
  {
    slug: "grid-reformer-toronto",
    name: "Grid Reformer Co.",
    city: "Toronto",
    country: "Canada",
    classTypes: ["Men's Only", "Beginners"],
    description: "A no-mirrors, no-judgment studio built specifically for first-time male clients.",
  },
  {
    slug: "reform-tokyo",
    name: "Reform Tokyo",
    city: "Tokyo",
    country: "Japan",
    classTypes: ["Mixed", "Athletic Performance"],
    description: "Precision-coached small-group sessions in Shibuya, capped at six clients per class.",
  },
];

export function searchStudios(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return STUDIOS;
  return STUDIOS.filter(
    (s) =>
      s.city.toLowerCase().includes(q) ||
      s.country.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q)
  );
}
