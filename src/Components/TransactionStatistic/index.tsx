import React, { useState } from 'react'
import { items, statistics } from '../../data';
import StatisticCard from '../StatisticCard';

const TransactionStatistic = () => {
        const [activeTab, setactiveTab] = useState(0);

  return (
    <div>
      <div className="flex items-center  mb-12 gap-8 bg-white font-semibold w-[44rem] rounded-[5px] cursor-pointer">
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
      <section className="flex items-center gap-[1.5rem] flex-wrap mb-12">
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