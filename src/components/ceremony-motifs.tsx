type IconProps = {
  className?: string;
};

export function LotusDividerIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M32 38c2-9 9-15 16-17-1 10-7 17-16 19-9-2-15-9-16-19 7 2 14 8 16 17Z" />
      <path d="M32 38c-4-8-4-15 0-22 4 7 4 14 0 22Z" />
      <path d="M22 40c-7-1-12-5-15-12 7 0 12 2 15 12Z" />
      <path d="M42 40c3-10 8-12 15-12-3 7-8 11-15 12Z" />
      <path d="M16 49h32" />
    </svg>
  );
}

export function CradleIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 28h38" />
      <path d="M28 21v14M52 21v14" />
      <path d="M22 35c1 13 9 23 18 23s17-10 18-23H22Z" />
      <path d="M25 45c4 3 9 5 15 5s11-2 15-5" />
      <path d="M20 60h40" />
      <path d="M26 60l-4 8M54 60l4 8" />
      <path d="M34 18c1-3 3-4 6-4s5 1 6 4" />
    </svg>
  );
}

export function TinyFeetIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="27" cy="44" rx="10" ry="16" transform="rotate(-18 27 44)" />
      <ellipse cx="54" cy="48" rx="10" ry="16" transform="rotate(18 54 48)" />
      <circle cx="18" cy="24" r="3" />
      <circle cx="24" cy="17" r="3" />
      <circle cx="31" cy="14" r="3" />
      <circle cx="47" cy="18" r="3" />
      <circle cx="55" cy="14" r="3" />
      <circle cx="62" cy="17" r="3" />
    </svg>
  );
}

export function NilavilakkuIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M40 12c3 5 3 8 0 12-3-4-3-7 0-12Z" />
      <path d="M28 27h24" />
      <path d="M22 34c4-4 11-6 18-6s14 2 18 6" />
      <path d="M25 34c1 7 7 12 15 12s14-5 15-12" />
      <path d="M40 46v16" />
      <path d="M33 62h14" />
      <path d="M28 68h24" />
      <path d="M22 73h36" />
    </svg>
  );
}

export function MotifBadge({
  motif,
  className = "",
}: {
  motif: "cradle" | "feet" | "lamp" | "lotus";
  className?: string;
}) {
  const iconClass = "h-12 w-12";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border border-[var(--color-teal-strong)]/18 bg-white/72 text-[var(--color-forest)] shadow-[0_14px_32px_rgba(113,126,108,0.12)] ${className}`}
    >
      {motif === "cradle" ? <CradleIcon className={iconClass} /> : null}
      {motif === "feet" ? <TinyFeetIcon className={iconClass} /> : null}
      {motif === "lamp" ? <NilavilakkuIcon className={iconClass} /> : null}
      {motif === "lotus" ? <LotusDividerIcon className={iconClass} /> : null}
    </div>
  );
}
