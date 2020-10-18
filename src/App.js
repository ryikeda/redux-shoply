import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import "./App.css";
import NavBar from "./components/Navbar";
import Showcase from "./components/ProductsList";
import Cart from "./components/Cart";
import { products } from "./data.json";

function App() {
  const cartItems = [
    { name: "tv", price: 219.99, qty: 1 },
    { name: "microwave", price: 100, qty: 2 },
    { name: "chair", price: 100.89, qty: 5 },
    { name: "phone", price: 399.99, qty: 1 },
  ];

  return (
    <div className="App">
      <NavBar />
      <Box mt={3}>
        <Container>
          <Grid container spacing={2}>
            <Showcase products={products} />
            <Cart cartItems={cartItems} />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
