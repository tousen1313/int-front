import {
  SELECTION_STATUS_IDS,
  SELECTION_STATUS_VALUES,
} from "@/const/selectionStatuses";

export type Auth = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

export type GetJob = {
  job_id: number;
  title: string;
  detail: string;
  salary_type_id: SelectionStatusIds;
  income_min: number;
  income_max: number;
  apply_count: number;
  completed_apply_count: number;
  is_applied: boolean;
  company_id: number;
  company_name: string;
  update_at: Date;
  created_at: Date;
};

export type SelectionStatusIds =
  (typeof SELECTION_STATUS_IDS)[keyof typeof SELECTION_STATUS_IDS];

export type SelectionStatusValues =
  (typeof SELECTION_STATUS_VALUES)[keyof typeof SELECTION_STATUS_VALUES];

export type GetApplication = {
  id: number;
  job_id: number;
  job_title: string;
  selection_status_id: SelectionStatusIds;
  selection_status_value: SelectionStatusValues;
  worker_id: number;
  worker_name: string;
  age: number;
  company_id: number;
  company_name: string;
  created_at: Date;
};

export type SelectionStatuses = {
  id: SelectionStatusIds;
  value: SelectionStatusValues;
};

// TODO SelectionStatusesのようにもっと型安全にしたい
export type SalaryType = {
  id: number;
  value: string;
};

export type Worker = {
  name: string;
  birthday: string;
  career: string;
};

export type Company = {
  name: string;
  image?: string;
  introduction: string;
};
