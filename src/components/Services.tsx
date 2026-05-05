import { askTopics } from "@/data/site";
import { MaiPortrait, TopicIllustration } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <>
      <section id="about" className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/80 bg-white/55 p-3 shadow-premium backdrop-blur">
            <MaiPortrait className="h-auto w-full rounded-[2rem]" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Giới thiệu"
              title="Mình là Mai Phương, người ghi lại những kinh nghiệm đời thường ở Nhật"
              description="Mình sống ở Nhật 10 năm, từng tự xoay xở với giấy tờ, thuế, Nenkin, chuyển nhà, tiết kiệm chi phí và những việc nhỏ trong đời sống. Trang này là nơi mình chia sẻ lại những điều thực tế, dễ hiểu và có thể áp dụng ngay."
              align="left"
            />
            <div className="mt-8 rounded-[1.75rem] border border-white/80 bg-white/65 p-6 leading-8 text-slate-600 shadow-soft backdrop-blur">
              Mình không muốn bạn có cảm giác phải mua một dịch vụ mới được hỏi.
              Nếu câu hỏi nằm trong phần mình biết, mình sẽ trả lời miễn phí.
              Nếu cần chuyên gia hoặc cơ quan chính thức, mình sẽ nói rõ để bạn
              tự quyết định.
            </div>
          </div>
        </div>
      </section>

      <section id="ask" className="bg-ivory px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bạn có thể hỏi mình về"
            title="Những việc thường gặp khi sống ở Nhật"
            description="Mình trả lời theo hướng gần gũi, dựa trên kinh nghiệm thực tế và giúp bạn biết nên bắt đầu từ đâu."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {askTopics.map((topic) => (
              <article
                key={topic.title}
                className="group rounded-[1.5rem] border border-white/80 bg-white/65 p-7 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-white/90 hover:shadow-premium"
              >
                <TopicIllustration type={topic.illustration} />
                <h3 className="mt-5 text-xl font-bold text-navy-950">
                  {topic.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
