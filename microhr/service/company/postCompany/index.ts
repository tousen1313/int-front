import { handleSucceed, handleFailed, path } from "@/service";
import { Auth } from "@/service/common/type";
import { parseCookies } from "nookies";

export function postCompanies(payload: Auth): Promise<{ id: number }> {
  // クライアントコンポーネントでAPIを叩いてるのでnookiesをつかう
  const cookies = parseCookies();
  const CSRFToken = cookies.csrftoken;

  return fetch(path(`/api/companies/`), {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-CSRFToken": CSRFToken },
    body: JSON.stringify(payload),
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
