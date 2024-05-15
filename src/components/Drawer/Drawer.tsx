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
  Tooltip,
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
import { NavLink } from "react-router-dom";

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
      <Toolbar sx={{ py: "1.5rem" }}>
        <IconButton disableFocusRipple disableRipple disableTouchRipple>
          <Tree
            className={DrawerStyles["action-active"]}
            size={32}
            color="white"
          />
          <Typography sx={{ ml: "5px" }} color="white" variant="h6">
            Expense Tracker
          </Typography>
        </IconButton>
      </Toolbar>
      <Divider className={DrawerStyles["mui-mobile-divider"]} />
      <MUIList>
        {["Overview", "Settings", "Account"].map((text, index) => (
          <ListItem key={text + index}>
            <ListItemButton
              component={NavLink}
              end
              to={
                text === "Overview"
                  ? "/dashboard"
                  : text === "Settings"
                  ? "/dashboard/settings"
                  : "/dashboard/account"
              }
              className={DrawerStyles["mui-navlink"]}
            >
              {text === "Overview" ? (
                <ChartPie
                  className={DrawerStyles["action-active"]}
                  color="white"
                />
              ) : text === "Settings" ? (
                <GearSix
                  className={DrawerStyles["action-active"]}
                  color="white"
                />
              ) : (
                <User className={DrawerStyles["action-active"]} color="white" />
              )}
              <ListItemText primary={text}/>
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
        color="transparent"
        variant="outlined"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 270px)` },
          ml: { sm: `270px` },
        }}
      >
        <Toolbar>
          <Tooltip title="Sidebar" placement="bottom">
            <IconButton
              color="inherit"
              aria-label="toggle drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <List className={DrawerStyles["action-active"]} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Search" placement="bottom">
            <IconButton
              color="inherit"
              edge="start"
              aria-label="search expense"
              sx={{ mr: 2 }}
            >
              <MagnifyingGlass className={DrawerStyles["action-active"]} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        aria-label="Drawer section"
        sx={{ width: { sm: "270px" }, flexShrink: { sm: 0 } }}
      >
        <MUIDrawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            className: `${DrawerStyles["mui-drawer"]} ${DrawerStyles["mui-mobile"]}`,
          }}
          aria-label="mobile drawer"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {drawer}
        </MUIDrawer>
        <MUIDrawer
          open
          variant="permanent"
          PaperProps={{
            className: `${DrawerStyles["mui-drawer"]} ${DrawerStyles["mui-desktop"]}`,
          }}
          aria-label="desktop drawer"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          {drawer}
        </MUIDrawer>
      </Box>
    </div>
  );
}

export default Drawer;
