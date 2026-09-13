import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NEXA Social",
    template: "%s · NEXA",
  },
  description:
    "Free premium glass social platform. Login, connect with people, post, chat, comment. You own your feed.",
  keywords: ["social", "glass", "feed", "nexa", "login", "chat", "connect"],
  authors: [{ name: "NEXA" }],
  openGraph: {
    title: "NEXA Social",
    description: "Login · Connect · Post · Chat. You own your feed.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-dvh flex flex-col bg-[var(--nexa-bg)] text-[var(--nexa-text)] pb-16 md:pb-0">
          <Navbar />
          <main className="flex-1">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
