import React, { ReactElement } from 'react'
import SideNav from '../../SideNav'
import TopNav from '../../TopNav'
import './DashboardLayout.css'

const DashboardLayout = ({children}: {children: ReactElement}) => {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <TopNav />
      <section className="dashboard-children overflow-hidden flex-grow">
        <div className="overflow-y-hidden h-full">
          <SideNav />
        </div>
        <div className="px-4 bg-[#F7FAFC] overflow-y-auto">{children}</div>
      </section>
    </div>
  );
}

export default DashboardLayout