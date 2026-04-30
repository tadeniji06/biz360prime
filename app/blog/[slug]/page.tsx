import { getBlogPost, urlFor } from "../../../sanity/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { logo } from "../../../assets";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";

// Required to make Next.js use dynamic params if we don't strictly generate statically
export const dynamic = "force-dynamic";
export const revalidate = 360;

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-8 text-black">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-7 text-black">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold mb-4 mt-6 text-black">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl font-bold mb-3 mt-5 text-black">{children}</h4>,
    h5: ({ children }) => <h5 className="text-base md:text-lg font-bold mb-3 mt-4 text-black">{children}</h5>,
    h6: ({ children }) => <h6 className="text-sm md:text-base font-bold mb-3 mt-4 text-black">{children}</h6>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-600 bg-red-50 py-4 px-6 my-6 rounded-r-lg italic text-zinc-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    code: ({ children }) => (
      <code className="bg-zinc-200 px-2 py-1 rounded text-sm font-mono text-zinc-800">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : ""}
        className="text-red-600 hover:text-red-700 underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post: any = null;

  try {
    post = await getBlogPost(slug);
  } catch (err) {
    console.error("Sanity fetch error: ", err);
  }

  if (!post) {
    return notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.mainImage ? urlFor(post.mainImage).width(1200).height(800).url() : undefined,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Biz360 Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Biz360 Prime",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.biz360prime.com/logo.png"
      }
    },
    "datePublished": post.publishedAt || new Date().toISOString(),
    "description": post.excerpt || post.title
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-100 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <main className="flex-1 w-full relative">
        {/* Editorial Header Section */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-red-600 font-semibold mb-8 hover:text-red-700 transition-colors uppercase tracking-widest text-sm">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-500 mb-6 uppercase tracking-wider">
              <span className="flex items-center gap-2 text-red-600"><Calendar size={14} /> {new Date(post.publishedAt || Date.now()).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="text-zinc-300">|</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.estimatedReadingTime || 5} min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-black mb-8 leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="w-16 h-1.5 bg-red-600 rounded-full mb-10"></div>

            <div className="flex items-center gap-4">
              {post.author?.image ? (
                <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-sm">
                  <Image src={urlFor(post.author.image).width(120).height(120).url()} alt={post.author.name || 'Author'} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                  <User size={20} className="text-red-500" />
                </div>
              )}
              <div>
                <p className="font-bold text-black">{post.author?.name || "Anonymous Author"}</p>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider">{post.author?.bio || "Author at Biz360Prime"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image full width or wide block */}
        {post.mainImage && (
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="w-full h-100 md:h-150 relative rounded-lg overflow-hidden shadow-sm">
              <Image 
                src={urlFor(post.mainImage).width(1200).height(800).url()} 
                alt={post.title} 
                fill
                className="object-cover" 
                priority
              />
            </div>
          </div>
        )}

        {/* Article Body Content */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <article className="text-black leading-relaxed">
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-zinc-500 italic">No content available for this post.</p>
            )}
          </article>
        </section>
      </main>
      
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-12 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800">
              <Image src={logo} alt="Biz360Prime" width={80} height={24} className="object-contain" />
            </div>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Biz360Prime. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
