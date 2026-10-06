import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";

const galleryImages = [
  {
    src: "/assets/hero.jpg",
    title: "Aarav Krishna",
    caption: "The radiant 28th-day portrait",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/assets/Baby1.jpg",
    title: "Gentle Sweet Sleep",
    caption: "Peaceful dreams in Kasavu cloth",
    span: "col-span-1",
  },
  {
    src: "/assets/baby2.jpg",
    title: "Tiny Hands & Curled Toes",
    caption: "Precious little moments",
    span: "col-span-1",
  },
  {
    src: "/assets/cute-baby.jpg",
    title: "The Warmth of Family",
    caption: "Grandparents' loving embrace",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/assets/baby.jpg",
    title: "Auspicious Nilavilakku Glow",
    caption: "Blessings of health & happiness",
    span: "col-span-1",
  },
  {
    src: "/assets/cute-baby-born.jpg",
    title: "The Wooden Thottil",
    caption: "Jasmine flowers & sweet lullabies",
    span: "col-span-1",
  },
  {
    src: "/assets/baby5.jpg",
    title: "Named Aarav Krishna",
    caption: "Whispered in the ear with love",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "/assets/babyicon.jpg",
    title: "Golden Aranjanam & Vala",
    caption: "Traditional sacred adornments",
    span: "col-span-1",
  },
];

type GalleryPageProps = {
  searchParams: Promise<{ guest?: string }>;
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const params = await searchParams;
  const guestName = params.guest?.trim() ?? "";

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <AudioPlayer />
      <Navbar guestName={guestName} />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#5A121C] via-[#4A0E17] to-[#360910] px-4 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#C59B27]/50 bg-black/25 px-4 py-1 text-xs font-bold tracking-widest text-[#F3E5AB] uppercase">
            Aarav&apos;s Memory Album
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#F3E5AB] sm:text-5xl">
            Tender Moments of Baby Aarav
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-xs text-[#E8D8C8] sm:text-sm">
            A curated gallery of sweet smiles, peaceful naps, and family blessings leading to the 28th-day Noolukettu ceremony.
          </p>

          <div className="gold-divider my-4">
            <span className="gold-divider-line" />
            <span className="gold-divider-icon">&#10047;</span>
            <span className="gold-divider-line" />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="kerala-glass-card group relative overflow-hidden rounded-3xl p-3 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h4 className="font-serif text-sm font-bold text-[#F3E5AB]">{img.title}</h4>
                  <p className="text-[11px] text-white/80">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="rounded-full border border-[#C59B27] bg-[#5A121C] px-8 py-3 text-xs font-bold text-[#F3E5AB] shadow-md transition hover:bg-[#A83232]"
          >
            &larr; Back to Main Invitation
          </Link>
        </div>
      </section>
    </main>
  );
}
