import React from "react";
import "./Card.css";

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
    <div className="card-wrapper">
      <p className="card-paragraph">{cardtype}</p>
      <img className="card-image" src={img} alt="" />
      <div className="approved-failed">
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
