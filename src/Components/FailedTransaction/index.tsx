import React, { useState } from 'react'
import { chartItems, ellipses, progressStats, transactionDetails } from '../../data';
import DonutChart from '../DonutChart/DonutChart';
import Ellipses from '../Ellipses/Ellipses';
import ProgressBar from '../ProgressBar';
import Transactions from '../Transactions';

const FailedTransaction = () => {
    const [activeTab, setactiveTab] = useState(0);

  return (
    <section className="mt-12">
      <p className="mb-[1.5rem] font-bold text-[1.5rem] text-[Ablack]">
        Failed Transactions
      </p>
      <div className="grid grid-cols-2 gap-x-[1.5rem]">
        <div className="bg-white px-8 py-8 rounded-[5px] text-[Ablack]">
          <p className="font-semibold text-[1.25rem] pb-[1.37rem]">
            Failures by Class
          </p>
          <div className="flex flex-wrap gap-x-[1.5rem] gap-y-[0.93rem]">
            {ellipses.map((ellipse, index) => (
              <Ellipses
                key={`ellipses - ${index}`}
                img={ellipse.img}
                title={ellipse.title}
              />
            ))}
          </div>
          <DonutChart />
          <div className="flex flex-col gap-[22px] mt-[2.75rem]">
            {progressStats.map((progressStat, index) => (
              <ProgressBar
                key={index}
                color={progressStat.color}
                width={progressStat.width}
              />
            ))}
          </div>
        </div>
        <div className="pt-8 pb-16 px-12 bg-white rounded-[5px]">
          <h2 className="font-bold text-[2rem] mb-[0.31rem] text-[Ablack]">
            10,000
          </h2>
          <p className="font-medium text-[Ablack]">
            Here’s why your transactions failed!
          </p>
          <div className="flex items-center mt-[2.5rem] mb-[3rem] text-[#3D4C5E] gap-x-4 text-[0.87rem] cursor-pointer">
            {chartItems.map((chartItem, index) => (
              <div key={`chartItems -${index}`}>
                <div onClick={()=>setactiveTab(index)}
                  className={
                    activeTab == index
                      ? "bg-[#4C6FFF] text-white py-[0.5rem] px-[0.5rem] rounded-[5px]"
                      : "bg-[#EBEEF2] py-[0.5rem] px-[0.5rem] rounded-[5px]"
                  }
                >
                  {chartItem}
                </div>
              </div>
            ))}
          </div>
          <div className="text-[Ablack]">
            {transactionDetails.map((transactionDetail, index) => (
              <Transactions
                key={`transactionsDetails -${index}`}
                details={transactionDetail.details}
                figure={transactionDetail.figure}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FailedTransaction