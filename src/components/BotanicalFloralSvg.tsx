// components/BotanicalFloralSvg.tsx
export function BotanicalFloralSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 800"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a3b18a" />
          <stop offset="100%" stopColor="#588157" />
        </linearGradient>

        <linearGradient id="flower" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e5989b" />
          <stop offset="100%" stopColor="#ffcad4" />
        </linearGradient>
      </defs>

      {/* stem */}
      <path
        d="M200 0 C180 200, 220 400, 200 800"
        stroke="#6b705c"
        strokeWidth="1.5"
        fill="none"
      />

      {/* leaves */}
      <path
        d="M200 150 C140 120, 120 200, 200 220"
        fill="url(#leaf)"
        opacity="0.8"
      />
      <path
        d="M200 300 C260 270, 280 350, 200 370"
        fill="url(#leaf)"
        opacity="0.8"
      />
      <path
        d="M200 500 C150 470, 130 550, 200 580"
        fill="url(#leaf)"
        opacity="0.8"
      />

      {/* flowers */}
      <circle cx="200" cy="120" r="10" fill="url(#flower)" />
      <circle cx="200" cy="340" r="8" fill="url(#flower)" />
      <circle cx="200" cy="600" r="10" fill="url(#flower)" />
    </svg>
  );
}