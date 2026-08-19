import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { fallbackBlogPosts } from "@/lib/blog-fallback";
import { formatBlogDate } from "@/lib/blog-format";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Mulberry Hills",
  description: "Buying guides, community stories and updates from Mulberry Hills, Vijayapura.",
};

export default async function BlogIndexPage() {
  const entries = await getBlogPosts();
  const posts = entries.length ? entries : fallbackBlogPosts;
  const [featured, ...rest] = posts;

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section blog-hero-dark">
        <div className="container">
          <div className="blog-page-heading-box">
            <span className="blog-eyebrow">Our Blog</span>
            <h1>Stories from Mulberry Hills</h1>
            <p>Buying guides, community stories and updates from Mulberry Hills.</p>
          </div>
        </div>
      </section>
      <section className="section blog-section">
        <div className="container">
          {featured ? (
            <a href={`/blog/${featured.slug}`} className="blog-featured-card">
              <div className="blog-featured-image-box">
                <img
                  src={featured.coverImageSrc}
                  alt={featured.coverImageAlt}
                  className="blog-card-image"
                />
              </div>
              <div className="blog-featured-content">
                <div className="blog-category-box">{featured.category}</div>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-card-date-box">
                  <span>{featured.author}</span>
                  <div className="blog-card-dot"></div>
                  <span>{formatBlogDate(featured.publishedAt)}</span>
                </div>
              </div>
            </a>
          ) : null}
          {rest.length ? (
            <div className="blog-collection-list">
              {rest.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-single-card">
                  <div className="blog-card-image-box">
                    <img
                      loading="lazy"
                      src={post.coverImageSrc}
                      alt={post.coverImageAlt}
                      className="blog-card-image"
                    />
                    <div className="blog-category-box">{post.category}</div>
                  </div>
                  <div className="blog-card-content-box">
                    <h3 className="blog-card-name">{post.title}</h3>
                    <div className="blog-card-descritption-box">
                      <p>{post.excerpt}</p>
                    </div>
                    <div className="blog-card-date-box">
                      <span>{post.author}</span>
                      <div className="blog-card-dot"></div>
                      <span>{formatBlogDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </div>
  );
}
