"use client";

import { FormEvent, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { googleSheetEndpointUrl, invitationData } from "@/lib/invitation-data";

type RSVPSectionProps = {
  guestName: string;
  hasGuestParam: boolean;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

function getAvailabilityLabel(value: boolean) {
  return value ? "Available" : "Not Available";
}

export function RSVPSection({ guestName, hasGuestParam }: RSVPSectionProps) {
  const [name, setName] = useState(guestName);
  const [attending, setAttending] = useState<boolean | null>(true);
  const [step, setStep] = useState<1 | 2>(1);
  const [ceremonyAttending, setCeremonyAttending] = useState(true);
  const [receptionAttending, setReceptionAttending] = useState(true);
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [pageSlug, setPageSlug] = useState("/");
  const [timezone, setTimezone] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [sessionGuestName, setSessionGuestName] = useState(guestName);

  useEffect(() => {
    if (status !== "success") return;

    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 42,
      spread: 70,
      ticks: 140,
      zIndex: 1000,
      colors: ["#56776d", "#e8c3ad", "#f5eee5", "#d8be82", "#ffffff"],
      scalar: 1.08,
      gravity: 0.9,
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        window.clearInterval(interval);
        return;
      }

      const particleCount = Math.max(36, Math.floor(110 * (timeLeft / duration)));

      confetti({
        ...defaults,
        particleCount,
        angle: 62,
        spread: 78,
        origin: { x: -0.02, y: 0.7 },
      });

      confetti({
        ...defaults,
        particleCount,
        angle: 118,
        spread: 78,
        origin: { x: 1.02, y: 0.7 },
      });

      confetti({
        ...defaults,
        particleCount: Math.max(20, Math.floor(80 * (timeLeft / duration))),
        startVelocity: 24,
        spread: 120,
        ticks: 180,
        gravity: 0.7,
        origin: { x: Math.random(), y: -0.08 },
      });
    }, 220);

    return () => window.clearInterval(interval);
  }, [status]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentUrl = window.location.href;
    const currentSlug = window.location.pathname;
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    setSourceUrl(currentUrl);
    setPageSlug(currentSlug);
    setTimezone(browserTimezone);
    setUserAgent(window.navigator.userAgent);

    if (guestName) {
      window.sessionStorage.setItem("noolukettu_guest_name", guestName);
      setSessionGuestName(guestName);
      setName(guestName);
      return;
    }

    const storedGuestName =
      window.sessionStorage.getItem("noolukettu_guest_name") ?? "";
    setSessionGuestName(storedGuestName);

    if (!name) {
      setName(storedGuestName);
    }
  }, [guestName, name]);

  const activeGuestName = guestName || sessionGuestName;

  const updateGuestCount = (direction: "up" | "down") => {
    setGuestCount((current) => {
      const minValue = attending ? 1 : 0;
      const nextValue = direction === "up" ? current + 1 : current - 1;
      return Math.max(minValue, nextValue);
    });
  };

  const handleAttendanceSelect = (value: boolean) => {
    setAttending(value);
    setCeremonyAttending(value);
    setReceptionAttending(value);
    setGuestCount(value ? Math.max(guestCount, 1) : 0);
    setStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setStatus("error");
      setErrorMessage("Please enter your name before submitting the RSVP.");
      return;
    }

    if (attending === null) {
      setStatus("error");
      setErrorMessage("Please choose whether you can attend.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const submissionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `rsvp-${Date.now()}`;

    const submittedAt = new Date().toISOString();

    const payload = {
      attendee_name: trimmedName,
      guest_name: activeGuestName,
      attending: getAvailabilityLabel(attending),
      attending_boolean: attending,
      guest_count: guestCount,
      message,
      submitted_at: submittedAt,
      invitation_for: activeGuestName || "Open invitation",
      source_url: sourceUrl,
      page_slug: pageSlug,
      event_date: invitationData.events.ceremony.dateLabel,
      event_time: invitationData.events.ceremony.timeLabel,
      venue: invitationData.events.ceremony.address,
      ceremony_attending: getAvailabilityLabel(ceremonyAttending),
      ceremony_attending_boolean: ceremonyAttending,
      reception_attending: getAvailabilityLabel(receptionAttending),
      reception_attending_boolean: receptionAttending,
      browser_timezone: timezone,
      user_agent: userAgent,
      submission_id: submissionId,
      guest_param_present: hasGuestParam,
      current_page_url: sourceUrl,
      timestamp: submittedAt,
    };

    try {
      const response = await fetch(googleSheetEndpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit RSVP");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send RSVP right now. Please try again.");
    }
  };

  return (
    <section
      id="rsvp"
      className="fade-in-section relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,241,233,0.98))] px-6 py-8 shadow-[0_24px_70px_rgba(113,126,108,0.12)] sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(220,230,215,0.3),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-[12px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
          Blessing RSVP
        </p>
        <h2 className="mt-3 font-serif text-[2.7rem] leading-[1] text-[var(--color-forest)] sm:text-[3.4rem]">
          We Would Be Honoured To Receive Your Blessings
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-stone-700">
          Please confirm your presence for Baby Name&apos;s Noolukettu ceremony.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative mx-auto mt-8 max-w-4xl space-y-6"
      >
        <label className="block rounded-[26px] border border-[var(--color-sage-strong)]/12 bg-white/88 p-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
            Guest Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              if (status !== "idle") {
                setStatus("idle");
                setErrorMessage("");
              }
            }}
            placeholder="Enter your name"
            className="mt-4 w-full rounded-[22px] border border-[var(--color-sage-strong)]/10 bg-[var(--color-ivory)]/88 px-4 py-4 text-[16px] text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-[var(--color-sage-strong)]/28"
          />
        </label>

        <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-sage-strong)]">
          <span className={step === 1 ? "opacity-100" : "opacity-45"}>Page 1</span>
          <span className="h-px w-10 bg-current/30" />
          <span className={step === 2 ? "opacity-100" : "opacity-45"}>Page 2</span>
        </div>

        {step === 1 ? (
          <>
            <div className="grid gap-4 lg:grid-cols-2">
              <button
                type="button"
                onClick={() => handleAttendanceSelect(true)}
                className={[
                  "rounded-[26px] border px-6 py-6 text-left transition duration-300",
                  attending
                    ? "border-[var(--color-sage-strong)]/28 bg-[linear-gradient(180deg,rgba(233,241,228,0.92),rgba(248,245,239,0.88))] shadow-[0_14px_36px_rgba(108,129,101,0.13)]"
                    : "border-[var(--color-sage-strong)]/12 bg-white/88",
                ].join(" ")}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-sage-strong)]/18 bg-white text-[var(--color-sage-strong)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="block font-serif text-[2rem] leading-none text-[var(--color-forest)]">
                  Yes, I&apos;ll be there
                </span>
                <span className="mt-3 block text-[15px] text-stone-600">
                  We look forward to sharing this joyful day together.
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleAttendanceSelect(false)}
                className={[
                  "rounded-[26px] border px-6 py-6 text-left transition duration-300",
                  attending === false
                    ? "border-[var(--color-rose)]/35 bg-[linear-gradient(180deg,rgba(251,239,236,0.96),rgba(255,248,245,0.9))] shadow-[0_14px_36px_rgba(189,138,132,0.12)]"
                    : "border-[var(--color-sage-strong)]/12 bg-white/88",
                ].join(" ")}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-rose)]/18 bg-white text-[var(--color-rose)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </div>
                <span className="block font-serif text-[2rem] leading-none text-[var(--color-forest)]">
                  Sorry, can&apos;t make it
                </span>
                <span className="mt-3 block text-[15px] text-stone-600">
                  Your blessings will still be with Baby Name and the family.
                </span>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex min-w-[240px] items-center justify-center rounded-full border border-[var(--color-sage-strong)]/18 bg-[var(--color-forest)] px-9 py-4 text-[12px] uppercase tracking-[0.28em] text-white transition duration-300 hover:-translate-y-0.5"
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-sage-strong)]">
                More Details
              </p>
              <p className="mt-2 text-[15px] leading-7 text-stone-600">
                Choose which parts of the gathering you can join, set guest count,
                and leave a note if you like.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[26px] border border-[var(--color-sage-strong)]/12 bg-white/88 p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
                  Which Events Can You Join?
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setCeremonyAttending((current) => !current)}
                    className={[
                      "rounded-[22px] border px-5 py-5 text-left transition duration-300",
                      ceremonyAttending
                        ? "border-[var(--color-sage-strong)]/24 bg-[var(--color-sage)]/55"
                        : "border-[var(--color-sage-strong)]/10 bg-[var(--color-ivory)]/88",
                    ].join(" ")}
                  >
                    <span className="block text-[11px] uppercase tracking-[0.3em] text-[var(--color-sage-strong)]/80">
                      Naming Ritual
                    </span>
                    <span className="mt-2 block font-serif text-[1.55rem] leading-tight text-[var(--color-forest)]">
                      {ceremonyAttending ? "I can attend" : "Not available"}
                    </span>
                    <span className="mt-2 block text-[14px] text-stone-500">
                      Tap to{" "}
                      {ceremonyAttending
                        ? "mark unavailable"
                        : "join the naming ritual"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReceptionAttending((current) => !current)}
                    className={[
                      "rounded-[22px] border px-5 py-5 text-left transition duration-300",
                      receptionAttending
                        ? "border-[var(--color-sage-strong)]/24 bg-[var(--color-sage)]/55"
                        : "border-[var(--color-sage-strong)]/10 bg-[var(--color-ivory)]/88",
                    ].join(" ")}
                  >
                    <span className="block text-[11px] uppercase tracking-[0.3em] text-[var(--color-sage-strong)]/80">
                      Blessings & Lunch
                    </span>
                    <span className="mt-2 block font-serif text-[1.55rem] leading-tight text-[var(--color-forest)]">
                      {receptionAttending ? "I can attend" : "Not available"}
                    </span>
                    <span className="mt-2 block text-[14px] text-stone-500">
                      Tap to{" "}
                      {receptionAttending
                        ? "mark unavailable"
                        : "join the family gathering"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="rounded-[26px] border border-[var(--color-sage-strong)]/12 bg-white/88 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
                      Guest Count
                    </p>
                    <p className="mt-2 text-[15px] text-stone-600">
                      Adjust the number of family members included in this RSVP.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateGuestCount("down")}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-sage-strong)]/18 text-2xl text-[var(--color-forest)] transition hover:bg-[var(--color-sage)]/40"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-serif text-[2rem] text-[var(--color-forest)]">
                      {guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateGuestCount("up")}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-sage-strong)]/18 text-2xl text-[var(--color-forest)] transition hover:bg-[var(--color-sage)]/40"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-6 rounded-[22px] border border-[var(--color-sage-strong)]/10 bg-[var(--color-ivory)]/88 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-sage-strong)]">
                    Invitation Context
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-stone-700">
                    {activeGuestName
                      ? `Invitation for ${activeGuestName}`
                      : "Open invitation view without a guest query parameter"}
                  </p>
                </div>
              </div>
            </div>

            <label className="block rounded-[26px] border border-[var(--color-sage-strong)]/12 bg-white/88 p-6">
              <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
                Optional Message
              </span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                placeholder="Share a blessing or note for Baby Name and the family..."
                className="mt-4 w-full resize-none rounded-[22px] border border-[var(--color-sage-strong)]/10 bg-[var(--color-ivory)]/88 px-4 py-4 text-[16px] text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-[var(--color-sage-strong)]/28"
              />
            </label>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[var(--color-sage-strong)]/14 bg-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-[var(--color-forest)] transition duration-300 hover:-translate-y-0.5"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-w-[260px] items-center justify-center rounded-full border border-[var(--color-sage-strong)]/18 bg-[var(--color-forest)] px-9 py-4 text-[12px] uppercase tracking-[0.28em] text-white transition duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "loading"
                  ? "Sending RSVP..."
                  : status === "success"
                    ? "RSVP Sent"
                    : "Submit RSVP"}
              </button>
            </div>
          </>
        )}

        <div className="flex flex-col items-center gap-4">
          <p
            className={[
              "text-center text-sm leading-6",
              status === "error"
                ? "text-[var(--color-rose)]"
                : "text-[var(--color-sage-strong)]",
            ].join(" ")}
          >
            {status === "success"
              ? "Thank you. Your response has been shared with the family."
              : status === "error"
                ? errorMessage
                : "Your entry will be posted to the configured Google Sheet endpoint."}
          </p>
        </div>
      </form>
    </section>
  );
}
