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
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardContainer;
