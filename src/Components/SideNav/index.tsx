import React from 'react'
import { navItems } from '../../data'
import { NavLink } from 'react-router-dom'
import './SideNav.css'

const SideNav = () => {
    const activePath = window.location.pathname
    console.log(activePath)
  return (
    <aside className="flex flex-col gap-[1.37rem]">
      <h1 className="text-Ablack font-semibold">POS Monitoring</h1>
      <div className="flex flex-col gap-[1.37rem]">
        {navItems.map((navItem, index) => (
          <NavLink
            className="flex gap-[0.56rem]"
            to={navItem.path || ""}
          >
            <img src={navItem.icon} alt="" />
            <span
              className={
                activePath == navItem.path ? "text-[#4C6FFF] font-bold" : "text-[#909DAD]"
              }
            >
              {navItem.link}
            </span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default SideNav