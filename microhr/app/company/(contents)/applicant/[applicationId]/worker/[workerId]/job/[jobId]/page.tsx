import React from "react";
import { getSalaryTypes } from "@/service/common/getSalaryTypes";
import { getApplication } from "@/service/common/getApplication";
import { JobDetails } from "@/features/common/components/JobDetails/JobDetails";
import { getJob } from "@/service/common/getJob";
import { getSelectionStatuses } from "@/service/common/getSelectionStatuses";
import { ApplicantDetailsTable } from "@/features/company/(contents)/applicant/[applicantId]/worker/[workerId]/job/[jobId]/ApplicantDetailsTable";
import { SelectionControlButtons } from "@/features/company/(contents)/applicant/[applicantId]/worker/[workerId]/job/[jobId]/SelectionControlButtons";
import { getWorkers } from "@/service/common/getWorkers";

type Props = {
  params: {
    applicationId: string;
    workerId: string;
    jobId: string;
  };
};

export default async function ApplicantDecision({ params }: Props) {
  const salaryTypesData = getSalaryTypes();
  const selectionStatusesData = getSelectionStatuses();
  const applicationData = getApplication(params.applicationId);
  const workerData = getWorkers(params.workerId);
  const jobData = getJob(params.jobId);

  const [salaryTypes, selectionStatuses, application, worker, job] =
    await Promise.all([
      salaryTypesData,
      selectionStatusesData,
      applicationData,
      workerData,
      jobData,
    ]);

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold mb-3">応募者詳細</h2>
      <ApplicantDetailsTable worker={worker} application={application} />
      <h2 className="text-xl font-bold mt-5 mb-3">応募された求人</h2>
      <JobDetails job={job} salaryTypes={salaryTypes} />
      <SelectionControlButtons
        application={application}
        selectionStatuses={selectionStatuses}
      />
    </div>
  );
}
