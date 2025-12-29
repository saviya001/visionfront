import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vision Front Insights | AI & Web Solutions",
  description: "Leading tech company specializing in AI solutions, Fake CV Detection, and modern web development.",
  keywords: ["AI", "Web Development", "Sri Lanka", "Fake CV Detection", "Software Company","Vision Front Insights","vfi"],
  openGraph: {
    title: "Vision Front Insights",
    description: "Empowering businesses with Next-Gen AI & Web Solutions.",
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

        {/* 5. Footer ) */}
        <Footer />
        
      </body>
    </html>
  );
}