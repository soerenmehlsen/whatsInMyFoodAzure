import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PostHogProvider } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "What's in my food?",
  description: "Understand your food ingredients with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
    <PostHogProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
            <main>{children}</main>
          <GoogleAnalytics gaId="G-CXSN8X36QC" />
          <SpeedInsights />
          <Footer />
      </body>
    </PostHogProvider>
    </html>
    </ClerkProvider>
  );
}
