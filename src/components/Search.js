import React from "react";

function Search({userInput, setUserInput}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
