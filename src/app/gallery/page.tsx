import Image from "next/image";
import Link from "next/link";

const galleryCards = [
  {
    title: "First Blessings",
    body: "A tender newborn portrait that sets the tone for a warm and prayerful naming celebration.",
    className:
      "sm:col-span-2 lg:col-span-3 lg:row-span-2 lg:translate-y-8 lg:rotate-[-2deg]",
    aspect: "aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/6]",
    imageSrc: "/assets/cute-baby-born.jpg",
    imageAlt: "Premium baby naming ceremony portrait",
    objectPosition: "object-center",
  },
  {
    title: "Soft Golden Light",
    body: "A gentle baby close-up framed with warm tones, echoing the quiet glow of the ceremony morning.",
    className: "lg:col-span-2 lg:-translate-y-8 lg:rotate-[1.8deg]",
    aspect: "aspect-[5/4] lg:aspect-[4/5]",
    imageSrc: "/assets/babyicon.jpg",
    imageAlt: "Baby portrait paired with premium naming ceremony styling",
    objectPosition: "object-center",
  },
  {
    title: "Little Details",
    body: "A sweet portrait study that highlights the softness, innocence, and calm beauty of the day.",
    className: "lg:col-span-1 lg:translate-y-10 lg:rotate-[-1.5deg]",
    aspect: "aspect-[5/6] sm:aspect-[4/5]",
    imageSrc: "/assets/baby5.jpg",
    imageAlt: "Baby photo for the naming ceremony moodboard",
    objectPosition: "object-center",
  },
  {
    title: "Gentle Portrait",
    body: "A serene baby image paired with airy tones and floral softness for an elegant invitation mood.",
    className: "lg:col-span-2 lg:-translate-y-12 lg:rotate-[2deg]",
    aspect: "aspect-[5/4]",
    imageSrc: "/assets/baby.jpg",
    imageAlt: "Baby portrait with soft floral premium styling",
    objectPosition: "object-center",
  },
  {
    title: "Warm Celebration",
    body: "This portrait carries the bright, joyful, and softly premium feeling of Baby Name's special day.",
    className: "sm:col-span-2 lg:col-span-2 lg:translate-y-5 lg:rotate-[-1.2deg]",
    aspect: "aspect-[5/6] sm:aspect-[4/5] lg:aspect-[3/4]",
    imageSrc: "/assets/cute-baby.jpg",
    imageAlt: "Elegant baby portrait in a premium palette",
    objectPosition: "object-center",
  },
  {
    title: "Cherished Moment",
    body: "A calm and affectionate baby portrait that reflects the intimacy of a family gathering at home.",
    className: "lg:col-span-2 lg:-translate-y-4 lg:rotate-[1.2deg]",
    aspect: "aspect-[5/4] lg:aspect-[4/5]",
    imageSrc: "/assets/baby2.jpg",
    imageAlt: "Baby ceremony styling for a family gathering invitation",
    objectPosition: "object-center",
  },
  {
    title: "Tender Expressions",
    body: "A closer baby-focused frame that adds warmth, charm, and emotional softness to the visual story.",
    className: "lg:col-span-3 lg:-translate-y-6 lg:rotate-[-1.4deg]",
    aspect: "aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/4]",
    imageSrc: "/assets/baby5.jpg",
    imageAlt: "Baby invitation detail photo with refined premium styling",
    objectPosition: "object-center",
  },
  {
    title: "A Loving Welcome",
    body: "A welcoming portrait that beautifully introduces the baby at the heart of this Noolukettu invitation.",
    className: "sm:col-span-2 lg:col-span-3 lg:translate-y-10 lg:rotate-[1.6deg]",
    aspect: "aspect-[5/6] sm:aspect-[4/5] lg:aspect-[6/5]",
    imageSrc: "/assets/cute-baby-born.jpg",
    imageAlt: "Kerala naming ceremony baby welcome image",
    objectPosition: "object-center",
  },
] as const;

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
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbf5ee_0%,#f5eadc_28%,#efe4d6_60%,#e9ddd1_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.62),transparent_24%),radial-gradient(circle_at_top_right,rgba(214,231,227,0.24),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(245,223,196,0.28),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.18),transparent_24%)]" />
      <div className="mx-auto max-w-[1120px] space-y-8">
        <section className="relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(248,241,233,0.96)_46%,rgba(232,241,238,0.82)_100%)] px-4 py-8 text-center shadow-[0_24px_70px_rgba(113,126,108,0.12)] sm:rounded-[34px] sm:px-8 sm:py-10 lg:px-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.56),transparent_72%)]" />
          <div className="pointer-events-none absolute -left-12 top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5),transparent_72%)] blur-2xl" />
          <div className="pointer-events-none absolute -right-8 bottom-6 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(214,231,227,0.45),transparent_72%)] blur-2xl" />
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-sage-strong)] sm:text-[12px] sm:tracking-[0.32em]">
            Photo Gallery
          </p>
          <h1 className="mt-3 font-serif text-[2.25rem] leading-none text-[var(--color-forest)] sm:text-[4rem]">
            Moments, Textures, And Tender Details
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-stone-700 sm:mt-4 sm:text-[17px] sm:leading-8">
            Explore a brighter visual collection of baby portraits, ceremonial
            styling, soft Kerala accents, and premium details created for Baby
            Name&apos;s Noolukettu invitation.
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-[18px] border border-white/70 bg-white/66 px-4 py-4 shadow-[0_12px_24px_rgba(113,126,108,0.08)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)]">
                Portrait Mood
              </p>
              <p className="mt-2 text-[14px] leading-6 text-stone-700">
                Soft baby imagery with a warm premium finish.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/70 bg-white/66 px-4 py-4 shadow-[0_12px_24px_rgba(113,126,108,0.08)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)]">
                Ceremony Style
              </p>
              <p className="mt-2 text-[14px] leading-6 text-stone-700">
                Kerala tradition, gold accents, and quiet elegance.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/70 bg-white/66 px-4 py-4 shadow-[0_12px_24px_rgba(113,126,108,0.08)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)]">
                Invitation Feel
              </p>
              <p className="mt-2 text-[14px] leading-6 text-stone-700">
                Bright, heartfelt, and designed to feel celebratory.
              </p>
            </div>
          </div>
          <div className="mt-7 flex justify-center">
            <Link
              href={inviteHref}
              className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-sage-strong)]/16 bg-[linear-gradient(180deg,rgba(247,245,240,0.94),rgba(230,234,224,0.9))] px-6 py-3 text-[10px] uppercase tracking-[0.18em] text-[var(--color-forest)] shadow-[0_12px_26px_rgba(122,130,114,0.14)] transition duration-300 hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Back to Invitation
            </Link>
          </div>
        </section>

        <section className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 lg:pb-14">
          <div className="pointer-events-none absolute left-[8%] top-[10%] hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.46),transparent_70%)] blur-2xl lg:block" />
          <div className="pointer-events-none absolute right-[10%] top-[38%] hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(236,225,211,0.62),transparent_72%)] blur-3xl lg:block" />
          <div className="pointer-events-none absolute bottom-[6%] left-[34%] hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(214,231,227,0.26),transparent_70%)] blur-3xl lg:block" />

          {galleryCards.map((card, index) => (
            <article
              key={card.title}
              className={`group relative overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,241,234,0.5))] p-2 shadow-[0_18px_44px_rgba(113,126,108,0.1)] transition duration-500 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_28px_64px_rgba(113,126,108,0.18)] sm:rounded-[34px] ${card.className}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-[34px] opacity-0 transition duration-500 group-hover:opacity-100 ${
                  index % 2 === 0
                    ? "bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_64%)]"
                    : "bg-[radial-gradient(circle_at_bottom,rgba(241,231,219,0.42),transparent_62%)]"
                }`}
              />

              <div
                className={`relative overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(242,232,219,0.7))] sm:rounded-[28px] ${card.aspect}`}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className={`object-cover ${card.objectPosition}`}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(45,58,47,0.08)_42%,rgba(39,49,43,0.78)_100%)]" />
                <div className="pointer-events-none absolute inset-x-[18%] bottom-0 top-[24%] rounded-t-[220px] border border-[var(--color-baby-gold)]/24 border-b-0" />
                <div className="pointer-events-none absolute left-4 top-4 h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34),transparent_72%)] blur-xl sm:h-20 sm:w-20" />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-7">
                  <h2 className="font-serif text-[1.6rem] leading-none sm:text-[2.4rem]">
                    {card.title}
                  </h2>
                  <p className="mt-3 max-w-[300px] text-[13px] leading-6 text-white/88 sm:mt-4 sm:text-[15px] sm:leading-7">
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
