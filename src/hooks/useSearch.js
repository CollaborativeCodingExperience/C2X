import { useMemo, useState } from "react";
import { searchInFiles } from "../utils/search.js";

export default function useSearch(files) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchInFiles(files, query), [files, query]);

  return { query, setQuery, results };
}
