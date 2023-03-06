import React, { useState } from 'react'
import { items, statistics } from '../../data';
import StatisticCard from '../StatisticCard';
import "./TransactionStatistic.css"

const TransactionStatistic = () => {
        const [activeTab, setactiveTab] = useState(0);

  return (
    <div>
      <div className="transaction-stat">
        {items.map((item, index) => (
          <div key={`items -${index}`} >
            <div onClick={()=>setactiveTab(index)}
              className={
                activeTab == index
                  ? "bg-[#4C6FFF] text-white py-[0.75rem] px-4 rounded-[5px]"
                  : "bg-white"
              }
            >
              {item}
            </div>
          </div>
        ))}
      </div>
      <section className="stat">
        {statistics.map((statistic, index) => (
          <StatisticCard
            key={`statistics - ${index}`}
            icon={statistic.icon}
            title={statistic.title}
            details={statistic.details}
          />
        ))}
      </section>
    </div>
  );
}

export default TransactionStatistic