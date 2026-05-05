import { blogPosts } from "@/data/site";
import { BlogThumbnail } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

export function Tips() {
  return (
    <section id="tips" className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cuộc sống tại Nhật"
          title="Những ghi chép thực tế, đọc nhanh và dễ áp dụng"
          description="Mỗi bài là một tình huống quen thuộc: giấy tờ, đi lại, siêu thị, sim, dịch vụ và những mẹo nhỏ giúp cuộc sống ở Nhật nhẹ hơn một chút."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/90 hover:shadow-premium"
            >
              <div className="h-56 overflow-hidden rounded-[1.5rem]">
                <BlogThumbnail type={post.image} />
              </div>
              <div className="p-3 pt-5">
                <span className="rounded-full bg-pastel-mint/70 px-3 py-1 text-xs font-bold text-navy-700">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug text-navy-950">
                  {post.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
