export type EventConfig = {
  key: "ceremony" | "reception";
  title: string;
  subtitle: string;
  names: string;
  bodyLines: string[];
  dateLabel: string;
  timeLabel: string;
  venue: string;
  locationLabel: string;
  address: string;
  mapUrl: string;
  calendarUrl?: string;
  isoDate: string;
  monthLabel: string;
  dayLabel: string;
  yearLabel: string;
  timeSummaryLines: string[];
};

export const pabblyWebhookUrl =
  "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjIwNTY1MDYzMDA0MzE1MjY5NTUzZCI_3D_pc/IjU3NjcwNTZmMDYzZjA0M2M1MjY5NTUzMTUxMzEi_pc";

export const invitationData = {
  intro: "With love and blessings",
  heroLine:
    "we invite you to the Noolukettu ceremony of our beloved baby",
  babyName: "Aarav Krishna",
  parents: "Nikhil & Anjana",
  grandparents: "Raghavan & Sreedevi",
  heroDateLine: "Sunday, 18th October 2026  •  10:30 AM onwards",
  heroVenueLine: "Sreelakshmi Illam, Pathanamthitta",
  events: {
    ceremony: {
      key: "ceremony",
      title: "Noolukettu Ceremony",
      subtitle: "28th Day Naming Ceremony",
      names: "Aarav Krishna",
      bodyLines: [
        "With love and blessings, we invite you to celebrate",
        "the naming ceremony of our beloved baby",
        "in the warmth of family, tradition, and prayer.",
      ],
      dateLabel: "Sunday, 18th October 2026",
      timeLabel: "10:30 AM onwards",
      venue: "Sreelakshmi Illam",
      locationLabel: "Near Temple Road, Pathanamthitta",
      address: "Sreelakshmi Illam, Near Temple Road, Pathanamthitta, Kerala",
      mapUrl:
        "https://maps.google.com/?q=Sreelakshmi%20Illam%20Near%20Temple%20Road%20Pathanamthitta%20Kerala",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Aarav+Krishna+Noolukettu+Ceremony&dates=20261018T050000Z/20261018T073000Z&details=With+love+and+blessings%2C+we+invite+you+to+the+Noolukettu+ceremony+of+Aarav+Krishna.&location=Sreelakshmi+Illam%2C+Near+Temple+Road%2C+Pathanamthitta%2C+Kerala",
      isoDate: "2026-10-18T10:30:00+05:30",
      monthLabel: "October",
      dayLabel: "18",
      yearLabel: "2026",
      timeSummaryLines: ["At ten-thirty", "in the", "morning"],
    } satisfies EventConfig,
    reception: {
      key: "reception",
      title: "Blessings & Gathering",
      subtitle:
        "Please join the family for prayers, blessings, and lunch after the naming",
      names: "Hosted by Nikhil & Anjana",
      bodyLines: [
        "In the loving presence of",
        "Raghavan & Sreedevi,",
        "we look forward to sharing this precious day with you.",
      ],
      dateLabel: "Sunday, 18th October 2026",
      timeLabel: "Following the ceremony",
      venue: "Sreelakshmi Illam",
      locationLabel: "Pathanamthitta, Kerala",
      address: "Near Temple Road, Pathanamthitta, Kerala",
      mapUrl:
        "https://maps.google.com/?q=Sreelakshmi%20Illam%20Near%20Temple%20Road%20Pathanamthitta%20Kerala",
      isoDate: "2026-10-18T12:00:00+05:30",
      monthLabel: "October",
      dayLabel: "18",
      yearLabel: "2026",
      timeSummaryLines: ["Family blessings", "and lunch", "to follow"],
    } satisfies EventConfig,
  },
  infoCards: [
    {
      title: "Blessing Note",
      body: "A tender note for Aarav's naming day",
      icon: "lotus",
    },
    {
      title: "Ceremony Moodboard",
      body: "Traditional details and soft celebratory accents",
      icon: "flower",
    },
    {
      title: "Venue Details",
      body: "Address, directions and family hosting information",
      icon: "lamp",
    },
    {
      title: "RSVP",
      body: "Kindly confirm your presence with the family",
      icon: "mail",
    },
  ],
} as const;
