import React, { useState } from "react";
import './FailedTransaction.css'
import {
  chartItems,
  ellipses,
  progressStats,
  transactionDetails,
} from "../../data";
import DonutChart from "../DonutChart/DonutChart";
import Ellipses from "../Ellipses/Ellipses";
import ProgressBar from "../ProgressBar";
import Transactions from "../Transactions";

const FailedTransaction = () => {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <section className="failed-transaction">
      <p className="failed-paragraph">Failed Transactions</p>
      <div className="transactions-wrapper">
        <div className="ellipses-wrapper">
          <p className="failure-paragraph">Failures by Class</p>
          <div className="ellipse">
            {ellipses.map((ellipse, index) => (
              <Ellipses
                key={`ellipses - ${index}`}
                img={ellipse.img}
                title={ellipse.title}
              />
            ))}
          </div>
          <DonutChart />
          <div className="progress">
            {progressStats.map((progressStat, index) => (
              <ProgressBar
                key={index}
                color={progressStat.color}
                width={progressStat.width}
              />
            ))}
          </div>
        </div>
        <div className="transactions-container">
          <h2 className="transactions-figure">10,000</h2>
          <p className="font-medium text-[Ablack]">
            Here’s why your transactions failed!
          </p>
          <div className="chartItems">
            {chartItems.map((chartItem, index) => (
              <div key={`chartItems -${index}`}>
                <div
                  onClick={() => setactiveTab(index)}
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
};

export default FailedTransaction;
