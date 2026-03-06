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
  keywords: [
    "Евгений Левчук", "Yevgeniy Levchuk", "elevchuk",
    "психолог онлайн", "консультант онлайн", "индивидуальная работа с психологом", "личная консультация онлайн", "психологическая помощь онлайн", "работа с психологом без готовых ответов",
    "психолог для предпринимателей", "коуч для руководителей", "психолог для владельцев бизнеса", "консультант для топ-менеджеров", "психолог жизненный кризис", "помощь в поиске себя", "кризис среднего возраста психолог",
    "что делать когда потерял смысл", "как найти своё направление", "устал от чужих ожиданий", "не знаю чего хочу от жизни", "чувствую что живу не своей жизнью", "психолог когда всё хорошо но что-то не так",
    "психолог Алматы онлайн", "коуч Казахстан", "консультант Алматы", "психолог для казахстанцев", "психолог русскоязычный онлайн",
    "разовая консультация психолог", "системная работа с психологом", "сопровождение психолог", "эмоциональный интеллект коуч", "трансперсональная психология"
  ],
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
