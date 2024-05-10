import { CompanyProfileDetail } from "@/features/company/(contents)/profile/CompanyProfileDetail";
import { JobDetails } from "@/features/common/components/JobDetails/JobDetails";
import { getCompanies } from "@/service/common/getCompanies";
import { getJobs } from "@/service/common/getJobs";
import { getSalaryTypes } from "@/service/common/getSalaryTypes";

type Props = {
  params: {
    companyId: string;
    jobId: string;
  };
};

export default async function CompanyDetails({ params }: Props) {
  const profileData = await getCompanies(params.companyId);
  const salaryTypesData = getSalaryTypes();
  const jobData = getJobs(params.companyId);

  const [profile, salaryTypes, jobs] = await Promise.all([
    profileData,
    salaryTypesData,
    jobData,
  ]);

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold mb-3">企業詳細</h2>
      <CompanyProfileDetail profile={profile} />
      <h2 className="text-xl font-bold mb-3 mt-8">この企業の求人</h2>
      <div className="grid gap-y-5 mb-8">
        {jobs.map((job) => (
          <JobDetails key={job.job_id} job={job} salaryTypes={salaryTypes} />
        ))}
      </div>
    </div>
  );
}
