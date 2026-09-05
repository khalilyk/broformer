import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@broformer.com";
  const password = process.env.ADMIN_PASSWORD ?? "changeme123";

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin user ${email} already exists, skipping.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await db.user.create({
    data: {
      email,
      passwordHash,
      name: "Broformer Admin",
      role: "ADMIN",
    },
  });

  console.log(`Created admin user: ${email}`);

  const pageSeeds = [
    { slug: "/", title: "Homepage" },
    { slug: "/about", title: "About" },
    { slug: "/journal", title: "Journal" },
    { slug: "/studios", title: "Studios" },
    { slug: "/faq", title: "FAQ" },
  ];

  for (const p of pageSeeds) {
    await db.page.upsert({
      where: { slug: p.slug },
      update: {},
      create: { slug: p.slug, title: p.title, status: "PUBLISHED" },
    });
  }
  console.log(`Seeded ${pageSeeds.length} pages.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
