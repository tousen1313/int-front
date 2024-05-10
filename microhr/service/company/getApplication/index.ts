import { handleFailed, handleSucceed, path } from "@/service";
import { GetApplication } from "../../common/type";
import { cookies } from "next/headers";

export function getApplication(applicationId: string): Promise<GetApplication> {
  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(path(`/api/applications/${applicationId}/`), {
    headers: {
      "Content-Type": "application/json",
      cookie: allCookie,
    },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
