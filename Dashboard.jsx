import React from "react";
import { motion } from "framer-motion";
import { MapPin, Activity, History, RadioTower } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const colors = {
    primary: "#2E7D32",
    gradient: "linear-gradient(135deg, #E8F5E9 0%, #F9FBE7 50%, #E8F5E9 100%)",
    cardBg: "rgba(255, 255, 255, 0.95)",
    text: "#2E7D32",
  };

  const cardStyle = {
    background: colors.cardBg,
    padding: "2rem",
    borderRadius: "1.2rem",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // Ensures full width, no gap on right
        overflowX: "hidden", // Removes horizontal scroll
        background: colors.gradient,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          color: colors.primary,
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        AgriDrone Dashboard
      </motion.h1>

      {/* Dashboard Sections */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          width: "100%",
          maxWidth: "1100px",
          justifyItems: "center",
        }}
      >
        {/* Drone Monitoring Panel */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/drone-monitoring")}
          style={cardStyle}
        >
          <Activity size={40} color={colors.text} />
          <h2 style={{ color: colors.text, margin: "1rem 0 0.5rem" }}>
            Drone Monitoring Panel
          </h2>
          <p style={{ color: "#444", maxWidth: "250px" }}>
            View all active drones, battery levels, and live data.
          </p>
        </motion.div>

        {/* Live Drone Map */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/live-map")}
          style={cardStyle}
        >
          <MapPin size={40} color={colors.text} />
          <h2 style={{ color: colors.text, margin: "1rem 0 0.5rem" }}>
            Live Drone Map / Tracker
          </h2>
          <p style={{ color: "#444", maxWidth: "250px" }}>
            Track drone movement in real time.
          </p>
        </motion.div>

        {/* Flight History */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/flight-history")}
          style={cardStyle}
        >
          <History size={40} color={colors.text} />
          <h2 style={{ color: colors.text, margin: "1rem 0 0.5rem" }}>
            Flight History
          </h2>
          <p style={{ color: "#444", maxWidth: "250px" }}>
            Review past flight details and performance.
          </p>
        </motion.div>

        {/* Drone Status */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate("/drone-status")}
          style={cardStyle}
        >
          <RadioTower size={40} color={colors.text} />
          <h2 style={{ color: colors.text, margin: "1rem 0 0.5rem" }}>
            Drone Status Indicators
          </h2>
          <p style={{ color: "#444", maxWidth: "250px" }}>
            Check which drones are connected or offline.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
