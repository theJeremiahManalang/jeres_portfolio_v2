import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Jeremiah Manalang",
  description: "Full-Stack Developer based in the Philippines. Building clean systems that scale.",
  icons: {
    icon: "/code.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
