"use client";

import { useEffect, useState } from 'react';
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


async function getData() {
  return await client.fetch(`*[_type == "homeSettings"][0]{
    productSectionTitle,
    productSectionImage,
    clientSectionTitle,
    clientSectionImage
  }`);
}

export default function Projects() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    getData().then((data) => setSettings(data));
  }, []);

  return (
 
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950">
      
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
 
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Portfolio
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                Explore our innovative products and successful client collaborations engineered by <span className="text-indigo-400 font-semibold">VFI</span>.
            </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* ==========================
                BOX 1: PRODUCTS CATEGORY
               ========================== */}
            <div className="flex flex-col h-full">
                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-10 bg-indigo-500"></div>
                    <span className="text-indigo-400 font-mono tracking-wider uppercase text-sm font-bold">
                        Innovation Hub
                    </span>
                </div>

                {/* Card */}
                <div className="group relative h-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                    
                    {/* Image Area (Admin Data) */}
                    <div className="relative h-[300px] w-full overflow-hidden">
                        {settings?.productSectionImage && (
                            <Image 
                                src={urlFor(settings.productSectionImage).url()} 
                                alt="Our Products" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow relative z-10 -mt-20">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                            {settings?.productSectionTitle || "Our Signature Products"}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                            Discover our suite of AI powered tools and SaaS platforms designed to automate processes and solve complex business problems.
                        </p>
                        
                        {/* LINK: Goes to /products */}
                        <Link 
                            href="/products" 
                            className="w-fit px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all flex items-center gap-2"
                        >
                            View All Products <FaArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ==========================
                BOX 2: CLIENT WORK CATEGORY
               ========================== */}
            <div className="flex flex-col h-full">
                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-[2px] w-10 bg-purple-500"></div>
                    <span className="text-purple-400 font-mono tracking-wider uppercase text-sm font-bold">
                        Service Excellence
                    </span>
                </div>

                {/* Card */}
                <div className="group relative h-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                    
                    {/* Image Area (Admin Data) */}
                    <div className="relative h-[300px] w-full overflow-hidden">
                        {settings?.clientSectionImage && (
                            <Image 
                                src={urlFor(settings.clientSectionImage).url()} 
                                alt="Client Work" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow relative z-10 -mt-20">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                            {settings?.clientSectionTitle || "Client Success Stories"}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                            Browse our collection of custom built websites and software solutions delivered to satisfied clients across various industries.
                        </p>
                        
                        {/* LINK: Goes to /client-work */}
                        <Link 
                            href="/client-work"
                            className="w-fit px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all flex items-center gap-2"
                        >
                            View Case Study <FaArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}