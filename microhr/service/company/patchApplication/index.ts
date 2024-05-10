import { handleFailed, handleSucceed, path } from "@/service";
import { SelectionStatusIds } from "@/service/common/type";
import { CSRFToken, allCookie } from "@/service/cookie";

export function patchApplications(
  applicationId: number,
  status: SelectionStatusIds
) {
  return fetch(path(`/api/applications/${applicationId}/`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cookie: allCookie,
      "X-CSRFToken": CSRFToken,
    },
    body: JSON.stringify({ status }),
    credentials: "include",
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
