import type { Metadata } from "next";
import { Cormorant_Garamond, Onest } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Церемония Камбо — очищение амазонской лягушкой | Яков Раджуна",
  description:
    "Церемония Камбо на Ко Пангане. 350+ проведённых церемоний. Детокс, иммунитет, ясность. Запись через личный разговор.",
  openGraph: {
    title: "Церемония Камбо | Яков Раджуна",
    description:
      "350+ церемоний на Ко Пангане. Иммунитет, детокс, ясность. Запись открыта.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${onest.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
