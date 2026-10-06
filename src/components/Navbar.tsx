"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar({ guestName }: { guestName?: string }) {
  const pathname = usePathname();
  const storyHref = guestName ? `/our-story?guest=${encodeURIComponent(guestName)}` : "/our-story";
  const galleryHref = guestName ? `/gallery?guest=${encodeURIComponent(guestName)}` : "/gallery";

  return (
    <header className="sticky top-0 z-50 px-4 py-3 sm:px-6">
      <nav className="mx-auto flex max-w-[1140px] items-center justify-between rounded-full border border-[#C59B27]/30 bg-white/90 px-5 py-2.5 shadow-[0_10px_30px_rgba(70,50,30,0.08)] backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5 text-decoration-none">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C59B27] bg-[#5A121C] text-sm font-bold text-[#F3E5AB]">
            A
          </div>
          <div>
            <span className="block font-serif text-base font-bold leading-none text-[#5A121C]">
              Aarav Krishna
            </span>
            <span className="block text-[10px] font-semibold tracking-wider text-[#C59B27] uppercase">
              28th Day &bull; Noolukettu
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-[#1E1A16]">
          <li>
            <Link
              href="/"
              className={`transition-colors hover:text-[#C59B27] ${pathname === "/" ? "text-[#C59B27] font-bold" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#rituals"
              className="transition-colors hover:text-[#C59B27]"
            >
              Sacred Rituals
            </Link>
          </li>
          <li>
            <Link
              href={storyHref}
              className={`transition-colors hover:text-[#C59B27] ${pathname === "/our-story" ? "text-[#C59B27] font-bold" : ""}`}
            >
              Little Story
            </Link>
          </li>
          <li>
            <Link
              href={galleryHref}
              className={`transition-colors hover:text-[#C59B27] ${pathname === "/gallery" ? "text-[#C59B27] font-bold" : ""}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/#events"
              className="transition-colors hover:text-[#C59B27]"
            >
              Sadya Feast
            </Link>
          </li>
          <li>
            <Link
              href="/#venue"
              className="transition-colors hover:text-[#C59B27]"
            >
              Venue
            </Link>
          </li>
        </ul>

        <Link
          href="/#rsvp"
          className="rounded-full border border-[#C59B27] bg-[#5A121C] px-4 py-1.5 text-xs font-bold text-[#F3E5AB] shadow-sm transition-all hover:bg-[#A83232] hover:shadow-md"
        >
          Blessings &amp; RSVP &rarr;
        </Link>
      </nav>
    </header>
  );
}
