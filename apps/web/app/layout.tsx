import type { Metadata } from "next";
import { WebVitals } from "@/src/features/web-vitals";
import "./globals.css";

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
    <html lang="ru" className="dark">
      <body>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
