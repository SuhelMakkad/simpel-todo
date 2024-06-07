import { useEffect, useState } from "react";
import { useQuerySearchParams } from "@/hooks/use-query-search-params";

import { Input } from "@/components/ui/input";

export const SearchTodo = () => {
  const { search, updateSearch } = useQuerySearchParams();
  const [searchText, setSearchText] = useState(search);

  useEffect(() => {
    // debounce the search
    const timeout = setTimeout(() => {
      updateSearch(searchText);
    }, 250);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <Input
      type="search"
      placeholder="Search todo..."
      className="max-w-md"
      value={searchText}
      defaultValue={search}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
  );
};
