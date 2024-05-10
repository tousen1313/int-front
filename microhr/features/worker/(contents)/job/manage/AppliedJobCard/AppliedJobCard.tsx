import { SELECTION_STATUS_IDS } from "@/const/selectionStatuses";
import { GetApplication } from "@/service/common/type";
import Link from "next/link";

type Props = {
  appliedJob: GetApplication;
};

export const AppliedJobCard = ({ appliedJob }: Props) => {
  return (
    <div className="border p-3 rounded mt-5">
      <div className="w-full grid grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold">{appliedJob.job_title}</p>
          <Link
            href={`/worker/company/${appliedJob.company_id}/job/${appliedJob.job_id}`}
            className="text-blue-500"
          >
            {appliedJob.company_name || "企業詳細"}
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p
            className={`text-4xl ${
              appliedJob.selection_status_id !==
                SELECTION_STATUS_IDS.NO_REVIEW &&
              `text-${
                appliedJob.selection_status_id === SELECTION_STATUS_IDS.PASSED
                  ? "red"
                  : "blue"
              }-500`
            }`}
          >
            {appliedJob.selection_status_value}
          </p>
        </div>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="w-full flex justify-around">
        <p className="text-gray-400">
          {new Date(appliedJob.created_at).toLocaleDateString()}に応募済
        </p>
      </div>
    </div>
  );
};
