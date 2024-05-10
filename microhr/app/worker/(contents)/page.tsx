"use client";

import { useState } from "react";
import { useDebouncedKeyword } from "./hooks";
import { JobList } from "@/features/worker/(contents)/JobList";
import { SearchBox } from "@/features/worker/(contents)/SearchBox";

export default function UserTop() {
  const [searchWord, setSearchWord] = useState("");
  const debouncedKeyword = useDebouncedKeyword({
    value: searchWord,
    delay: 500,
  });

  return (
    <div className="container mx-auto">
      <SearchBox searchWord={searchWord} setSearchWord={setSearchWord} />
      <JobList searchWord={debouncedKeyword} />
    </div>
  );
}
