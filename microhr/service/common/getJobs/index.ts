import { handleFailed, handleSucceed, path } from "@/service";
import { GetJob } from "../type";
import { cookies } from "next/headers";

export function getJobs(companyId?: string): Promise<GetJob[]> {
  const params = new URLSearchParams();
  if (companyId) {
    params.set("company_id", companyId);
  }

  const queryString = params.toString();
  const url = path(`/api/jobs/${queryString ? `?${queryString}` : ""}`);

  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(url, {
    headers: { "Content-Type": "application/json", cookie: allCookie },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
