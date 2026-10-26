import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О проекте — Site Factory",
  description: "Проверка статического generation pipeline и rollback.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "О проекте — Site Factory",
    description: "Проверка статического generation pipeline и rollback.",
    url: "/about/",
  },
};

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-black">О тестовом шаблоне</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Маршрут подтверждает полный static export, внутренние ссылки, host-correct SEO и crawlability без JavaScript.
      </p>
      <Link href="/" className="mt-8 inline-flex font-semibold text-blue-700">
        Вернуться на главную
      </Link>
    </main>
  );
}
