import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GetJob } from "@/service/common/type";

type Props = {
  job: GetJob;
};

export default function JobOfferCard({ job }: Props) {
  return (
    <Link
      href={`/company/job/${job.job_id}`}
      className="duration-500 hover:opacity-70 p-6 shadow rounded-md bg-white"
    >
      <article className="flex flex-col">
        <h3 className="mb-1 text-lg font-bold">{job.title}</h3>
        <p className="mb-2 text-xs">東京都 新宿区</p>
        <div className="border-b flex justify-between items-center pt-5 pb-3 mb-3">
          <p className="font-bold">応募数</p>
          <p className="text-cyan-500">
            <span className="inline-block text-3xl mr-2">
              {job.apply_count}
            </span>
            名
          </p>
        </div>
        <p className="text-cyan-500 text-sm mb-1">対応状況</p>
        <div className="text-right mb-2">
          <p className="text-sm text-gray-500">
            <span className="inline-block text-cyan-500 text-3xl mr-2">
              {job.completed_apply_count}
            </span>
            <span className="inline-block text-cyan-500 mr-2">名</span>対応済み
            / {job.apply_count}名の応募中
          </p>
        </div>
        <Progress
          value={(job.completed_apply_count * 100) / job.apply_count}
          className="h-2 mb-5"
        />
        <Button className="h-8 font-bold pointer-events-none ml-auto">
          詳しく見る
        </Button>
      </article>
    </Link>
  );
}
