import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../../Components/Card";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import StatisticCard from "../../Components/StatisticCard";
import Table from "../../Components/Table";
import TransactionCardType from "../../Components/TransactionCardType";
import Transactions from "../../Components/Transactions";
import { headerItems, tableItems } from "../../data";
import {
  cardItems,
  chartItems,
  items,
  statistics,
  transactionDetails,
} from "../../data";

import "./Home.css";

const Home = () => {
  const activePath = window.location.pathname;
  return (
    <DashboardLayout>
      <main className="wrapper">
        <header className="text-Ablack">
          <div className="mb-[2.5rem]">
            <h3 className="text-[2.28rem]  font-bold mb-[0.25rem]">
              Welcome back,
            </h3>
            <p>Here’s what is happening with your Terminals today,</p>
          </div>
          <div className="flex bg-white mb-12 gap-8 py-[0.75rem] font-semibold w-[44rem] rounded-[5px]">
            {items.map((item, index) => (
              <div key={`items -${index}`}>
                <NavLink
                  to={item.path || " "}
                  className={
                    activePath == item.path
                      ? "bg-[#4C6FFF] text-white py-[0.75rem] px-4 rounded-[5px]"
                      : "bg-white"
                  }
                >
                  {item.link}
                </NavLink>
              </div>
            ))}
          </div>
        </header>
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
        <section>
          <div className="flex items-center justify-between mb-[1.5rem] text-[1.5rem]">
            <h3 className="text-Ablack font-bold">Live Monitoring</h3>
            <div className="flex items-center gap-[1.37rem]">
              <img
                className="w-[1.25rem] h-[1.25rem]"
                src="/vectors/Vector.svg"
                alt=""
              />
              <img
                className="w-[2rem] h-[2rem]"
                src="/vectors/arrow-down.svg"
                alt=""
              />
            </div>
          </div>
          {/* <div className="bg-white w-[60.75rem] px-8"> */}
            <table className="mx-auto">
              <thead>
                <tr className="bg-[#EDF1FF] flex gap-4">
                  {headerItems.map((headerItem, index) => (
                    <th
                      className="flex w-[8.95rem] items-center h-[3.37rem]"
                      key={`headerItems- ${index}`}
                    >
                      {headerItem}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="flex flex-col items-start">
                {
                  tableItems.map((tableItem, index)=>(
                    <Table 
                    key= {`tableItems - ${index}`}
                    time= {tableItem.time}
                    amount= {tableItem.amount}
                    type= {tableItem.type}
                    terminal= {tableItem.terminal}
                    account={tableItem.account}
                    status= {tableItem.status}

                    />
                  ))
                }
              </tbody>
            </table>
          {/* </div> */}
        </section>
        <section className="mt-12">
          <p className="mb-[1.5rem] font-bold text-[1.5rem] text-[Ablack]">
            Failed Transactions
          </p>
          <div className="grid grid-cols-2 gap-x-[1.5rem]">
            <div className="bg-white px-8 py-8 rounded-[5px]">
              <p className="font-semibold text-[1.25rem]">Failures by Class</p>
            </div>
            <div className="pt-8 pb-16 px-12 bg-white rounded-[5px]">
              <h2 className="font-bold text-[2rem] mb-[0.31rem] text-[Ablack]">
                10,000
              </h2>
              <p className="font-medium text-[Ablack]">
                Here’s why your transactions failed!
              </p>
              <div className="flex items-center mt-[2.5rem] mb-[3rem] text-[#3D4C5E] gap-x-4 text-[0.87rem]">
                {chartItems.map((chartItem, index) => (
                  <div key={`chartItems -${index}`}>
                    <NavLink
                      to={chartItem.path || ""}
                      className={
                        activePath == chartItem.path
                          ? "bg-[#4C6FFF] text-white py-[0.5rem] px-[0.5rem] rounded-[5px]"
                          : "bg-[#EBEEF2] py-[0.5rem] px-[0.5rem] rounded-[5px]"
                      }
                    >
                      {chartItem.name}
                    </NavLink>
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
        <TransactionCardType />
      </main>
    </DashboardLayout>
  );
};

export default Home;
