"use server";

import { getLogout } from "@/service/common/getLogout";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getLogoutAction() {
  await getLogout();

  cookies().delete("sessionid");
  cookies().delete("sessionType");
  cookies().delete("userId");
  cookies().delete("csrftoken");

  redirect("/");
}
