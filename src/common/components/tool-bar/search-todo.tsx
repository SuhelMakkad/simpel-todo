import { useEffect, useState } from "react";
import { useQuerySearchParams } from "@/hooks/use-query-search-params";

import { Input } from "@/components/ui/input";

export const SearchTodo = () => {
  const { search, updateSearch } = useQuerySearchParams();
  const [searchText, setSearchText] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateSearch(searchText);
    }, 250);

    return () => clearTimeout(timeout);
  }, [searchText]);

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  return (
    <Input
      type="search"
      placeholder="Search todo (exact)"
      className="max-w-md"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};
