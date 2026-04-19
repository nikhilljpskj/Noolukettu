import { Suspense } from "react";
import { InvitationApp } from "@/components/invitation-app";

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[var(--color-ivory)] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto h-[92svh] max-w-[1120px] animate-pulse rounded-[34px] bg-white/70" />
        </main>
      }
    >
      <InvitationApp />
    </Suspense>
  );
}
