import { navItems } from "@/data/site";
import { BrandLogo } from "./Illustrations";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex min-w-fit items-center gap-3">
          <BrandLogo className="h-11 w-11 shrink-0 shadow-soft" />
          <span className="leading-tight">
            <span className="block text-base font-extrabold lowercase text-navy-950">
              japan life support
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Life in Japan, gently shared
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 rounded-full border border-white/80 bg-white/65 px-5 py-3 text-sm font-medium text-slate-600 shadow-sm lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-navy-950">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-pastel-blue px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-pastel-lavender"
        >
          Tư vấn miễn phí
        </a>
      </div>
    </header>
  );
}
