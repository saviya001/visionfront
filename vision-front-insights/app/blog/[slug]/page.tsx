import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";

async function getPost(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    mainImage,
    body,
    publishedAt,
    author
  }`;
  return await client.fetch(query, { slug });
}

export default async function SinglePost({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params; 
  const post = await getPost(slug);

  if (!post) {
    return notFound(); 
  }

  return (
    // 1. Theme Change: Deep Blue Background (Eye Comfort)
    <article className="min-h-screen bg-[#020617] py-24 px-6 relative overflow-hidden">
      
      {/* --- Background Glow Effects (Ambient Light) --- */}
      {/* Top Center Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back Button */}
        <Link 
            href="/blog" 
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <FaArrowLeft size={12} />
            </div>
            <span className="text-sm font-medium">Back to Insights</span>
        </Link>
        
        {/* Main Header Image */}
        {post.mainImage && (
          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-slate-900">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Smooth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* --- Content Glass Box (Reading Area) --- */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">

            {/* Title & Meta */}
            <div className="text-center mb-12 border-b border-white/5 pb-10">
                <div className="flex justify-center gap-6 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="flex items-center gap-2">
                        <FaCalendarAlt /> {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Date N/A"}
                    </span>
                    <span className="flex items-center gap-2">
                        <FaUser /> {post.author || "Admin"}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {post.title}
                </h1>
            </div>

            {/* Content Body (Rich Text) */}
            <div className="prose prose-invert prose-lg max-w-none">
                {post.body && (
                    <PortableText 
                        value={post.body} 
                        components={{
                            block: {
                                h1: ({children}) => <h1 className="text-3xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-4">{children}</h1>,
                                h2: ({children}) => <h2 className="text-2xl font-bold text-indigo-400 mt-10 mb-4">{children}</h2>,
                                h3: ({children}) => <h3 className="text-xl font-bold text-slate-200 mt-8 mb-3">{children}</h3>,
                                // 3. Typography: text-slate-300 for better reading comfort
                                normal: ({children}) => <p className="mb-6 leading-relaxed text-slate-300">{children}</p>,
                                blockquote: ({children}) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-400 my-8 bg-white/5 p-4 rounded-r-lg">{children}</blockquote>,
                            },
                            list: {
                                bullet: ({children}) => <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-300 marker:text-indigo-500">{children}</ul>,
                                number: ({children}) => <ol className="list-decimal pl-5 mb-6 space-y-2 text-slate-300 marker:text-indigo-500">{children}</ol>,
                            }
                        }}
                    />
                )}
            </div>

        </div>

      </div>
    </article>
  );
}