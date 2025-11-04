import React from "react";
import { motion } from "framer-motion";

const LiveDroneMap = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f4f1e8",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "1rem 3rem",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="/drone-logo.png"
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
          <h2 style={{ color: "#2E7D32", fontWeight: "700" }}>AgriDrone</h2>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          {["Home", "Monitoring", "Live Map", "History", "Status"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: "#2E7D32",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          style={{
            backgroundColor: "#FBC02D",
            color: "#fff",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          📞 Call Anytime
        </button>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600003015698-4e089d7b5c8d?auto=format&fit=crop&w=1920&q=80"
          alt="Live Drone Map"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 5%",
            color: "white",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            LIVE DRONE MAP
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              margin: "1rem 0",
            }}
          >
            Real-Time Tracking <br /> of All Active Drones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              maxWidth: "500px",
              fontSize: "1.1rem",
              marginBottom: "2rem",
              color: "#f0f0f0",
            }}
          >
            Watch your drones move across the map in real-time with GPS
            precision and live updates of their flight zones.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#FBC02D",
              color: "#fff",
              border: "none",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Open Live Map
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default LiveDroneMap;
