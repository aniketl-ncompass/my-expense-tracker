import Chart from "react-apexcharts";
interface IApexChart {
  isMobile: boolean;
  chartOptions: ApexCharts.ApexOptions;
  visibleSeries: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
}
function ApexChart({ chartOptions, visibleSeries, isMobile }: IApexChart) {
  return (
    <Chart
      options={chartOptions}
      series={visibleSeries}
      type={isMobile ? "line" : "bar"}
      height={"300px"}
    />
  );
}

export default ApexChart;
