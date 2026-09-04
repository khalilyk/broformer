export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "bro-training-tee",
    name: "Training Tee",
    category: "Apparel",
    price: "$45",
    description: "Moisture-wicking tee built for reformer sessions, in black and charcoal.",
  },
  {
    slug: "bro-grip-socks",
    name: "Grip Socks",
    category: "Apparel",
    price: "$22",
    description: "Non-slip reformer socks with reinforced arch support.",
  },
  {
    slug: "bro-shorts",
    name: "Performance Shorts",
    category: "Apparel",
    price: "$52",
    description: "Four-way stretch shorts designed for full reformer range of motion.",
  },
  {
    slug: "bro-towel",
    name: "Studio Towel",
    category: "Accessories",
    price: "$28",
    description: "Oversized quick-dry towel with the Broformer wordmark.",
  },
  {
    slug: "bro-bottle",
    name: "Steel Water Bottle",
    category: "Accessories",
    price: "$32",
    description: "750ml insulated bottle that fits in every reformer's side caddy.",
  },
  {
    slug: "bro-bag",
    name: "Studio Duffel",
    category: "Accessories",
    price: "$68",
    description: "Compact gym bag with a dedicated grip-sock and towel compartment.",
  },
];
