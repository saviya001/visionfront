"use client";
import Link from 'next/link';
import { useState } from 'react'; 
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; 
import Image from 'next/image';

export default function Navbar() {
  const [nav, setNav] = useState(false); 

  const handleNav = () => {
    setNav(!nav); 
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#020617]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-1">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          
          {/* Logo Image */}
          <div className="relative w-20 h-20">
             <Image 
               src="/logo.png" 
               alt="VisionFront Logo" 
               fill
               className="object-contain"
             />
          </div>

          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-wide">
            VisionFront<span className="text-indigo-400"> INSIGHTS</span>
          </span>
        </Link>
        
        {/* --- DESKTOP MENU (Laptop ) --- */}
        <div className="hidden md:block w-full md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 items-center">
            <li><Link href="/" className="block py-2 px-3 text-white hover:text-indigo-400 transition-colors">Home</Link></li>
            <li><Link href="/#services" className="block py-2 px-3 text-gray-400 hover:text-indigo-400 transition-colors">Services</Link></li>
            
            {/* Desktop Projects Dropdown */}
            <li className="relative group">
                <button className="flex items-center gap-1 py-2 px-3 text-gray-400 hover:text-indigo-400 transition-colors">
                    Projects <FaChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl p-2 ring-1 ring-white/5">
                        <Link href="/products" className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                            <span className="block text-white font-semibold text-sm group-hover/item:text-indigo-400">Our Signature Products</span>
                        </Link>
                        <Link href="/client-work" className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                            <span className="block text-white font-semibold text-sm group-hover/item:text-purple-400">Client Success Stories</span>
                        </Link>
                    </div>
                </div>
            </li>

            <li><Link href="/blog" className="block py-2 px-3 text-gray-400 hover:text-indigo-400 transition-colors">Insights</Link></li>
            <li>
                <Link href="/#contact" className="ml-4 block py-2.5 px-6 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all">
                    Contact Us
                </Link>
            </li>
          </ul>
        </div>

        {/* --- MOBILE BURGER ICON (Phone ) --- */}
        <div onClick={handleNav} className="md:hidden z-50 cursor-pointer text-white">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* --- MOBILE MENU LIST --- */}
        <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-[#020617] flex flex-col justify-center items-center ease-in-out duration-300 md:hidden z-40' : 'fixed left-[-100%] top-0 w-full h-screen bg-[#020617] ease-in-out duration-300 z-40'}>
            <ul className="text-center space-y-8">
                <li><Link onClick={handleNav} href="/" className="text-2xl font-bold text-white hover:text-indigo-400">Home</Link></li>
                <li><Link onClick={handleNav} href="/#services" className="text-2xl font-bold text-gray-400 hover:text-indigo-400">Services</Link></li>
                <li><Link onClick={handleNav} href="/products" className="text-2xl font-bold text-gray-400 hover:text-indigo-400">Our Products</Link></li>
                <li><Link onClick={handleNav} href="/client-work" className="text-2xl font-bold text-gray-400 hover:text-indigo-400">Client Stories</Link></li>
                <li><Link onClick={handleNav} href="/blog" className="text-2xl font-bold text-gray-400 hover:text-indigo-400">Insights</Link></li>
                <li>
                    <Link onClick={handleNav} href="/#contact" className="px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-500">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>

      </div>
    </nav>
  );
}