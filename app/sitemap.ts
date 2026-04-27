import type { MetadataRoute } from "next";
import { getBlogPostsForSitemap } from "@/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.biz360prime.com";

  // Fetch all blog posts from Sanity (optimized for sitemap)
  const blogPosts = await getBlogPostsForSitemap();

  // Create sitemap entries for dynamic blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Combine static pages and blog entries
  return [...staticPages, ...blogEntries];
}
