import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "หมูกระทะหาดใหญ่ เบียร์เย็นชื่อใจ",
  description: "หมูกระทะแสนอร่อย ราคามิตรภาพ เหมาะกับครอบครัวและเพื่อนฝูง ใกล้มมหาวิทยาลัยสงขลา โลตัสหาดใหญ่ เซ็นทรัลหาดใหญ่ ไม่ไกลจาก ตลาดกรีนเวย์ กินอะไรหาดใหญ่ กิิน 18/3 หมูย่างแกล้มเบียร์",
  icons: {
    icon: '/assets/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
