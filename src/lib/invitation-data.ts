export type EventConfig = {
  key: "ceremony" | "reception";
  title: string;
  subtitle: string;
  names: string;
  bodyLines: string[];
  dateLabel: string;
  timeLabel: string;
  monthLabel: string;
  dayLabel: string;
  yearLabel: string;
  timeLines: string[];
  venue: string;
  locationLabel: string;
  address: string;
  mapUrl: string;
  calendarUrl?: string;
  isoDate: string;
};

export const pabblyWebhookUrl =
  "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY1MDYzMDA0MzE1MjY5NTUzZCI_3D_pc/IjU3NjcwNTZmMDYzZjA0M2M1MjY5NTUzMTUxMzEi_pc";

export const invitationData = {
  intro: "With love and blessings, we invite you to the Noolukettu ceremony of our beloved baby",
  heroLine: "A cherished 28th day naming celebration in the warmth of family tradition",
  babyName: "Aarav Krishna",
  parents: "Parent 1 & Parent 2",
  grandparentsOne: "GP 1.1 & GP 1.2",
  grandparentsTwo: "GP 2.1 & GP 2.2",
  heroImage: "/assets/hero.jpg",
  heroFallbackImage: "/assets/cute-baby.jpg",
  blessingMessage:
    "Join us as we gather for a graceful Kerala Noolukettu ceremony, offering prayers, blessings, and a joyful welcome for little Aarav Krishna.",
  venueLines: ["House No 2", "Kazhakoottam", "Tvm, Kerala"],
  rsvpContacts: [
    { label: "Parent 1", phone: "+91 98765 43210" },
    { label: "Parent 2", phone: "+91 91234 56789" },
  ],
  events: {
    ceremony: {
      key: "ceremony",
      title: "Noolukettu Ceremony",
      subtitle: "A traditional 28th day naming ceremony for our beloved baby",
      names: "Aarav Krishna",
      bodyLines: [
        "With love and blessings, we invite you",
        "to the Noolukettu ceremony of",
        "our beloved baby as we gather",
        "for prayers, naming, and joy",
      ],
      dateLabel: "Sunday, 18th October 2026",
      timeLabel: "10:30 AM onwards",
      monthLabel: "October",
      dayLabel: "18",
      yearLabel: "2026",
      timeLines: ["At ten thirty", "in the", "morning onwards"],
      venue: "House No 2",
      locationLabel: "Kazhakoottam",
      address: "House No 2, Kazhakoottam, Tvm, Kerala",
      mapUrl:
        "https://maps.google.com/?q=Kazhakoottam%2C%20Thiruvananthapuram%2C%20Kerala",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Noolukettu+Ceremony+-+Aarav+Krishna&dates=20261018T050000Z/20261018T080000Z&details=Join+us+for+the+Noolukettu+ceremony+and+naming+celebration+of+Aarav+Krishna.&location=House+No+2%2C+Kazhakoottam%2C+Tvm%2C+Kerala",
      isoDate: "2026-10-18T10:30:00+05:30",
    } satisfies EventConfig,
    reception: {
      key: "reception",
      title: "Blessings & Lunch",
      subtitle: "Stay with us after the naming ritual for family blessings and a warm gathering",
      names: "Family Gathering",
      bodyLines: [
        "Following the ceremony,",
        "please join us for blessings,",
        "traditional hospitality,",
        "and a joyful family meal",
      ],
      dateLabel: "Sunday, 18th October 2026",
      timeLabel: "Immediately after the ceremony",
      monthLabel: "October",
      dayLabel: "18",
      yearLabel: "2026",
      timeLines: ["After the", "naming", "ceremony"],
      venue: "House No 2",
      locationLabel: "Kazhakoottam",
      address: "House No 2, Kazhakoottam, Tvm, Kerala",
      mapUrl:
        "https://maps.google.com/?q=Kazhakoottam%2C%20Thiruvananthapuram%2C%20Kerala",
      isoDate: "2026-10-18T12:00:00+05:30",
    } satisfies EventConfig,
  },
  infoCards: [
    {
      title: "Our Little Story",
      body: "A gentle glimpse into Aarav's first days",
      icon: "cradle",
    },
    {
      title: "Gallery",
      body: "Tender moments from our growing family",
      icon: "camera",
    },
    {
      title: "Details",
      body: "Ceremony time, venue, and gathering information",
      icon: "lamp",
    },
    {
      title: "RSVP",
      body: "Share your plans and blessings with the family",
      icon: "mail",
    },
  ],
} as const;
