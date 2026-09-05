export type Studio = {
  slug: string;
  name: string;
  city: string;
  country: string;
  classTypes: string[];
  description: string;
  website: string;
};

export const STUDIOS: Studio[] = [
  // Sydney, Australia
  {
    slug: "soma-collection-sydney",
    name: "SOMA Collection",
    city: "Sydney",
    country: "Australia",
    classTypes: ["Reformer", "Small Group"],
    description: "A boutique wellness club in the Sydney CBD offering reformer Pilates alongside strength training, HIIT and recovery therapies.",
    website: "https://somacollection.com.au/",
  },
  {
    slug: "muse-pilates-sydney",
    name: "Muse Pilates",
    city: "Sydney",
    country: "Australia",
    classTypes: ["Reformer", "Beginners"],
    description: "Low-impact, 50-minute reformer classes in the heart of the Sydney CBD, suited to all fitness levels.",
    website: "https://musepilates.com.au/sydney/",
  },
  {
    slug: "dynamic-pilates-sydney",
    name: "Dynamic Pilates",
    city: "Sydney",
    country: "Australia",
    classTypes: ["Reformer", "Tower"],
    description: "Reformer, tower and studio Pilates across Manly, Dee Why and the Sydney CBD, from private sessions to group classes.",
    website: "https://www.dynamicpilates.com.au/",
  },
  {
    slug: "city-physio-pilates-sydney",
    name: "City Physio Pilates",
    city: "Sydney",
    country: "Australia",
    classTypes: ["Small Group", "Private Sessions"],
    description: "Physiotherapist-led reformer Pilates in the Sydney CBD, with classes capped at four clients for hands-on coaching.",
    website: "https://cityphysio.com.au/pilates/",
  },
  {
    slug: "fitness-first-reform-sydney",
    name: "Fitness First Reform Pilates",
    city: "Sydney",
    country: "Australia",
    classTypes: ["Reformer", "Gym Chain"],
    description: "45-minute Reform Pilates classes at Fitness First's George Street and Park Street clubs in the Sydney CBD.",
    website: "https://www.fitnessfirst.com.au/reform-pilates/sydney/",
  },

  // Melbourne, Australia
  {
    slug: "kora-pilates-melbourne",
    name: "Kōra Pilates",
    city: "Melbourne",
    country: "Australia",
    classTypes: ["Reformer", "Small Group"],
    description: "A community-focused reformer studio in Coburg, with classes capped at ten clients for mindful, strength-based movement.",
    website: "https://www.korapilates.com.au/",
  },
  {
    slug: "rise-pilates-melbourne",
    name: "Rise Pilates",
    city: "Melbourne",
    country: "Australia",
    classTypes: ["Reformer", "All Levels"],
    description: "Boutique reformer studios in Essendon and North Melbourne, open seven days a week for all fitness levels.",
    website: "https://risepilates.com.au/",
  },
  {
    slug: "villa-pilates-melbourne",
    name: "Villa Pilates",
    city: "Melbourne",
    country: "Australia",
    classTypes: ["Reformer", "Tower"],
    description: "Boutique reformer and tower Pilates across three Melbourne studios, with group classes limited to eleven clients.",
    website: "https://www.villapilates.com.au/",
  },
  {
    slug: "kx-pilates-melbourne",
    name: "KX Pilates",
    city: "Melbourne",
    country: "Australia",
    classTypes: ["Reformer", "High Intensity"],
    description: "High-energy reformer classes at KX Pilates' Melbourne CBD and South Melbourne studios, for beginners through advanced.",
    website: "https://kxpilates.com.au/",
  },
  {
    slug: "pronto-pilates-melbourne",
    name: "Pronto Pilates",
    city: "Melbourne",
    country: "Australia",
    classTypes: ["Reformer", "Flexible Scheduling"],
    description: "A Richmond reformer studio with classes from just $5 and a free five-day trial for new clients.",
    website: "https://www.prontopilates.com.au/vic/richmond/",
  },

  // London, UK
  {
    slug: "tempo-301-london",
    name: "Tempo 301",
    city: "London",
    country: "UK",
    classTypes: ["Reformer", "Signature"],
    description: "Reformer Pilates studios across Shoreditch, Hackney and Elephant & Castle.",
    website: "https://tempo301.co.uk/",
  },
  {
    slug: "strong-pilates-islington-london",
    name: "STRONG Pilates Islington",
    city: "London",
    country: "UK",
    classTypes: ["Reformer", "Cardio"],
    description: "45-minute low-impact resistance classes on the Rowformer and Bike, in the heart of Islington.",
    website: "https://strongpilates.co.uk/location/islington/",
  },
  {
    slug: "alan-herdman-pilates-london",
    name: "Alan Herdman Pilates",
    city: "London",
    country: "UK",
    classTypes: ["Reformer", "Classical"],
    description: "One of London's original Pilates teaching studios, with reformer classes at Marble Arch that welcome men and women.",
    website: "https://www.alanherdmanpilates.co.uk/",
  },
  {
    slug: "reformcore-london",
    name: "Reformcore",
    city: "London",
    country: "UK",
    classTypes: ["Reformer", "Multiple Locations"],
    description: "A reformer Pilates chain with six studios across London, including Battersea, Camden, Chelsea and Hammersmith.",
    website: "https://reformcore.com/",
  },
  {
    slug: "fold-reformer-london",
    name: "FOLD Reformer",
    city: "London",
    country: "UK",
    classTypes: ["Reformer", "Studio"],
    description: "A Notting Hill reformer Pilates studio and showroom from the team behind the FOLD home reformer.",
    website: "https://foldreformer.com/",
  },

  // Dubai, UAE
  {
    slug: "11-pilates-dubai",
    name: "11 Pilates",
    city: "Dubai",
    country: "UAE",
    classTypes: ["Reformer", "Small Group"],
    description: "A fully equipped reformer studio in Dubai Marina, with group classes from beginner to advanced and private sessions.",
    website: "https://11pilates.ae/",
  },
  {
    slug: "aire-dubai",
    name: "Aire",
    city: "Dubai",
    country: "UAE",
    classTypes: ["Reformer", "Studio"],
    description: "A bright, beachfront reformer Pilates studio on Palm Jumeirah.",
    website: "https://www.aire.ae/",
  },
  {
    slug: "reform-athletica-dubai",
    name: "Reform Athletica",
    city: "Dubai",
    country: "UAE",
    classTypes: ["Reformer", "Strength"],
    description: "A boutique fitness studio with reformer, strength and conditioning classes across Jumeirah 1 and DIFC.",
    website: "https://www.reformathletica.com/",
  },
  {
    slug: "myglow-dubai",
    name: "MYGLOW",
    city: "Dubai",
    country: "UAE",
    classTypes: ["Reformer", "Studio"],
    description: "A premier reformer Pilates studio in Dubai built around posture and lean-muscle programming.",
    website: "https://myglowdubai.com/",
  },
  {
    slug: "flexlounge-dubai",
    name: "FlexLounge",
    city: "Dubai",
    country: "UAE",
    classTypes: ["Reformer", "Men's Classes"],
    description: "A Dubai Silicon Oasis reformer studio offering ladies-only, mixed-gender, men's evening and teen classes.",
    website: "https://www.flexloungedxb.com/",
  },

  // New York, USA
  {
    slug: "new-york-pilates-nyc",
    name: "New York Pilates",
    city: "New York",
    country: "USA",
    classTypes: ["Reformer", "Multiple Locations"],
    description: "One of Manhattan's highest-rated Pilates studios, with reformer classes in SoHo, Bowery, West Village and Flatiron.",
    website: "https://www.newyorkpilates.com/",
  },
  {
    slug: "bk-pilates-nyc",
    name: "BK Pilates",
    city: "New York",
    country: "USA",
    classTypes: ["Reformer", "Small Group"],
    description: "An intimate, small-group reformer studio with locations in Flatiron, NoMad and Park Slope.",
    website: "https://bkpilates.com/",
  },
  {
    slug: "avea-pilates-nyc",
    name: "Avea Pilates",
    city: "New York",
    country: "USA",
    classTypes: ["Reformer", "All Levels"],
    description: "Classical and contemporary reformer Pilates for all levels, across East Village, West Village and Kips Bay.",
    website: "https://aveapilates.com/",
  },
  {
    slug: "holydog-pilates-nyc",
    name: "Holydog Pilates",
    city: "New York",
    country: "USA",
    classTypes: ["Reformer", "Boutique"],
    description: "A boutique reformer Pilates studio and cafe in Midtown Manhattan's Kips Bay neighborhood.",
    website: "https://holydogpilates.com/",
  },
  {
    slug: "harlem-pilates-nyc",
    name: "Harlem Pilates",
    city: "New York",
    country: "USA",
    classTypes: ["Reformer", "Community"],
    description: "A Black-owned reformer Pilates studio in Harlem focused on making wellness more accessible to the community.",
    website: "https://www.harlempilates.com/",
  },

  // Los Angeles, USA
  {
    slug: "karen-lord-pilates-movement-la",
    name: "Karen Lord Pilates Movement",
    city: "Los Angeles",
    country: "USA",
    classTypes: ["Reformer", "Multiple Locations"],
    description: "A disciplined, method-driven reformer studio with locations in Venice, Santa Monica, Redondo Beach and Melrose.",
    website: "https://www.karenlordpilatesmovement.com/",
  },
  {
    slug: "wundabar-pilates-la",
    name: "WundaBar Pilates",
    city: "Los Angeles",
    country: "USA",
    classTypes: ["Reformer", "Multiple Locations"],
    description: "Classes on WundaBar's own WundaFormer machine, across Los Feliz, West Hollywood and Studio City.",
    website: "https://www.wundabar.com/",
  },
  {
    slug: "be-kind-studios-la",
    name: "Be Kind Studios",
    city: "Los Angeles",
    country: "USA",
    classTypes: ["Reformer", "Infrared"],
    description: "Reformer Pilates combined with infrared heat, aimed at improving circulation, flexibility and recovery.",
    website: "https://bekindstudios.com/",
  },
  {
    slug: "rise-up-pilates-la",
    name: "Rise Up Pilates",
    city: "Los Angeles",
    country: "USA",
    classTypes: ["Reformer", "Studio"],
    description: "A boutique reformer studio in Encino offering private and group classes for all levels.",
    website: "https://www.riseuppilates.com/",
  },
  {
    slug: "a-tribe-called-pilates-la",
    name: "A Tribe Called Pilates",
    city: "Los Angeles",
    country: "USA",
    classTypes: ["Reformer", "Multiple Locations"],
    description: "Low-impact reformer classes across Mar Vista, Westwood and Studio City.",
    website: "https://tribepilatesstudio.com/",
  },

  // Toronto, Canada
  {
    slug: "muse-movement-toronto",
    name: "Muse Movement",
    city: "Toronto",
    country: "Canada",
    classTypes: ["Reformer", "Mat & Barre"],
    description: "Voted one of Toronto's best Pilates studios, offering reformer, mat and barre classes in Trinity Bellwoods.",
    website: "https://www.musemovement.ca/",
  },
  {
    slug: "assembly-movement-toronto",
    name: "Assembly Movement",
    city: "Toronto",
    country: "Canada",
    classTypes: ["Reformer", "Group Mat"],
    description: "A Little Italy reformer studio fitted with 18 reformer machines, with a second location in Leslieville.",
    website: "https://www.assemblymovement.ca/",
  },
  {
    slug: "fortides-toronto",
    name: "Fortides",
    city: "Toronto",
    country: "Canada",
    classTypes: ["Reformer", "Community"],
    description: "A community-driven reformer Pilates studio in Toronto focused on breath, alignment and mindful movement.",
    website: "https://www.fortidespilates.com/",
  },
  {
    slug: "solis-movement-toronto",
    name: "Solis Movement",
    city: "Toronto",
    country: "Canada",
    classTypes: ["Reformer", "High Energy"],
    description: "High-energy, high-exertion reformer classes led by certified instructors.",
    website: "https://www.solismovement.ca/classes/reformer-pilates",
  },
  {
    slug: "nice-day-pilates-toronto",
    name: "Nice Day Pilates",
    city: "Toronto",
    country: "Canada",
    classTypes: ["Reformer", "Studio"],
    description: "A neighbourhood reformer Pilates studio on Eastern Avenue in Toronto.",
    website: "https://www.nicedaypilates.ca/",
  },

  // Tokyo, Japan
  {
    slug: "my-body-my-pilates-tokyo",
    name: "My Body My Pilates",
    city: "Tokyo",
    country: "Japan",
    classTypes: ["Reformer", "Clinical"],
    description: "An English-speaking reformer and clinical Pilates studio near Azabu, Hiroo and Roppongi.",
    website: "https://www.mybodymypilates.com/",
  },
  {
    slug: "zen-place-pilates-ginza-tokyo",
    name: "Zen Place Pilates Ginza",
    city: "Tokyo",
    country: "Japan",
    classTypes: ["Reformer", "Full English Support"],
    description: "A reformer studio near Ginza Station offering mat, machine and private lessons with full English support.",
    website: "https://www.zenplace.co.jp/en",
  },
  {
    slug: "club-pilates-omotesando-tokyo",
    name: "CLUB PILATES Omotesando",
    city: "Tokyo",
    country: "Japan",
    classTypes: ["Reformer", "Group Classes"],
    description: "The Omotesando location of the US reformer Pilates franchise, offering group classes with English support.",
    website: "https://www.clubpilates.com/",
  },
  {
    slug: "rejuvenate-pilates-tokyo",
    name: "Rejuvenate Pilates",
    city: "Tokyo",
    country: "Japan",
    classTypes: ["Reformer", "Bilingual"],
    description: "A bilingual reformer Pilates studio in Omotesando welcoming Tokyo's international community.",
    website: "https://re-juvenatepilates.com/",
  },
  {
    slug: "tokyo-physical-therapy-reformer",
    name: "Tokyo Physical Therapy",
    city: "Tokyo",
    country: "Japan",
    classTypes: ["Reformer", "Rehab & Recovery"],
    description: "English-speaking reformer Pilates delivered alongside physical therapy and rehab services in Tokyo.",
    website: "https://tokyophysicaltherapy.com/our-services/wellness/pilates/reformer/",
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

export function getStudio(slug: string) {
  return STUDIOS.find((s) => s.slug === slug);
}
