"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Worker } from "@/service/common/type";

type Props = {
  profile: Worker;
};

export const WorkerProfileForm = ({ profile }: Props) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [career, setCareer] = useState("");

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setName(profile.name || "");
    setBirthday(profile.birthday || "");
    setCareer(profile.career || "");
  }, [profile]);

  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:bg-gray-100 [&_th]:border [&_td]:p-3 [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th>
              <label htmlFor="name">名前</label>
            </th>
            <td>
              <Input
                ref={nameInputRef}
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="山田太郎"
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="birthday">誕生日</label>
            </th>
            <td>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="py-2 px-3 border rounded-lg w-full"
              />
            </td>
          </tr>
          <tr>
            <th className="align-top">
              <label htmlFor="career">経歴</label>
            </th>
            <td className="border-b">
              <Textarea
                id="career"
                name="career"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                className="h-40"
                placeholder="イノベーションテクノロジーズ株式会社でテックリードとして活動しています。ここでは、技術戦略の策定や製品開発の監督、最新技術の研究開発に関わる重要な役割を担っています。私の深い技術知識とリーダーシップが、企業の技術革新を支えていると自負しています。"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
