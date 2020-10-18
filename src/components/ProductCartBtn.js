import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { addToCart, removeFromCart } from "../actions";

const ProductCartBtn = ({ id }) => {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  const remove = () => dispatch(removeFromCart(id));
  return (
    <>
      <Button fullWidth variant="contained" onClick={remove}>
        Remove
      </Button>
      <Button fullWidth variant="contained" onClick={add}>
        Add
      </Button>
    </>
  );
};

export default ProductCartBtn;
