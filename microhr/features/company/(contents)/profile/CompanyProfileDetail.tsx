import { formatTextWithBreaks } from "@/features/formatTextWithBreaks";
import { Company } from "@/service/common/type";

type Props = {
  profile: Company;
};

export const CompanyProfileDetail = ({ profile }: Props) => {
  return (
    <div className="shadow p-5 bg-white rounded-md">
      <table className="w-full [&_th]:p-4 [&_th]:w-1/3 [&_th]:font-bold [&_th]:text-md [&_th]:bg-gray-100 [&_th]:border [&_td]:py-[22px] [&_td]:px-[25px] [&_td]:border-t [&_td]:border-r [&_td]:text-sm">
        <tbody>
          <tr>
            <th>会社名</th>
            <td>{profile.name || "記載なし"}</td>
          </tr>
          <tr>
            <th className="align-top">会社概要</th>
            <td className="border-b">
              {profile.introduction
                ? formatTextWithBreaks(profile.introduction)
                : "記載なし"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
