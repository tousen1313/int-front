"use server";

import { revalidatePath } from "next/cache";
import { patchCompanies } from "@/service/company/patchCompany";

function validateFormData(formData: FormData) {
  const name = formData.get("name");
  const introduction = formData.get("introduction");
  if (typeof name !== "string" || typeof introduction !== "string") {
    throw new Error("Validation error");
  }

  return { name, introduction };
}

export async function editCompanyProfileAction(formData: FormData) {
  const { name, introduction } = validateFormData(formData);

  await patchCompanies({
    name,
    introduction,
  });

  /**
   * プロフィールを即座に反映させるため、On-demand RevalidationでRouter Cacheをオプトアウトする
   * @see https://nextjs.org/docs/app/building-your-application/caching#opting-out-3
   */
  revalidatePath(``);
}
