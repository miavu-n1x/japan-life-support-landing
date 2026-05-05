import { navItems } from "@/data/site";
import { BrandLogo } from "./Illustrations";

export function Footer() {
  return (
    <footer className="border-t border-white/80 bg-ivory px-5 py-10 text-navy-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <BrandLogo className="h-12 w-12 shrink-0 shadow-soft" />
          <div>
            <p className="text-lg font-bold lowercase">japan life support</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Blog cá nhân của Mai Phương về cuộc sống ở Nhật, giấy tờ,
              Nenkin, thuế và những mẹo tiết kiệm nhỏ mỗi ngày.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-navy-950">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-navy-100 pt-6 text-sm text-slate-500">
        © 2026 japan life support. Chia sẻ từ kinh nghiệm cá nhân.
      </div>
    </footer>
  );
}
