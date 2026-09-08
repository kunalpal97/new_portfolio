import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


import InteractiveGrid from "@/components/InteractiveGrid";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kunal Pal — Software Engineer",
  description:
    "Portfolio of Kunal Pal, Software Engineer specializing in DevOps, Cloud, and Backend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <InteractiveGrid />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
