export const State = ({ text }: { text: string }) => {
  return <div className="grid place-content-center h-96">{text}</div>;
};

export const LoadingState = () => {
  return <State text="Loading tasks..." />;
};

export const EmptyState = () => {
  return <State text="Your task list is empty" />;
};

export const ErrorState = () => {
  return <State text="There was an error loading your data" />;
};
