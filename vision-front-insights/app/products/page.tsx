import { client } from "@/lib/sanity"; 
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

export const revalidate = 60;


const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

async function getProducts() {

  const query = `*[_type == "project" && category == "signature"] {
    _id,
    title,
    smallDescription,
    "slug": slug.current,
    mainImage
  }`;
  return await client.fetch(query);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
   
    <div className="min-h-screen bg-[#020617] py-24 px-6 relative overflow-hidden">
      
  
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>
      
      
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      {/* Center Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none"></div>


      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Centered & Clean */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
             <FaStar className="text-yellow-500" /> Premium Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            World Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Products</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the future with our AI driven software suite. Built for performance, security, and scalability.
          </p>
        </div>

        {/* Products List - Floating Cards */}
        <div className="grid grid-cols-1 gap-20">
          {products.length > 0 ? (
            products.map((project: any, index: number) => (
              
              // Card Design: Modern Frosted Glass
              <div key={project._id} className="group relative bg-white/[0.03] backdrop-blur-2xl rounded-[40px] p-2 overflow-hidden hover:bg-white/[0.06] transition-all duration-700 hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.2)]">
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    
                    {/* Image Section (Large & Cinematic) */}
                    <div className="w-full lg:w-3/5 h-[350px] lg:h-[450px] relative rounded-[32px] overflow-hidden shadow-2xl">
                     
                        {project.mainImage && (
                            <Image
                            src={urlFor(project.mainImage).url()}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        )}
                        {/* Smooth Overlay on Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-2/5 p-6 lg:pr-12 flex flex-col justify-center">
                        <div className="text-indigo-400 text-sm font-bold tracking-wider uppercase mb-4 opacity-80">
                            Product {String(index + 1).padStart(2, '0')}
                        </div>
                        
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight group-hover:text-indigo-200 transition-colors">
                            {project.title}
                        </h2>
                        
                      
                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            {project.smallDescription}
                        </p>
                        
                     
                        <Link 
                            href={`/project/${project.slug}`}
                            className="group/btn w-fit flex items-center gap-4 text-white text-lg font-semibold hover:text-indigo-400 transition-colors"
                        >
                            <span className="relative">
                                Explore Details
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover/btn:w-full"></span>
                            </span>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                <FaArrowRight size={14} />
                            </div>
                        </Link>
                    </div>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-32">
                <p className="text-slate-500">No signature products found yet.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}