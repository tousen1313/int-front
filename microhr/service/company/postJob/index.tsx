import { handleSucceed, handleFailed, path } from "@/service";
import { PostJob } from "../type";
import { CSRFToken, allCookie } from "@/service/cookie";

export function postJobs(payload: PostJob) {
  return fetch(path(`/api/jobs/`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: allCookie,
      "X-CSRFToken": CSRFToken,
    },
    body: JSON.stringify(payload),
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
