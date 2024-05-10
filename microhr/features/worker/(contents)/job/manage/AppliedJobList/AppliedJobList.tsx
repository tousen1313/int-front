import { getApplications } from "@/service/common/getApplications";
import { AppliedJobCard } from "../AppliedJobCard/AppliedJobCard";

export default async function AppliedJobList() {
  const applications = await getApplications();

  if (applications.length === 0) {
    return <div>応募済みの求人はありません</div>;
  }

  return (
    <>
      {applications.map((appliedJob) => (
        <AppliedJobCard key={appliedJob.job_id} appliedJob={appliedJob} />
      ))}
    </>
  );
}
