"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";
import HeroSection from "@/components/hero-section";
import { SacredRitualsSection } from "@/components/SacredRitualsSection";
import { EventCard } from "@/components/event-card";
import { RSVPSection } from "@/components/rsvp-section";
import { invitationData } from "@/lib/invitation-data";

function FeatureTiles({ guestName }: { guestName: string }) {
  const storyHref = guestName
    ? `/our-story?guest=${encodeURIComponent(guestName)}`
    : "/our-story";
  const galleryHref = guestName
    ? `/gallery?guest=${encodeURIComponent(guestName)}`
    : "/gallery";

  const items = [
    {
      title: "Our Little Story",
      subtitle: "Milestones & First Days",
      body: "A gentle 6-step polaroid journey of Aarav's arrival and blessing",
      icon: "\uD83D\uDCD6",
      href: storyHref,
      badge: "Polaroid Archive",
    },
    {
      title: "Tender Gallery",
      subtitle: "Sweet Little Moments",
      body: "Cherished portraits of little Aarav Krishna with family & loved ones",
      icon: "\uD83D\uDCF8",
      href: galleryHref,
      badge: "Photo Memories",
    },
    {
      title: "Grand Kalyana Sadya",
      subtitle: "Traditional Feast",
      body: "Banana leaf feast with authentic Parippu, Payasam & Pradhaman",
      icon: "\uD83C\uDF72",
      href: "#events",
      badge: "Banana Leaf Lunch",
    },
    {
      title: "Send Blessings / RSVP",
      subtitle: "Join the Gathering",
      body: "Kindly confirm your presence and share warm prayers for the baby",
      icon: "\u2709\uFE0F",
      href: "#rsvp",
      badge: "RSVP Portal",
    },
  ];

  return (
    <section className="my-8">
      <div className="text-center mb-6">
        <span className="text-xs font-bold tracking-[0.2em] text-[#C59B27] uppercase">
          Explore Celebration Chapters
        </span>
        <h2 className="mt-1 font-serif text-3xl font-bold text-[#5A121C]">
          Little Moments &bull; Lasting Joy
        </h2>
        <div className="gold-divider my-3">
          <span className="gold-divider-line" />
          <span className="gold-divider-icon">&#10047;</span>
          <span className="gold-divider-line" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="kerala-glass-card group flex flex-col justify-between p-6 text-center"
          >
            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C59B27]/40 bg-[#FFFDF9] text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <span className="mt-3 inline-block rounded-full bg-[#5A121C]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#5A121C]">
                {item.badge}
              </span>

              <h3 className="mt-2 font-serif text-xl font-bold text-[#5A121C]">
                {item.title}
              </h3>
              <p className="text-[11px] font-semibold text-[#8C6D1F]">
                {item.subtitle}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-[#6B6258]">
                {item.body}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#C59B27]/20">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A121C] transition hover:text-[#C59B27]"
              >
                View Chapter &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function InvitationApp() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("guest")?.trim() ?? "";
  const hasGuestParam = Boolean(guestName);

  return (
    <main className="relative min-h-screen bg-[#FAF7F2]">
      {/* Floating Audio Controller */}
      <AudioPlayer />

      {/* Top Floating Navbar */}
      <Navbar guestName={guestName} />

      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {/* 1. Hero Showcase Section */}
        <section id="home">
          <HeroSection guestName={guestName} />
        </section>

        {/* 2. Five Sacred Noolukettu Rituals */}
        <SacredRitualsSection />

        {/* 3. Event Details (Ceremony & Kalyana Sadya) */}
        <section id="events" className="space-y-4 scroll-mt-20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C59B27] uppercase">
              Order of the Day
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[#5A121C]">
              Ceremony &amp; Kalyana Sadya
            </h2>
            <div className="gold-divider my-3">
              <span className="gold-divider-line" />
              <span className="gold-divider-icon">&#10047;</span>
              <span className="gold-divider-line" />
            </div>
          </div>

          <EventCard event={invitationData.events.ceremony} variant="ceremony" />
          <EventCard event={invitationData.events.reception} variant="reception" />
        </section>

        {/* 4. Feature Navigation Hub (Story, Gallery, Feast) */}
        <FeatureTiles guestName={guestName} />

        {/* 5. Venue Information & Map */}
        <section id="venue" className="kerala-glass-card p-6 sm:p-8 scroll-mt-20">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
                Celebration Venue
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#5A121C] sm:text-3xl mt-1">
                House No 2, Kazhakoottam
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6B6258] sm:text-sm">
                Near Kazhakoottam Junction, Thiruvananthapuram, Kerala. Ample parking available for all guests and family.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={invitationData.events.ceremony.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#C59B27] bg-[#5A121C] px-5 py-2 text-xs font-bold text-[#F3E5AB] shadow transition hover:bg-[#A83232]"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-[#C59B27]/40 shadow-inner sm:h-[260px]">
                <iframe
                  title="Venue Map"
                  src="https://maps.google.com/maps?q=Kazhakoottam%2C%20Thiruvananthapuram%2C%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. RSVP & Blessing Section */}
        <RSVPSection guestName={guestName} hasGuestParam={hasGuestParam} />

        {/* Footer */}
        <footer className="my-6 text-center text-xs text-[#6B6258]">
          <div className="gold-divider my-4">
            <span className="gold-divider-line" />
            <span className="gold-divider-icon">&#9670; &#10047; &#9670;</span>
            <span className="gold-divider-line" />
          </div>
          <p className="font-serif text-base font-bold text-[#5A121C]">
            Aarav Krishna &bull; 28th Day Noolukettu
          </p>
          <p className="text-[11px] text-[#8C6D1F] mt-1">
            With love &amp; blessings from {invitationData.parents} &amp; Family
          </p>
        </footer>
      </div>
    </main>
  );
}
