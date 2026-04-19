"use client";

import { FormEvent, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { googleSheetEndpointUrl, invitationData } from "@/lib/invitation-data";

type RSVPSectionProps = {
  guestName: string;
  hasGuestParam: boolean;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export function RSVPSection({ guestName, hasGuestParam }: RSVPSectionProps) {
  const [name, setName] = useState(guestName);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [pageSlug, setPageSlug] = useState("/");
  const [timezone, setTimezone] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [sessionGuestName, setSessionGuestName] = useState(guestName);

  useEffect(() => {
    if (status !== "success") return;

    const duration = 1800;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 38,
      spread: 66,
      ticks: 130,
      zIndex: 1000,
      colors: ["#56776d", "#d7e7e2", "#f5eee5", "#d8be82", "#ffffff"],
      scalar: 1.05,
      gravity: 0.9,
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        window.clearInterval(interval);
        return;
      }

      const particleCount = Math.max(20, Math.floor(90 * (timeLeft / duration)));

      confetti({
        ...defaults,
        particleCount,
        angle: 62,
        origin: { x: -0.02, y: 0.7 },
      });

      confetti({
        ...defaults,
        particleCount,
        angle: 118,
        origin: { x: 1.02, y: 0.7 },
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      setStatus("error");
      setErrorMessage("Please enter your name before sending blessings.");
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
      blessing_for: invitationData.babyName,
      hosted_by: invitationData.parents,
      grandparents: invitationData.grandparents,
      invitation_for: activeGuestName || "Open invitation",
      event_date: invitationData.events.ceremony.dateLabel,
      event_time: invitationData.events.ceremony.timeLabel,
      venue: invitationData.events.ceremony.address,
      source_url: sourceUrl,
      page_slug: pageSlug,
      browser_timezone: timezone,
      user_agent: userAgent,
      submission_id: submissionId,
      guest_param_present: hasGuestParam,
      submitted_at: submittedAt,
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
        throw new Error("Unable to submit blessing");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send blessings right now. Please try again.");
    }
  };

  return (
    <section
      id="rsvp"
      className="fade-in-section relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,241,233,0.98))] px-6 py-8 shadow-[0_24px_70px_rgba(113,126,108,0.12)] sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(220,230,215,0.3),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(214,231,227,0.2),transparent_72%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-[12px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
          Blessing RSVP
        </p>
        <h2 className="mt-3 font-serif text-[2.7rem] leading-[1] text-[var(--color-forest)] sm:text-[3.4rem]">
          Send Your Name And Blessings
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-stone-700">
          Please share your name so the family can record your blessings for Baby
          Name&apos;s Noolukettu.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative mx-auto mt-8 max-w-3xl space-y-6"
      >
        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <label className="block rounded-[26px] border border-[var(--color-sage-strong)]/12 bg-white/88 p-6">
            <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
              Your Name
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

          <div className="rounded-[26px] border border-[var(--color-sage-strong)]/12 bg-[linear-gradient(180deg,rgba(250,246,240,0.96),rgba(233,241,238,0.86))] p-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-sage-strong)]">
              Blessing Details
            </p>
            <p className="mt-4 font-serif text-[2rem] leading-none text-[var(--color-forest)]">
              {invitationData.events.ceremony.dateLabel}
            </p>
            <p className="mt-3 text-[15px] leading-7 text-stone-700">
              {invitationData.events.ceremony.timeLabel}
              <br />
              {invitationData.events.ceremony.address}
            </p>
            <p className="mt-4 text-[14px] leading-7 text-stone-600">
              {activeGuestName
                ? `This invitation has been opened for ${activeGuestName}.`
                : "This blessing form works for direct invite links and the open invitation view."}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-w-[260px] items-center justify-center rounded-full border border-[var(--color-sage-strong)]/18 bg-[var(--color-forest)] px-9 py-4 text-[12px] uppercase tracking-[0.28em] text-white transition duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
          >
            {status === "loading"
              ? "Sending Blessings..."
              : status === "success"
                ? "Blessings Sent"
                : "Submit to Family Sheet"}
          </button>
        </div>

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
              ? "Thank you. Your name has been shared with the family."
              : status === "error"
                ? errorMessage
                : "Your entry will be posted to the configured Google Sheet endpoint."}
          </p>
        </div>
      </form>
    </section>
  );
}
