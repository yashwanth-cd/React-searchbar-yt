import SearchItem from "./SearchItem";

/* eslint-disable react/prop-types */
export default function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((item, i) => (
        <SearchItem item={item} key={i} />
      ))}
    </div>
  );
}
