import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "../../components/Card/Card";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";

function Dashboard() {
  return (
    <Grid2 container spacing={2.5}>
      <Card />
      <ExpenseChart/>
    </Grid2>
  );
}

export default Dashboard;
