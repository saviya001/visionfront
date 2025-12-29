"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (

    <section className="relative py-32 lg:py-48 flex items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* 2. Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      {/* 3. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.15]"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          Transforming Ideas into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient">
            Intelligent Reality
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
           We specialize in AI driven solutions and high performance web development. Elevate your business with our cutting edge technology.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg hover:scale-105"
          >
            View Portfolio <FaArrowRight />
          </Link>
          
          <Link 
            href="/#contact"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent"></div>
    </section>
  );
}