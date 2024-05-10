import Link from "next/link";
import { JobDetails } from "@/features/common/components/JobDetails/JobDetails";
import { getSalaryTypes } from "@/service/common/getSalaryTypes";
import { getJob } from "@/service/common/getJob";
import ApplicationButton from "@/features/worker/(contents)/job/[jobId]/ApplicationButton";

type Props = { params: { jobId: string } };

export default async function JobDetail({ params }: Props) {
  const salaryTypesData = getSalaryTypes();
  const jobData = getJob(params.jobId);

  const [salaryTypes, job] = await Promise.all([salaryTypesData, jobData]);

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h2 className="text-4xl mb-2">{job.title}</h2>
      <Link
        href={`/worker/company/${job.company_id}/job/${job.job_id}`}
        className="text-blue-500 inline-block mb-3"
      >
        {job.company_name || "企業詳細"}
      </Link>
      <JobDetails job={job} salaryTypes={salaryTypes} />
      <ApplicationButton job={job} />
    </div>
  );
}
