import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogThumbnail } from "@/components/blog/BlogThumbnail";
import { blogPosts, getBlogPost } from "@/lib/blog";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết | japan life support",
    };
  }

  return {
    title: `${post.title} | japan life support`,
    description: post.metaDescription,
    keywords: [post.keyword, post.tag, "người Việt ở Nhật", "kinh nghiệm sống ở Nhật"],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      locale: "vi_VN",
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-shell">
      <article className="blog-container blog-article">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Trang chủ</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span>{post.title}</span>
        </nav>

        <header className="article-header">
          <span className="post-tag article-tag">{post.tag}</span>
          <h1>{post.title}</h1>
          <p>{post.metaDescription}</p>
          <div className="article-keyword">Keyword chính: {post.keyword}</div>
        </header>

        <BlogThumbnail type={post.thumbnail} />

        <section className="article-section">
          <h2>Trước hết, bạn cần hiểu tình huống này</h2>
          <p>{post.intro}</p>
        </section>

        {post.sections.map((section) => (
          <section className="article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="article-checklist">
          <h2>Checklist xử lý nhanh</h2>
          <ul>
            {post.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="article-faq">
          <h2>Câu hỏi thường gặp</h2>
          {post.faq.map((item) => (
            <div className="article-faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>

        <footer className="article-footer-nav">
          <Link href="/blog">← Xem tất cả bài viết</Link>
          <Link href="/#contact">Gửi câu hỏi miễn phí</Link>
        </footer>
      </article>
    </main>
  );
}
