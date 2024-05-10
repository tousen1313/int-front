import { handleSucceed, handleFailed, path } from "@/service";
import { Worker } from "@/service/common/type";
import { cookies } from "next/headers";

export function getWorkersMe(): Promise<Worker> {
  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  const userId = cookies().get("userId")?.value;

  return fetch(path(`/api/workers/${userId}/`), {
    headers: { "Content-Type": "application/json", cookie: allCookie },
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
