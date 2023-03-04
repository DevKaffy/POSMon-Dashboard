import React from "react";
import SearchInput from "../SearchInput";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="flex items-center gap-[1.75rem] mr-28">
        <img src="/menu.svg" alt="" />
        <img src="/Pavilion.png" alt="" />
      </div>
        <SearchInput />
        <span className="flex-grow"></span>
      <div className="flex items-center gap-[2.34rem]">
        <img src="/notification.png" alt="" />
        <img src="/public/Profile.png" alt="" />
      </div>
    </nav>
  );
};

export default TopNav;
