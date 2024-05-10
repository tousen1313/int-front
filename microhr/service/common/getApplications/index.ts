import { handleFailed, handleSucceed, path } from "@/service";
import { GetApplication } from "../type";
import { cookies } from "next/headers";

export function getApplications(): Promise<GetApplication[]> {
  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(path(`/api/applications/`), {
    headers: { "Content-Type": "application/json", cookie: allCookie },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
