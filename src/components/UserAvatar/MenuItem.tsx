import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuList as MUIMenuList,
  MenuItem as MUIMenuItem,
  Typography,
} from "@mui/material";
import { GearSix, SignOut, User } from "@phosphor-icons/react";
import DrawerStyles from "../Drawer/drawer.module.css";
import MenuItemStyles from "./menuItem.module.css";

interface IMenuList {
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
}
interface IMenuItem extends IMenuList {
  anchorElUser: HTMLElement | null;
}

const MenuList = ({ handleCloseUserMenu }: IMenuList) => (
  <MUIMenuList className={MenuItemStyles["mui-menu-list-container"]}>
    {["Settings", "Profile", "Sign out"].map((text, index) => (
      <MUIMenuItem
        key={text + index}
        aria-label={text}
        className={MenuItemStyles["mui-menu-listItem"]}
        onClick={handleCloseUserMenu}
      >
        <ListItemIcon>
          {text === "Settings" ? (
            <GearSix
              className={`${DrawerStyles["action-active"]} ${DrawerStyles["font-small"]}`}
            />
          ) : text === "Profile" ? (
            <User
              className={`${DrawerStyles["action-active"]} ${DrawerStyles["font-small"]}`}
            />
          ) : (
            <SignOut
              className={`${DrawerStyles["action-active"]} ${DrawerStyles["font-small"]}`}
            />
          )}
        </ListItemIcon>
        <ListItemText primary={text} />
      </MUIMenuItem>
    ))}
  </MUIMenuList>
);

function MenuItem({ anchorElUser, handleCloseUserMenu }: IMenuItem) {
  return (
    <Menu
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      aria-label="User Menu"
      slotProps={{ paper: { className: MenuItemStyles["mui-menu"] } }}
    >
      <Box className={MenuItemStyles["mui-menuItem-header"]}>
        <Typography variant="subtitle1">Sofia Rivers</Typography>
        <Typography variant="body2" color="text.secondary">
          sofia.rivers@devias.io
        </Typography>
      </Box>
      <Divider />
      <MenuList handleCloseUserMenu={handleCloseUserMenu} />
    </Menu>
  );
}

export default MenuItem;
