import React from "react";

function Search({ onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      onChange={onSearchChange}
    />
  );
}

export default Search;
