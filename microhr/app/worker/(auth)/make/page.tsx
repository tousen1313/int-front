"use client";

import * as React from "react";
import AuthPanel from "@/features/common/components/AuthPanel/AuthPanel";
import { postWorkers } from "@/service/worker/postWorker";

const WorkerMemberRegistration = () => {
  return (
    <AuthPanel
      title="まずは無料登録"
      description="※ご記入いただいた内容はあとから変更可能です"
      buttonTitle="アカウントを登録"
      authHandler={postWorkers}
      isCompany={false}
      isLogin={false}
    />
  );
};

export default WorkerMemberRegistration;
