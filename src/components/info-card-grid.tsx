import { invitationData } from "@/lib/invitation-data";

function InfoIcon({ icon }: { icon: string }) {
  if (icon === "cradle") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9.5h12v4.5a6 6 0 0 1-12 0Z" />
        <path d="M5 9.5h14" />
        <path d="M8.5 6.5a3.5 3.5 0 0 1 7 0" />
      </svg>
    );
  }

  if (icon === "camera") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 8.5h3l1.3-2h7.4l1.3 2H20a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 2-2Z" />
        <circle cx="12" cy="14" r="3.5" />
      </svg>
    );
  }

  if (icon === "lamp") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c1.2 1 1.9 2 1.9 3.1A1.9 1.9 0 1 1 10.1 6C10.1 5 10.8 4 12 3Z" />
        <path d="M7 11h10l-1.3 4.2a2 2 0 0 1-1.9 1.4h-3.6a2 2 0 0 1-1.9-1.4Z" />
        <path d="M9 18.5h6M8 21h8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6.5h18v11H3z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function InfoCardGrid() {
  return (
    <section className="fade-in-section grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {invitationData.infoCards.map((card) => (
        <article
          key={card.title}
          className="relative overflow-hidden rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,242,236,0.96))] px-6 py-8 text-center shadow-[0_16px_45px_rgba(116,126,107,0.1)]"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-sage-strong)]/20 bg-[linear-gradient(180deg,rgba(247,245,239,0.95),rgba(233,239,229,0.85))] text-[var(--color-forest)]">
            <InfoIcon icon={card.icon} />
          </div>
          <h3 className="mt-5 font-serif text-3xl text-[var(--color-forest)]">
            {card.title}
          </h3>
          <p className="mx-auto mt-3 max-w-[16rem] text-base leading-7 text-stone-700">
            {card.body}
          </p>
        </article>
      ))}
    </section>
  );
}
