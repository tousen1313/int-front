import { handleSucceed, handleFailed, path } from "@/service";
import { Company } from "@/service/common/type";
import { cookies } from "next/headers";

export function getCompaniesMe(): Promise<Company> {
  const userId = cookies().get("userId")?.value;

  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(path(`/api/companies/${userId}/`), {
    headers: { "Content-Type": "application/json", cookie: allCookie },
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
