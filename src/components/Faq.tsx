import { faqs } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="bg-ivory px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Trước khi bạn gửi câu hỏi"
          description="Mình muốn bạn thấy thoải mái khi hỏi, kể cả khi cuối cùng bạn chỉ cần một gợi ý nhỏ."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-white/80 bg-white/70 p-6 shadow-soft backdrop-blur"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-navy-950">
                {faq.question}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pastel-blue/45 text-navy-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
