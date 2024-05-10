"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { JobDetailsForm } from "@/features/common/components/JobDetailsForm/JobDetailsForm";
import { makeJobAction } from "@/features/company/(contents)/job/make/makeJobAction";
import { SalaryType } from "@/service/common/type";

type Props = {
  salaryTypes: SalaryType[];
};
export default function MakeJobForm({ salaryTypes }: Props) {
  const handleMakeJob = async (formData: FormData) => {
    await makeJobAction(formData);
    alert("求人を作成しました");
  };

  return (
    <form action={handleMakeJob}>
      <JobDetailsForm salaryTypes={salaryTypes} />
      <div className="text-center mt-8">
        <Button className="h-14 w-64 font-bold text-xl shadow-md">
          求人を作成する
        </Button>
      </div>
    </form>
  );
}
