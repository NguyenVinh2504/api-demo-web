import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

type SearchInputProps = {
  placeholder: string;
  className?: string;
  search?: string;
  setSearch?: (searchStr: string) => void;
};

function SearchInput({ className, placeholder }: SearchInputProps) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = search.trim();
    if (!value) return;
    navigate({
      pathname: "/search",
      search: createSearchParams({
        query: value,
      }).toString(),
    });
  }

  return (
    <form
      className={cn("relative flex items-center w-full", className)}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch && setSearch(e.target.value)}
        placeholder={placeholder}
        className="pr-11 py-5"
      />
      <Button variant={"ghost"} type="submit" className="absolute right-0">
        <SearchIcon />
      </Button>
    </form>
  );
}

export default SearchInput;
