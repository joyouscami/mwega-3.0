import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/pages";
import { caseStudies } from "@/content/site";
import { pageMeta } from "@/lib/seo";

/* Only published case studies get a page. Anything else returns 404. */
const published = caseStudies.filter((c) => c.status === "published");
const find = (slug) => published.find((c) => c.slug === slug);

export function generateStaticParams() {
  return published.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = find(slug);
  if (!study) return {};
  return pageMeta("/case-studies/" + slug, { title: study.title + " | MwegaTech", description: study.challenge.slice(0, 200) });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const study = find(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
