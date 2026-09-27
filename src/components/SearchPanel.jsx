import useSearch from "../hooks/useSearch.js";

export default function SearchPanel({ files, onJumpToFile }) {
  const { query, setQuery, results } = useSearch(files);

  return (
    <div className="side-panel">
      <h3>Search</h3>
      <input
        className="search-input"
        type="text"
        placeholder="Search across files..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="search-results">
        {query && results.length === 0 && (
          <p className="search-empty">No results</p>
        )}
        {results.map((result, idx) => (
          <div
            key={`${result.fileName}-${result.lineNumber}-${idx}`}
            className="search-result-item"
            onClick={() => onJumpToFile(result.fileName)}
          >
            <div className="search-result-file">
              {result.fileName}:{result.lineNumber}
            </div>
            <div className="search-result-line">{result.lineText}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
