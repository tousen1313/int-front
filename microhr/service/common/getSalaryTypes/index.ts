import { handleFailed, handleSucceed, path } from "@/service";
import { SalaryType } from "../type";

export function getSalaryTypes(): Promise<SalaryType[]> {
  return fetch(path(`/api/salary-types/`), {
    headers: { "Content-Type": "application/json" },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
