import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Assuming Helvetica Neue is local or standard sans-serif fallback will catch it.
// NextJS doesn't have Helvetica Neue built-in, so we focus on the Serif font.
const cormorant = Cormorant_Garamond({
  weight: ["400", "500"],
  subsets: ["cyrillic", "latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Евгений Левчук - Пространство для честного разговора",
  description: "Место для тех, кто устал от шума и готовых ответов. Помогаю найти свои смыслы в моменты, когда старые правила перестали работать. Без спешки. Без чужих схем. | Казахстан",
  keywords: ["коуч для руководителей", "бизнес ментор казахстан", "психологическое сопровождение бизнеса", "коучинг для предпринимателей алматы", "астана", "личный эдвайзер", "Евгений Левчук", "executive coaching kazakhstan"],
  openGraph: {
    title: "Евгений Левчук — Сопровождение для руководителей",
    description: "Честная работа с тем, что есть. Без готовых ответов и навязанных методологий.",
    type: "website",
    locale: "ru_KZ",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import { ThemeProvider } from "../components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${cormorant.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="theme-parchment"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
