import { OurStorySection } from "@/components/OurStorySection";

export default async function OurStoryPage({
  searchParams,
}: {
  searchParams: Promise<{ guest?: string }>;
}) {
  const params = await searchParams;
  const guestName = params.guest?.trim() ?? "";

  return <OurStorySection guestName={guestName} />;
}
