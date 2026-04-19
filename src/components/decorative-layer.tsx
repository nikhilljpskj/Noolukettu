type DecorativeLayerProps = {
  variant?: "page" | "hero" | "card";
};

export function DecorativeLayer({ variant = "page" }: DecorativeLayerProps) {
  if (variant === "hero") {
    return (
      <>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[28%] overflow-hidden">
          <div className="absolute left-[-10%] top-[4%] h-[310px] w-[310px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(133,73,87,0.9)_0%,rgba(240,218,210,0.95)_18%,rgba(255,255,255,0)_60%)] blur-[18px]" />
          <div className="absolute left-[4%] top-[9%] h-[340px] w-[240px] rotate-[-8deg] bg-[radial-gradient(circle_at_22%_24%,rgba(108,129,96,0.78)_0%,rgba(232,237,223,0.0)_56%),radial-gradient(circle_at_38%_52%,rgba(243,226,192,0.75)_0%,rgba(255,255,255,0)_22%),radial-gradient(circle_at_62%_70%,rgba(129,74,90,0.75)_0%,rgba(255,255,255,0)_18%)] opacity-95" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-[28%] overflow-hidden">
          <div className="absolute right-[-10%] top-[4%] h-[310px] w-[310px] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(133,73,87,0.88)_0%,rgba(240,218,210,0.95)_18%,rgba(255,255,255,0)_60%)] blur-[18px]" />
          <div className="absolute right-[4%] top-[9%] h-[340px] w-[240px] rotate-[8deg] bg-[radial-gradient(circle_at_78%_24%,rgba(108,129,96,0.78)_0%,rgba(232,237,223,0.0)_56%),radial-gradient(circle_at_54%_52%,rgba(243,226,192,0.75)_0%,rgba(255,255,255,0)_22%),radial-gradient(circle_at_34%_70%,rgba(129,74,90,0.75)_0%,rgba(255,255,255,0)_18%)] opacity-95" />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[6%] top-[20%] h-4 w-2 rounded-full bg-[#e6c8cc]/60 rotate-[-18deg]" />
          <div className="absolute left-[18%] top-[56%] h-5 w-2 rounded-full bg-[#d8c79f]/55 rotate-[14deg]" />
          <div className="absolute right-[14%] top-[24%] h-5 w-2 rounded-full bg-[#e6c8cc]/62 rotate-[12deg]" />
          <div className="absolute right-[9%] top-[52%] h-4 w-2 rounded-full bg-[#d8c79f]/55 rotate-[-10deg]" />
        </div>
      </>
    );
  }

  if (variant === "card") {
    return (
      <>
        <div className="pointer-events-none absolute left-[2%] top-[22%] h-5 w-2 rounded-full bg-[#dccb9a]/38 rotate-[-18deg]" />
        <div className="pointer-events-none absolute right-[3%] top-[18%] h-4 w-2 rounded-full bg-[#e1c4ca]/42 rotate-[12deg]" />
        <div className="pointer-events-none absolute right-[8%] bottom-[16%] h-5 w-2 rounded-full bg-[#e1c4ca]/36 rotate-[-14deg]" />
        <div className="pointer-events-none absolute left-[7%] bottom-[18%] h-4 w-2 rounded-full bg-[#dccb9a]/34 rotate-[10deg]" />
      </>
    );
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-[10%] h-5 w-2 rounded-full bg-[#e3ccd1]/38 rotate-[-20deg]" />
        <div className="absolute left-[16%] top-[40%] h-6 w-2 rounded-full bg-[#d8c79f]/34 rotate-[10deg]" />
        <div className="absolute right-[8%] top-[12%] h-5 w-2 rounded-full bg-[#e3ccd1]/38 rotate-[12deg]" />
        <div className="absolute right-[12%] top-[38%] h-4 w-2 rounded-full bg-[#d8c79f]/30 rotate-[-12deg]" />
        <div className="absolute left-[10%] bottom-[16%] h-5 w-2 rounded-full bg-[#e3ccd1]/30 rotate-[8deg]" />
        <div className="absolute right-[14%] bottom-[14%] h-5 w-2 rounded-full bg-[#d8c79f]/30 rotate-[-14deg]" />
      </div>
    </>
  );
}