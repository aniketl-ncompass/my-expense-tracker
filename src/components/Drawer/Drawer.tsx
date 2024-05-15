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
import UserAvatar from "../UserAvatar/UserAvatar";

const DrawerLists = () => (
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
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </MUIList>
  </div>
);

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

  return (
    <div>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="inherit"
        variant="outlined"
        position="fixed"
        sx={{
          width: { lg: `calc(100% - 270px)` },
          ml: { lg: `270px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <Tooltip title="Sidebar" placement="bottom">
              <IconButton
                color="inherit"
                aria-label="toggle drawer"
                sx={{ mr: 2, display: { lg: "none" } }}
                onClick={handleDrawerToggle}
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
          </div>
          {/* AVATAR */}
          <UserAvatar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        aria-label="Drawer section"
        sx={{ width: { lg: "270px" }, flexShrink: { sm: 0 } }}
      >
        <MUIDrawer
          variant="temporary"
          open={mobileOpen}
          aria-label="mobile drawer"
          sx={{
            display: { xs: "block", lg: "none" },
          }}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            className: `${DrawerStyles["mui-drawer"]} ${DrawerStyles["mui-mobile"]}`,
          }}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
        >
          <DrawerLists />
        </MUIDrawer>
        <MUIDrawer
          open
          variant="permanent"
          aria-label="desktop drawer"
          sx={{
            display: { xs: "none", lg: "block" },
          }}
          PaperProps={{
            className: `${DrawerStyles["mui-drawer"]} ${DrawerStyles["mui-desktop"]}`,
          }}
        >
          <DrawerLists />
        </MUIDrawer>
      </Box>
    </div>
  );
}

export default Drawer;
