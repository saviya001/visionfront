import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa'; // අයිකන් එක සඳහා (Install කරලා නැත්නම් npm i react-icons ගහන්න)

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#020617]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-wide">
            Vision<span className="text-indigo-400">Front</span>
          </span>
        </Link>
        
        {/* Menu Items */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 items-center">
            
            {/* Home Link */}
            <li><Link href="/" className="block py-2 px-3 text-white hover:text-indigo-400 transition-colors">Home</Link></li>
            
            {/* Services Link */}
            <li><Link href="/#services" className="block py-2 px-3 text-gray-400 hover:text-indigo-400 transition-colors">Services</Link></li>
            
            {/* --- PROJECTS DROPDOWN START --- */}
            <li className="relative group">
                <button className="flex items-center gap-1 py-2 px-3 text-gray-400 hover:text-indigo-400 transition-colors">
                    Projects <FaChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Dropdown Menu Box */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl p-2 ring-1 ring-white/5">
                        
                        {/* Option 1: Signature Products */}
                        <Link href="/products" className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                            <span className="block text-white font-semibold text-sm group-hover/item:text-indigo-400 transition-colors">
                                Our Signature Products
                            </span>
                            <span className="block text-xs text-gray-500 mt-1">
                                AI Tools & SaaS Platforms
                            </span>
                        </Link>

                        {/* Option 2: Client Success Stories */}
                        <Link href="/client-work" className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group/item">
                            <span className="block text-white font-semibold text-sm group-hover/item:text-purple-400 transition-colors">
                                Client Success Stories
                            </span>
                            <span className="block text-xs text-gray-500 mt-1">
                                Custom Web Solutions
                            </span>
                        </Link>

                    </div>
                </div>
            </li>
            {/* --- PROJECTS DROPDOWN END --- */}

            {/* Insights Link */}
            <li><Link href="/blog" className="block py-2 px-3 text-gray-400 hover:text-indigo-400 transition-colors">Insights</Link></li>

            {/* Contact Button */}
            <li>
                <Link href="/#contact" className="ml-4 block py-2.5 px-6 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.7)]">
                    Contact Us
                </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}