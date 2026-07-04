import type { Metadata } from "next";
import { Cormorant_Garamond, Onest, Inter } from "next/font/google";
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kambo-landing.vercel.app"),
  title: "Церемония Камбо — очищение амазонской лягушкой | Яков Раджуна",
  description:
    "Церемония Камбо в России. 400+ проведённых церемоний. Традиционная практика народов Амазонии. Запись через личный разговор.",
  openGraph: {
    title: "Церемония Камбо | Яков Раджуна",
    description:
      "Древняя практика очищения Амазонии. Глубокое очищение тела. Ясность ума. Возвращение внутренней силы. Для тебя.",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Церемония Камбо | Яков Раджуна",
    description:
      "Древняя практика очищения Амазонии. Глубокое очищение тела. Ясность ума. Возвращение внутренней силы. Для тебя.",
    images: ["/og-image.png"],
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
      className={`${cormorant.variable} ${onest.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
