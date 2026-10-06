"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { invitationData } from "@/lib/invitation-data";

type HeroSectionProps = {
  guestName?: string;
};

export default function HeroSection({ guestName }: HeroSectionProps) {
  const [imageSrc, setImageSrc] = useState<string>(invitationData.heroImage);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-10-18T10:30:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#C59B27]/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5ECE0] p-6 shadow-[0_25px_65px_rgba(70,50,30,0.12)] sm:p-10 lg:p-12">
      {/* Subtle Kerala Kasavu Corner Filigree */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-44 w-44 rounded-full bg-[#C59B27]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-[#A83232]/10 blur-2xl" />

      {/* Sacred Invocation & Malayalam Badge */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C59B27]/40 bg-[#FFFDF9] px-4 py-1.5 shadow-sm">
          <span className="text-xs text-[#C59B27]">&#10047;</span>
          <span className="font-serif text-xs font-semibold tracking-widest text-[#5A121C] uppercase">
            ഓം ശ്രീ ഗണേശായ നമഃ &bull; IRUPATHIETTU KETTU
          </span>
          <span className="text-xs text-[#C59B27]">&#10047;</span>
        </div>

        {guestName && (
          <div className="mt-3">
            <span className="inline-block rounded-lg bg-[#5A121C] px-3.5 py-1 text-xs font-semibold text-[#F3E5AB]">
              Warm Welcome, {guestName} &amp; Family
            </span>
          </div>
        )}

        <p className="mt-4 text-xs font-bold tracking-[0.25em] text-[#C59B27] uppercase sm:text-sm">
          A Cherished 28th Day Cradle &amp; Naming Celebration
        </p>

        {/* Baby Grand Title */}
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-[#5A121C] sm:text-5xl lg:text-6xl">
          {invitationData.babyName}
        </h1>

        {/* Lineage & Parents */}
        <p className="mx-auto mt-2 max-w-xl text-xs font-medium text-[#6B6258] sm:text-sm">
          Beloved child of <strong className="text-[#1E1A16]">{invitationData.parents}</strong>
          <br className="hidden sm:inline" />
          <span className="text-[#8C6D1F]">Blessings of Grandparents: {invitationData.grandparentsOne} &amp; {invitationData.grandparentsTwo}</span>
        </p>

        {/* Gold Ornament Divider */}
        <div className="gold-divider my-4">
          <span className="gold-divider-line" />
          <span className="gold-divider-icon">&#9670; &#10047; &#9670;</span>
          <span className="gold-divider-line" />
        </div>
      </div>

      {/* Centerpiece: Arched Baby Portrait */}
      <div className="my-6 flex justify-center">
        <div className="group relative">
          {/* Glowing Aura Ring */}
          <div className="absolute -inset-1.5 rounded-t-[140px] rounded-b-[24px] bg-gradient-to-b from-[#C59B27] via-[#F3E5AB] to-[#C59B27] opacity-75 blur-sm transition duration-500 group-hover:opacity-100" />

          {/* Arched Photo Frame */}
          <div className="relative h-[320px] w-[260px] overflow-hidden rounded-t-[136px] rounded-b-[20px] border-2 border-white bg-white shadow-2xl sm:h-[380px] sm:w-[300px]">
            <Image
              src={imageSrc}
              alt="Baby Aarav Krishna Portrait"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageSrc(invitationData.heroFallbackImage)}
            />

            {/* Bottom Inner Badge */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-4 text-center">
              <span className="font-serif text-sm font-semibold tracking-wide text-white">
                Sunday, 18th October 2026
              </span>
              <span className="block text-[11px] text-[#F3E5AB]">10:30 AM &bull; Kazhakoottam, Kerala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auspicious Muhurtham Countdown */}
      <div className="mx-auto max-w-lg text-center">
        <span className="text-[11px] font-bold tracking-widest text-[#8C6D1F] uppercase">
          Auspicious Muhurtham Countdown
        </span>

        <div className="mt-2.5 grid grid-cols-4 gap-2.5 sm:gap-4">
          <div className="rounded-2xl border border-[#C59B27]/30 bg-white/80 p-2.5 shadow-sm backdrop-blur">
            <span className="block font-serif text-2xl font-bold text-[#5A121C] sm:text-3xl">
              {pad(timeLeft.days)}
            </span>
            <span className="text-[10px] font-semibold text-[#6B6258] uppercase">Days</span>
          </div>

          <div className="rounded-2xl border border-[#C59B27]/30 bg-white/80 p-2.5 shadow-sm backdrop-blur">
            <span className="block font-serif text-2xl font-bold text-[#5A121C] sm:text-3xl">
              {pad(timeLeft.hours)}
            </span>
            <span className="text-[10px] font-semibold text-[#6B6258] uppercase">Hours</span>
          </div>

          <div className="rounded-2xl border border-[#C59B27]/30 bg-white/80 p-2.5 shadow-sm backdrop-blur">
            <span className="block font-serif text-2xl font-bold text-[#5A121C] sm:text-3xl">
              {pad(timeLeft.minutes)}
            </span>
            <span className="text-[10px] font-semibold text-[#6B6258] uppercase">Mins</span>
          </div>

          <div className="rounded-2xl border border-[#C59B27]/30 bg-white/80 p-2.5 shadow-sm backdrop-blur">
            <span className="block font-serif text-2xl font-bold text-[#5A121C] sm:text-3xl">
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[10px] font-semibold text-[#6B6258] uppercase">Secs</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#rituals"
            className="rounded-full border border-[#C59B27] bg-[#5A121C] px-6 py-2.5 text-xs font-bold text-[#F3E5AB] shadow-md transition-all hover:bg-[#A83232] hover:shadow-lg"
          >
            Explore Sacred Rituals &rarr;
          </a>
          <a
            href="#rsvp"
            className="rounded-full border border-[#C59B27]/60 bg-white px-6 py-2.5 text-xs font-bold text-[#5A121C] shadow-sm transition-all hover:border-[#C59B27] hover:bg-[#FAF7F2]"
          >
            Send Blessings / RSVP
          </a>
        </div>
      </div>
    </div>
  );
}
