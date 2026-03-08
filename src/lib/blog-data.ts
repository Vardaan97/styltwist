import type { BlogPost } from "./blog-types";
import { batch1Posts } from "./blog-posts-batch1";
import { batch2Posts } from "./blog-posts-batch2";
import { batch3Posts } from "./blog-posts-batch3";
import { batch4Posts } from "./blog-posts-batch4";

const allPosts: BlogPost[] = [
  ...batch1Posts,
  ...batch2Posts,
  ...batch3Posts,
  ...batch4Posts,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): BlogPost[] {
  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allPosts.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}
