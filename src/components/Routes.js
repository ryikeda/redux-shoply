import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import ProductsList from "./ProductsList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <ProductsList />
      </Route>
      <Route path="/products/:id" exact>
        <ProductDetails />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
