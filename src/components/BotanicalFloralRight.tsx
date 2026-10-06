export default function BotanicalFloralRight({
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
        <radialGradient id="roseCenterR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F1D6A0" />
          <stop offset="55%" stopColor="#7C5841" />
          <stop offset="100%" stopColor="#4C372E" />
        </radialGradient>

        <radialGradient id="pinkRoseCoreR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2EE" />
          <stop offset="50%" stopColor="#E7C1B8" />
          <stop offset="100%" stopColor="#C9938A" />
        </radialGradient>

        <linearGradient id="leafR1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9AA68A" />
          <stop offset="100%" stopColor="#647158" />
        </linearGradient>

        <linearGradient id="leafR2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CDD3C3" />
          <stop offset="100%" stopColor="#8B957F" />
        </linearGradient>

        <linearGradient id="dustyPetalR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EBC7BC" />
          <stop offset="100%" stopColor="#D28E7D" />
        </linearGradient>

        <linearGradient id="deepRosePetalR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C07C73" />
          <stop offset="100%" stopColor="#874E49" />
        </linearGradient>
      </defs>

      {/* stems */}
      <path
        d="M257 388C252 339 239 295 215 259C196 231 174 210 162 165C151 124 156 85 168 39"
        stroke="#7D846F"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M301 298C278 272 258 240 245 205C228 160 228 122 238 80"
        stroke="#8E9582"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M219 366C200 341 181 311 161 280C137 241 109 206 74 170"
        stroke="#919882"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* leaf sprays top right */}
      <g opacity="0.95">
        <path
          d="M248 60C270 51 282 28 278 8C258 14 242 29 236 50C240 55 244 58 248 60Z"
          fill="url(#leafR1)"
          transform="rotate(16 257 34)"
        />
        <path
          d="M224 78C243 69 254 48 249 25C230 31 214 46 207 66C212 72 218 76 224 78Z"
          fill="url(#leafR2)"
          transform="rotate(-8 228 52)"
        />
        <path
          d="M274 98C292 91 304 74 301 55C283 60 268 74 262 90C266 95 270 97 274 98Z"
          fill="url(#leafR1)"
          transform="rotate(22 282 76)"
        />
        <path
          d="M205 109C222 101 234 84 231 62C214 69 199 82 193 100C197 104 201 107 205 109Z"
          fill="url(#leafR2)"
          transform="rotate(-18 211 86)"
        />
      </g>

      {/* tiny fillers */}
      <g opacity="0.8">
        <ellipse cx="286" cy="148" rx="6" ry="13" fill="#E3DDD1" transform="rotate(-28 286 148)" />
        <ellipse cx="266" cy="138" rx="5.5" ry="12" fill="#EEE6DA" transform="rotate(-8 266 138)" />
        <ellipse cx="108" cy="228" rx="5" ry="10" fill="#D8DECF" transform="rotate(22 108 228)" />
      </g>

      {/* pale pink rose top */}
      <g transform="translate(206 66)">
        <ellipse cx="38" cy="28" rx="15" ry="24" fill="#F7E7E2" stroke="#DAB8AE" strokeWidth="0.8" transform="rotate(10 38 28)" />
        <ellipse cx="54" cy="38" rx="14" ry="22" fill="#F1D8D2" stroke="#D6AFA8" strokeWidth="0.8" transform="rotate(48 54 38)" />
        <ellipse cx="54" cy="58" rx="14" ry="22" fill="#F8E9E5" stroke="#DABCB2" strokeWidth="0.8" transform="rotate(90 54 58)" />
        <ellipse cx="38" cy="70" rx="14" ry="22" fill="#F3DBD5" stroke="#D4AEA6" strokeWidth="0.8" transform="rotate(140 38 70)" />
        <ellipse cx="20" cy="58" rx="14" ry="22" fill="#F9ECE8" stroke="#DEC2B8" strokeWidth="0.8" transform="rotate(-140 20 58)" />
        <ellipse cx="20" cy="38" rx="14" ry="22" fill="#F2D8D2" stroke="#D7B0A8" strokeWidth="0.8" transform="rotate(-48 20 38)" />
        <circle cx="38" cy="49" r="14" fill="url(#pinkRoseCoreR)" />
        <path
          d="M30 49C33 43 43 42 47 49C45 55 34 56 30 49Z"
          fill="#D2A29A"
        />
      </g>

      {/* main chrysanthemum style flower */}
      <g transform="translate(152 178)">
        {Array.from({ length: 14 }).map((_, i) => (
          <ellipse
            key={i}
            cx="62"
            cy="62"
            rx="14"
            ry="34"
            fill={i % 2 === 0 ? "url(#deepRosePetalR)" : "url(#dustyPetalR)"}
            stroke="#9E6A62"
            strokeWidth="0.6"
            transform={`rotate(${i * (360 / 14)} 62 62)`}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <ellipse
            key={`inner-${i}`}
            cx="62"
            cy="62"
            rx="9"
            ry="22"
            fill="#E9C8BE"
            stroke="#C99289"
            strokeWidth="0.5"
            transform={`rotate(${18 + i * 36} 62 62)`}
          />
        ))}
        <circle cx="62" cy="62" r="16" fill="url(#roseCenterR)" />
        <circle cx="62" cy="62" r="5" fill="#F2D39A" />
      </g>

      {/* small peach flower near center */}
      <g transform="translate(126 260)">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="28"
            cy="28"
            rx="7"
            ry="16"
            fill="#F3D6CD"
            stroke="#D7ACA1"
            strokeWidth="0.7"
            transform={`rotate(${i * 45} 28 28)`}
          />
        ))}
        <circle cx="28" cy="28" r="7.5" fill="#C09A77" />
        <circle cx="28" cy="28" r="3" fill="#E9CE9E" />
      </g>

      {/* leaves */}
      <g opacity="0.95">
        <path
          d="M196 288C216 287 234 296 246 311C231 317 211 315 197 302C194 297 194 292 196 288Z"
          fill="url(#leafR2)"
        />
        <path
          d="M152 304C138 290 117 282 96 285C103 300 119 311 139 315C145 312 149 309 152 304Z"
          fill="url(#leafR1)"
        />
        <path
          d="M301 235C314 233 327 222 333 208C319 207 305 214 297 226C298 231 299 233 301 235Z"
          fill="url(#leafR2)"
        />
        <path
          d="M122 198C106 188 87 186 70 191C79 203 96 210 114 209C118 205 121 202 122 198Z"
          fill="url(#leafR2)"
        />
        <path
          d="M237 118C253 108 274 107 292 113C284 127 265 133 246 131C242 127 239 123 237 118Z"
          fill="url(#leafR1)"
        />
      </g>

      {/* soft airy fillers */}
      <g opacity="0.55" stroke="#B8BEAF" strokeLinecap="round">
        <path d="M289 52L302 40" strokeWidth="1.2" />
        <path d="M295 65L312 58" strokeWidth="1" />
        <path d="M281 74L292 88" strokeWidth="1" />
        <path d="M100 210L84 200" strokeWidth="1" />
        <path d="M95 225L76 225" strokeWidth="1" />
        <path d="M102 240L89 253" strokeWidth="1" />
      </g>
    </svg>
  );
}