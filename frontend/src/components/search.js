import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:5000/search?query=${query}`);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <div>
      <h2>Search Vendor</h2>
      <input
        type="text"
        placeholder="Enter phone, bank, or social handle"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((r, i) => (
          <li key={i}>
            {r.phone || r.bank || r.social} - {r.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
