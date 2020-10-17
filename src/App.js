import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import "./App.css";
import NavBar from "./components/Navbar";
import Showcase from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box mt={3}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Showcase />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Cart />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
