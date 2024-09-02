import { Box, Grid, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import Actionitem from "./Actionitem";
import ProductDetail from "./ProductDetail";

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);
  // console.log(loading);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    // console.log("didn't run");
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
      // console.log("running");
    }
    // console.log("end");
  }, [dispatch, id, loading]);

  const Component = styled(Box)`
    background: #f2f2f2;
    margin: 30px;
  `;
  const Container = styled(Grid)`
    background: #ffffff;
    display: flex;
  `;

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Actionitem product={product} />
          </Grid>
          <Grid style={{ marginTop: 50 }} item lg={8} md={8} sm={12} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings and 1 review
              <Box component="span" style={{ verticalAlign: "middle" }}>
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: 74, marginLeft: 20 }}
                />
              </Box>
            </Typography>
            <Typography>
              <Box component="span" style={{ fontSize: 28 }}>
                {" "}
                ₹{product.price.cost}{" "}
              </Box>
              <Box component="span" style={{ color: "#878787" }}>
                {" "}
                <strike> {product.price.mrp} </strike>{" "}
              </Box>
              &nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#388e3c" }}>
                {" "}
                {product.price.discount}{" "}
              </Box>
            </Typography>
            <ProductDetail product={product} />
          </Grid>
        </Container>
      )}
    </Component>
  );
}

export default DetailView;
