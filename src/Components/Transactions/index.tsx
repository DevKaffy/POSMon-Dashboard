import React from 'react'

const Transactions = ({details, figure}:{
  details: string;
  figure: string;
}) => {
  return (
    <div className="flex m-4 list-disc items-center justify-between">
      <div className="flex gap-x-[0.5rem] items-center">
        <span className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#4C6FFF]"></span>
        <span>{details}</span>
      </div>
      <span>{figure}</span>
    </div>
  );
}

export default Transactions