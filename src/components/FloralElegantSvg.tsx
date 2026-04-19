// components/FloralElegantSvg.tsx
export function FloralElegantSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke="#6b705c" strokeWidth="1.2" strokeLinecap="round">
        {/* main stem */}
        <path d="M200 0 C180 200, 220 400, 200 800" />

        {/* leaves */}
        <path d="M200 150 C140 130, 120 200, 200 220" />
        <path d="M200 300 C260 280, 280 350, 200 370" />
        <path d="M200 480 C150 460, 130 520, 200 540" />
        <path d="M200 650 C260 630, 280 700, 200 720" />

        {/* flowers */}
        <circle cx="200" cy="120" r="6" />
        <circle cx="200" cy="340" r="5" />
        <circle cx="200" cy="560" r="6" />
      </g>
    </svg>
  );
}