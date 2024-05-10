import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export type SessionType = "company" | "worker";

// 公開ルート
const publicRoutes = [
  "/",
  "/company/login",
  "/company/make",
  "/worker/login",
  "/worker/make",
  "/worker",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // クッキーからセッションタイプを取得
  const sessionType = cookies().get("sessionType")?.value as SessionType;

  // 現在のルートが公開ルートかつ非ログイン状態だったらスキップ
  const isPublicRoute =
    publicRoutes.includes(path) || path.startsWith("/worker/job/");
  if (isPublicRoute && !sessionType) {
    return NextResponse.next();
  }

  // 現在のルートが保護されているかをチェック
  // ユーザーが認証されていない場合は"/"にリダイレクト
  const isProtectedRoute = path.startsWith("/company");
  if (isProtectedRoute && !sessionType) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  // 求職者が企業のページを見ようとした場合は/workerにリダイレクト
  const isProtectedWorkerRoute =
    path.startsWith("/company") ||
    ["/", "/company/login", "/company/make"].includes(path);
  if (isProtectedWorkerRoute && sessionType === "worker") {
    return NextResponse.redirect(new URL("/worker", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  // ミドルウェアが実行されるルート
  matcher: ["/company/:path*"],
};
