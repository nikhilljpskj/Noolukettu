import { Cormorant_Garamond, Great_Vibes, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// export const greatVibes = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
// });

export const playfair = Playfair_Display({
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}