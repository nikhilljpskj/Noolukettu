"use client";

import { useState, useRef } from "react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const playLullabyNote = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;
    
    // Raga Mohanam auspicious notes (Sa, Ri, Ga, Pa, Dha, Sa)
    const notes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];
    const freq = notes[Math.floor(Math.random() * notes.length)];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Soft flute attack & decay
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 2.5);
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      playLullabyNote();
      timerRef.current = setInterval(playLullabyNote, 2200);
      setIsPlaying(true);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleAudio}
      className={`floating-audio-btn ${isPlaying ? "playing" : ""}`}
      aria-label="Toggle Kerala Lullaby Melody"
      title={isPlaying ? "Mute Melody" : "Play Kerala Lullaby & Nadaswaram"}
    >
      {isPlaying ? (
        <svg className="w-6 h-6 animate-spin" style={{ animationDuration: "4s" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      )}
    </button>
  );
}
