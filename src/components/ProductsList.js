import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

const Showcase = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <Grid container alignItems="center">
        <Grid item container spacing={1} justify="center" alignItems="stretch">
          {Object.entries(products).map(([key, value]) => (
            <ProductCard key={key} item={value} id={key} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Showcase;
