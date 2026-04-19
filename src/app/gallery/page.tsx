import Link from "next/link";
import {
  CradleIcon,
  LotusDividerIcon,
  NilavilakkuIcon,
  TinyFeetIcon,
} from "@/components/ceremony-motifs";

const galleryCards = [
  {
    title: "Cradle Blessing",
    body: "A soft ceremonial centrepiece with warm creams, baby gold, and gentle floral detail.",
    className:
      "sm:col-span-2 lg:col-span-3 lg:row-span-2 lg:translate-y-8 lg:rotate-[-2deg]",
    icon: "cradle",
    aspect: "aspect-[4/5] lg:aspect-[5/6]",
  },
  {
    title: "Nilavilakku Glow",
    body: "Traditional lamp accents bring Kerala warmth without disturbing the minimal luxury mood.",
    className: "lg:col-span-2 lg:-translate-y-8 lg:rotate-[1.8deg]",
    icon: "lamp",
    aspect: "aspect-[4/3] lg:aspect-[4/5]",
  },
  {
    title: "Tiny Footsteps",
    body: "Subtle baby motifs replace romantic symbols while keeping the invite refined and elegant.",
    className: "lg:col-span-1 lg:translate-y-10 lg:rotate-[-1.5deg]",
    icon: "feet",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Temple Florals",
    body: "Kerala-inspired florals and lotuses soften the palette with cream, peach, and pale teal.",
    className: "lg:col-span-2 lg:-translate-y-12 lg:rotate-[2deg]",
    icon: "lotus",
    aspect: "aspect-[5/4]",
  },
  {
    title: "Naming Day Palette",
    body: "Pastel beige, light peach, baby gold, and soft teal create a quiet celebratory tone.",
    className: "sm:col-span-2 lg:col-span-2 lg:translate-y-5 lg:rotate-[-1.2deg]",
    icon: "lamp",
    aspect: "aspect-[4/5] lg:aspect-[3/4]",
  },
  {
    title: "Family Gathering",
    body: "A hosting style that feels intimate, prayerful, and welcoming for loved ones arriving together.",
    className: "lg:col-span-2 lg:-translate-y-4 lg:rotate-[1.2deg]",
    icon: "cradle",
    aspect: "aspect-[4/3] lg:aspect-[4/5]",
  },
  {
    title: "Blessing Details",
    body: "Typography remains graceful while the messaging shifts from romance to blessing and tradition.",
    className: "lg:col-span-3 lg:-translate-y-6 lg:rotate-[-1.4deg]",
    icon: "lotus",
    aspect: "aspect-[4/5] lg:aspect-[5/4]",
  },
  {
    title: "Kerala Welcome",
    body: "The overall atmosphere stays premium and composed, now tuned for a baby naming ceremony.",
    className: "sm:col-span-2 lg:col-span-3 lg:translate-y-10 lg:rotate-[1.6deg]",
    icon: "feet",
    aspect: "aspect-[4/5] lg:aspect-[6/5]",
  },
] as const;

function MoodboardIcon({
  icon,
}: {
  icon: (typeof galleryCards)[number]["icon"];
}) {
  const className = "h-16 w-16 sm:h-20 sm:w-20";

  if (icon === "cradle") return <CradleIcon className={className} />;
  if (icon === "lamp") return <NilavilakkuIcon className={className} />;
  if (icon === "feet") return <TinyFeetIcon className={className} />;
  return <LotusDividerIcon className={className} />;
}

type GalleryPageProps = {
  searchParams: Promise<{ guest?: string }>;
};

export default async function GalleryPage({
  searchParams,
}: GalleryPageProps) {
  const params = await searchParams;
  const guestName = params.guest?.trim() ?? "";
  const inviteHref = guestName
    ? `/?guest=${encodeURIComponent(guestName)}`
    : "/";

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8f1e8_0%,#f5ede3_34%,#f1e7db_68%,#efe4d6_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.48),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.22),transparent_24%)]" />
      <div className="mx-auto max-w-[1120px] space-y-8">
        <section className="relative overflow-hidden rounded-[34px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,241,233,0.98))] px-6 py-10 text-center shadow-[0_24px_70px_rgba(113,126,108,0.12)] sm:px-8 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.48),transparent_72%)]" />
          <p className="text-[12px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
            Ceremony Moodboard
          </p>
          <h1 className="mt-3 font-serif text-[3rem] leading-none text-[var(--color-forest)] sm:text-[4rem]">
            Kerala Traditions, Softly Framed
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-stone-700">
            A curated collection of motifs, tones, and ceremonial details adapted for Aarav Krishna&apos;s Noolukettu invitation.
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href={inviteHref}
              className="inline-flex items-center rounded-full border border-[var(--color-sage-strong)]/16 bg-[linear-gradient(180deg,rgba(247,245,240,0.94),rgba(230,234,224,0.9))] px-8 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[var(--color-forest)] shadow-[0_12px_26px_rgba(122,130,114,0.14)] transition duration-300 hover:-translate-y-0.5"
            >
              Back to Invitation
            </Link>
          </div>
        </section>

        <section className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 lg:pb-14">
          <div className="pointer-events-none absolute left-[8%] top-[10%] hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_70%)] blur-2xl lg:block" />
          <div className="pointer-events-none absolute right-[10%] top-[38%] hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(236,225,211,0.58),transparent_72%)] blur-3xl lg:block" />
          <div className="pointer-events-none absolute bottom-[6%] left-[34%] hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.32),transparent_70%)] blur-3xl lg:block" />
          {galleryCards.map((card, index) => (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,241,234,0.44))] p-2 shadow-[0_18px_44px_rgba(113,126,108,0.1)] transition duration-500 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_24px_54px_rgba(113,126,108,0.16)] ${card.className}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-[34px] opacity-0 transition duration-500 group-hover:opacity-100 ${
                  index % 2 === 0
                    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_64%)]"
                    : "bg-[radial-gradient(circle_at_bottom,rgba(241,231,219,0.36),transparent_62%)]"
                }`}
              />
              <div
                className={`relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(242,232,219,0.7))] ${card.aspect}`}
              >
                <div className="pointer-events-none absolute inset-[-6%] rounded-[30px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.52),rgba(245,237,227,0.18)_56%,transparent_84%)] blur-xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,231,227,0.32),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_38%,rgba(92,102,84,0.06)_100%)]" />
                <div className="absolute inset-x-[18%] bottom-0 top-[24%] rounded-t-[220px] border border-[var(--color-baby-gold)]/18 border-b-0" />
                <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-[var(--color-forest)]">
                  <MoodboardIcon icon={card.icon} />
                  <h2 className="mt-5 font-serif text-[2rem] leading-none sm:text-[2.4rem]">
                    {card.title}
                  </h2>
                  <p className="mt-4 max-w-[280px] text-[15px] leading-7 text-stone-600">
                    {card.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
