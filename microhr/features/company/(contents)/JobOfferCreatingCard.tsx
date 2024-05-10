import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function JobOfferCreatingCard() {
  return (
    <Link
      href={`/company/job/make`}
      className="group duration-100 hover:text-white hover:bg-blue-400 p-5 shadow rounded-md bg-white min-h-[300px]"
    >
      <article className="relative h-full w-full">
        <Plus
          size={60}
          className="text-blue-400 group-hover:text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <h3 className="text-blue-400 group-hover:text-white font-bold absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          新しい求人を作成する
        </h3>
        <div className="text-xs p-3 border absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          成功企業は、採用する可能性のある職種・勤務地・店舗の求人をすべて掲載しています。良い人がいれば採用したい求人は積極的に作成しましょう。
        </div>
      </article>
    </Link>
  );
}
