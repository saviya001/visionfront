import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";

async function getPosts() {
 
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    author
  }`;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    // 1. Theme Change: Deep Blue Background
    <div className="min-h-screen bg-[#020617] py-24 px-6 relative overflow-hidden">
      
      {/* --- Background Effects (Aurora Glow) --- */}
      {/* Top Left Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      {/* Tech Grid Pattern (Optional) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs tracking-wider uppercase mb-4">
             Knowledge Base
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Insights</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the latest trends in AI, Web Development, and Software Engineering directly from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            
            // 2. Card Design: Glassmorphism with Hover Glow
            <Link 
              href={`/blog/${post.slug.current}`} 
              key={post._id}
              className="group flex flex-col h-full bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] hover:-translate-y-2"
            >
              
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden">
                {post.mainImage ? (
                    <Image 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">No Image</div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-medium text-white">
                    <FaCalendarAlt className="text-indigo-400" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                 
                 {/* Author */}
                 <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">
                    <FaUser /> {post.author || "VisionFront Team"}
                 </div>

                 {/* Title */}
                 <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                    {post.title}
                 </h3>
                 
                 {/* Excerpt */}
                 <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                 </p>

                 {/* Read More Link */}
                 <div className="mt-auto flex items-center gap-2 text-white font-semibold text-sm group-hover:text-indigo-400 transition-colors">
                    Read Article <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                 </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}