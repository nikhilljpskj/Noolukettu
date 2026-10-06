"use client";

import Image from "next/image";
import { EventConfig } from "@/lib/invitation-data";

type EventCardProps = {
  event: EventConfig;
  variant: "ceremony" | "reception";
};

export function EventCard({ event, variant }: EventCardProps) {
  const isCeremony = variant === "ceremony";

  return (
    <div
      id={isCeremony ? "ceremony" : "sadya"}
      className="kerala-glass-card relative overflow-hidden p-6 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-12 md:items-center">
        {/* Left Col: Event Badge & Icon */}
        <div className="text-center md:col-span-3 md:border-r md:border-[#C59B27]/25 md:pr-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C59B27] bg-[#5A121C] text-2xl text-[#F3E5AB] shadow-md">
            {isCeremony ? "\uD83D\uDC76" : "\uD83C\uDF72"}
          </div>

          <span className="mt-3 block text-[11px] font-bold tracking-widest text-[#C59B27] uppercase">
            {isCeremony ? "Auspicious Ritual" : "Traditional Feast"}
          </span>

          <span className="font-serif text-3xl font-bold text-[#5A121C] block mt-1">
            {event.dayLabel}
          </span>
          <span className="text-xs font-semibold text-[#8C6D1F] uppercase tracking-wider block">
            {event.monthLabel} {event.yearLabel}
          </span>
        </div>

        {/* Center Col: Title, Subtitle, & Description */}
        <div className="md:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] border border-[#C59B27]/30 px-3 py-1 text-[11px] font-bold text-[#5A121C] mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
            {event.timeLabel}
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#5A121C] sm:text-3xl">
            {event.title}
          </h3>
          <p className="mt-1 text-xs font-semibold text-[#8C6D1F]">
            {event.subtitle}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-[#6B6258] sm:text-sm">
            {isCeremony
              ? "Join us as we gather around the sacred Nilavilakku for the traditional 28th-day naming of Aarav Krishna, followed by elders' blessings and the tying of the sacred Aranjanam."
              : "Following the sacred naming ceremony, please join us for a traditional banana leaf Kerala Sadya featuring authentic Parippu, Ghee, Avial, Sambar, Payasam & Ada Pradhaman."}
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#1E1A16]">
            <svg className="h-4 w-4 text-[#C59B27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.address}</span>
          </div>
        </div>

        {/* Right Col: Actions (Map & Calendar) */}
        <div className="flex flex-col gap-2.5 md:col-span-3 md:pl-4">
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-[#C59B27] bg-[#5A121C] px-4 py-2 text-xs font-bold text-[#F3E5AB] shadow transition-all hover:bg-[#A83232]"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Google Maps Route
          </a>

          {event.calendarUrl && (
            <a
              href={event.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#C59B27]/50 bg-white px-4 py-2 text-xs font-bold text-[#5A121C] transition-all hover:border-[#C59B27] hover:bg-[#FAF7F2]"
            >
              <svg className="h-3.5 w-3.5 text-[#C59B27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add to Calendar
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
