"use client";

import Image from "next/image";
import { LotusDividerIcon } from "@/components/ceremony-motifs";
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
        <Image
          src="/assets/hero.jpg"
          alt="Premium baby ceremony background"
          fill
          priority
          className="hero-screen__bg-image"
          sizes="100vw"
        />
        <div className="hero-screen__bg-wash" />
        <div className="hero-screen__bg-glow hero-screen__bg-glow--one" />
        <div className="hero-screen__bg-glow hero-screen__bg-glow--two" />
        <div className="hero-screen__curve hero-screen__curve--top" />
        <div className="hero-screen__curve hero-screen__curve--bottom" />
      </div>

      <div className="hero-screen__layout">
        <div className="hero-screen__panel">
          {guestName ? (
            <p className="hero-screen__guest font-serif">Invitation for {guestName}</p>
          ) : null}

          <p className="hero-screen__kicker">Noolukettu Invitation</p>
          <p className="hero-screen__eyebrow font-script">{invitationData.intro}</p>

          <h1 className="hero-screen__title font-serif">
            Blessing The Name
            <span className="hero-screen__title-name">{invitationData.babyName}</span>
          </h1>

          <p className="hero-screen__lead font-serif">
            With heartfelt joy, we invite you to join us for our baby&apos;s
            28th day naming ceremony, a gentle gathering filled with prayer,
            blessings, and family warmth.
          </p>

          <div className="hero-screen__divider" aria-hidden="true">
            <span className="hero-screen__divider-line" />
            <LotusDividerIcon className="h-5 w-5" />
            <span className="hero-screen__divider-line" />
          </div>

          <div className="hero-screen__meta-grid">
            <div className="hero-screen__meta-card">
              <span className="hero-screen__meta-label">Hosted By</span>
              <span className="hero-screen__meta-value font-serif">
                {invitationData.parents}
              </span>
            </div>

            <div className="hero-screen__meta-card">
              <span className="hero-screen__meta-label">Blessings Of</span>
              <span className="hero-screen__meta-value font-serif">
                {invitationData.grandparents}
              </span>
            </div>

            <div className="hero-screen__meta-card hero-screen__meta-card--wide">
              <span className="hero-screen__meta-label">Ceremony Details</span>
              <span className="hero-screen__meta-value font-serif">
                {ceremony.dateLabel} | {ceremony.timeLabel}
              </span>
              <span className="hero-screen__meta-subvalue">
                {invitationData.heroVenueLine}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="hero-screen__button font-serif"
            onClick={handleOpenInvitation}
          >
            View Invitation
          </button>
        </div>

        <div className="hero-screen__float-card" aria-hidden="true">
          <span className="hero-screen__float-label">Ceremony</span>
          <span className="hero-screen__float-title font-serif">{ceremony.title}</span>
          <span className="hero-screen__float-copy">
            A soft morning of prayer, naming, and blessings.
          </span>
        </div>
      </div>
    </section>
  );
}
