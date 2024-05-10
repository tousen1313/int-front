"use client";

import { Archive, LogOut, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { getLogoutAction } from "@/features/common/action/getLogoutAction";

export const LoggedInWorkerNavbarMenu = () => {
  const handleLogout = async () => {
    try {
      await getLogoutAction();
      alert("ログアウトしました");
    } catch {
      alert("ログアウトに失敗しました");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>アカウント</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/worker/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>プロフィール</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link href="/worker/job/manage">
          <DropdownMenuItem>
            <Archive className="mr-2 h-4 w-4" />
            <span>応募済み求人管理</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <form action={handleLogout}>
          <button className="w-full">
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>ログアウト</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
