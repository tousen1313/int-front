import { formatTextWithBreaks } from "@/features/formatTextWithBreaks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetApplication, Worker } from "@/service/common/type";
import React from "react";

type Props = {
  worker: Worker;
  application: GetApplication;
};

export const ApplicantDetailsTable = ({ worker, application }: Props) => {
  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:border [&_td]:py-[22px] [&_td]:px-[25px] [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th colSpan={2}>
              <div className="flex items-center justify-center">
                <Avatar className="mb-2 mr-5 w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {worker.name ? (
                  <h3 className="mb-1 text-xl font-bold">{worker.name}</h3>
                ) : (
                  <h3 className="mb-1 text-md text-gray-300">
                    名前の記載がありません
                  </h3>
                )}
              </div>
            </th>
          </tr>
          <tr>
            <th className="bg-gray-100">年齢</th>
            <td>{application.age || "記載なし"}</td>
          </tr>
          <tr className="border-b">
            <th className="align-top bg-gray-100">経歴</th>
            <td>
              {worker.career ? formatTextWithBreaks(worker.career) : "記載なし"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
