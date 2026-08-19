import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { fallbackBlogPosts } from "@/lib/blog-fallback";
import { formatBlogDate } from "@/lib/blog-format";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function resolvePost(slug: string) {
  const post = await getBlogPost(slug);
  if (post) return post;
  return fallbackBlogPosts.find((p) => p.slug === slug) ?? null;
}

async function relatedPosts(slug: string) {
  const entries = await getBlogPosts();
  const pool = entries.length ? entries : fallbackBlogPosts;
  return pool.filter((p) => p.slug !== slug).slice(0, 3);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return { title: "Blog | Mulberry Hills" };
  return {
    title: `${post.title} | Mulberry Hills`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImageSrc ? [{ url: post.coverImageSrc }] : undefined,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  const others = await relatedPosts(slug);

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section blog-hero-dark">
        <div className="container">
          <a href="/blog" className="blog-back-link">
            ← Back to Blog
          </a>
          <div className="blog-singe-hero-wrap">
            <div className="blog-singe-hero-left-box">
              <div>
                <div className="blog-category-box">{post.category}</div>
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
              </div>
              <div className="blog-single-information-box">
                <div className="blog-single-information">
                  <div>{post.author}</div>
                  <div className="blog-meta-muted">{formatBlogDate(post.publishedAt)}</div>
                </div>
              </div>
            </div>
            <div className="blog-singe-hero-right-box">
              <img src={post.coverImageSrc} alt={post.coverImageAlt} className="blog-card-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="section blog-section">
        <div className="container">
          <div className="blog-post-wrapper">
            <div className="blog-single-left-box">
              <div className="blog-post" dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} />
            </div>
            <div className="blog-single-right-box">
              <div className="blog-single-right-inner">
                <div className="blog-single-information-box">
                  <div className="blog-single-information">
                    <div>Written by</div>
                    <div className="blog-meta-muted">{post.author}</div>
                  </div>
                </div>
                <div className="blog-social-share-box">
                  <a href="/blog">More articles →</a>
                </div>
              </div>
            </div>
          </div>
          {others.length ? (
            <div className="blog-related-wrap">
              <h3>More from the blog</h3>
              <div className="blog-collection-list">
                {others.map((other) => (
                  <a key={other.slug} href={`/blog/${other.slug}`} className="blog-single-card">
                    <div className="blog-card-image-box">
                      <img
                        loading="lazy"
                        src={other.coverImageSrc}
                        alt={other.coverImageAlt}
                        className="blog-card-image"
                      />
                    </div>
                    <div className="blog-card-content-box">
                      <div className="blog-category-box">{other.category}</div>
                      <h3 className="blog-card-name">{other.title}</h3>
                      <div className="blog-card-date-box">
                        <span>{other.author}</span>
                        <div className="blog-card-dot"></div>
                        <span>{formatBlogDate(other.publishedAt)}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </div>
  );
}
