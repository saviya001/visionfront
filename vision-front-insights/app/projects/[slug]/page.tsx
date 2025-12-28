import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaTag } from "react-icons/fa";

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    image,
    description,
    category,
    content,
    link
  }`;
  return await client.fetch(query, { slug });
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return notFound();
  }

  return (
    // 1. Theme Change: Deep Blue Background
    <div className="min-h-screen bg-[#020617] py-24 px-6 relative overflow-hidden">
      
      {/* --- Background Effects (Aurora Glow) --- */}
      {/* Top Center Glow (Behind Image) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />


      <div className="max-w-4xl mx-auto relative z-10">
        

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl bg-slate-900">
            {project.image && (
                <Image
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
            )}
            {/* Smooth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
        </div>

        {/* --- Content Glass Box --- */}
        <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">

            {/* Category Badge */}
            <div className="mb-8">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                    project.category === 'product' 
                    ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                    : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                }`}>
                    <FaTag />
                    {project.category === 'product' ? 'Signature Product' : 'Client Success Story'}
                </span>
            </div>

            {/* Title & Description */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {project.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light border-l-4 border-indigo-500 pl-6 mb-10">
                {project.description}
            </p>

            {/* Visit Link Button */}
            {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-50 transition-all mb-12 shadow-lg hover:shadow-indigo-500/20"
                >
                    Visit Live Site <FaExternalLinkAlt size={14} />
                </a>
            )}

            {/* Main Content (Rich Text) */}
            <div className="prose prose-invert prose-lg max-w-none border-t border-white/10 pt-10">
                {project.content ? (
                    <PortableText 
                        value={project.content} 
                        components={{
                            block: {
                                h2: ({children}) => <h2 className="text-2xl font-bold text-indigo-400 mt-12 mb-6">{children}</h2>,
                                h3: ({children}) => <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>,
                                normal: ({children}) => <p className="mb-6 leading-relaxed text-slate-400">{children}</p>,
                                blockquote: ({children}) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-300 my-8">{children}</blockquote>,
                            },
                            list: {
                                bullet: ({children}) => <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-400 marker:text-indigo-500">{children}</ul>,
                                number: ({children}) => <ol className="list-decimal pl-5 mb-6 space-y-2 text-slate-400 marker:text-indigo-500">{children}</ol>,
                            }
                        }}
                    />
                ) : (
                    <p className="text-slate-500 italic text-center py-10">No detailed content added for this project yet.</p>
                )}
            </div>

        </div>

      </div>
    </div>
  );
}