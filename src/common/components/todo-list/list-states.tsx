import { useQuerySearchParams } from "@/hooks/use-query-search-params";
import { Button } from "../ui/button";

export const State = ({ children }: React.PropsWithChildren) => {
  return <div className="grid place-content-center h-96">{children}</div>;
};

export const LoadingState = () => {
  return <State>Loading tasks...</State>;
};

export const EmptyState = () => {
  const { search, status, resetFilters } = useQuerySearchParams();
  const hasFilters = search || status?.length;

  return (
    <State>
      <div className="flex flex-col gap-4">
        <span>Your task list is empty</span>

        {hasFilters && (
          <Button size="sm" variant="outline" className="w-fit mx-auto" onClick={resetFilters}>
            Reset Filters
          </Button>
        )}
      </div>
    </State>
  );
};

export const ErrorState = () => {
  return <State>There was an error loading your data</State>;
};
