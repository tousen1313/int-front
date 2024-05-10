"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { GetApplication, SelectionStatuses } from "@/service/common/type";
import { patchApplicationAction } from "./patchApplicationAction";
import { SELECTION_STATUS_IDS } from "@/const/selectionStatuses";

type Props = {
  application: GetApplication;
  selectionStatuses: SelectionStatuses[];
};

export const SelectionControlButtons = ({
  application,
  selectionStatuses,
}: Props) => {
  const selectionStatusesMe = selectionStatuses.find(
    (selectionStatus) => selectionStatus.id === application.selection_status_id
  );

  const patchApplicationPassedAction = patchApplicationAction.bind(
    null,
    application.id,
    SELECTION_STATUS_IDS.PASSED
  );

  const handlePassed = async () => {
    if (confirm("本当に合格にしますか？")) {
      await patchApplicationPassedAction();
      alert("合格にしました");
    }
  };

  const patchApplicationFailureAction = patchApplicationAction.bind(
    null,
    application.id,
    SELECTION_STATUS_IDS.FAILURE
  );

  const handleFailure = async () => {
    if (confirm("本当に不合格にしますか？")) {
      await patchApplicationFailureAction();
      alert("不合格にしました");
    }
  };

  return (
    <div className="my-8 flex justify-around">
      {selectionStatusesMe?.id === SELECTION_STATUS_IDS.NO_REVIEW ? (
        <>
          <form action={handlePassed}>
            <Button
              className="h-14 w-64 font-bold text-xl shadow-md"
              variant="destructive"
            >
              合格にする
            </Button>
          </form>
          <form action={handleFailure}>
            <Button className="h-14 w-64 font-bold text-xl shadow-md">
              不合格にする
            </Button>
          </form>
        </>
      ) : (
        <div>
          <span
            className={`text-3xl mr-3 ${
              selectionStatusesMe?.id === SELECTION_STATUS_IDS.PASSED
                ? "text-red-500"
                : "text-blue-500"
            }`}
          >
            {selectionStatusesMe?.value}
          </span>
          を出しました
        </div>
      )}
    </div>
  );
};
