import type { Metadata } from "next";
import localFont from "next/font/local";
import { WebVitals } from "@/src/features/web-vitals";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pixel & Code",
  description: "Персональное портфолио Ивана Гаврилова — Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
