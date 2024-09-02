import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    setAccount("");
  };
  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginRight: 40, marginLeft: 15, cursor: "pointer" }}
        >
          {" "}
          {account}{" "}
        </Typography>
      </Box>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        style={{ marginTop: 5 }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logOut();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Typography style={{ fontSize: 15, marginLeft: 5 }}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
