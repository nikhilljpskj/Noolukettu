"use client";

import { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetIso: string;
  title?: string;
};

type CountdownState = {
  completed: boolean;
  days: string;
  hours: string;
  mins: string;
  secs: string;
};

function getCountdownState(targetIso: string, now: number): CountdownState {
  if (now === 0) {
    return {
      completed: false,
      days: "00",
      hours: "00",
      mins: "00",
      secs: "00",
    };
  }

  const target = new Date(targetIso).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      completed: true,
      days: "00",
      hours: "00",
      mins: "00",
      secs: "00",
    };
  }

  return {
    completed: false,
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0",
    ),
    hours: String(
      Math.floor((difference / (1000 * 60 * 60)) % 24),
    ).padStart(2, "0"),
    mins: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
    secs: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
}

export function CountdownTimer({ targetIso, title }: CountdownTimerProps) {
  const [now, setNow] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setNow(Date.now());
    });

    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, []);

  const state = getCountdownState(targetIso, now);

  return (
    <div className="space-y-3 text-center">
      {title ? (
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[var(--color-sage-strong)] sm:text-[11px]">
          {title}
        </p>
      ) : null}

      {state.completed ? (
        <div className="rounded-[24px] border border-[var(--color-sage-strong)]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(243,237,230,0.84))] px-6 py-5 text-center">
          <p className="font-serif text-[1.7rem] text-[var(--color-forest)]">
            This celebration is now underway
          </p>
        </div>
      ) : (
        <div className="rounded-[22px] border border-[var(--color-sage-strong)]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,237,230,0.84))] px-3 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] sm:px-5">
          <div className="mx-auto flex max-w-[460px] items-center justify-center gap-2 text-center sm:gap-3">
            <div className="min-w-0 flex-1">
              <div className="font-serif text-[1.5rem] leading-none text-[var(--color-forest)] sm:text-[2rem]">
                {state.days}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)] sm:text-[10px] sm:tracking-[0.3em]">
                Days
              </div>
            </div>

            <span className="font-serif text-[1.1rem] text-[var(--color-sage-strong)]/55 sm:text-[1.35rem]">
              :
            </span>

            <div className="min-w-0 flex-1">
              <div className="font-serif text-[1.5rem] leading-none text-[var(--color-forest)] sm:text-[2rem]">
                {state.hours}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)] sm:text-[10px] sm:tracking-[0.3em]">
                Hours
              </div>
            </div>

            <span className="font-serif text-[1.1rem] text-[var(--color-sage-strong)]/55 sm:text-[1.35rem]">
              :
            </span>

            <div className="min-w-0 flex-1">
              <div className="font-serif text-[1.5rem] leading-none text-[var(--color-forest)] sm:text-[2rem]">
                {state.mins}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)] sm:text-[10px] sm:tracking-[0.3em]">
                Mins
              </div>
            </div>

            <span className="font-serif text-[1.1rem] text-[var(--color-sage-strong)]/55 sm:text-[1.35rem]">
              :
            </span>

            <div className="min-w-0 flex-1">
              <div className="font-serif text-[1.5rem] leading-none text-[var(--color-forest)] sm:text-[2rem]">
                {state.secs}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[var(--color-sage-strong)] sm:text-[10px] sm:tracking-[0.3em]">
                Secs
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
