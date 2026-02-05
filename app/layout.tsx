
import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next-font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "FleetMove - Your Ride, On Demand",
  description: "Reliable rides at your fingertips. Book instantly, track your driver, and travel safely with the world's most trusted mobility app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
