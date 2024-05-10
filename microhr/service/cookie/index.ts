import { cookies } from "next/headers";

export const userId = cookies().get("userId")?.value;

export const allCookie = cookies()
  .getAll()
  .map((cookie) => `${cookie.name}=${cookie.value}`)
  .join(";");

const csrfCookie = cookies().get("csrftoken");
export const CSRFToken = csrfCookie ? csrfCookie.value : "";
