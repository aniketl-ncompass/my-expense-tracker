import { Box, IconButton, Avatar } from "@mui/material";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

function UserAvatar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    const { ariaLabel } = event.currentTarget;
    //TODO: First logout the user before redirecting him to sign In page.
    const pageToNavigate =
      ariaLabel === "Settings"
        ? "/dashboard/settings"
        : ariaLabel === "Profile"
        ? "/dashboard/account"
        : ariaLabel === "Sign out"
        ? "/auth/signin"
        : null;
    setAnchorElUser(null);
    if (pageToNavigate) navigate(pageToNavigate);
  };
  return (
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
      <MenuItem
        anchorElUser={anchorElUser}
        handleCloseUserMenu={handleCloseUserMenu}
      />
    </Box>
  );
}

export default UserAvatar;
