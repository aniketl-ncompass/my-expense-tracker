import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "../../components/Card/Card";

function Dashboard() {
  return (
    <Grid2 container spacing={2.5}>
      {["Budget", "Total Spent"].map((name, index) => (
        <Grid2
          key={name + index}
          width="100%"
          xs={12}
          sm={6}
          md={5}
          lg={4}
          xl={3}
        >
          <Card name={name} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Dashboard;
