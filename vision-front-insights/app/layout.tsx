import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

// 🟢 SEO & Social Media Metadata (Updated)
export const metadata: Metadata = {
  metadataBase: new URL('https://visionfront.vercel.app'), // මෙතනට පස්සේ ඔයාගේ Real Domain එක දාන්න
  title: {
    default: "VisionFront | Intelligent Reality & AI Software Solutions",
    template: "%s | VisionFront" // වෙන පිටුවලදී "Page Name | VisionFront" ලෙස පෙනේ
  },
  description: "VisionFront specializes in AI-driven web development, Fake CV Detection, Deepfake Security, and high-performance SaaS platforms in Sri Lanka.",
  keywords: [
    "Software Company Sri Lanka", 
    "AI Development", 
    "Web Design", 
    "Next.js Developers", 
    "VisionFront", 
    "Vision Front Insights", 
    "Fake CV Detection", 
    "Deepfake Security",
    "vfi"
    
  ],
  authors: [{ name: "Savindu", url: "https://visionfront.vercel.app" }],
  openGraph: {
    title: "VisionFront - Transforming Ideas into Intelligent Reality",
    description: "We build world-class software solutions including Fake CV Detection and AI Systems.",
    url: "https://visionfront.vercel.app",
    siteName: "VisionFront",
    images: [
      {
        url: "/og-image.jpg", // ඔයාගේ ලෝගෝ එක හෝ කවර් ෆොටෝ එකක් public ෆෝල්ඩර් එකට දාන්න
        width: 1200,
        height: 630,
        alt: "VisionFront AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisionFront | Intelligent Reality",
    description: "AI-driven software solutions for modern businesses.",
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