export const STATUS = {
  IN_PROGRESS: "in-progress",
  DONE: "done",
};

export const STATUS_LABEL = {
  [STATUS.IN_PROGRESS]: "In Progress",
  [STATUS.DONE]: "Done",
};

export const STATUS_OPTIONS = Object.keys(STATUS_LABEL).reduce((acc, key) => {
  acc.push({
    label: STATUS_LABEL[key],
    value: key,
  });
  return acc;
}, [] as { label: string; value: string }[]);

export const routes = {
  home: "/",
  login: "/login",
};
