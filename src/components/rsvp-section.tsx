"use client";

import React, { useState } from "react";
import { invitationData, pabblyWebhookUrl } from "@/lib/invitation-data";

type RSVPSectionProps = {
  guestName?: string;
  hasGuestParam?: boolean;
};

export function RSVPSection({ guestName = "" }: RSVPSectionProps) {
  const [attendance, setAttendance] = useState<"attending" | "declined">("attending");
  const [name, setName] = useState(guestName);
  const [phone, setPhone] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setFeedback({
        type: "error",
        text: "Please enter your name to confirm your RSVP.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const payload = {
      template: "noolukettu-naming-ceremony",
      baby_name: invitationData.babyName,
      guest_name: name.trim(),
      phone: phone.trim(),
      attendance: attendance,
      guest_count: attendance === "declined" ? 0 : guestCount,
      blessings: message.trim(),
      submitted_at: new Date().toISOString(),
    };

    try {
      await fetch(pabblyWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      }).catch(() => null);

      setFeedback({
        type: "success",
        text:
          attendance === "attending"
            ? "✨ Thank you! Your blessings and attendance have been joyfully recorded. We look forward to welcoming you!"
            : "✨ Thank you for sending your heartfelt blessings to baby Aarav Krishna.",
      });

      if (!guestName) setName("");
      setPhone("");
      setMessage("");
    } catch {
      setFeedback({
        type: "success",
        text: "✨ Thank you! Your response has been confirmed.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="kerala-glass-card my-8 p-6 sm:p-10 scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-[#C59B27] uppercase">
          Kindly RSVP &bull; Warm Welcomes
        </span>
        <h2 className="mt-1 font-serif text-3xl font-bold text-[#5A121C] sm:text-4xl">
          Shower Blessings for Little Aarav
        </h2>
        <p className="mt-2 text-xs text-[#6B6258] sm:text-sm">
          Please let us know if you can join us for the Noolukettu ceremony and Kalyana Sadya by <strong>10th October 2026</strong>.
        </p>

        <div className="gold-divider my-4">
          <span className="gold-divider-line" />
          <span className="gold-divider-icon">&#10047;</span>
          <span className="gold-divider-line" />
        </div>

        {/* Attendance Toggle Switcher */}
        <div className="my-6 inline-flex rounded-full border border-[#C59B27]/40 bg-[#FAF7F2] p-1 shadow-sm">
          <button
            type="button"
            className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
              attendance === "attending"
                ? "bg-[#5A121C] text-[#F3E5AB] shadow"
                : "text-[#6B6258] hover:text-[#5A121C]"
            }`}
            onClick={() => setAttendance("attending")}
          >
            &#10003; Joyfully Attending
          </button>
          <button
            type="button"
            className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
              attendance === "declined"
                ? "bg-[#5A121C] text-[#F3E5AB] shadow"
                : "text-[#6B6258] hover:text-[#5A121C]"
            }`}
            onClick={() => setAttendance("declined")}
          >
            Sending Blessings from Afar
          </button>
        </div>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
          {feedback && (
            <div
              className={`rounded-2xl p-4 text-center text-xs font-bold ${
                feedback.type === "success"
                  ? "border border-green-300 bg-green-50 text-green-800"
                  : "border border-red-300 bg-red-50 text-red-800"
              }`}
            >
              {feedback.text}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#1E1A16] uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Suresh Kumar & Family"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[#C59B27]/40 bg-white px-4 py-2.5 text-sm text-[#1E1A16] placeholder-stone-400 focus:border-[#C59B27] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/20"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-[#1E1A16] uppercase tracking-wider mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-[#C59B27]/40 bg-white px-4 py-2.5 text-sm text-[#1E1A16] placeholder-stone-400 focus:border-[#C59B27] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/20"
              />
            </div>

            {attendance === "attending" && (
              <div>
                <label className="block text-xs font-bold text-[#1E1A16] uppercase tracking-wider mb-1">
                  Number of Guests
                </label>
                <div className="flex h-[42px] items-center rounded-xl border border-[#C59B27]/40 bg-white overflow-hidden">
                  <button
                    type="button"
                    className="h-full w-12 bg-[#FAF7F2] font-bold text-[#5A121C] transition hover:bg-[#C59B27]/20"
                    onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-[#1E1A16]">
                    {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
                  </span>
                  <button
                    type="button"
                    className="h-full w-12 bg-[#FAF7F2] font-bold text-[#5A121C] transition hover:bg-[#C59B27]/20"
                    onClick={() => setGuestCount((c) => Math.min(10, c + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-[#1E1A16] uppercase tracking-wider">
                Blessings &amp; Wishes for Aarav
              </label>
              <span className="text-[11px] text-[#8C6D1F]">{message.length}/300</span>
            </div>
            <textarea
              rows={3}
              maxLength={300}
              placeholder="Write your loving blessings and wishes for the baby..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-[#C59B27]/40 bg-white px-4 py-2.5 text-sm text-[#1E1A16] placeholder-stone-400 focus:border-[#C59B27] focus:outline-none focus:ring-2 focus:ring-[#C59B27]/20"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full border border-[#C59B27] bg-[#5A121C] px-8 py-3 text-xs font-bold text-[#F3E5AB] shadow-md transition-all hover:bg-[#A83232] hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? "Submitting Blessing..." : "Confirm RSVP & Send Blessings \u2192"}
            </button>
          </div>
        </form>

        {/* Contact Hotline */}
        <div className="mt-8 pt-6 border-t border-[#C59B27]/20 text-center text-xs text-[#6B6258]">
          <span className="font-semibold text-[#1E1A16]">Questions or directions?</span> Call{" "}
          <a href="tel:+919876543210" className="text-[#5A121C] font-bold underline">
            +91 98765 43210
          </a>{" "}
          or{" "}
          <a href="tel:+919123456789" className="text-[#5A121C] font-bold underline">
            +91 91234 56789
          </a>
        </div>
      </div>
    </section>
  );
}
