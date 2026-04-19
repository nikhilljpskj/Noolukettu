type FloralFrameSvgProps = {
  mirrored?: boolean;
  className?: string;
};

export function FloralFrameSvg({
  mirrored = false,
  className = "",
}: FloralFrameSvgProps) {
  return (
    <svg
      viewBox="0 0 360 720"
      aria-hidden="true"
      className={[
        "h-full w-full",
        mirrored ? "scale-x-[-1]" : "",
        className,
      ].join(" ")}
    >
      <defs>
        <linearGradient id="leafFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7d8f73" />
          <stop offset="100%" stopColor="#c8d3bf" />
        </linearGradient>
        <linearGradient id="stemFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8ea082" />
          <stop offset="100%" stopColor="#687a61" />
        </linearGradient>
        <radialGradient id="roseDark" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#6a303a" />
          <stop offset="70%" stopColor="#91505a" />
          <stop offset="100%" stopColor="#d9adb0" />
        </radialGradient>
        <radialGradient id="roseSoft" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#eeb9ad" />
          <stop offset="70%" stopColor="#e8d1cb" />
          <stop offset="100%" stopColor="#f7efea" />
        </radialGradient>
        <radialGradient id="roseIvory" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fffdf7" />
          <stop offset="72%" stopColor="#f0ead6" />
          <stop offset="100%" stopColor="#dbc18e" />
        </radialGradient>
      </defs>

      <g opacity="0.96">
        <path
          d="M38 700C75 575 95 504 88 426C80 343 52 270 52 185C52 128 66 74 92 26"
          fill="none"
          stroke="url(#stemFill)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M338 690C286 552 262 469 266 365C270 250 314 148 300 42"
          fill="none"
          stroke="url(#stemFill)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <g fill="url(#leafFill)" opacity="0.95">
          <path d="M65 590C119 572 134 527 125 486C88 505 63 543 65 590Z" />
          <path d="M41 525C83 504 96 458 90 421C55 438 34 472 41 525Z" />
          <path d="M99 409C138 393 154 361 150 326C116 338 96 366 99 409Z" />
          <path d="M72 302C110 288 129 250 128 214C90 227 69 252 72 302Z" />
          <path d="M99 174C129 160 145 130 145 95C113 107 97 132 99 174Z" />
          <path d="M265 555C230 544 211 512 207 474C240 483 262 507 265 555Z" />
          <path d="M287 460C247 447 226 417 222 383C260 391 284 416 287 460Z" />
          <path d="M262 333C225 324 202 295 198 262C235 269 257 290 262 333Z" />
          <path d="M286 220C249 208 230 178 227 140C264 151 285 174 286 220Z" />
        </g>

        <g transform="translate(70 62)">
          <circle cx="0" cy="0" r="42" fill="url(#roseDark)" />
          <ellipse cx="-18" cy="-10" rx="18" ry="30" fill="#803946" />
          <ellipse cx="16" cy="-14" rx="18" ry="28" fill="#8a3f4d" />
          <ellipse cx="20" cy="14" rx="20" ry="26" fill="#9a5260" />
          <ellipse cx="-18" cy="18" rx="20" ry="26" fill="#8b4250" />
          <circle cx="0" cy="0" r="11" fill="#5f262f" />
        </g>

        <g transform="translate(98 408)">
          <circle cx="0" cy="0" r="38" fill="url(#roseSoft)" />
          <ellipse cx="-16" cy="-8" rx="16" ry="24" fill="#ebb3a8" />
          <ellipse cx="14" cy="-10" rx="16" ry="24" fill="#efc3b8" />
          <ellipse cx="16" cy="14" rx="17" ry="23" fill="#e6b0a4" />
          <ellipse cx="-16" cy="14" rx="17" ry="23" fill="#efc9bf" />
          <circle cx="0" cy="0" r="9" fill="#c98d7f" />
        </g>

        <g transform="translate(145 520)">
          <circle cx="0" cy="0" r="42" fill="url(#roseIvory)" />
          <ellipse cx="-18" cy="-12" rx="17" ry="24" fill="#fffef8" />
          <ellipse cx="16" cy="-10" rx="17" ry="24" fill="#f8f4e7" />
          <ellipse cx="18" cy="14" rx="18" ry="25" fill="#f6f0df" />
          <ellipse cx="-18" cy="16" rx="18" ry="25" fill="#fcfbf3" />
          <circle cx="0" cy="0" r="11" fill="#b88b2e" />
        </g>

        <g transform="translate(286 154)">
          <circle cx="0" cy="0" r="34" fill="url(#roseSoft)" />
          <ellipse cx="-13" cy="-8" rx="13" ry="20" fill="#f7d9d7" />
          <ellipse cx="13" cy="-8" rx="13" ry="20" fill="#f1c8cb" />
          <ellipse cx="14" cy="12" rx="14" ry="20" fill="#f3d6d7" />
          <ellipse cx="-14" cy="12" rx="14" ry="20" fill="#f7e6e4" />
          <circle cx="0" cy="0" r="8" fill="#dba0a4" />
        </g>

        <g transform="translate(284 360)">
          <circle cx="0" cy="0" r="42" fill="url(#roseDark)" />
          <ellipse cx="-16" cy="-10" rx="16" ry="26" fill="#9b5762" />
          <ellipse cx="15" cy="-10" rx="16" ry="26" fill="#84414f" />
          <ellipse cx="18" cy="14" rx="18" ry="24" fill="#b77480" />
          <ellipse cx="-18" cy="14" rx="18" ry="24" fill="#915160" />
          <circle cx="0" cy="0" r="9" fill="#67303a" />
        </g>

        <g fill="#cfd9c8" opacity="0.72">
          <circle cx="188" cy="92" r="8" />
          <circle cx="204" cy="120" r="6" />
          <circle cx="175" cy="147" r="6" />
          <circle cx="254" cy="281" r="7" />
          <circle cx="236" cy="318" r="6" />
          <circle cx="120" cy="255" r="6" />
          <circle cx="106" cy="286" r="5" />
        </g>
      </g>
    </svg>
  );
}
