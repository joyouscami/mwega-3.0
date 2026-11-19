import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/pages";
import { articles } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const find = (slug) => articles.find((a) => a.slug === slug);

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = find(slug);
  if (!article) return {};
  return pageMeta("/insights/" + slug, { title: article.title + " | MwegaTech", description: article.summary, type: "article" });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = find(slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
