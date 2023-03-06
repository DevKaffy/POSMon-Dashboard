import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const state: any = {
    series: [25, 25, 15, 10, 25],
    options: {
      colors: ["#DC1D1D", "#4C6FFF", "#B81FDE", "#FF6934", "#3DD154"],
      chart: {
        type: "donut",
      },
      stroke: {
        width: 10,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default DonutChart;
