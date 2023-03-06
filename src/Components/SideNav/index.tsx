import React from 'react'
import { navItems } from '../../data'
import './SideNav.css'
import SideBarItem from './SideBarItem'


const SideNav = () => {
  return (
    <aside className="aside-wrapper">
      <h1 className="text-Ablack font-semibold">POS Monitoring</h1>
      <div className="flex flex-col gap-[1.37rem]">
        {navItems.map((navItem, index) => (
          <SideBarItem navItem={navItem} />
        ))}
      </div>
    </aside>
  );
}

export default SideNav