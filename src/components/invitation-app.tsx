"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DecorativeLayer } from "@/components/decorative-layer";
import { EventCard } from "@/components/event-card";
import HeroSection from "@/components/hero-section";
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
      title: "Blessing Note",
      body: "A quiet page for the meaning behind Baby Name's naming day",
      icon: "\u273F",
      href: storyHref,
    },
    {
      title: "Ceremony Moodboard",
      body: "Traditional Kerala details and soft ceremonial motifs",
      icon: "\u25CC",
      href: galleryHref,
    },
    {
      title: "Venue Details",
      body: "Address, timing and hosting information for the gathering",
      icon: "\u2316",
    },
    {
      title: "RSVP",
      body: "Share your name and blessings with the family",
      icon: "\u2709",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,243,237,0.98))] px-5 py-6 text-center shadow-[0_16px_42px_rgba(113,126,108,0.1)] sm:px-6 sm:py-7"
        >
          {item.href ? (
            <Link href={item.href} className="block">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-sage-strong)]/16 bg-[#f7f6f1] text-[24px] text-[var(--color-sage-strong)] sm:h-16 sm:w-16 sm:text-[28px]">
                {item.icon}
              </div>
              <h3 className="mt-4 font-serif text-[1.7rem] leading-none text-[var(--color-forest)] sm:mt-5 sm:text-[2rem]">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[200px] text-[15px] leading-6 text-stone-600 sm:max-w-[180px] sm:text-[16px] sm:leading-7">
                {item.body}
              </p>
            </Link>
          ) : (
            <>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-sage-strong)]/16 bg-[#f7f6f1] text-[24px] text-[var(--color-sage-strong)] sm:h-16 sm:w-16 sm:text-[28px]">
                {item.icon}
              </div>
              <h3 className="mt-4 font-serif text-[1.7rem] leading-none text-[var(--color-forest)] sm:mt-5 sm:text-[2rem]">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[200px] text-[15px] leading-6 text-stone-600 sm:max-w-[180px] sm:text-[16px] sm:leading-7">
                {item.body}
              </p>
            </>
          )}
        </article>
      ))}
    </section>
  );
}

function InvitationNavigation({ guestName }: { guestName: string }) {
  const galleryHref = guestName
    ? `/gallery?guest=${encodeURIComponent(guestName)}`
    : "/gallery";
  const storyHref = guestName
    ? `/our-story?guest=${encodeURIComponent(guestName)}`
    : "/our-story";

  const links = [
    { label: "Ceremony", href: "#ceremony" },
    { label: "Blessings & Lunch", href: "#reception" },
    { label: "Gallery", href: galleryHref, external: false },
    { label: "Blessing Note", href: storyHref, external: false },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <section className="rounded-[26px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,243,237,0.96))] px-4 py-4 shadow-[0_18px_42px_rgba(113,126,108,0.08)] sm:px-6 sm:py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-sage-strong)] sm:text-[11px] sm:tracking-[0.3em]">
            Explore The Invitation
          </p>
          <p className="mt-2 text-[14px] leading-6 text-stone-600 sm:text-[15px] sm:leading-7">
            Move between the ceremony details, gallery, blessing note, and RSVP.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-sage-strong)]/14 bg-white/88 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-forest)] transition duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.22em]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-sage-strong)]/14 bg-white/88 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-forest)] transition duration-300 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.22em]"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function InvitationApp() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("guest")?.trim() ?? "";
  const hasGuestParam = Boolean(guestName);

  return (
    <main className="relative overflow-hidden bg-[var(--color-ivory)]">
      <DecorativeLayer />

      <div className="mx-auto flex min-h-screen w-full max-w-[1120px] flex-col gap-4 px-3 py-3 sm:px-6 sm:py-6 lg:px-8">
        <section className="relative" id="hero">
          <HeroSection guestName={guestName} />
        </section>

        <section className="space-y-4" id="events">
          <InvitationNavigation guestName={guestName} />
          <EventCard
            event={invitationData.events.ceremony}
            variant="ceremony"
          />
          <EventCard event={invitationData.events.reception} variant="reception" />
          <FeatureTiles guestName={guestName} />
        </section>

        <RSVPSection guestName={guestName} hasGuestParam={hasGuestParam} />
      </div>
    </main>
  );
}
