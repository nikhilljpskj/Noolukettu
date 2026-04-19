"use client";

import Image from "next/image";
import {
  CradleIcon,
  LotusDividerIcon,
  NilavilakkuIcon,
  TinyFeetIcon,
} from "@/components/ceremony-motifs";
import { invitationData } from "@/lib/invitation-data";
import "./hero.css";

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
          <p className="hero-screen__guest font-serif">Invitation for {guestName}</p>
        ) : null}

        <p className="hero-screen__eyebrow font-script">{invitationData.intro}</p>

        <p className="hero-screen__subtitle font-serif">{invitationData.heroLine}</p>

        <h1 className="hero-screen__title font-serif">{invitationData.babyName}</h1>

        <div className="hero-screen__divider" aria-hidden="true">
          <span className="hero-screen__divider-line" />
          <LotusDividerIcon className="h-5 w-5" />
          <span className="hero-screen__divider-line" />
        </div>

        <p className="hero-screen__date font-serif">
          {ceremony.title}
          <span className="hero-screen__date-separator">&middot;</span>
          {invitationData.heroDateLine}
        </p>

        <p className="hero-screen__venue font-serif">
          Hosted by {invitationData.parents} with {invitationData.grandparents}
          <br />
          at {invitationData.heroVenueLine}
        </p>

        <button
          type="button"
          className="hero-screen__button font-serif"
          onClick={handleOpenInvitation}
        >
          View Invitation
        </button>
      </div>

      <div className="hero-screen__portrait-shell">
        <div className="hero-screen__portrait">
          <div className="hero-screen__portrait-frame">
            <Image
              src={invitationData.heroImageSrc}
              alt={invitationData.heroImageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 767px) 240px, 340px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
