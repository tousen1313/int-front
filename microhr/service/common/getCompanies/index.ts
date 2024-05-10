import { handleSucceed, handleFailed, path } from "@/service";
import { Company } from "../type";

export function getCompanies(companyId: string): Promise<Company> {
  return fetch(path(`/api/companies/${companyId}/`), {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
