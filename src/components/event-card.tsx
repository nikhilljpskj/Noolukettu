import Image from "next/image";
import { CountdownTimer } from "@/components/countdown-timer";
import {
  CradleIcon,
  LotusDividerIcon,
  MotifBadge,
  NilavilakkuIcon,
} from "@/components/ceremony-motifs";
import { DecorativeLayer } from "@/components/decorative-layer";
import type { EventConfig } from "@/lib/invitation-data";

type EventCardProps = {
  event: EventConfig;
  variant: "ceremony" | "reception";
};

function VenueIllustration({ variant }: { variant: "ceremony" | "reception" }) {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[var(--color-teal-strong)]/14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(241,233,222,0.92))] text-[var(--color-forest)] shadow-[0_14px_30px_rgba(113,126,108,0.12)] sm:h-28 sm:w-28">
      {variant === "ceremony" ? (
        <CradleIcon className="h-14 w-14 sm:h-16 sm:w-16" />
      ) : (
        <NilavilakkuIcon className="h-14 w-14 sm:h-16 sm:w-16" />
      )}
    </div>
  );
}

function DividerHeart() {
  return (
    <div className="mx-auto my-5 flex max-w-[300px] items-center gap-4 text-[var(--color-baby-gold)]/82">
      <span className="h-px flex-1 bg-current/45" />
      <LotusDividerIcon className="h-5 w-5" />
      <span className="h-px flex-1 bg-current/45" />
    </div>
  );
}

function LocationPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mr-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mr-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M7 3.5v4M17 3.5v4M3.5 9.5h17M8 13h3M8 16h3M13 13h3" />
    </svg>
  );
}

export function EventCard({ event, variant }: EventCardProps) {
  const isCeremony = variant === "ceremony";

  return (
    <section className="fade-in-section" id={event.key}>
      <article className="relative overflow-hidden rounded-[32px] border border-white/82 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,241,234,0.98))] shadow-[0_28px_78px_rgba(111,124,106,0.15)] backdrop-blur-[1px]">
        <DecorativeLayer variant="card" />

        {isCeremony ? (
          <div className="relative grid overflow-hidden lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative px-6 pb-8 pt-8 text-center sm:px-8 sm:pb-9 sm:pt-9 lg:px-12 lg:pb-10 lg:pt-10">
              <p className="font-script text-[3rem] leading-none text-[var(--color-forest)]/88 sm:text-[3.4rem]">
                {event.title}
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[var(--color-sage-strong)] sm:text-[11px] sm:tracking-[0.34em]">
                {event.subtitle}
              </p>

              <h3 className="mt-3 font-serif text-[2.45rem] leading-[0.95] text-[var(--color-forest)] sm:text-[3.35rem] lg:text-[4.15rem]">
                {event.names}
              </h3>

              <DividerHeart />

              <div className="mx-auto max-w-[290px] space-y-1 text-[14px] leading-[1.5] text-[var(--color-forest)]/84 sm:max-w-[310px] sm:text-[16px] lg:text-[17px]">
                {event.bodyLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <MotifBadge motif="lotus" className="h-14 w-14" />
              </div>
            </div>

            <div className="relative flex items-center justify-center border-t border-[var(--color-sage-strong)]/10 px-6 py-8 sm:px-8 sm:py-9 lg:border-l lg:border-t-0 lg:px-12 lg:py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.94),transparent_32%),radial-gradient(circle_at_center,rgba(255,255,255,0.82),rgba(255,255,255,0)_62%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.5),transparent_34%)]" />
              <div className="absolute -left-[18%] top-[-4%] h-[118%] w-[78%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96),rgba(255,255,255,0.36)_48%,transparent_74%)] blur-[22px]" />
              <div className="absolute left-[-10%] top-[42%] h-[42%] w-[66%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.34)_50%,transparent_78%)] blur-[26px]" />

              <div className="relative flex w-full max-w-sm flex-col items-center text-center">
                <VenueIllustration variant={variant} />

                <div className="relative mt-5 h-36 w-full overflow-hidden rounded-[24px] border border-white/70 shadow-[0_14px_28px_rgba(113,126,108,0.12)] sm:h-40">
                  <Image
                    src={event.imageSrc}
                    alt={event.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 320px, 360px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,244,236,0.12),rgba(78,105,97,0.14))]" />
                </div>

                <h4 className="mt-5 font-serif text-[2rem] uppercase tracking-[0.04em] text-[var(--color-forest)] sm:text-[2.45rem] lg:text-[2.8rem]">
                  {event.venue}
                </h4>

                <p className="mt-1 font-serif text-[1.4rem] italic text-[var(--color-forest)]/72 sm:text-[1.65rem] lg:text-[1.85rem]">
                  {event.locationLabel}
                </p>

                <div className="mt-6 flex w-full max-w-[280px] flex-col gap-3">
                  <a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--color-sage-strong)]/20 bg-[linear-gradient(180deg,rgba(246,246,241,0.96),rgba(234,236,228,0.9))] px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-[var(--color-forest)] transition duration-300 hover:-translate-y-0.5"
                  >
                    <LocationPinIcon />
                    View Venue
                  </a>

                  {event.calendarUrl ? (
                    <a
                      href={event.calendarUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[var(--color-sage-strong)]/14 bg-white/90 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-[var(--color-forest)] transition duration-300 hover:-translate-y-0.5"
                    >
                      <CalendarIcon />
                      Add to Calendar
                    </a>
                  ) : null}
                </div>

              </div>
            </div>

            <div className="relative border-t border-[var(--color-sage-strong)]/10 px-4 py-5 sm:px-6 sm:py-6 lg:col-span-2">
              <div className="mx-auto w-full max-w-[420px]">
                <CountdownTimer targetIso={event.isoDate} title={`${event.title} Countdown`} />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_210px_1fr]">
            <div className="px-6 py-8 text-center sm:px-8 sm:py-9 lg:px-12 lg:py-10">
              <p className="font-script text-[3rem] leading-none text-[var(--color-forest)]/88 sm:text-[3.4rem]">
                {event.title}
              </p>

              <p className="mx-auto mt-4 max-w-md text-[10px] uppercase tracking-[0.28em] text-[var(--color-sage-strong)] sm:text-[11px] sm:tracking-[0.34em]">
                {event.subtitle}
              </p>

              <h3 className="mt-4 font-serif text-[2.45rem] leading-[0.95] text-[var(--color-forest)] sm:text-[3.35rem] lg:text-[4.15rem]">
                {event.names}
              </h3>

              <DividerHeart />
            </div>

            <div className="flex flex-col items-center justify-center border-y border-[var(--color-sage-strong)]/10 bg-[linear-gradient(180deg,rgba(244,245,239,0.85),rgba(250,246,240,0.92))] px-6 py-8 text-center sm:px-8 sm:py-9 lg:border-x lg:border-y-0">
              <p className="text-[12px] uppercase tracking-[0.28em] text-[var(--color-teal-strong)] sm:text-[14px] sm:tracking-[0.34em]">
                {event.monthLabel}
              </p>
              <p className="mt-2 font-serif text-[4.2rem] leading-none text-[var(--color-forest)] sm:text-[5.4rem]">
                {event.dayLabel}
              </p>
              <p className="mt-1 text-[15px] uppercase tracking-[0.18em] text-[var(--color-teal-strong)] sm:text-[18px] sm:tracking-[0.22em]">
                {event.yearLabel}
              </p>
              <p className="mt-5 text-[12px] uppercase leading-7 tracking-[0.18em] text-[var(--color-forest)] sm:text-[14px] sm:leading-8 sm:tracking-[0.24em]">
                {event.timeSummaryLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8 sm:py-9 lg:px-12 lg:py-10">
              <VenueIllustration variant={variant} />

              <div className="relative mt-5 h-36 w-full max-w-[280px] overflow-hidden rounded-[24px] border border-white/70 shadow-[0_14px_28px_rgba(113,126,108,0.12)] sm:h-40">
                <Image
                  src={event.imageSrc}
                  alt={event.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,244,236,0.12),rgba(78,105,97,0.14))]" />
              </div>

              <h4 className="mt-5 font-serif text-[2.1rem] uppercase tracking-[0.04em] text-[var(--color-forest)] sm:text-[2.6rem] lg:text-[3.1rem]">
                {event.venue}
              </h4>

              <p className="mt-1 font-serif text-[1.45rem] italic text-[var(--color-forest)]/72 sm:text-[1.7rem] lg:text-[1.9rem]">
                {event.locationLabel}
              </p>

              <p className="mt-3 max-w-[260px] text-[14px] leading-[1.5] text-stone-600 sm:text-[16px] lg:text-[17px]">
                {event.address}
              </p>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full border border-[var(--color-sage-strong)]/20 bg-[linear-gradient(180deg,rgba(246,246,241,0.96),rgba(234,236,228,0.9))] px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-[var(--color-forest)] transition duration-300 hover:-translate-y-0.5"
              >
                View Venue
              </a>
            </div>

            <div className="border-t border-[var(--color-sage-strong)]/10 px-4 py-5 sm:px-6 sm:py-6 lg:col-span-3">
              <div className="mx-auto w-full max-w-[420px]">
                <CountdownTimer
                  targetIso={event.isoDate}
                  title={`${event.title} Countdown`}
                />
              </div>
            </div>
          </div>
        )}
      </article>
    </section>
  );
}
