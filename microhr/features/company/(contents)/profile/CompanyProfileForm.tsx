"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Company } from "@/service/common/type";

type Props = {
  profile: Company;
};

export const CompanyProfileForm = ({ profile }: Props) => {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    setName(profile.name || "");
    setIntroduction(profile.introduction || "");
  }, [profile]);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:bg-gray-100 [&_th]:border [&_td]:p-3 [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th>会社名</th>
            <td>
              <Input
                ref={nameInputRef}
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例）ブルースカイ・テクノロジーズ株式会社"
              />
            </td>
          </tr>
          <tr>
            <th className="align-top">会社概要</th>
            <td className="border-b">
              <Textarea
                id="introduction"
                name="introduction"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                className="h-40"
                placeholder="例）ブルースカイ・テクノロジーズは、AI技術を活用したビジネスソリューションを提供しています。特に、顧客関係管理（CRM）システムとデータ分析プラットフォームの開発に特化しており、中小企業から大企業まで幅広いクライアントに対応しています。また、AIを利用したマーケティングオートメーションツールや、顔認識技術を用いたセキュリティーシステムの提供も行っています。"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
