import JobEditDelete from "@/features/company/(contents)/job/[jobId]/JobEditDelete";
import { JobDetails } from "@/features/common/components/JobDetails/JobDetails";
import { getJob } from "@/service/common/getJob";
import { getSalaryTypes } from "@/service/common/getSalaryTypes";
import React from "react";

type Props = {
  params: {
    jobId: string;
    searchKeyword: string;
  };
};

export default async function JobId({ params }: Props) {
  const salaryTypesData = getSalaryTypes();
  const jobData = getJob(params.jobId);

  const [salaryTypes, job] = await Promise.all([salaryTypesData, jobData]);

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold">求人の詳細</h2>
      <p className="my-5 text-sm">
        求人の編集と削除はページ下のボタンから行えます。
      </p>
      <JobEditDelete job={job} salaryTypes={salaryTypes}>
        <JobDetails job={job} salaryTypes={salaryTypes} />
      </JobEditDelete>
    </div>
  );
}
