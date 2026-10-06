"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";

type StoryMilestone = {
  step: string;
  year: string;
  title: string;
  malayalam: string;
  desc: string;
  polaroidImg: string;
  polaroidNote: string;
  tilt: "tilt-left" | "tilt-right";
};

const milestones: StoryMilestone[] = [
  {
    step: "01",
    year: "SEPTEMBER 2026",
    title: "A Little Star is Born",
    malayalam: "ജനനം • ആദ്യ നിമിഷം",
    desc: "A quiet morning blessed with the gentlest first cry. Aarav Krishna entered the world, filling our home, hearts, and prayers with a radiant new light.",
    polaroidImg: "/assets/Baby1.jpg",
    polaroidNote: "Sweetest first breath",
    tilt: "tilt-left",
  },
  {
    step: "02",
    year: "WEEK ONE",
    title: "The Warmth of Home",
    malayalam: "വീട്ടിലെ ആദ്യ ചുവടുകൾ",
    desc: "Wrapped in soft white cotton Kasavu blankets, Aarav arrived home. Grandparents lit the traditional brass Nilavilakku and welcomed him with prayers of health and joy.",
    polaroidImg: "/assets/cute-baby.jpg",
    polaroidNote: "Nilavilakku glow at home",
    tilt: "tilt-right",
  },
  {
    step: "03",
    year: "WEEK TWO",
    title: "Grandmother's Lullabies",
    malayalam: "താരാട്ടുപാട്ടും കളിചിരികളും",
    desc: "Listening to soft traditional Malayalam lullabies ('Omanathinkal Kidavo'). Every tiny yawn, stretch, and sleepy smile became a treasure for the whole family.",
    polaroidImg: "/assets/baby2.jpg",
    polaroidNote: "Omanathinkal Kidavo",
    tilt: "tilt-left",
  },
  {
    step: "04",
    year: "WEEK THREE",
    title: "Choosing the Sacred Name",
    malayalam: "പേര് തിരഞ്ഞെടുക്കൽ",
    desc: "With blessings from elders and guided by traditional horoscopes, the name 'Aarav Krishna' was chosen—signifying peaceful wisdom and divine grace.",
    polaroidImg: "/assets/baby.jpg",
    polaroidNote: "Aarav • Peaceful Wisdom",
    tilt: "tilt-right",
  },
  {
    step: "05",
    year: "OCTOBER 2026",
    title: "Preparing the Wooden Thottil",
    malayalam: "തൊട്ടിലൊരുക്കൽ",
    desc: "Decorating the teak wood cradle with fragrant jasmine garlands, tender mango leaves, and auspicious black-gold Aranjanam threads for the 28th-day ceremony.",
    polaroidImg: "/assets/cute-baby-born.jpg",
    polaroidNote: "Jasmine & gold Aranjanam",
    tilt: "tilt-left",
  },
  {
    step: "06",
    year: "18 OCTOBER 2026",
    title: "The 28th Day &bull; Noolukettu",
    malayalam: "ഇരുപത്തിയെട്ടുകെട്ട് ഉത്സവം",
    desc: "Surrounded by loving family and friends, we tie the sacred waistband, whisper his name, and celebrate with a grand Kalyana Sadya feast.",
    polaroidImg: "/assets/hero.jpg",
    polaroidNote: "Together in Blessings & Joy",
    tilt: "tilt-right",
  },
];

export function OurStorySection({ guestName = "" }: { guestName?: string }) {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <AudioPlayer />
      <Navbar guestName={guestName} />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#5A121C] via-[#4A0E17] to-[#360910] px-4 py-16 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#C59B27]/50 bg-black/25 px-4 py-1 text-xs font-bold tracking-widest text-[#F3E5AB] uppercase">
            Aarav&apos;s Little Story &bull; 6 Milestones
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[#F3E5AB] sm:text-5xl lg:text-6xl">
            From the First Breath to Noolukettu
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-xs text-[#E8D8C8] sm:text-sm">
            &ldquo;Some arrivals fill a home with a new kind of light.&rdquo; A gentle chronicle of little Aarav Krishna&apos;s first 28 days of love, laughter, and family warmth.
          </p>

          <div className="gold-divider my-5">
            <span className="gold-divider-line" />
            <span className="gold-divider-icon">&#10047;</span>
            <span className="gold-divider-line" />
          </div>
        </div>
      </section>

      {/* Central Polaroid Spine Timeline */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="relative">
          {/* Vertical Spine Line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#C59B27]/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={m.step}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Polaroid Card Side */}
                  <div className="w-full pl-10 md:w-1/2 md:pl-0 flex justify-center">
                    <div
                      className={`polaroid-card max-w-[260px] w-full transition-transform duration-300 ${
                        m.tilt === "tilt-left" ? "-rotate-2" : "rotate-2"
                      }`}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-stone-100">
                        <Image
                          src={m.polaroidImg}
                          alt={m.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="polaroid-caption">{m.polaroidNote}</p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 top-2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#C59B27] bg-[#FAF7F2] text-xs font-bold text-[#5A121C] shadow md:left-1/2">
                    {m.step}
                  </div>

                  {/* Narrative Text Side */}
                  <div className="w-full pl-10 md:w-1/2 md:pl-0 text-left">
                    <div className="kerala-glass-card p-5 sm:p-6">
                      <span className="text-[10px] font-bold tracking-widest text-[#C59B27] uppercase">
                        Step {m.step} &bull; {m.year}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#5A121C] mt-1">
                        {m.title}
                      </h3>
                      <span className="block text-xs font-semibold text-[#8C6D1F] mb-2">
                        {m.malayalam}
                      </span>
                      <p className="text-xs leading-relaxed text-[#6B6258]">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to RSVP */}
        <div className="mt-16 text-center">
          <div className="kerala-glass-card mx-auto max-w-xl p-8">
            <span className="text-2xl">&#10047;</span>
            <h3 className="font-serif text-2xl font-bold text-[#5A121C] mt-2">
              Join Us in Celebrating Aarav
            </h3>
            <p className="mt-2 text-xs text-[#6B6258]">
              Your presence and loving blessings are the greatest gifts for our little baby.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Link
                href="/#rsvp"
                className="rounded-full border border-[#C59B27] bg-[#5A121C] px-6 py-2.5 text-xs font-bold text-[#F3E5AB] shadow transition hover:bg-[#A83232]"
              >
                Send Blessings &amp; RSVP &rarr;
              </Link>
              <Link
                href="/"
                className="rounded-full border border-[#C59B27]/40 bg-white px-6 py-2.5 text-xs font-bold text-[#5A121C] transition hover:bg-[#FAF7F2]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
