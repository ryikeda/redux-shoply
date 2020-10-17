import React from "react";
import NavBar from "./components/Navbar";
import { Container } from "@material-ui/core";
import "./App.css";
import Showcase from "./components/Showcase";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Showcase />
        <Cart />
      </Container>
    </div>
  );
}

export default App;
