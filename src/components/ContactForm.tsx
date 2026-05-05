import { contactOptions } from "@/data/site";
import { ChatSupportIllustration } from "./Illustrations";
import { SectionHeading } from "./SectionHeading";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-skysoft to-pastel-lavender/25 px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-pastel-mint/25 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pastel-blue/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Giải đáp miễn phí"
            title="Gửi câu hỏi cho Mai Phương"
            description="Bạn có thể viết ngắn gọn, chưa cần đúng thuật ngữ. Mình sẽ đọc và phản hồi theo hướng dễ hiểu nhất có thể."
            align="left"
          />
          <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-soft backdrop-blur">
            <ChatSupportIllustration className="h-auto w-full rounded-[1.5rem]" />
          </div>
          <p className="mt-5 text-lg font-bold leading-8 text-navy-950">
            Đừng ngại hỏi nếu bạn đang kẹt ở một tờ giấy, một dòng thông báo
            hoặc không biết nên bắt đầu từ đâu.
          </p>
        </div>
        <form className="grid gap-5 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-premium backdrop-blur sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy-950">
              Tên của bạn
              <input
                type="text"
                name="name"
                placeholder="Ví dụ: An"
                className="rounded-2xl border border-navy-100 bg-white/95 px-4 py-3 font-normal outline-none transition focus:border-navy-500"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy-950">
              Email hoặc số điện thoại
              <input
                type="text"
                name="contact"
                placeholder="email@example.com"
                className="rounded-2xl border border-navy-100 bg-white/95 px-4 py-3 font-normal outline-none transition focus:border-navy-500"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-navy-950">
            Bạn muốn hỏi về
            <select
              name="topic"
              className="rounded-2xl border border-navy-100 bg-white/95 px-4 py-3 font-normal outline-none transition focus:border-navy-500"
              defaultValue=""
            >
              <option value="" disabled>
                Chọn chủ đề
              </option>
              {contactOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy-950">
            Câu hỏi của bạn
            <textarea
              name="message"
              rows={6}
              placeholder="Bạn đang gặp tình huống gì? Có giấy tờ hoặc mốc thời gian nào cần lưu ý không?"
              className="resize-none rounded-2xl border border-navy-100 bg-white/95 px-4 py-3 font-normal outline-none transition focus:border-navy-500"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-pastel-blue px-6 py-4 text-sm font-black text-navy-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-pastel-lavender"
          >
            Gửi câu hỏi miễn phí
          </button>
        </form>
      </div>
    </section>
  );
}
