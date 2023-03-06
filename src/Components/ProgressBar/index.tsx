import React from "react";
import "./ProgressBar.css"
const ProgressBar = ({ color, width }: { color: string; width: string }) => {
  return (
    <div className="progress-wrapper">
      <div className="props-wrapper">
        <div
          className="h-full rounded-[10px]"
          style={{ background: color, width: width }}
        ></div>
      </div>
      <span>{width}</span>
    </div>
  );
};

export default ProgressBar;
