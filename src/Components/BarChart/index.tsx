import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const state: any = {
    series: [
      {
        name: "Approved",data: [
          2000, 2700, 1400, 0, 3400, 2400, 1800, 2300, 2500, 0, 1300, 3000, 3200, 2200, 3400, 1500, 700, 300,
          0, 0, 0, 0, 0, 0, 
        ],
      },     
      {
        name: "Failed",
         data: [
          500, 300, 200, 0, 1500, 1000, 500, 1300, 700, 0, 800, 1300, 500, 1000, 1500, 300, 200, 100, 0, 0, 0, 0, 0, 0,
        ],}
    ],
    options: {
      colors: ["#3DD154", "#E34A4A"],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 0,
      },
      xaxis: {
        categories: [
          "12am",
          "1am",
          "2am",
          "3am",
          "4am",
          "5am",
          "6am",
          "7am",
          "8am",
          "9am",
          "10am",
          "11am",
          "12pm",
          "1pm",
          "2pm",
          "3pm",
          "4pm",
          "5pm",
          "6pm",
          "7pm",
          "8pm",
          "9pm",
          "10pm",
          "11pm",
        ],
      },
    
      fill: {
        opacity: 1,
      },
      
    },
  };
  return (
    <div className="bg-white px-[1.87rem] pb-[1.68rem]">
      <div className="flex flex-col items-end p-[1.87rem] gap-y-[0.5rem]">
        <p className="text-[#1D242D] font-semibold">
          Overall Approval Rate: 45.0%
        </p>
        <p className="text-[14px] text-[#3D4C5E]">Transactions per time</p>
      </div>

      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
      <div className="flex items-center justify-end text-[white] text-[14px]">
        <button className="bg-[#4C6FFF] py-[0.84rem] px-[1rem] rounded-[5px]">
          View Table
        </button>
      </div>
    </div>
  );
};

export default BarChart;

