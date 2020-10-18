import React from "react";
import { Container, Box } from "@material-ui/core";
import "./App.css";
import NavBar from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box mt={3}>
        <Container>
          <Routes />
        </Container>
      </Box>
    </div>
  );
}

export default App;
