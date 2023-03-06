import React from "react";
import BarChart from "../../Components/BarChart";

import FailedTransaction from "../../Components/FailedTransaction";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import Table from "../../Components/Table";
import TransactionCardType from "../../Components/TransactionCardType";
import TransactionStatistic from "../../Components/TransactionStatistic";
import { headerItems, tableItems } from "../../data";
import { items, statistics } from "../../data";

import "./Home.css";

const Home = () => {
  const activePath = window.location.pathname;
  return (
    <DashboardLayout>
      <main className="wrapper">
        <header>
          <div className="mb-[2.5rem]">
            <h3 className="welcome-back">
              Welcome back,
            </h3>
            <p>Here’s what is happening with your Terminals today,</p>
          </div>
          <div className="date">
            <p>12th October, 2022</p>
            <img className="cursor-pointer" src="/vectors/Group v.png" alt="" />
          </div>
        </header>
        <TransactionStatistic />
        <section className="section-two-wrapper">
          <div className="section-two">
            <h3 className="live-monitoring">Live Monitoring</h3>
            <div className="live-image">
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
          <div className="table-wrapper">
            <Table
              tableData={tableItems.map((item) => ({
                time: item.time,

                amount: item.amount,
                type: item.type,
                terminal: item.terminal,
                account: item.account,
                status: (
                  <p
                    className={`flex justify-center rounded-[5px] w-[73px] px-1 py-[3.5px]
                      ${
                        item.status == "Approved"
                          ? "text-[#3DD154] bg-[#C3F1CA]"
                          : "text-[#DC1D1D] bg-[#FCE8E8]"
                      }
                    `}
                  >
                    {item.status}
                  </p>
                ),
              }))}
              headings={headerItems}
            />
          </div>
        </section>
        <section className="section-three">
          <p className="section-threep">
            Hourly Distribution
          </p>
          <div className="bg-white">
            <BarChart />
          </div>
        </section>
        <FailedTransaction />
        <TransactionCardType />
      </main>
    </DashboardLayout>
  );
};

export default Home;
