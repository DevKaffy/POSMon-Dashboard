import React, { ReactElement } from 'react'
import SideNav from '../../SideNav'
import TopNav from '../../TopNav'
import './DashboardLayout.css'

const DashboardLayout = ({children}: {children: ReactElement}) => {
  return (
    <div className="dashboard-container">
      <TopNav />
      <section className="dashboard-children">
        <div className="sidenav-wrapper">
          <SideNav />
        </div>
        <div className="children-wrapper">{children}</div>
      </section>
    </div>
  );
}

export default DashboardLayout