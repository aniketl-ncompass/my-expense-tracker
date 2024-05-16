import Grid2 from "@mui/material/Unstable_Grid2";
import CardItems from "./CardItems";

function Card() {
  return (
    <>
      {["Budget", "Total Spent", "Remaining"].map((name, index) => (
        <Grid2
          key={name + index}
          width="100%"
          xs={12}
          sm={6}
          md={4}
          xl={3}
        >
          <CardItems name={name} />
        </Grid2>
      ))}
    </>
  );
}

export default Card;
