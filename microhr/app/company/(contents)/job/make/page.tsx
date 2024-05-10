import MakeJobForm from "@/features/company/(contents)/job/make/MakeJobForm";
import { getSalaryTypes } from "@/service/common/getSalaryTypes";
import React from "react";

export default async function MakeJob() {
  const salaryTypes = await getSalaryTypes();

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold">求人の新規作成</h2>
      <p className="my-5 text-sm">
        「募集タイトル」、「募集詳細」、給与を入力し、求人を作成しましょう。
      </p>
      <MakeJobForm salaryTypes={salaryTypes} />
    </div>
  );
}
