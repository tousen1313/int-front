import React from "react";
import { GetJob, SalaryType } from "@/service/common/type";
import { formatTextWithBreaks } from "@/features/formatTextWithBreaks";

type Props = {
  job: GetJob;
  salaryTypes: SalaryType[];
};

export const JobDetails = ({ job, salaryTypes }: Props) => {
  const matchingSalaryType = salaryTypes.find(
    (salaryType) => salaryType.id === job.salary_type_id
  );

  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="box-border w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:bg-gray-100 [&_th]:border-l [&_th]:border-t [&_td]:py-[22px] [&_td]:px-[25px] [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th>
              <label htmlFor="title">募集タイトル</label>
            </th>
            <td>{job.title}</td>
          </tr>
          <tr>
            <th className="align-top">
              <label htmlFor="detail">募集概要</label>
            </th>
            <td>{job.detail ? formatTextWithBreaks(job.detail) : ""}</td>
          </tr>
          <tr>
            <th className="border-b">
              <label htmlFor="income_min">給与</label>
            </th>
            <td className="border-b">
              <div className="flex [&_span]:mt-auto">
                <span className="mr-4">{matchingSalaryType?.value}</span>
                <span className="text-xl">{job.income_min}</span>
                <span className="ml-2">円</span>
                <span className="mx-2">〜</span>
                <span className="text-xl">{job.income_max}</span>
                <span className="ml-2">円</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
