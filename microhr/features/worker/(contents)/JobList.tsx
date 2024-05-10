import { useEffect, useState } from "react";
import { JobListCard } from "./JobListCard";
import { GetJob, SalaryType } from "@/service/common/type";
import { path } from "@/service";

type Props = {
  searchWord: string;
};

export const JobList = ({ searchWord = "" }: Props) => {
  const [jobs, setJobs] = useState<GetJob[]>([]);
  const [salaryTypes, setSalaryTypes] = useState<SalaryType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(path("/api/salary-types/"));
      const salaryTypesData = await response.json();
      setSalaryTypes(salaryTypesData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(path(`/api/jobs?search_word=${searchWord}`));
      const jobsData = await response.json();
      setJobs(jobsData);
    })();
  }, [searchWord]);

  return (
    <>
      {jobs.length !== 0 ? (
        <div className="grid grid-cols-3 gap-10 mb-10">
          {jobs.map((job) => (
            <JobListCard key={job.job_id} job={job} salaryTypes={salaryTypes} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 block text-center mb-10">検索結果なし</p>
      )}
    </>
  );
};
