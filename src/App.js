import React from "react";
import "./App.css";
import HealthcareContract from "./components/HealthCareContract";

function App() {
  return (
    <>
    <nav><h2 className="heading">Health Care</h2></nav>
    <div className="app-container">
      <HealthcareContract />
    </div>
    </>
  );
}

export default App;

