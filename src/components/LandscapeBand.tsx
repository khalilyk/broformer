import Image from "next/image";

export default function LandscapeBand() {
  return (
    <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden md:h-[60vh]">
      <Image
        src="/bro-landscape.png"
        alt="Men training together on reformer machines in a Broformer studio"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
    </section>
  );
}
