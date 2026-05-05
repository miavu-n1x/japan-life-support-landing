import type { Metadata } from "next";
import Link from "next/link";
import { BlogThumbnail } from "@/components/blog/BlogThumbnail";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog kinh nghiệm sống ở Nhật | japan life support",
  description:
    "Các bài viết SEO cho người Việt sống ở Nhật về Nenkin, giấy thuế, chuyển nhà, tiết kiệm chi phí và săn sale.",
};

export default function BlogPage() {
  return (
    <main className="blog-shell">
      <div className="blog-container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>

        <header className="blog-index-hero">
          <span className="section-label">Kinh nghiệm sống ở Nhật</span>
          <h1>Blog dành cho người Việt đang tự xử lý giấy tờ và đời sống ở Nhật</h1>
          <p>
            Mỗi bài viết đi thẳng vào một tình huống cụ thể: nhận giấy Nenkin,
            đọc giấy thuế, chuyển nhà, tiết kiệm chi phí hoặc săn sale sao cho
            thực tế.
          </p>
        </header>

        <section className="blog-card-grid" aria-label="Danh sách bài viết">
          {blogPosts.map((post) => (
            <Link className="blog-list-card" href={`/blog/${post.slug}`} key={post.slug}>
              <BlogThumbnail type={post.thumbnail} />
              <div className="blog-list-card-body">
                <span>{post.tag}</span>
                <h2>{post.title}</h2>
                <p>{post.metaDescription}</p>
                <small>Keyword: {post.keyword}</small>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
