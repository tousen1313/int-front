"use server";

import { patchApplications } from "@/service/company/patchApplication";
import { SelectionStatusIds } from "@/service/common/type";
import { revalidatePath } from "next/cache";

export async function patchApplicationAction(
  applicationId: number,
  selectionStatusId: SelectionStatusIds
) {
  await patchApplications(applicationId, selectionStatusId);

  /**
   * 応募状況を即座に反映させるため、On-demand RevalidationでRouter Cacheをオプトアウトする
   * @see https://nextjs.org/docs/app/building-your-application/caching#opting-out-3
   */
  revalidatePath(``);
}
