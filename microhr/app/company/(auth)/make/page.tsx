"use client";

import * as React from "react";
import AuthPanel from "@/features/common/components/AuthPanel/AuthPanel";
import { postCompanies } from "@/service/company/postCompany";

const CompanyMemberRegistration = () => {
  return (
    <AuthPanel
      title="まずは無料登録"
      description="※ご記入いただいた内容はあとから変更可能です"
      buttonTitle="アカウントを登録"
      authHandler={postCompanies}
      isCompany={true}
      isLogin={false}
    />
  );
};

export default CompanyMemberRegistration;
