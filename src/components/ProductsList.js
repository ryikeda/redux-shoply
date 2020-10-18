import React from "react";
import { Grid } from "@material-ui/core";

import ProductCard from "./ProductCard";

const Showcase = ({ products }) => {
  return (
    <>
      <Grid item xs={12} sm={8}>
        <Grid item container spacing={1} justify="center" alignItems="stretch">
          {Object.entries(products).map(([key, value]) => (
            <ProductCard key={key} item={value} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Showcase;
