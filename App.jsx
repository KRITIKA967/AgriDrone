import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import DroneMonitoring from "./DroneMonitoring";
import LiveMap from "./LiveDroneMap";
import FlightHistory from "./FlightHistory";
import DroneStatus from "./DroneStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drone-monitoring" element={<DroneMonitoring />} />
        <Route path="/live-map" element={<LiveMap />} />
        <Route path="/flight-history" element={<FlightHistory />} />
        <Route path="/drone-status" element={<DroneStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
