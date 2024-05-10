"use client";

import { Button } from "@/components/ui/button";
import { GetJob } from "@/service/common/type";
import { postApplicationAction } from "./postApplicationAction";

type Props = {
  job: GetJob;
};

export default function ApplicationButton({ job }: Props) {
  const postApplicationActionWithJobId = postApplicationAction.bind(
    null,
    job.job_id
  );

  const handleApply = async () => {
    if (confirm("本当に応募しますか？")) {
      try {
        await postApplicationActionWithJobId();
        alert("応募しました");
      } catch {
        alert("ログインしてください");
      }
    }
  };

  return (
    <form action={handleApply} className="text-center mt-5">
      <Button
        className={`h-14 w-64 font-bold text-xl shadow-md ${
          job.is_applied ? "bg-gray-400" : "bg-blue-400"
        }`}
        disabled={job.is_applied}
      >
        {job.is_applied ? "既に応募済みです" : "この求人に応募する"}
      </Button>
    </form>
  );
}
