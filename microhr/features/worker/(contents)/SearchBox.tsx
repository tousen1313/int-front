import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

type Props = {
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
};

export const SearchBox = ({ searchWord, setSearchWord }: Props) => {
  return (
    <div className="rounded-lg shadow-lg bg-white p-3 mb-16 w-1/2 mx-auto">
      <p className="text-2xl font-semibold">検索する</p>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="求人タイトル全文一致検索"
        />
      </div>
    </div>
  );
};
