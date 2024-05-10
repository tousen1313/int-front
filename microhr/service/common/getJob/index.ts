import { handleFailed, handleSucceed, path } from "@/service";
import { GetJob } from "../type";
import { cookies } from "next/headers";

export function getJob(jobId: string): Promise<GetJob> {
  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(path(`/api/jobs/${jobId}/`), {
    headers: { "Content-Type": "application/json", cookie: allCookie },
    next: { tags: [`jobs/${jobId}`] },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
