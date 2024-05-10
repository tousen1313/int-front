import { handleFailed, handleSucceed, path } from "@/service";
import { Worker } from "@/service/common/type";
import { cookies } from "next/headers";

export function patchWorkers(payload: Worker) {
  const userId = cookies().get("userId")?.value;

  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  const csrfCookie = cookies().get("csrftoken");
  const CSRFToken = csrfCookie ? csrfCookie.value : "";

  return fetch(path(`/api/workers/${userId}/`), {
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
