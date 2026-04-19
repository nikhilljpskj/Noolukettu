import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baby Name Noolukettu Invitation",
  description: "A premium Kerala Noolukettu and naming ceremony invitation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
