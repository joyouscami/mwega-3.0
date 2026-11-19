import { ResourcesRoute } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/resources");

export default function Page() {
  return <ResourcesRoute />;
}
