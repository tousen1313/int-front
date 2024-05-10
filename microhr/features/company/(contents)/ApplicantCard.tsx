import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GetApplication } from "@/service/common/type";

type Props = {
  application: GetApplication;
};

export default function ApplicantCard({ application }: Props) {
  const linkUrl = `/company/applicant/${application.id}/worker/${application.worker_id}/job/${application.job_id}`;

  return (
    <Link
      href={linkUrl}
      className="duration-500 hover:opacity-70 p-5 shadow rounded-md bg-white"
    >
      <article>
        <Avatar className="mb-2 w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-bold mb-3 mt-2">
          {application.worker_name || "名前の記載なし"}
        </h3>
        <p className="mb-4 text-xs text-cyan-500">
          <span className="mr-1">{application.job_title}</span>
          の求人に応募しました
        </p>
        <div className="flex justify-between items-center">
          <time className="text-xs text-gray-500">
            応募日 : {new Date(application.created_at).toLocaleDateString()}
          </time>
          <Button className="h-8 font-bold pointer-events-none">
            詳しく見る
          </Button>
        </div>
      </article>
    </Link>
  );
}
