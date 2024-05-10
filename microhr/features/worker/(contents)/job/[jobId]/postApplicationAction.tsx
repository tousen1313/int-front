"use server";

import { revalidatePath } from "next/cache";
import { postApplication } from "@/service/worker/postApplication";

export async function postApplicationAction(jobId: number) {
  await postApplication(jobId);

  /**
   * 応募状況を即座に反映させるため、On-demand RevalidationでRouter Cacheをオプトアウトする
   * @see https://nextjs.org/docs/app/building-your-application/caching#opting-out-3
   */
  revalidatePath(``);
}
