import { InsightsPage } from "@/components/interactive";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/insights");

export default function Page() {
  return <InsightsPage />;
}
