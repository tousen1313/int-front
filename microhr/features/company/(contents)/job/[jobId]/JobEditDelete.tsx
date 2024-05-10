"use client";

import { Button } from "@/components/ui/button";
import { JobDetailsForm } from "@/features/common/components/JobDetailsForm/JobDetailsForm";
import { GetJob, SalaryType } from "@/service/common/type";
import React, { useState } from "react";
import { deleteJobAction } from "./deleteJobAction";
import { useRouter } from "next/navigation";
import { patchJobAction } from "./patchJobAction";

type Props = {
  children: React.ReactNode;
  job: GetJob;
  salaryTypes: SalaryType[];
};

export default function JobEditDelete({ children, job, salaryTypes }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const handleEditJob = async (formData: FormData) => {
    await patchJobAction(job.job_id, formData);
    alert("求人を編集しました");
    setIsEdit(false);
  };

  const handleDeleteJob = async () => {
    if (confirm("本当に削除しますか？")) {
      await deleteJobAction(job.job_id);
      alert("求人を削除しました");
      router.push("/company");
    }
  };

  return (
    <>
      {isEdit ? (
        <form action={handleEditJob}>
          <JobDetailsForm job={job} salaryTypes={salaryTypes} />
          <div className="flex justify-around mt-8 mb-5">
            <Button className="h-14 w-64 font-bold text-xl shadow-md">
              保存する
            </Button>
          </div>
        </form>
      ) : (
        <>
          {children}
          <div className="flex justify-around mt-8 mb-5">
            <Button
              className="h-14 w-64 font-bold text-xl shadow-md"
              onClick={() => setIsEdit(true)}
            >
              求人を編集する
            </Button>
            <form action={handleDeleteJob}>
              <Button
                variant="destructive"
                className="h-14 w-64 font-bold text-xl shadow-md"
              >
                求人を削除する
              </Button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
