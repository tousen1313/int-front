import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto mt-20">
      <h1 className="text-3xl text-center">どちらに進みますか？</h1>
      <div className="flex justify-center gap-x-20 mt-10">
        <Link href="/worker">
          <Button variant="destructive" className="text-2xl px-5 py-6 w-56">
            求職者の方
          </Button>
        </Link>
        <Link href="/company/login">
          <Button className="text-2xl px-5 py-6 w-60">採用担当者の方</Button>
        </Link>
      </div>
    </div>
  );
}
