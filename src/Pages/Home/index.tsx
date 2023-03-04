import React from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import StatisticCard from '../../Components/StatisticCard';
import { items, statistics} from '../../data';

import './Home.css'

const Home = () => {
    
  return (
    <DashboardLayout>
      <main className='wrapper'>
        <header className="text-Ablack">
          <div className='mb-[2.5rem]'>
          <h3 className="text-[2.28rem]  font-bold mb-[0.25rem]">Welcome back,</h3>
          <p>Here’s what is happening with your Terminals today,</p>
          </div>
          <div className="flex bg-white mb-12 gap-8 py-[0.75rem] font-semibold w-[44rem] px-4">
            {items.map((item, index) => (
              <div key={`items -${index}`}>{item}</div>
            ))}
          </div>
        </header>
        <section className="flex gap-[1.5rem] flex-wrap">
          {statistics.map((statistic, index) => (
            <StatisticCard
              key={`statistics - ${index}`}
              icon={statistic.icon}
              title={statistic.title}
              details={statistic.details}
            />
          ))}
        </section>
      </main>
    </DashboardLayout>
  );
}

export default Home