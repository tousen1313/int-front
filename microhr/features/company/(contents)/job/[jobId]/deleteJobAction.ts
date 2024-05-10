"use server";

import { deleteJobs } from "@/service/company/deleteJobs";

export async function deleteJobAction(jobId: number) {
  await deleteJobs(jobId);
}
