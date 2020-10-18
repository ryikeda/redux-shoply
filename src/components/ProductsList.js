import React from "react";
import { Grid } from "@material-ui/core";

import ProductCard from "./ProductCard";
import { products } from "../data.json";

const Showcase = () => {
  return (
    <>
      <Grid
        item
        container
        spacing={1}
        justify="space-between"
        alignItems="stretch"
      >
        {Object.entries(products).map(([key, value]) => (
          <ProductCard key={key} item={value} />
        ))}
      </Grid>
    </>
  );
};

export default Showcase;
