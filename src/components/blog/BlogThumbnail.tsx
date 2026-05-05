import type { BlogPost } from "@/lib/blog";

type BlogThumbnailProps = {
  type: BlogPost["thumbnail"];
};

const config = {
  nenkin: {
    bg: "linear-gradient(135deg, #E8F5F0 0%, #D4EDE6 100%)",
    label: "Nenkin",
    mark: "年",
  },
  tax: {
    bg: "linear-gradient(135deg, #EEF0F8 0%, #E0E4F4 100%)",
    label: "Thuế",
    mark: "税",
  },
  moving: {
    bg: "linear-gradient(135deg, #FDF8F3 0%, #F5EDE0 100%)",
    label: "Chuyển nhà",
    mark: "〒",
  },
  saving: {
    bg: "linear-gradient(135deg, #FDF0F0 0%, #F5D4D4 100%)",
    label: "Tiết kiệm",
    mark: "¥",
  },
  sale: {
    bg: "linear-gradient(135deg, #E8F5F0 0%, #EEF0F8 100%)",
    label: "Sale",
    mark: "%",
  },
} satisfies Record<BlogPost["thumbnail"], { bg: string; label: string; mark: string }>;

export function BlogThumbnail({ type }: BlogThumbnailProps) {
  const item = config[type];

  return (
    <div className="blog-thumb" style={{ background: item.bg }}>
      <svg viewBox="0 0 420 240" fill="none" aria-hidden="true">
        <rect x="86" y="38" width="180" height="148" rx="18" fill="white" stroke="#C8D8E4" strokeWidth="3" />
        <rect x="112" y="72" width="95" height="8" rx="4" fill="#B8D4E8" />
        <rect x="112" y="96" width="120" height="7" rx="3.5" fill="#D4EDE6" />
        <rect x="112" y="118" width="104" height="7" rx="3.5" fill="#D4EDE6" opacity="0.75" />
        <rect x="112" y="140" width="78" height="7" rx="3.5" fill="#D4EDE6" opacity="0.55" />
        <circle cx="292" cy="80" r="36" fill="#F0B8B8" opacity="0.8" />
        <text x="292" y="94" textAnchor="middle" fontSize="38" fontFamily="sans-serif" fontWeight="700" fill="#1A2340">
          {item.mark}
        </text>
        <path d="M268 170c30-26 58-26 86 0" stroke="#5BA891" strokeWidth="9" strokeLinecap="round" />
        <rect x="248" y="132" width="108" height="34" rx="17" fill="white" stroke="#E0E8F0" strokeWidth="2" />
        <text x="302" y="154" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fontWeight="700" fill="#5BA891">
          {item.label}
        </text>
      </svg>
    </div>
  );
}
