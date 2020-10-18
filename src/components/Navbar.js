import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculateTotalQuantity } from "../helpers";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = () => {
  const history = useHistory();
  const { cartItems } = useSelector((state) => state);

  let totalQty = calculateTotalQuantity(cartItems);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Shoply
          </Typography>

          <IconButton color="inherit" onClick={() => history.push("/cart")}>
            <Badge badgeContent={totalQty} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
