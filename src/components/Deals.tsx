import { deals } from "@/data/site";
import { BlogThumbnail } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

const dealImages = ["market", "documents", "life"];

export function Deals() {
  return (
    <section id="deals" className="bg-ivory px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Góc săn sale"
          title="Ưu đãi dễ dùng cho cuộc sống hằng ngày"
          description="Mình chỉ ghi lại những chương trình thấy thực tế: đi siêu thị, mua online, dùng sim, internet hoặc app tiện ích. Không cần săn quá cực mới tiết kiệm được."
          align="left"
        />
        <div className="grid gap-5">
          {deals.map((deal, index) => (
            <article
              key={deal.name}
              className="rounded-[1.75rem] border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/90"
            >
              <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
                <div className="h-36 overflow-hidden rounded-[1.35rem]">
                  <BlogThumbnail type={dealImages[index] ?? "market"} />
                </div>
                <div>
                  <span className="rounded-full bg-pastel-lavender/55 px-3 py-1 text-xs font-bold text-navy-700">
                    {deal.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-navy-950">
                    {deal.name}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {deal.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
