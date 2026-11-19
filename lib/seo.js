import { seo, seoDescriptions, siteConfig } from "@/content/site";

/* Set NEXT_PUBLIC_SITE_URL once your domain is live. Until then the Vercel production address is used. */
const base = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL : "https://mwega.com");
export const siteUrl = base.replace(/\/+$/, "");

/* Title, description, canonical link and social-share tags for one route. Titles come from seo in content/site.js. */
export function pageMeta(path, options = {}) {
  const title = options.title || seo[path] || siteConfig.companyName + " | " + siteConfig.tagline;
  const description = options.description || seoDescriptions[path] || siteConfig.description;
  const meta = {
    title, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: siteConfig.companyName, type: options.type || "website", locale: "en_KE" },
    twitter: { card: "summary_large_image", title, description },
  };
  if (options.noindex) meta.robots = { index: false, follow: true };
  return meta;
}
