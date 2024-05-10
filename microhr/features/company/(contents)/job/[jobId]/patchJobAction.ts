"use server";

import { patchJobs } from "@/service/company/patchJobs";
import { revalidatePath } from "next/cache";

function validateFormData(formData: FormData) {
  const title = formData.get("title");
  const detail = formData.get("detail");
  const salaryTypeData = formData.get("salary_type");
  const incomeMinData = formData.get("income_min");
  const incomeMaxData = formData.get("income_max");
  if (
    typeof title !== "string" ||
    typeof detail !== "string" ||
    typeof salaryTypeData !== "string" ||
    typeof incomeMinData !== "string" ||
    typeof incomeMaxData !== "string"
  ) {
    throw new Error("Validation error");
  }

  const salary_type = Number(salaryTypeData);
  const income_min = Number(incomeMinData);
  const income_max = Number(incomeMaxData);

  return { title, detail, salary_type, income_min, income_max };
}

export async function patchJobAction(id: number, formData: FormData) {
  const { title, detail, salary_type, income_min, income_max } =
    validateFormData(formData);

  await patchJobs(id, {
    title,
    detail,
    salary_type,
    income_min,
    income_max,
  });

  /**
   * 求人編集を即座に反映させるため、On-demand RevalidationでRouter Cacheをオプトアウトする
   * @see https://nextjs.org/docs/app/building-your-application/caching#opting-out-3
   */
  revalidatePath(``);
}
