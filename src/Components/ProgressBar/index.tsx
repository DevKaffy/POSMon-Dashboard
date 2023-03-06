import React from "react";

const ProgressBar = ({ color, width }: { color: string; width: string }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-[11.25rem] h-2 bg-[#F7F7F7] rounded-[10px] ">
        <div
          className="h-full rounded-[10px]"
          style={{ background: color, width: width }}
        ></div>{" "}
      </div>
      <span>{width}</span>
    </div>
  );
};

export default ProgressBar;
