import React from "react";
import "./App.css";
import HealthcareContract from "./components/HealthCareContract";
import { CssBaseline, Container, AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Healthcare System</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <HealthcareContract />
      </Container>
    </div>
  );
}

export default App;
