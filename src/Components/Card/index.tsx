import React from "react";

const Card = ({
  cardtype,
  img,
  approvedpercent,
  approvedvalue,
  failedpercent,
  failedvalue,
}: {
  cardtype: string;
  img: string;
  approvedpercent: string;
  approvedvalue: string;
  failedpercent: string;
  failedvalue: string;
}) => {
  return (
    <div className=" bg-white w-[22.12rem] h-[16.5rem] py-[1.75rem] px-[1.37rem] rounded-[5px] text-[Ablack]">

      <p className="mb-[1.25rem] text-[1.12rem] font-semibold">{cardtype}</p>
      <img className="w-[18.56rem] h-[6.06rem] mb-[1.3rem]" src={img} alt="" />
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-[0.11rem] font-semibold">
            Approved {approvedpercent}
          </p>
          <p className="text-[#3DD154] text-[1.5rem] font-semibold">
            {approvedvalue}
          </p>
        </div>
        <div>
          <p className="font-semibold">Failed {failedpercent}</p>
          <p className="text-[#E34A4A] text-[1.5rem] font-semibold">
            {failedvalue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
