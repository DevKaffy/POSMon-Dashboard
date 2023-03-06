import React from "react";
import "./StatisticCard.css"

const StatisticCard = ({
  icon,
  title,
  details,
}: {
  icon: string;
  title: string;
  details: string;
}) => {
  return (
    <main className="statistic-wrapper">
      <div className="statistic-two">
        <img className="w-[1.5rem] h-[1.5rem]" src={icon} alt="" />
        <p className="text-Bblack whitespace-nowrap text-[0.87rem]">{title}</p>
      </div>
      <p className="statistic-par">{details}</p>
    </main>
  );
};

export default StatisticCard;
