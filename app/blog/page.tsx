import { getBlogPosts, urlFor } from "../../sanity/client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { logo } from "../../assets";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Biz360 Prime Insights",
    "url": "https://www.biz360prime.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Biz360 Prime",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.biz360prime.com/logo.png"
      }
    }
  };

  let posts: any[] = [];
  try {
    posts = await getBlogPosts();
  } catch (err) {
    console.error("Sanity fetch error: ", err);
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white mb-6">
            Biz360Prime <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400">Insights</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Read the latest industry news, engineering updates, and deep dives on how to operationalize your company effectively.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="p-12 text-center rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-zinc-500 font-medium">No posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug?.current}`} className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300">
                <div className="w-full h-56 relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  {post.mainImage ? (
                    <Image 
                      src={urlFor(post.mainImage).width(800).height(450).url()} 
                      alt={post.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400">No Image</div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.publishedAt || Date.now()).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6 flex-1">
                    {post.excerpt || "Click to read more about this insight."}
                  </p>
                  <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                      {post.authorImage ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden relative">
                          <Image src={urlFor(post.authorImage).width(100).height(100).url()} alt={post.authorName || 'Author'} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                          <User size={14} className="text-zinc-500" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-zinc-900 dark:text-white">{post.authorName || "Biz360 Team"}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
