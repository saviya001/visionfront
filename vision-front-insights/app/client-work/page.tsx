import { client } from "@/lib/sanity"; // Library Path එක හරියට තියෙනවද බලන්න
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBriefcase, FaGlobeAmericas } from "react-icons/fa";

// Image Builder Setup
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

async function getClientProjects() {

  const query = `*[_type == "project" && category == "client"] {
    _id,
    title,
    smallDescription,
    "slug": slug.current,
    mainImage
  }`;
  return await client.fetch(query);
}

export default async function ClientWorkPage() {
  const projects = await getClientProjects();

  return (
 
    <div className="min-h-screen bg-[#020617] py-24 px-6 relative overflow-hidden">
      
      {/* --- BACKGROUND ANIMATIONS --- */}
      

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      

      <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      
  
      <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>


      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
             <FaGlobeAmericas /> Global Impact
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 leading-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Success Stories</span>
          </h1>
          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            See how we've helped businesses transform their ideas into powerful digital reality.
          </p>
        </div>

        {/* Projects List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <Link 
            
                href={`/project/${project.slug}`} 
                key={project._id}
                className="group relative bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                 
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-bold mb-3 uppercase tracking-wider">
                    <FaBriefcase /> Case Study
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
          
                  <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {project.smallDescription}
                  </p>
                  
                  <div className="flex items-center text-white text-sm font-semibold group-hover:text-purple-400 transition-colors gap-2">
                    Read Story <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-gray-500 col-span-full text-center py-20 border border-white/10 rounded-2xl bg-slate-900/50">
                <p>No client projects found yet.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}