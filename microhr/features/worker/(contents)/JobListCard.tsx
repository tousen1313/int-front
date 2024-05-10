import { Button } from "@/components/ui/button";
import { GetJob, SalaryType } from "@/service/common/type";
import Link from "next/link";

type Props = {
  job: GetJob;
  salaryTypes: SalaryType[];
};

export const JobListCard = ({ job, salaryTypes }: Props) => {
  const matchingSalaryType = salaryTypes.find(
    (salaryType) => salaryType.id === job.salary_type_id
  );

  return (
    <Link
      href={`/worker/job/${job.job_id}`}
      className="rounded-lg shadow-lg bg-white p-3"
    >
      <p className="text-2xl font-semibold">{job.title}</p>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="border-b-1 flex items-center justify-center gap-5 my-5 [&_span]:mt-auto">
        <span className="mr-2">{matchingSalaryType?.value}</span>
        <span className="text-xl">{job.income_min}</span>
        <span>円</span>
        <span>〜</span>
        <span className="text-xl">{job.income_max}</span>
        <span>円</span>
      </div>
      <Button className="rounded w-full bg-blue-400">求人詳細を見る</Button>
    </Link>
  );
};
