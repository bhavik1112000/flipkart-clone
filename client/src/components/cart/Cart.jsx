import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 10px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
`;

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  // const { cartItems } = state;

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <Box
              style={{
                padding: "16px 22px",
                boxShadow: "0 2px 10px 0 rgb(0 0 0/ 10%",
                borderTop: "1px solid #f0f0f0",
                textAlign: "right",
              }}
            >
              <Button
                variant="contained"
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  background: "#fb541b",
                  borderRadius: 2,
                  width: 250,
                  height: 51,
                }}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
