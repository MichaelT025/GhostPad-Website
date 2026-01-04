import { redirect } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export default function SuggestPage() {
  redirect(`${SITE_CONFIG.github}/issues/new/choose`);
}
