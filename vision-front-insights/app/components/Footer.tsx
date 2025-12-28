import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    // 1. bg-black එහෙම්මම තිබ්බා (ඔයා ඉල්ලපු නිසා).
    // 2. mt-20 අයින් කළා (එතකොට අර හිස් ඉඩ එන්නේ නෑ).
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand Name */}
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              Vision<span className="text-indigo-400">Front Insight</span>
            </span>
          </Link>
        </div>

        <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
          Transforming Ideas into Intelligent Reality. We specialize in AI driven solutions and high performance web development.
        </p>

        {/* Social Icons Section */}
        <div className="flex gap-6 mb-10">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/visionfront-insights/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-[#0077b5] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,119,181,0.6)]"
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-[#1877f2] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]"
            >
              <FaFacebookF size={20} />
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-[#ff0000] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
            >
              <FaYoutube size={20} />
            </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vision Front Insights. All rights reserved.
        </p>
      </div>
    </footer>
  );
}