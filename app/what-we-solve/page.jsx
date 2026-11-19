import { WhatWeSolvePage } from "@/components/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/what-we-solve");

export default function Page() {
  return <WhatWeSolvePage />;
}
