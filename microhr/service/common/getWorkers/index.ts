import { handleSucceed, handleFailed, path } from "@/service";
import { Worker } from "../type";
import { cookies } from "next/headers";

export function getWorkers(workerId: string): Promise<Worker> {
  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(path(`/api/workers/${workerId}/`), {
    headers: { "Content-Type": "application/json", cookie: allCookie },
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
