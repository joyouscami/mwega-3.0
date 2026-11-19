import { LegalPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/privacy", { title: "Privacy Policy | Mwega" });

export default function Page() {
  return <LegalPage title="Privacy Policy" />;
}
