import AppliedJobList from "@/features/worker/(contents)/job/manage/AppliedJobList/AppliedJobList";

export default function AppliedJobManage() {
  return (
    <div className="w-1/2 rounded shadow-lg mx-auto p-3 mb-5 bg-white">
      <h2 className="text-3xl font-bold">応募済み求人管理</h2>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <AppliedJobList />
    </div>
  );
}
