import type { Metadata } from "next";
import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sandtech Engineering",
  description: "SandTech Company Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}
