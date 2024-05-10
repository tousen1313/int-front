import { handleFailed, handleSucceed, path } from "@/service";

export function getLogout() {
  return fetch(path(`/api/logout/`), {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
