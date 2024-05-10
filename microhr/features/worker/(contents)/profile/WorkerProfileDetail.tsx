import { formatTextWithBreaks } from "@/features/formatTextWithBreaks";
import { Worker } from "@/service/common/type";

type Props = {
  profile: Worker;
};

export const WorkerProfileDetail = ({ profile }: Props) => {
  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:bg-gray-100 [&_th]:border [&_td]:py-[22px] [&_td]:px-[25px] [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th>名前</th>
            <td>{profile.name || "記載なし"}</td>
          </tr>
          <tr>
            <th>誕生日</th>
            <td className="border-b">
              {profile.birthday
                ? new Date(profile.birthday).toLocaleDateString()
                : "記載なし"}
            </td>
          </tr>
          <tr>
            <th className="align-top">経歴</th>
            <td className="border-b">
              {profile.career
                ? formatTextWithBreaks(profile.career)
                : "記載なし"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
