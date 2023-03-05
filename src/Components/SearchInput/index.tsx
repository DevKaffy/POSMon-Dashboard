import React from 'react'

const SearchInput = () => {
  return (
    <div>
      <div className="flex items-center gap-[0.87rem] w-[34rem] border border-Bblack py-2 px-2 rounded-[5px]">
        <img
          className="w-[0.93rem] h-[0.93rem]"
          src="/search-normal.svg"
          alt=""
        />
        <input
          className="flex-grow text-sm font-normal focus:outline-none text-[rgba(29, 36, 45, 0.5)]"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchInput