import { HeroJapanLife } from "./Illustrations";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-pastel-blue/25 blur-3xl" />
      <div className="absolute right-[-8rem] bottom-12 h-96 w-96 rounded-full bg-pastel-lavender/25 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div>
          <p className="w-fit rounded-full border border-white/80 bg-white/70 px-5 py-2 text-sm font-semibold text-navy-700 shadow-sm backdrop-blur">
            Chia sẻ kinh nghiệm sống ở Nhật
          </p>
          <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight text-navy-950 sm:text-5xl lg:text-6xl">
            Sống ở Nhật dễ thở hơn khi bạn biết mình cần làm gì
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Mình là Mai Phương, sống ở Nhật 10 năm. Mình chia sẻ kinh nghiệm
            thực tế về giấy tờ, thuế, Nenkin, tiết kiệm và những chuyện đời
            sống thường gặp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-pastel-blue px-7 py-4 text-center text-sm font-bold text-navy-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-pastel-lavender"
            >
              Tư vấn miễn phí
            </a>
            <a
              href="#tips"
              className="rounded-full border border-white/80 bg-white/70 px-7 py-4 text-center text-sm font-bold text-navy-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              Kinh nghiệm sống
            </a>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/55 p-3 shadow-premium backdrop-blur">
          <HeroJapanLife className="h-auto w-full rounded-[2rem]" />
        </div>
      </div>
    </section>
  );
}
