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
  imageSrc: string;
  imageAlt: string;
};

export const googleSheetEndpointUrl =
  "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";

export const invitationData = {
  intro: "With prayers and love",
  heroLine: "we invite you to the 28th day naming ceremony of our little one",
  babyName: "Baby Name",
  parents: "Parent Name 1 & Parent Name 2",
  grandparents: "Grandparent Name 1 & Grandparent Name 2",
  heroDateLine: "Sunday 18 October 2026  |  10:30 AM onwards",
  heroVenueLine: "House Name, Street Name, Area Name, City, Kerala 689000",
  heroImageSrc: "/assets/cute-baby.jpg",
  heroImageAlt: "Soft baby portrait for the naming ceremony invitation",
  events: {
    ceremony: {
      key: "ceremony",
      title: "Noolukettu",
      subtitle: "28th Day Naming Ceremony",
      names: "Baby Name",
      bodyLines: [
        "With hearts full of gratitude, we invite you to gather",
        "for the naming and blessing ceremony of our beloved baby",
        "amid prayer, family warmth, and Kerala tradition.",
      ],
      dateLabel: "Sunday 18 October 2026",
      timeLabel: "10:30 AM onwards",
      venue: "House Name",
      locationLabel: "Street Name, Area Name",
      address: "House Name, Street Name, Area Name, City, Kerala 689000",
      mapUrl:
        "https://maps.google.com/?q=House%20Name%20Street%20Name%20Area%20Name%20City%20Kerala%20689000",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Baby+Name+Noolukettu&dates=20261018T050000Z/20261018T073000Z&details=Please+join+us+for+the+28th+day+naming+ceremony+of+Baby+Name.&location=House+Name%2C+Street+Name%2C+Area+Name%2C+City%2C+Kerala+689000",
      isoDate: "2026-10-18T10:30:00+05:30",
      monthLabel: "October",
      dayLabel: "18",
      yearLabel: "2026",
      timeSummaryLines: ["At ten-thirty", "in the", "morning"],
      imageSrc: "/assets/baby5.jpg",
      imageAlt: "Baby details styled for the naming ceremony card",
    } satisfies EventConfig,
    reception: {
      key: "reception",
      title: "Blessings & Lunch",
      subtitle:
        "Please stay with us for family blessings, introductions, and lunch after the naming ritual",
      names: "Hosted by Parent Name 1 & Parent Name 2",
      bodyLines: [
        "In the loving presence of",
        "Grandparent Name 1 & Grandparent Name 2,",
        "we look forward to sharing this precious milestone with you.",
      ],
      dateLabel: "Sunday 18 October 2026",
      timeLabel: "Following the ceremony",
      venue: "House Name",
      locationLabel: "City, Kerala",
      address: "House Name, Street Name, Area Name, City, Kerala 689000",
      mapUrl:
        "https://maps.google.com/?q=House%20Name%20Street%20Name%20Area%20Name%20City%20Kerala%20689000",
      isoDate: "2026-10-18T12:00:00+05:30",
      monthLabel: "October",
      dayLabel: "18",
      yearLabel: "2026",
      timeSummaryLines: ["Family blessings", "and lunch", "to follow"],
      imageSrc: "/assets/baby2.jpg",
      imageAlt: "Elegant baby-themed styling for the blessing gathering card",
    } satisfies EventConfig,
  },
  infoCards: [
    {
      title: "Blessing Note",
      body: "A tender note for Baby Name's naming day",
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
      title: "Blessing RSVP",
      body: "Kindly share your name and attendance details with the family",
      icon: "mail",
    },
  ],
} as const;
