import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export interface Author {
  _id: string;
  name: string;
  image?: SanityImageSource;
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: Author;
  mainImage?: SanityImageSource;
  categories?: Category[];
  publishedAt: string;
  body: any[];
  estimatedReadingTime: number;
  excerpt?: string;
}

export const client = createClient({
  projectId: "jsiimhei",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);

// Global pagination handler
export const fetchPaginatedData = async (
  type: string, // The Sanity document type (e.g., "post")
  limit = 10, // Number of items per page
  offset = 0, // Starting index for fetching items
  additionalFilters = "" // Additional GROQ filters (optional)
): Promise<any[]> => {
  console.log(`Fetching ${type} with limit ${limit} and offset ${offset}`);
  const query = `*[_type == "${type}" ${additionalFilters}] | order(publishedAt desc) [${offset}...${offset + limit}] {
    _id,
    title,
    slug,
    excerpt,
    author->{
      _id,
      name,
      image
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body[0...2],
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }`;

  return await client.fetch(query);
};

// Refactor getBlogPosts to use the global handler
export const getBlogPosts = async (
  limit = 10,
  offset = 0
): Promise<BlogPost[]> => {
  return await fetchPaginatedData("post", limit, offset);
};

// Example usage of getBlogPosts with pagination
// const posts = await getBlogPosts(10, 20); // Fetch 10 posts starting from the 21st post

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{
      _id,
      name,
      image,
      bio
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }`;

  return await client.fetch(query, { slug });
};

export const getRelatedPosts = async (
  categories: Category[],
  currentPostId: string,
  limit = 3
): Promise<BlogPost[]> => {
  const query = `*[_type == "post" && _id != $currentPostId && count((categories[]._ref)[@ in $categories]) > 0] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    author->{
      _id,
      name
    },
    mainImage,
    publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }`;

  return await client.fetch(query, {
    categories: categories?.map(cat => cat._id) || [],
    currentPostId
  });
};

export const searchPosts = async (searchTerm: string): Promise<BlogPost[]> => {
  const query = `*[_type == "post" && (title match $searchTerm || pt::text(body) match $searchTerm)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
      _id,
      name
    },
    mainImage,
    publishedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  }`;

  return await client.fetch(query, { searchTerm: `*${searchTerm}*` });
};

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title
  }`;

  return await client.fetch(query);
};

export const getBlogPostsForSitemap = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    slug,
    publishedAt
  }`;
  return await client.fetch(query);
};
