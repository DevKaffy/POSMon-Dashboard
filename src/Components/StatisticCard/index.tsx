import React from "react";

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
    <main className="w-[12rem] h-[6.5rem] pt-[1.15rem] bg-white rounded-[5px] pl-[0.62rem] pr-4 text-sm">
      <div className="flex items-center gap-2 mb-[1.12rem]">
        <img className="w-[1.5rem] h-[1.5rem]" src={icon} alt="" />
        <p className="text-Bblack whitespace-nowrap text-[0.87rem]">{title}</p>
      </div>
      <p className="font-semibold text-[1.5rem] text-Cblack">{details}</p>
    </main>
  );
};

export default StatisticCard;
