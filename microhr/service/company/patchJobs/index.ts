import { handleFailed, handleSucceed, path } from "@/service";
import { PostJob } from "@/service/company/type";
import { CSRFToken, allCookie } from "@/service/cookie";

export function patchJobs(id: number, payload: PostJob) {
  return fetch(path(`/api/jobs/${id}/`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cookie: allCookie,
      "X-CSRFToken": CSRFToken,
    },
    body: JSON.stringify(payload),
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
