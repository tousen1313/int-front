import { handleFailed, handleSucceed, path } from "@/service";
import { SelectionStatuses } from "../type";
import { cookies } from "next/headers";

export function getSelectionStatuses(): Promise<SelectionStatuses[]> {
  const allCookie = cookies()
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";");

  return fetch(path(`/api/selection-statuses/`), {
    headers: { "Content-Type": "application/json", cookie: allCookie },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
