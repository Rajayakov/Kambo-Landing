import type { Metadata } from "next";
import { Cormorant_Garamond, Onest } from "next/font/google";
import Script from "next/script";
import { LazyMotion, domAnimation } from "motion/react";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import ScrollRestoration from "@/components/ScrollRestoration";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kambu.ru"),
  title: "Церемония Камбо — очищение амазонской лягушкой | Яков Раджуна",
  description:
    "Церемония Камбо в России. 400+ проведённых церемоний. Традиционная практика народов Амазонии. Запись через личный разговор.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Церемония Камбо | Яков Раджуна",
    description: "Традиционная практика Амазонии. Запись открыта.",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Церемония Камбо | Яков Раджуна",
    description: "Традиционная практика Амазонии. Запись открыта.",
    images: ["/og-image.jpg"],
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
      <body>
        <Script id="strip-hash-on-load" strategy="beforeInteractive">
          {`
            if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
            if (window.location.hash) {
              history.replaceState(null, '', window.location.pathname + window.location.search);
            }
            window.scrollTo(0, 0);
          `}
        </Script>
        <ScrollRestoration />
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
        <CookieBanner />
      </body>
    </html>
  );
}
