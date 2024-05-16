import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CardStyles from "../Card/card.module.css";
import DrawerStyles from "../Drawer/drawer.module.css";
import ExpenseChartStyles from "./expenseChart.module.css";
import { ArrowRight } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import ApexChart from "./ApexChart";

const ApexCharInit: ApexCharts.ApexOptions = {
  chart: {
    id: "apex-chart",
    width: "100%",
    stacked: false,
    toolbar: { show: false },
  },
  grid: {
    show: true,
    borderColor: "#dcdfe4",
    strokeDashArray: 2,
  },
  colors: ["#635bff", "#635bff40"],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    show: true,
    labels: {
      formatter: function (val: number) {
        return val >= 1000 ? val / 1000 + "K" : val.toString();
      },
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "100%",
    },
  },
};
type TchartSeries = {
  name: string;
  data: number[];
};
const chartSeries: TchartSeries[] = [
  {
    name: "This Year",
    data: [
      18000, 16000, 4500, 8000, 2500, 14000, 14000, 16000, 16500, 18500, 18000,
      20000,
    ],
  },
  {
    name: "Last Year",
    data: [
      11000, 8000, 700, 5000, 4000, 11000, 8000, 12000, 14000, 17000, 10000,
      7000,
    ],
  },
];
type TseriesOption = {
  value: string;
  label: string;
};
const seriesOptions: TseriesOption[] = [
  { value: "ThisYear", label: "This Year" },
  { value: "LastYear", label: "Last Year" },
  { value: "ThisYear&LastYear", label: "See Both" },
];

function ExpenseChart() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedSeries, setSelectedSeries] = useState(["ThisYear"]);

  const [chartOptions] = useState(() => {
    const newChartValue = {
      ...ApexCharInit,
    };

    newChartValue["legend"] = {
      show: true,
      position: isMobile ? "bottom" : "right",
    };
    return newChartValue;
  });

  const handleSeriesChange = (event: any) => {
    const selectedValue = event.target.value;
    setSelectedSeries(selectedValue);
  };

  const visibleSeries = () => {
    if (selectedSeries.includes("ThisYear&LastYear")) return chartSeries;

    return chartSeries.filter((series) =>
      selectedSeries.includes(series.name.replace(/ /g, ""))
    );
  };

  return (
    <Grid2 xs={12} lg={7}>
      <Card
        variant="outlined"
        className={`${CardStyles["mui-card"]} ${ExpenseChartStyles["mui-expense-card"]}`}
      >
        <CardHeader
          title={
            <Typography variant="h6" fontWeight="medium" fontSize="1.125rem">
              Expenses
            </Typography>
          }
          action={
            <Select
              displayEmpty
              value={selectedSeries}
              onChange={handleSeriesChange}
              SelectDisplayProps={{
                className: ExpenseChartStyles["mui-card-action-select"],
              }}
              sx={{ mr: "15px" }}
            >
              {seriesOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Typography color="text.secondary" variant="caption">
                    {option.label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          }
          className={ExpenseChartStyles["mui-card-header"]}
        />
        <CardContent
          className={ExpenseChartStyles["mui-card-content"]}
          sx={{ padding: { md: "24px 16px 8px!important" } }}
        >
          <ApexChart
            chartOptions={chartOptions}
            visibleSeries={visibleSeries()}
            isMobile={isMobile}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            endIcon={<ArrowRight className={DrawerStyles["action-active"]} />}
            size="small"
            className={ExpenseChartStyles["mui-card-action-button"]}
          >
            Overview
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}

export default ExpenseChart;
