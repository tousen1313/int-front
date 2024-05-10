"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CompanyProfileForm } from "@/features/company/(contents)/profile/CompanyProfileForm";
import { WorkerProfileForm } from "@/features/worker/(contents)/profile/WorkerProfileForm";
import { Company, Worker } from "@/service/common/type";

type Props = {
  children: React.ReactNode;
  profile: Company | Worker;
  editProfileAction: (formData: FormData) => Promise<void>;
};

export const ProfileTable = ({
  children,
  profile,
  editProfileAction,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditProfile = async (formData: FormData) => {
    await editProfileAction(formData);
    alert("プロフィールを編集しました");
    setIsEdit(false);
  };

  const isCompanyProfile = (profile: Company | Worker): profile is Company => {
    return (profile as Company).introduction !== undefined;
  };

  return (
    <>
      {isEdit ? (
        <form action={handleEditProfile}>
          {isCompanyProfile(profile) ? (
            <CompanyProfileForm profile={profile} />
          ) : (
            <WorkerProfileForm profile={profile} />
          )}
          <div className="flex justify-around mt-8 mb-5">
            <Button
              variant="outline"
              className="h-14 w-64 font-bold text-xl shadow-md"
              type="button"
              onClick={() => setIsEdit(false)}
            >
              戻る
            </Button>
            <Button className="h-14 w-64 font-bold text-xl shadow-md">
              保存する
            </Button>
          </div>
        </form>
      ) : (
        <>
          {children}
          <div className="flex justify-around mt-8 mb-5">
            <Button
              className="h-14 w-64 font-bold text-xl shadow-md"
              onClick={() => setIsEdit(true)}
            >
              編集する
            </Button>
          </div>
        </>
      )}
    </>
  );
};
