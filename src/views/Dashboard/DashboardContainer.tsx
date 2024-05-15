import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";

function DashboardContainer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: "3.5rem 1.5rem 1.5rem",
          width: { lg: `calc(100% - 270px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardContainer;
