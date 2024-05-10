import { handleFailed, handleSucceed, path } from "@/service";
import { CSRFToken, allCookie } from "@/service/cookie";

export function deleteJobs(jobId: number): Promise<void> {
  return fetch(path(`/api/jobs/${jobId}`), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      cookie: allCookie,
      "X-CSRFToken": CSRFToken,
    },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
