import React from "react";
import JobOfferCreatingCard from "@/features/company/(contents)/JobOfferCreatingCard";
import JobOfferCard from "@/features/company/(contents)/JobOfferCard";
import { getJobs } from "@/service/common/getJobs";

export default async function CompanyTop() {
  const jobs = await getJobs();

  return (
    <div className="grid grid-cols-3 justify-center gap-5 mx-auto">
      <JobOfferCreatingCard />
      {jobs.map((job) => (
        <JobOfferCard key={job.job_id} job={job} />
      ))}
    </div>
  );
}
