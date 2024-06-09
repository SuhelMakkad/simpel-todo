export type TaskDetails = { value: string; label: string };

export const STATUS: Record<string, TaskDetails> = {
  TODO: {
    value: "todo",
    label: "Todo",
  },
  IN_PROGRESS: {
    value: "in-progress",
    label: "In Progress",
  },
  DONE: {
    value: "done",
    label: "Done",
  },
};

export const STATUS_OPTIONS = Object.values(STATUS).reduce((acc, key) => {
  acc.push(key);
  return acc;
}, [] as TaskDetails[]);

export const STATUS_VALUE_LABEL = Object.values(STATUS).reduce((acc, key) => {
  acc[key.value] = key.label;
  return acc;
}, {} as Record<string, string>);

export const routes = {
  home: "/",
  login: "/login",
};

export const BASE_PATH = process.env.BASE_PATH;
