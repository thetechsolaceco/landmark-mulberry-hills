import { nucleus } from "./nucleus";
import { isNucleusError } from "@techsolace-studios/nucleus-sdk";

export async function getList<T>(model: string): Promise<T[]> {
  try {
    const page = await nucleus.get(model, { sort: "createdAt" }, { revalidate: 300 });
    return page.data.map((entry) => entry.data) as T[];
  } catch (e) {
    if (isNucleusError(e)) {
      console.error(`Nucleus fetch failed for "${model}": ${e.code} ${e.message}`);
      return [];
    }
    throw e;
  }
}

export async function getTestimonials() {
  return getList<{ title: string; description: string }>("testimonial");
}

export type BlogPostEntry = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageSrc: string;
  coverImageAlt: string;
  author: string;
  publishedAt: string;
  category: string;
};

export async function getBlogPosts() {
  return getList<BlogPostEntry>("blog");
}

export async function getBlogPost(slug: string) {
  try {
    const entry = await nucleus.findOne("blog", { filter: { slug } }, { revalidate: 300 });
    return entry ? (entry.data as BlogPostEntry) : null;
  } catch (e) {
    if (isNucleusError(e)) {
      console.error(`Nucleus fetch failed for "blog" slug "${slug}": ${e.code} ${e.message}`);
      return null;
    }
    throw e;
  }
}
