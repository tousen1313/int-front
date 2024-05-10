"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GetJob, SalaryType } from "@/service/common/type";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  job?: GetJob;
  salaryTypes: SalaryType[];
};

export const JobDetailsForm = ({ job, salaryTypes }: Props) => {
  const [title, setTitle] = useState(job?.title || "");
  const [detail, setDetail] = useState(job?.detail || "");
  const [salaryType, setSalaryType] = useState(
    String(job?.salary_type_id || "")
  );
  const [incomeMin, setIncomeMin] = useState(String(job?.income_min || ""));
  const [incomeMax, setIncomeMax] = useState(String(job?.income_max || ""));

  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="box-border w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:bg-gray-100 [&_th]:border-l [&_th]:border-t [&_td]:p-3 [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th>
              <label htmlFor="title">募集タイトル</label>
            </th>
            <td>
              <Input
                ref={titleInputRef}
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例）営業、事務、システムエンジニア"
              />
            </td>
          </tr>
          <tr>
            <th className="align-top">
              <label htmlFor="detail">募集概要</label>
            </th>
            <td>
              <Textarea
                id="detail"
                name="detail"
                className="h-40"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="例）あなたにお任せするのは、「microhr」に掲載される求人広告の制作です。仕事の特徴は、文章をただ書くだけではないこと。企業の悩みをヒアリングし、求めている人材と企業を結ぶコピーライティングをしていきます。どんなターゲットに設定するのか？広告で何を伝えるのか？等、企業の課題解決に向けてコンセプトを企画。その後、コピーライティングをします。先輩のアドバイスやサポート、勉強会で、スキルを磨いていきましょう"
              />
            </td>
          </tr>
          <tr>
            <th className="border-b">
              <label htmlFor="income_min">給与</label>
            </th>
            <td className="border-b">
              <div className="flex items-center">
                <div className="mr-3">
                  <Select
                    name="salary_type"
                    value={salaryType}
                    onValueChange={(value) => setSalaryType(value)}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="給与タイプを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>給与タイプ</SelectLabel>
                        {salaryTypes?.map((salaryType) => (
                          <SelectItem
                            key={salaryType.id}
                            value={String(salaryType.id)}
                          >
                            {salaryType.value}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  id="income_min"
                  name="income_min"
                  type="number"
                  value={incomeMin}
                  onChange={(e) => setIncomeMin(e.target.value)}
                  placeholder="20"
                />
                <span className="ml-2">円</span>
                <span className="mx-2">〜</span>
                <Input
                  id="income_max"
                  name="income_max"
                  type="number"
                  value={incomeMax}
                  onChange={(e) => setIncomeMax(e.target.value)}
                  placeholder="30"
                />
                <span className="ml-2">円</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
