export default function BotanicalFloralLeft({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 340 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="burgundyCenterL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F7D9A3" />
          <stop offset="35%" stopColor="#8B6A2B" />
          <stop offset="70%" stopColor="#5A3A19" />
          <stop offset="100%" stopColor="#2F231A" />
        </radialGradient>

        <radialGradient id="whiteCenterL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F1B44C" />
          <stop offset="40%" stopColor="#7F5A1E" />
          <stop offset="100%" stopColor="#3B2C22" />
        </radialGradient>

        <radialGradient id="pinkCenterL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D9B07D" />
          <stop offset="55%" stopColor="#8A6948" />
          <stop offset="100%" stopColor="#594335" />
        </radialGradient>

        <linearGradient id="leafL1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B9A7A" />
          <stop offset="100%" stopColor="#56644C" />
        </linearGradient>

        <linearGradient id="leafL2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B7C2A8" />
          <stop offset="100%" stopColor="#74826A" />
        </linearGradient>

        <linearGradient id="petalBurgundyL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C2438" />
          <stop offset="100%" stopColor="#4B1827" />
        </linearGradient>

        <linearGradient id="petalPinkL" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2D8D0" />
          <stop offset="100%" stopColor="#D9998C" />
        </linearGradient>

        <filter id="softBlurL" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      {/* main stems */}
      <path
        d="M72 390C78 345 90 295 112 255C130 223 152 200 164 154C174 117 170 80 160 42"
        stroke="#7A806F"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M35 300C65 270 90 233 104 192C117 154 118 118 108 72"
        stroke="#8D937E"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M115 365C138 336 159 301 181 266C210 220 240 181 277 143"
        stroke="#929984"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* leaves - top cluster */}
      <g opacity="0.95">
        <path
          d="M118 59C95 52 81 28 86 9C106 14 125 29 131 51C127 55 122 57 118 59Z"
          fill="url(#leafL1)"
          transform="rotate(-18 108 34)"
        />
        <path
          d="M138 78C121 68 110 48 116 25C136 32 152 48 157 68C152 73 145 76 138 78Z"
          fill="url(#leafL2)"
          transform="rotate(12 136 51)"
        />
        <path
          d="M93 93C74 85 63 68 67 48C84 53 100 67 106 84C102 89 98 91 93 93Z"
          fill="url(#leafL1)"
          transform="rotate(-28 88 70)"
        />
        <path
          d="M158 110C141 102 128 85 131 63C149 70 164 83 171 101C167 106 162 109 158 110Z"
          fill="url(#leafL2)"
          transform="rotate(18 152 87)"
        />
      </g>

      {/* small buds */}
      <g opacity="0.8">
        <ellipse cx="58" cy="146" rx="7" ry="14" fill="#D8D0C1" transform="rotate(35 58 146)" />
        <ellipse cx="73" cy="134" rx="5.5" ry="12" fill="#E7DED1" transform="rotate(12 73 134)" />
        <ellipse cx="221" cy="204" rx="5" ry="10" fill="#D6DCCC" transform="rotate(-20 221 204)" />
      </g>

      {/* burgundy flower top left */}
      <g transform="translate(42 48)">
        <ellipse cx="35" cy="17" rx="16" ry="25" fill="url(#petalBurgundyL)" transform="rotate(0 35 17)" />
        <ellipse cx="58" cy="26" rx="15" ry="25" fill="url(#petalBurgundyL)" transform="rotate(50 58 26)" />
        <ellipse cx="60" cy="52" rx="15" ry="24" fill="url(#petalBurgundyL)" transform="rotate(100 60 52)" />
        <ellipse cx="44" cy="73" rx="15" ry="23" fill="url(#petalBurgundyL)" transform="rotate(145 44 73)" />
        <ellipse cx="20" cy="69" rx="15" ry="24" fill="url(#petalBurgundyL)" transform="rotate(-150 20 69)" />
        <ellipse cx="7" cy="45" rx="15" ry="24" fill="url(#petalBurgundyL)" transform="rotate(-95 7 45)" />
        <ellipse cx="14" cy="21" rx="14" ry="22" fill="url(#petalBurgundyL)" transform="rotate(-45 14 21)" />
        <circle cx="35" cy="45" r="14" fill="url(#burgundyCenterL)" />
        <circle cx="35" cy="45" r="4.2" fill="#EACD88" />
        <g fill="#C8B36A" filter="url(#softBlurL)">
          <circle cx="25" cy="37" r="1.2" />
          <circle cx="31" cy="33" r="1.2" />
          <circle cx="39" cy="33" r="1.2" />
          <circle cx="46" cy="37" r="1.2" />
          <circle cx="47" cy="45" r="1.2" />
          <circle cx="43" cy="52" r="1.2" />
          <circle cx="35" cy="56" r="1.2" />
          <circle cx="27" cy="52" r="1.2" />
          <circle cx="23" cy="45" r="1.2" />
        </g>
      </g>

      {/* white daisy large */}
      <g transform="translate(62 212)">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="55"
            cy="52"
            rx="10"
            ry="34"
            fill="#FBFAF6"
            stroke="#EAE4D8"
            strokeWidth="0.8"
            transform={`rotate(${i * 30} 55 52)`}
          />
        ))}
        <circle cx="55" cy="52" r="15" fill="url(#whiteCenterL)" />
        <circle cx="55" cy="52" r="6" fill="#E7C56F" />
      </g>

      {/* peach flower bottom left */}
      <g transform="translate(15 250)">
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse
            key={i}
            cx="58"
            cy="45"
            rx="12"
            ry="26"
            fill="url(#petalPinkL)"
            stroke="#D9B1A8"
            strokeWidth="0.8"
            transform={`rotate(${i * 36} 58 45)`}
          />
        ))}
        <circle cx="58" cy="45" r="11.5" fill="url(#pinkCenterL)" />
        <circle cx="58" cy="45" r="3.6" fill="#E7C78A" />
      </g>

      {/* small white flowers */}
      <g transform="translate(10 150)">
        {[
          [0, 0, 1],
          [42, 18, 0.85],
          [82, -8, 0.9],
        ].map(([x, y, s], idx) => (
          <g key={idx} transform={`translate(${x} ${y}) scale(${s})`}>
            {Array.from({ length: 6 }).map((_, i) => (
              <ellipse
                key={i}
                cx="20"
                cy="20"
                rx="6"
                ry="15"
                fill="#FAF7F2"
                stroke="#E7E0D6"
                strokeWidth="0.6"
                transform={`rotate(${i * 60} 20 20)`}
              />
            ))}
            <circle cx="20" cy="20" r="4.5" fill="#A58A57" />
          </g>
        ))}
      </g>

      {/* extra leaves around bottom */}
      <g opacity="0.95">
        <path
          d="M123 318C104 317 84 328 74 344C90 349 110 345 123 331C126 326 126 322 123 318Z"
          fill="url(#leafL2)"
        />
        <path
          d="M158 302C172 287 194 280 214 284C207 300 190 312 170 314C164 311 160 307 158 302Z"
          fill="url(#leafL1)"
        />
        <path
          d="M35 230C21 227 9 217 4 202C18 201 31 208 39 221C38 225 37 228 35 230Z"
          fill="url(#leafL2)"
        />
        <path
          d="M196 192C212 182 233 181 250 188C241 200 223 207 205 205C201 201 198 197 196 192Z"
          fill="url(#leafL2)"
        />
      </g>
    </svg>
  );
}