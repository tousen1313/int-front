"use server";

import { revalidatePath } from "next/cache";
import { patchWorkers } from "@/service/worker/patchWorker";

function validateFormData(formData: FormData) {
  const name = formData.get("name");
  const birthday = formData.get("birthday");
  const career = formData.get("career");
  if (
    typeof name !== "string" ||
    typeof birthday !== "string" ||
    typeof career !== "string"
  ) {
    throw new Error("Validation error");
  }

  return { name, birthday, career };
}

export async function editWorkerProfileAction(formData: FormData) {
  const { name, birthday, career } = validateFormData(formData);

  await patchWorkers({
    name,
    birthday,
    career,
  });

  /**
   * プロフィールを即座に反映させるため、On-demand RevalidationでRouter Cacheをオプトアウトする
   * @see https://nextjs.org/docs/app/building-your-application/caching#opting-out-3
   */
  revalidatePath(``);
}
