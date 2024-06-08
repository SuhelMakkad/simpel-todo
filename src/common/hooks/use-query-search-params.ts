import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SEARCH_TEXT_KEY = "search";
const STATUS_KEY = "status";

export const useQuerySearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearch = (text?: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    text ? newSearchParams.set(SEARCH_TEXT_KEY, text) : newSearchParams.delete(SEARCH_TEXT_KEY);

    router.replace(`?${newSearchParams.toString()}`);
  };

  const updateStatus = (status: string[]) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    status.length > 0
      ? newSearchParams.set(STATUS_KEY, status.join(","))
      : newSearchParams.delete(STATUS_KEY);

    router.replace(`?${newSearchParams.toString()}`);
  };

  const resetFilters = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(SEARCH_TEXT_KEY);
    newSearchParams.delete(STATUS_KEY);

    router.replace("/");
  };

  const { search, status } = useMemo(() => {
    return {
      search: searchParams.get(SEARCH_TEXT_KEY) || "",
      status: searchParams.get(STATUS_KEY)?.split(",") || [],
    };
  }, [searchParams.toString()]);

  return { search, status, updateSearch, updateStatus, resetFilters };
};
