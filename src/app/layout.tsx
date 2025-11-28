import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { nadea } from "./fonts";
import "./globals.css";

const outFit = Outfit({
  variable: "--font-outFit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cre8",
  description:
    "Cre8 Studios , We create original content that inspires, entertains, and elevates stories across the region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // h-full
    <html lang="en" className="h-full">
      {/* h-full */}
      <body
        className={`${outFit.variable} ${nadea.variable}   antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
