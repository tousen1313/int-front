"use server";

import { redirect } from "next/navigation";
import { postJobs } from "@/service/company/postJob";

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

export async function makeJobAction(formData: FormData) {
  const { title, detail, salary_type, income_min, income_max } =
    validateFormData(formData);

  await postJobs({ title, detail, salary_type, income_min, income_max });

  redirect("/company");
}
