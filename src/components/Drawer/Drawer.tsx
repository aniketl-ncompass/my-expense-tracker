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
  Avatar,
  Menu,
  MenuItem,
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

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
              <ListItemText primary={text} />
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
        color="inherit"
        variant="outlined"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - 270px)` },
          ml: { sm: `270px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <Tooltip title="Sidebar" placement="bottom">
              <IconButton
                color="inherit"
                aria-label="toggle drawer"
                sx={{ mr: 2, display: { sm: "none" } }}
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
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
              disableRipple
              disableFocusRipple
              disableTouchRipple
            >
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              keepMounted
              sx={{ mt: "50px" }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Menu</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  sofia.rivers@devias.io
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Settings</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Sign out</Typography>
              </MenuItem>
            </Menu>
          </Box>
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
          aria-label="mobile drawer"
          sx={{
            display: { xs: "block", sm: "none" },
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
          {drawer}
        </MUIDrawer>
        <MUIDrawer
          open
          variant="permanent"
          aria-label="desktop drawer"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
          PaperProps={{
            className: `${DrawerStyles["mui-drawer"]} ${DrawerStyles["mui-desktop"]}`,
          }}
        >
          {drawer}
        </MUIDrawer>
      </Box>
    </div>
  );
}

export default Drawer;
