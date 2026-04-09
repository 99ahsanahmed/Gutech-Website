import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '500', '700'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['600', '700'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "GU TECH | Al Ghazali University",
  description: "Modern, Prestigious tech-driven education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="main-content flex-1">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <GoogleAnalytics gaId="G-ABCDEF1234" />
      </body>
    </html>
  );
}
