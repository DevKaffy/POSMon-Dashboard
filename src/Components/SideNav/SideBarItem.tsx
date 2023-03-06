import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SideBarItem = ({navItem}:{
    navItem: any;
}) => {
    const activePath = window.location.pathname;
    console.log(activePath);
    const [open, setOpen] = useState(false);
  return (
    <>
      {navItem.submenu ? (
        <div className={open ? "open sidebar-item" : "sidebar-item"}>
          <div className="flex gap-[0.5rem]">
            <img src={navItem.icon} alt="" />
            <span
              className={
                activePath == navItem.path
                  ? "text-[#4C6FFF] font-bold"
                  : "text-[#909DAD]"
              }
            >
              {navItem.link}
            </span>
            <img
              className="arrow cursor-pointer"
              src="/vectors/arrow-downv.svg"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="sidebar-content">
            {navItem.submenu.map((menu: any, index: number) => (
              <NavLink className="sidebar-item flex flex-col gap-2 pl-5" to={menu.path || "#"}>
                <span
                  className={
                    activePath == menu.path
                      ? "text-[#4C6FFF] font-bold"
                      : "text-[#909DAD]"
                  }
                >
                  {menu.title}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        <NavLink className="flex gap-[0.56rem]" to={navItem.path || ""}>
          <img src={navItem.icon} alt="" />
          <span
            className={
              activePath == navItem.path
                ? "text-[#4C6FFF] font-bold"
                : "text-[#909DAD]"
            }
          >
            {navItem.link}
          </span>
        </NavLink>
      )}
    </>
  );
}

export default SideBarItem