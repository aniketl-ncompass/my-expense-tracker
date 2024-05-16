import Chart from "react-apexcharts";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CardStyles from "../Card/card.module.css";
import DrawerStyles from "../Drawer/drawer.module.css";
import ExpenseChartStyles from "./expenseChart.module.css";
import { ArrowClockwise, ArrowRight, Divide } from "@phosphor-icons/react";

function ExpenseChart() {
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
            <Button
              startIcon={
                <ArrowClockwise className={DrawerStyles["action-active"]} />
              }
              size="small"
              className={ExpenseChartStyles["mui-card-action-button"]}
            >
              Sync
            </Button>
          }
          className={ExpenseChartStyles["mui-card-header"]}
        />
        <CardContent className={ExpenseChartStyles["mui-card-content"]}>
          <Chart
            options={{
              chart: {
                id: "basic-bar",
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
                  formatter: function (val) {
                    return val >= 1000 ? val / 1000 + "K" : val.toString();
                  },
                },
              },
              plotOptions: {
                bar: {
                  columnWidth: "150%",
                },
              },
            }}
            series={[
              {
                name: "This year",
                data: [
                  18000, 16000, 4500, 8000, 2500, 14000, 14000, 16000, 16500,
                  18500, 18000, 20000,
                ],
              },

              {
                name: "Last year",
                data: [
                  11000, 8000, 700, 5000, 4000, 11000, 8000, 12000, 14000,
                  17000, 10000, 7000,
                ],
              },
            ]}
            type="bar"
            width="100%"
            height="350px"
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
