import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const DroneMonitoring = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f4f1e8",
      }}
    >
      {/* ===== NAVBAR ===== */}
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
            src="https://i.pinimg.com/736x/8c/37/44/8c3744ff2025fbffa4184cb8be6b4c5a.jpg"
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
          <h2 style={{ color: "#2E7D32", fontWeight: "700" }}>AgriDrone</h2>
        </div>

        {/* ===== NAVIGATION LINKS ===== */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {/* ✅ Home now navigates to Dashboard */}
          <a
            onClick={() => navigate("/dashboard")}
            style={{
              color: "#2E7D32",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Home
          </a>

          {/* Static section links */}
          {["About", "Features", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
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
          src="https://cdn.pixabay.com/photo/2019/05/15/11/24/dji-4204799_960_720.jpg"
          alt="Drone Monitoring"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            filter: "brightness(70%)",
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
            style={{ fontSize: "1.2rem", letterSpacing: "2px" }}
          >
            WELCOME TO AGRIDRONE
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
            Drone Monitoring <br /> & Performance Insights
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
            Track all active drones, analyze performance metrics, and ensure
            efficient field operations in real time.
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
            Discover More
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default DroneMonitoring;
