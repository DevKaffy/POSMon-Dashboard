import React from 'react'
import { navItems } from '../../data'
import { NavLink } from 'react-router-dom'
import './SideNav.css'
import SideBarItem from './SideBarItem'

const SideNav = () => {
  return (
    <aside className=" flex flex-col gap-[1.37rem] pl-[3.25rem] pt-[2.5rem] bg-white h-[81.37rem]">
      <h1 className="text-Ablack font-semibold">POS Monitoring</h1>
      <div className="flex flex-col gap-[1.37rem]">
        {navItems.map((navItem, index) => (
          <SideBarItem navItem={navItem}/>
        ))}
      </div>
    </aside>
  );
}

export default SideNav