export const STATUS = {
  DONE: "done",
  IN_PROGRESS: "in-progress",
};

export const STATUS_LABEL = {
  [STATUS.DONE]: "Done",
  [STATUS.IN_PROGRESS]: "In Progress",
};

export const STATUS_OPTIONS = Object.keys(STATUS_LABEL).reduce((acc, key) => {
  acc.push({
    label: STATUS_LABEL[key],
    value: key,
  });
  return acc;
}, [] as { label: string; value: string }[]);
