import { Box, InputBase, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Search() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <Box
      style={{
        backgroundColor: "#fff",
        width: "38%",
        borderRadius: 2,
        marginLeft: 10,
        display: "flex",
        fontSize: "unset",
      }}
    >
      <InputBase
        onChange={(e) => getText(e.target.value)}
        value={text}
        placeholder="Search for products, brands and more"
        style={{ width: "100%", paddingLeft: 20 }}
      ></InputBase>
      <SearchIcon style={{ color: "blue", padding: 5 }} />
      {text && (
        <List
          style={{
            position: "absolute",
            background: "#fff",
            color: "#000000",
            marginTop: 36,
          }}
        >
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    fontSize: 14,
                  }}
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </List>
      )}
    </Box>
  );
}

export default Search;
