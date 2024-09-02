import { Badge, Box, Button, styled, Typography } from "@mui/material";
import React, { useContext } from "react";
import ShoppinCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
import DataProvider, { dataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "0 12% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

function Custombuttons() {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(dataContext);

  const openDialog = () => {
    setOpen(true);
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Container>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          onClick={openDialog}
          style={{
            marginRight: 40,
            marginLeft: 15,
            color: "#2874f0",
            backgroundColor: "#fff",
            textTransform: "none",
            padding: "5px 40px",
            borderRadius: 2,
            boxShadow: "none",
            fontWeight: "600",
            height: 30,
          }}
          variant="contained"
        >
          Login
        </Button>
      )}

      <Typography style={{ marginRight: 40, width: 130 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginRight: 40 }}>More</Typography>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
        <Box display={"flex"}>
          <Badge
            color="warning"
            badgeContent={cartItems?.length}
            style={{ marginRight: 7 }}
          >
            <ShoppinCartIcon style={{ marginRight: 5 }} />
          </Badge>

          <Typography>Cart</Typography>
        </Box>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Container>
  );
}

export default Custombuttons;
