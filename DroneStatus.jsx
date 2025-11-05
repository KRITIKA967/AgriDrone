import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link for navigation

const DroneStatus = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f4f1e8",
      }}
    >
      {/* ===== NAVIGATION BAR ===== */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          padding: "1rem 3rem",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="https://i.pinimg.com/736x/8c/37/44/8c3744ff2025fbffa4184cb8be6b4c5a.jpg"
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
          <h2 style={{ color: "#2E7D32", fontWeight: "700" }}>AgriDrone</h2>
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link
            to="/dashboard"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FBC02D")}
            onMouseLeave={(e) => (e.target.style.color = "#2E7D32")}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FBC02D")}
            onMouseLeave={(e) => (e.target.style.color = "#2E7D32")}
          >
            Monitoring
          </Link>

          <Link
            to="/live-map"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FBC02D")}
            onMouseLeave={(e) => (e.target.style.color = "#2E7D32")}
          >
            Live Map
          </Link>

          <Link
            to="/flight-history"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FBC02D")}
            onMouseLeave={(e) => (e.target.style.color = "#2E7D32")}
          >
            History
          </Link>

          <Link
            to="/drone-status"
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#FBC02D")}
            onMouseLeave={(e) => (e.target.style.color = "#2E7D32")}
          >
            Status
          </Link>
        </div>

        {/* Call Button */}
        <button
          style={{
            backgroundColor: "#FBC02D",
            color: "#fff",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "transform 0.2s ease, background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          📞 Call Anytime
        </button>
      </nav>

      {/* ===== HERO SECTION ===== */}
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
          src="https://cdn.pixabay.com/photo/2023/03/31/14/52/rice-field-7890204_960_720.jpg"
          alt="Drone Status"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Text Overlay */}
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
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0))",
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              letterSpacing: "2px",
              fontWeight: "600",
              color: "#FBC02D",
            }}
          >
            LIVE STATUS DASHBOARD
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
              color: "#fff",
            }}
          >
            Real-Time <br /> Drone Health & Activity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              maxWidth: "500px",
              fontSize: "1.1rem",
              marginBottom: "2rem",
              color: "#eaeaea",
            }}
          >
            Stay updated with each drone’s performance, battery, and flight
            connectivity to ensure uninterrupted operations.
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
            View Live Status
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default DroneStatus;
