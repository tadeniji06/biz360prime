import { getBlogPost, urlFor } from "../../../sanity/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from "lucide-react";
import { logo } from "../../../assets";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

// Required to make Next.js use dynamic params if we don't strictly generate statically
export const dynamic = "force-dynamic";

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
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-black flex items-center justify-center border border-zinc-800">
              <Image src={logo} alt="Biz360Prime" width={100} height={32} className="object-contain" />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/blog" className="text-zinc-600 hover:text-red-600 transition-colors">Back to Blog</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

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
            <div className="w-full h-[400px] md:h-[600px] relative rounded-lg overflow-hidden shadow-sm">
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
          <article className="prose prose-lg md:prose-xl prose-zinc prose-a:text-red-600 hover:prose-a:text-red-700 prose-blockquote:border-l-red-600 prose-blockquote:bg-red-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg max-w-none text-black selection:bg-red-200 selection:text-red-900 leading-relaxed font-serif">
            {post.body ? (
              <PortableText value={post.body} />
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
