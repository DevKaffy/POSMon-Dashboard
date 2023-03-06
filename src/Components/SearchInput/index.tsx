import React from "react";
import "./SearchInput.css";
const SearchInput = () => {
  return (
    <div>
      <div className="search-wrapper">
        <img src="/vectors/search-normal.svg" alt="" />
        <input
          className="flex-grow text-sm font-normal focus:outline-none text-[rgba(29, 36, 45, 0.5)]"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
