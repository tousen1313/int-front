export const SELECTION_STATUS_IDS = {
  NO_REVIEW: 1,
  PASSED: 2,
  FAILURE: 3,
} as const;

export const SELECTION_STATUS_VALUES = {
  NO_REVIEW: "未審査",
  PASSED: "合格",
  FAILURE: "不合格",
} as const;
