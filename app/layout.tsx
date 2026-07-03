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
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kambo-landing.vercel.app"),
  title: "Церемония Камбо — очищение амазонской лягушкой | Яков Раджуна",
  description:
    "Церемония Камбо на Ко Пангане. 400+ проведённых церемоний. Традиционная практика народов Амазонии. Запись через личный разговор.",
  openGraph: {
    title: "Церемония Камбо | Яков Раджуна",
    description:
      "400+ церемоний на Ко Пангане. Традиционная практика Амазонии. Запись открыта.",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/hero-kambo.png", width: 1200, height: 630 }],
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
