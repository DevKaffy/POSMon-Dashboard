import React from "react";
import SearchInput from "../SearchInput";
import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="img-wrapper">
        <img src="/vectors/menu.svg" alt="" />
        <img src="/Pavilion.png" alt="" />
      </div>
      <SearchInput />
      <span className="flex-grow"></span>
      <div className="img-wrappertwo">
        <img src="/notification.png" alt="" />
        <img src="/Profile.png" alt="" />
      </div>
    </nav>
  );
};

export default TopNav;
