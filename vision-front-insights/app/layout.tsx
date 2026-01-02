import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// 🟢 SEO & Social Media Metadata (Updated)
export const metadata: Metadata = {
  metadataBase: new URL('https://visionfront.vercel.app'),
  title: {
    default: "VisionFront Insights | Intelligent Reality & AI Solutions",
    template: "%s | VisionFront Insights" // හැම පිටුවකම අගට මේ සම්පූර්ණ නම වැටෙයි
  },
  description: "VisionFront Insights specializes in AI-driven web development, Fake CV Detection, Deepfake Security, and high-performance SaaS platforms in Sri Lanka.",
  keywords: [
    "VisionFront Insights",
    "VisionFront",
    "Software Company Sri Lanka", 
    "AI Development", 
    "Web Design", 
    "Fake CV Detection", 
    "vfi"
  ],
  authors: [{ name: "Savindu", url: "https://visionfront.vercel.app" }],
  openGraph: {
    title: "VisionFront Insights - Intelligent Reality",
    description: "Empowering businesses with Next-Gen AI & Web Solutions.",
    url: "https://visionfront.vercel.app",
    siteName: "VisionFront Insights",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VisionFront Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 1. Global Background Color & Font Settings */}
      <body className={`${inter.className} bg-[#020617] text-white antialiased selection:bg-purple-500 selection:text-white`}>
        
        {/* 2. Fixed Background Glow Effects */}
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
            {/* Top Center Blue Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
            {/* Bottom Right Purple Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        {/* 3. Navigation Bar  */}
        <Navbar />

        {/* 4. Main Page Content */}
        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        {/* 5. Footer */}
        <Footer />
        
      </body>
    </html>
  );
}