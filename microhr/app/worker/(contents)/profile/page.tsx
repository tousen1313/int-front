import { ProfileTable } from "@/features/common/components/ProfileTable/ProfileTable";
import { WorkerProfileDetail } from "@/features/worker/(contents)/profile/WorkerProfileDetail";
import { editWorkerProfileAction } from "@/features/worker/(contents)/profile/editWorkerProfileAction";
import { getWorkersMe } from "@/service/worker/getWorkerMe";

export default async function WorkerProfile() {
  const profile = await getWorkersMe();

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-3xl mb-3">プロフィール</h2>
      <ProfileTable
        editProfileAction={editWorkerProfileAction}
        profile={profile}
      >
        <WorkerProfileDetail profile={profile} />
      </ProfileTable>
    </div>
  );
}
