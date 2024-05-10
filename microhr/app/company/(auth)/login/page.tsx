"use client";

import AuthPanel from "@/features/common/components/AuthPanel/AuthPanel";
import { postLoginCompany } from "@/service/company/postLoginCompany";
import * as React from "react";

const LoginCompany = () => {
  return (
    <>
      <AuthPanel
        title="企業ログイン"
        description="メールアドレスとパスワードを入力してください"
        buttonTitle="ログイン"
        authHandler={postLoginCompany}
        isCompany={true}
        isLogin={true}
      />
    </>
  );
};

export default LoginCompany;
