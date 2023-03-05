import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from '../../Components/Card';
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import StatisticCard from '../../Components/StatisticCard';
import Table from '../../Components/Table';
import Transactions from '../../Components/Transactions';
import { cardItems, items, statistics, transactionDetails} from '../../data';

import './Home.css'

const Home = () => {
    const activePath = window.location.pathname
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
          <Table />
        </section>
        <section className="grid grid-cols-2">
          <h2>10,000</h2>
          <p>Here’s why your transactions failed!</p>
          <div>
            {
            transactionDetails.map((transactionDetail, index)=>(
                <Transactions
                key= {`transactionsDetails -${index}`}
                details= {transactionDetail.details}
                figure= {transactionDetail.figure}
                />

            ))
            }
          </div>
        </section>
        <section className="mt-[3rem]">
          <h3 className="text-Ablack font-bold text-[1.5rem] mb-[1.5rem]">
            Transactions Per Card Type
          </h3>
          <div className="grid grid-cols-3 gap-[1.75rem]">
            {cardItems.map((cardItem, index) => (
              <Card
                key={`cardItems -${index}`}
                cardtype={cardItem.cardtype}
                img={cardItem.img}
                approvedpercent={cardItem.approvedpercent}
                approvedvalue={cardItem.approvedvalue}
                failedpercent={cardItem.failedpercent}
                failedvalue={cardItem.failedvalue}
              />
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default Home