"use client";

export function SacredRitualsSection() {
  const rituals = [
    {
      step: "01",
      title: "Aranjanam & Noolukettu",
      malayalam: "അരഞ്ഞാണവും നൂലുകെട്ടും",
      desc: "Tying the sacred black & golden waistband thread (Aranjanam) around the baby's waist, symbolizing protection, health, and auspicious beginnings.",
      icon: "\u2728",
    },
    {
      step: "02",
      title: "Karnavedham & Whispered Naming",
      malayalam: "പേരിടൽ ചടങ്ങ്",
      desc: "The father gently whispers the chosen sacred name 'Aarav Krishna' three times into the baby's right ear while covering the left ear with a betel leaf.",
      icon: "\uD83C\uDF1F",
    },
    {
      step: "03",
      title: "Kannezhuthal & Pottu",
      malayalam: "കണ്ണെഴുത്തും കറുത്ത പൊട്ടും",
      desc: "Lining the baby's eyes with traditional pure herbal Kajal (Kanmashi) and placing an auspicious black spot on the cheek to ward off the evil eye.",
      icon: "\uD83E\uDEBF",
    },
    {
      step: "04",
      title: "Thottil (Cradle) Ceremony",
      malayalam: "തൊട്ടിലിൽ കിടത്തൽ",
      desc: "Placing baby into the traditional wooden cradle lined with fresh jasmine and Kasavu cloth, accompanied by elders chanting soothing Malayalam lullabies.",
      icon: "\uD83D\uDC76",
    },
    {
      step: "05",
      title: "Blessings & Gold Bangles",
      malayalam: "മുതിർന്നവരുടെ അനുഗ്രഹം",
      desc: "Grandparents and family elders shower Akshatha (sacred rice grains) and gift traditional gold bangles (Vala) and silver anklets (Kolusu).",
      icon: "\uD83E\uDE99",
    },
  ];

  return (
    <section id="rituals" className="relative my-8 scroll-mt-20">
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-[#C59B27] uppercase">
          Vedic Heritage &bull; 28th Day Customs
        </span>
        <h2 className="mt-1 font-serif text-3xl font-bold text-[#5A121C] sm:text-4xl">
          The Five Sacred Noolukettu Rituals
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-xs text-[#6B6258] sm:text-sm">
          Passed down through generations in Kerala, each ritual celebrates little Aarav Krishna with devotion, warmth, and lifelong blessings.
        </p>

        <div className="gold-divider my-4">
          <span className="gold-divider-line" />
          <span className="gold-divider-icon">&#10047;</span>
          <span className="gold-divider-line" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rituals.map((r, i) => (
          <div
            key={r.title}
            className={`kerala-glass-card relative flex flex-col justify-between p-6 ${
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5A121C] text-sm font-bold text-[#F3E5AB] shadow-sm">
                  {r.step}
                </span>
                <span className="text-2xl">{r.icon}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#5A121C]">
                {r.title}
              </h3>
              <span className="block text-xs font-semibold text-[#C59B27] mb-2">
                {r.malayalam}
              </span>
              <p className="text-xs leading-relaxed text-[#6B6258]">
                {r.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#C59B27]/20 flex items-center justify-between text-[11px] text-[#8C6D1F] font-semibold">
              <span>Auspicious Tradition</span>
              <span>&#10003; Performed with Agni &amp; Prayers</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
