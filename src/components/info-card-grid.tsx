import { invitationData } from "@/lib/invitation-data";

function InfoIcon({ icon }: { icon: string }) {
  if (icon === "heart") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20.5s-7-4.4-7-10.2c0-2.2 1.8-4.3 4.3-4.3 1.4 0 2.8.8 3.7 2 1-1.2 2.3-2 3.7-2 2.5 0 4.3 2.1 4.3 4.3 0 5.8-7 10.2-7 10.2Z" />
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

  if (icon === "gift") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8h18v4H3zM5 12h14v8H5zM12 8v12M8.8 8c-1.5 0-2.8-1-2.8-2.3C6 4.5 7 4 7.9 4c2.1 0 4.1 4 4.1 4M15.2 8c1.5 0 2.8-1 2.8-2.3C18 4.5 17 4 16.1 4c-2.1 0-4.1 4-4.1 4" />
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
