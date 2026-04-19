"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  CradleIcon,
  LotusDividerIcon,
  NilavilakkuIcon,
  TinyFeetIcon,
} from "@/components/ceremony-motifs";

type StorySegment = {
  id: string;
  align: "left" | "right";
  tone?: "light" | "deep";
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
  quote?: string;
  motif: "cradle" | "feet" | "lamp" | "lotus";
  emphasis?: boolean;
};

const storySegments: StorySegment[] = [
  {
    id: "arrival",
    align: "right",
    tone: "light",
    eyebrow: "A New Chapter",
    title: "A Little Life, Deeply Loved",
    motif: "cradle",
    paragraphs: [
      "Aarav Krishna arrived into our world with quiet wonder and so much joy.",
      "In these first tender weeks, every prayer, every smile, and every blessing has felt like a gift held close.",
    ],
    quote: '"Some names are spoken first in love, then carried for a lifetime."',
    emphasis: true,
  },
  {
    id: "tradition",
    align: "left",
    tone: "deep",
    eyebrow: "Tradition",
    title: "The Meaning Of Noolukettu",
    motif: "lotus",
    paragraphs: [
      "The 28th day naming ceremony is a beautiful family tradition, where a child is welcomed with prayer, blessings, and a name chosen with love.",
      "It is a day of gratitude, remembrance, and hope for the journey ahead.",
    ],
  },
  {
    id: "family",
    align: "right",
    tone: "light",
    eyebrow: "Family",
    title: "Held By Generations",
    motif: "lamp",
    paragraphs: [
      "Hosted by Nikhil and Anjana, and blessed by Raghavan and Sreedevi, this gathering is made even more meaningful by the warmth of family and friends.",
      "Your presence will add light to one of Aarav's very first milestones.",
    ],
  },
  {
    id: "blessing",
    align: "left",
    tone: "deep",
    eyebrow: "With Love",
    title: "Join Us In Blessing Aarav",
    motif: "feet",
    paragraphs: [
      "We would be delighted to welcome you for the naming ritual, family blessings, and a gentle afternoon of togetherness.",
      "May this be the first of many beautiful memories surrounding Aarav Krishna.",
    ],
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function StoryIllustration({
  motif,
  tone = "light",
  emphasis = false,
}: {
  motif: StorySegment["motif"];
  tone?: "light" | "deep";
  emphasis?: boolean;
}) {
  const auraClass =
    tone === "deep"
      ? "bg-[radial-gradient(circle_at_center,rgba(239,228,214,0.94),rgba(214,231,227,0.42)_42%,transparent_78%)]"
      : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(247,242,235,0.58)_46%,transparent_78%)]";
  const washClass =
    tone === "deep"
      ? "bg-[radial-gradient(ellipse_at_center,rgba(239,228,214,0.88),rgba(201,169,107,0.18)_54%,transparent_74%)]"
      : "bg-[radial-gradient(ellipse_at_center,rgba(214,231,227,0.5),transparent_72%)]";

  return (
    <motion.div
      variants={reveal}
      className={`relative mx-auto w-full ${
        emphasis ? "max-w-[680px]" : "max-w-[560px]"
      }`}
    >
      <div className={`pointer-events-none absolute inset-[-10%] rounded-[46px] ${auraClass} blur-[34px]`} />
      <div className={`pointer-events-none absolute inset-x-[-8%] top-[6%] h-[88%] rounded-[42px] ${washClass} blur-2xl`} />
      <div
        className={`relative overflow-hidden rounded-[30px] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(244,236,226,0.5))] ${
          emphasis ? "aspect-[5/4]" : "aspect-[4/3]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.76),transparent_56%),linear-gradient(180deg,rgba(214,231,227,0.2),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-x-[16%] bottom-0 top-[22%] rounded-t-[220px] border border-[var(--color-baby-gold)]/24 border-b-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.02))]" />
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-forest)]">
          {motif === "cradle" ? <CradleIcon className="h-28 w-28 sm:h-36 sm:w-36" /> : null}
          {motif === "feet" ? <TinyFeetIcon className="h-24 w-24 sm:h-32 sm:w-32" /> : null}
          {motif === "lamp" ? <NilavilakkuIcon className="h-24 w-24 sm:h-32 sm:w-32" /> : null}
          {motif === "lotus" ? <LotusDividerIcon className="h-24 w-24 sm:h-32 sm:w-32" /> : null}
        </div>
      </div>
    </motion.div>
  );
}

export function OurStorySection({ guestName = "" }: { guestName?: string }) {
  const invitationHref = guestName
    ? `/?guest=${encodeURIComponent(guestName)}`
    : "/";

  return (
    <section
      className="relative overflow-hidden bg-[#F5EDE3] px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(255,255,255,0.55), transparent 26%), radial-gradient(circle at top right, rgba(214,231,227,0.22), transparent 24%), radial-gradient(circle at bottom left, rgba(239,228,214,0.48), transparent 30%), linear-gradient(180deg, #f8f1e8 0%, #f5ede3 34%, #f1e7db 68%, #efe4d6 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E\")",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_68%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_28%,rgba(239,228,214,0.08)_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="mb-10 flex justify-center sm:mb-12 sm:justify-start"
        >
          <Link
            href={invitationHref}
            className="inline-flex items-center rounded-full border border-[var(--color-sage-strong)]/18 bg-white/58 px-5 py-2.5 font-serif text-[13px] uppercase tracking-[0.18em] text-[var(--color-forest)] shadow-[0_8px_24px_rgba(122,132,114,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/72"
          >
            Back to Invitation
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-serif text-[12px] uppercase tracking-[0.38em] text-[var(--color-sage-strong)]">
            Blessing Note
          </p>
          <h2 className="mt-4 font-serif text-[2.9rem] leading-[0.92] text-[var(--color-forest)] sm:text-[4rem]">
            A Tender Celebration
            <br />
            Of Name, Family, And Blessings
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-[1.35rem] italic leading-relaxed text-[var(--color-forest)]/78 sm:text-[1.6rem]">
            &quot;A name is the first gift a family offers with prayer, memory, and love.&quot;
          </p>
        </motion.div>

        <div className="mt-20 space-y-20 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-28">
          {storySegments.map((segment) => {
            const imageFirst = segment.align === "left";

            return (
              <motion.article
                key={segment.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                variants={reveal}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  imageFirst ? "" : "lg:[&>div:first-child]:order-2"
                }`}
              >
                <div className="relative">
                  <StoryIllustration
                    motif={segment.motif}
                    emphasis={segment.emphasis}
                    tone={segment.tone}
                  />
                </div>

                <div
                  className={`relative ${
                    segment.emphasis
                      ? "lg:px-2"
                      : imageFirst
                        ? "lg:pr-4"
                        : "lg:pl-4"
                  }`}
                >
                  <div className="pointer-events-none absolute -inset-x-4 -inset-y-5 rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28),transparent_72%)] blur-2xl" />
                  <div className="relative">
                    {segment.eyebrow ? (
                      <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-sage-strong)]">
                        {segment.eyebrow}
                      </p>
                    ) : null}

                    {segment.title ? (
                      <h3 className="mt-4 font-serif text-[2.2rem] leading-[0.95] text-[var(--color-forest)] sm:text-[2.9rem]">
                        {segment.title}
                      </h3>
                    ) : null}

                    <div className="mt-5 space-y-5 font-serif text-[1.12rem] leading-[1.9] text-stone-700 sm:text-[1.18rem]">
                      {segment.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {segment.quote ? (
                      <motion.blockquote
                        variants={reveal}
                        className={`mt-8 border-l border-[var(--color-sage-strong)]/28 pl-6 font-serif text-[1.5rem] italic leading-relaxed text-[var(--color-forest)] ${
                          segment.emphasis ? "sm:text-[2.2rem]" : "sm:text-[1.9rem]"
                        }`}
                      >
                        {segment.quote}
                      </motion.blockquote>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="mx-auto mt-20 max-w-3xl text-center sm:mt-24"
        >
          <div className="mx-auto h-px w-28 bg-[linear-gradient(90deg,transparent,rgba(120,132,112,0.5),transparent)]" />
          <p className="mt-8 font-serif text-[1.35rem] italic leading-relaxed text-[var(--color-forest)]/84 sm:text-[1.7rem]">
            We would be delighted to share this gentle celebration with you as
            Aarav Krishna is welcomed with blessings, tradition, and love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
