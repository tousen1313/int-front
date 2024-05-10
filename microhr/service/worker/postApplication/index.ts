import { handleFailed, handleSucceed, path } from "@/service";
import { CSRFToken, allCookie } from "@/service/cookie";

export function postApplication(job_id: number) {
  return fetch(path(`/api/applications/`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: allCookie,
      "X-CSRFToken": CSRFToken,
    },
    body: JSON.stringify({ job_id }),
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
