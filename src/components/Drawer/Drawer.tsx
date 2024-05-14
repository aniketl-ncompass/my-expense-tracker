import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Drawer as MUIDrawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  List as MUIList,
} from "@mui/material";
import {
  ChartPie,
  GearSix,
  List,
  MagnifyingGlass,
  Tree,
  User,
} from "@phosphor-icons/react";
import { useState } from "react";
import DrawerStyles from "./drawer.module.css";

function Drawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const drawer = (
    <div>
      <Toolbar>
        <IconButton disableFocusRipple disableRipple disableTouchRipple>
          <Tree className={DrawerStyles["action-active"]} />
          <Typography sx={{ ml: "5px" }}>Expense Tracker</Typography>
        </IconButton>
      </Toolbar>
      <Divider />
      <MUIList>
        {["Overview", "Settings", "Account"].map((text, index) => (
          <ListItem key={text + index}>
            <ListItemButton sx={{ pl: "8px" }}>
              {text === "Overview" ? (
                <ChartPie className={DrawerStyles["action-active"]} />
              ) : text === "Settings" ? (
                <GearSix className={DrawerStyles["action-active"]} />
              ) : (
                <User className={DrawerStyles["action-active"]} />
              )}
              <ListItemText primary={text} sx={{ ml: "5px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </MUIList>
    </div>
  );
  return (
    <div>
      <CssBaseline />
      <AppBar
        elevation={0}
        variant="outlined"
        color="transparent"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 240px)` },
          ml: { sm: `240px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <List className={DrawerStyles["action-active"]} />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="search expense"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MagnifyingGlass className={DrawerStyles["action-active"]} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: "240px" }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <MUIDrawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </MUIDrawer>
        <MUIDrawer
          open
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </MUIDrawer>
      </Box>
    </div>
  );
}

export default Drawer;