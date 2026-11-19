import { articles, caseStudies } from "@/content/site";
import { siteUrl } from "@/lib/seo";

/* Unpublished case studies are left out until they have real content. */
export default function sitemap() {
  const paths = ["", "/what-we-solve", "/our-approach", "/diagnostic", "/about", "/insights", ...articles.map((a) => "/insights/" + a.slug), "/case-studies",
    ...caseStudies.filter((c) => c.status === "published").map((c) => "/case-studies/" + c.slug), "/resources", "/contact", "/privacy", "/terms"];
  return paths.map((path) => ({ url: siteUrl + path, lastModified: new Date() }));
}
