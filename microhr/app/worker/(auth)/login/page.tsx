"use client";

import AuthPanel from "@/features/common/components/AuthPanel/AuthPanel";
import { postLoginWorker } from "@/service/worker/postLoginWorker";
import * as React from "react";

const LoginUser = () => {
  return (
    <>
      <AuthPanel
        title="求職者ログイン"
        description="メールアドレスとパスワードを入力してください"
        buttonTitle="ログイン"
        authHandler={postLoginWorker}
        isCompany={false}
        isLogin={true}
      />
    </>
  );
};

export default LoginUser;
