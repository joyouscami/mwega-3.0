import { DiagnosticPage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/diagnostic");

export default function Page() {
  return <DiagnosticPage />;
}
