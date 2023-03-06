import React from "react";
import "./SearchInput.css";
const SearchInput = () => {
  return (
    <div>
      <div className="search-wrapper">
        <img src="/vectors/search-normal.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchInput;
