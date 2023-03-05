import React, { ReactElement } from 'react'
import SideNav from '../../SideNav'
import TopNav from '../../TopNav'
import './DashboardLayout.css'

const DashboardLayout = ({children}: {children: ReactElement}) => {
  return (
    <div>
      <TopNav />
      <section className="dashboard-children">
        <SideNav />
        <div className="px-4 bg-[#F7FAFC]">{children}</div>
      </section>
    </div>
  );
}

export default DashboardLayout