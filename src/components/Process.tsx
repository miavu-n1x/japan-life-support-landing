import { adviceSteps } from "@/data/site";
import { ChatSupportIllustration } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Góc Tư Vấn"
            title="Hỏi như nhắn tin với một người đi trước"
            description="Mình không biến câu hỏi của bạn thành một quy trình bán hàng. Nếu biết, mình chia sẻ. Nếu không chắc, mình nói rõ để bạn kiểm tra thêm."
            align="left"
          />
          <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-soft backdrop-blur">
            <ChatSupportIllustration className="h-auto w-full rounded-[1.5rem]" />
          </div>
        </div>
        <div className="space-y-5">
          {adviceSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-white/80 bg-white/70 p-7 shadow-soft backdrop-blur"
            >
              <span className="text-sm font-bold text-navy-500">
                Bước {item.step}
              </span>
              <h3 className="mt-3 text-xl font-bold text-navy-950">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
