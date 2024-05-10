import React from "react";
import ApplicantCard from "@/features/company/(contents)/ApplicantCard";
import { getApplications } from "@/service/common/getApplications";

export default async function Applicants() {
  const applications = await getApplications();

  return (
    <div className="grid grid-cols-3 justify-center gap-y-5 gap-x-10 mx-auto">
      {applications.length !== 0 ? (
        applications.map((application) => (
          <ApplicantCard key={application.job_id} application={application} />
        ))
      ) : (
        <p className="text-gray-500">現在応募者はいません</p>
      )}
    </div>
  );
}
