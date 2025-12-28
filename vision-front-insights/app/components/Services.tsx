"use client";

import { useEffect, useState, useRef } from 'react';
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

async function getServicesData() {
  return await client.fetch(`*[_type == "service"]`);
}

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getServicesData().then((data) => setServices(data));
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 350;

      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
            current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    
    <section id="services" className="py-20 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white sm:text-4xl"
            >
                Our Expertise
            </motion.h2>
            <p className="mt-3 text-gray-400 text-base max-w-xl">
                Discover our specialized capabilities designed to drive your success.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3 mt-6 md:mt-0">
            <button 
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/80 flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all hover:scale-105"
            >
                <FaChevronLeft size={16} />
            </button>
            <button 
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/80 flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all hover:scale-105"
            >
                <FaChevronRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Cards Container */}
        <div 
          ref={scrollContainerRef} 
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth -mx-6 px-6 lg:-mx-8 lg:px-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service._id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[300px] md:w-[350px] flex-shrink-0 snap-center relative h-[400px] rounded-xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg shadow-black/50"
            >
              
              {/* Background Image */}
              {service.icon && (
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        src={urlFor(service.icon).url()} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
              )}

              {/* Content Box */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                 
                 {/* Title */}
                 <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors duration-300">
                    {service.title}
                 </h3>
                 
                 {/* Hidden Description Container */}
                 <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 pt-2">
                        {service.description}
                    </p>
                 </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}