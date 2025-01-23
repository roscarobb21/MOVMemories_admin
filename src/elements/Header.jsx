import logo from "../assets/logo.png";
import Button from "@mui/material/Button";

import { Icon } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

function Header({ handleSignOut }) {
  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <span className="inverted-color-text">
        <img src={logo} style={{ width: "96px", padding: "10px" }}></img>
      </span>
      <div style={{ position: "fixed", right: 10, top: 10 }}>
        <AccountMenu handleSignOut={handleSignOut} />
      </div>
      {/* <Button style={{ right: 0, position: "fixed" }} onClick={handleSignOut}>
        <ExitToAppIcon color="primary"/>
      </Button> */}
    </div>
  );
}

function AccountMenu({ handleSignOut }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    switch (option) {
      case "logout":
        handleSignOut();
        break;
      case "approved":
        navigate("/approved");
        break;
      case "requests":
        navigate("/dashboard");
        break;
      default:
        setAnchorEl(null);
        break;
    }
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => {
          handleClose(1);
        }}
        onClick={() => {
          handleClose(1);
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            handleClose("requests");
          }}
        >
          <NewReleasesIcon />
          &nbsp;Booking Requests
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("approved");
          }}
        >
          <ChecklistRtlIcon />
          &nbsp;Approved Bookings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose("settings");
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("logout");
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Header;
