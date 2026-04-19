"use client";

import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import {
  CradleIcon,
  LotusDividerIcon,
  NilavilakkuIcon,
  TinyFeetIcon,
} from "@/components/ceremony-motifs";
import { invitationData } from "@/lib/invitation-data";
import "./hero.css";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

type HeroSectionProps = {
  guestName: string;
};

export default function HeroSection({ guestName }: HeroSectionProps) {
  const ceremony = invitationData.events.ceremony;

  const handleOpenInvitation = () => {
    const target = document.getElementById("events");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero-screen">
      <div className="hero-screen__background" aria-hidden="true">
        <div className="hero-screen__scene">
          <div className="hero-screen__orb hero-screen__orb--one" />
          <div className="hero-screen__orb hero-screen__orb--two" />
          <div className="hero-screen__orb hero-screen__orb--three" />
          <div className="hero-screen__arch" />
          <div className="hero-screen__motif hero-screen__motif--lamp-left">
            <NilavilakkuIcon className="h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24" />
          </div>
          <div className="hero-screen__motif hero-screen__motif--lamp-right">
            <NilavilakkuIcon className="h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24" />
          </div>
          <div className="hero-screen__motif hero-screen__motif--cradle">
            <CradleIcon className="h-20 w-20 sm:h-28 sm:w-28" />
          </div>
          <div className="hero-screen__motif hero-screen__motif--feet">
            <TinyFeetIcon className="h-14 w-14 sm:h-16 sm:w-16" />
          </div>
        </div>
      </div>

      <div className="hero-screen__edge-fade" aria-hidden="true" />
      <div className="hero-screen__mist hero-screen__mist--top" aria-hidden="true" />
      <div className="hero-screen__mist hero-screen__mist--bottom" aria-hidden="true" />

      <div className="hero-screen__content">
        {guestName ? (
          <p className={`hero-screen__guest ${cormorant.className}`}>
            Invitation for {guestName}
          </p>
        ) : null}

        <p className={`hero-screen__eyebrow ${greatVibes.className}`}>
          {invitationData.intro}
        </p>

        <p className={`hero-screen__subtitle ${cormorant.className}`}>
          {invitationData.heroLine}
        </p>

        <h1 className={`hero-screen__title ${cormorant.className}`}>
          {invitationData.babyName}
        </h1>

        <div className="hero-screen__divider" aria-hidden="true">
          <span className="hero-screen__divider-line" />
          <LotusDividerIcon className="h-5 w-5" />
          <span className="hero-screen__divider-line" />
        </div>

        <p className={`hero-screen__date ${cormorant.className}`}>
          {ceremony.title}
          <span className="hero-screen__date-separator">•</span>
          {invitationData.heroDateLine}
        </p>

        <p className={`hero-screen__venue ${cormorant.className}`}>
          Hosted by {invitationData.parents} with {invitationData.grandparents}
          <br />
          at {invitationData.heroVenueLine}
        </p>

        <button
          type="button"
          className={`hero-screen__button ${cormorant.className}`}
          onClick={handleOpenInvitation}
        >
          View Invitation
        </button>
      </div>
    </section>
  );
}
