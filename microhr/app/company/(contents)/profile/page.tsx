import { CompanyProfileDetail } from "@/features/company/(contents)/profile/CompanyProfileDetail";
import { editCompanyProfileAction } from "@/features/company/(contents)/profile/editCompanyProfileAction";
import { ProfileTable } from "@/features/common/components/ProfileTable/ProfileTable";
import { getCompaniesMe } from "@/service/company/getCompanyMe";

export default async function CompanyProfile() {
  const profile = await getCompaniesMe();

  return (
    <div className="w-2/3 mx-auto">
      <h2 className="text-xl font-bold mb-3">プロフィール</h2>
      <ProfileTable
        editProfileAction={editCompanyProfileAction}
        profile={profile}
      >
        <CompanyProfileDetail profile={profile} />
      </ProfileTable>
    </div>
  );
}
