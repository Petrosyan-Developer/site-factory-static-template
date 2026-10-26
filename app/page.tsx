import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Главная — Site Factory",
  description: "Статическая главная страница тестового Git-шаблона.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Главная — Site Factory",
    description: "Статическая главная страница тестового Git-шаблона.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main
      x-modify="class"
      x-modify-params="bg-{white,slate-50} px-{6..10}"
      className="mx-auto my-10 max-w-5xl rounded-3xl py-16 shadow-sm"
    >
      <p x-content-key="page.label" className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
        Главная
      </p>
      <h1 x-content-key="content.heading" className="max-w-3xl text-5xl font-black tracking-tight">
        Детерминированный статический сайт
      </h1>
      <p x-content-key="content.body" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Эта страница собрана из immutable Git commit и готова к атомарной публикации.
      </p>
      <Link href="/about/" className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white">
        Подробнее о шаблоне
      </Link>
    </main>
  );
}
