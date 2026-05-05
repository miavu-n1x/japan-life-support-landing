import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan Life Support - Life in Japan, gently shared",
  description:
    "Blog cá nhân của Mai Phương chia sẻ kinh nghiệm sống ở Nhật, giấy tờ, thuế, Nenkin, tiết kiệm và tư vấn miễn phí.",
  openGraph: {
    title: "Japan Life Support",
    description:
      "Life in Japan, gently shared. Kinh nghiệm sống ở Nhật và góc tư vấn miễn phí từ Mai Phương.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
