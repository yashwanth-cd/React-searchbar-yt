import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";

export default function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}
