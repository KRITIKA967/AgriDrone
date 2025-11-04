import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Leaf,
  Tractor,
  Droplet,
  Shield,
  Sprout,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Create navigation instance

  const colors = {
    primary: "#2E7D32", // main green
    accent: "#F9D976", // warm beige/yellow
    text: "#444",
    lightBg: "#F7F7F7",
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8" style={{ color: colors.primary }} />,
      title: "Organic Farming",
      desc: "Sustainable, eco-friendly practices to restore soil health and purity.",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
    },
    {
      icon: <Tractor className="w-8 h-8" style={{ color: colors.primary }} />,
      title: "Smart Machinery",
      desc: "AI-powered drones and equipment to maximize crop yield and minimize effort.",
      img: "https://cdn.pixabay.com/photo/2023/09/25/16/18/agriculture-8275498_1280.jpg",
    },
    {
      icon: <Droplet className="w-8 h-8" style={{ color: colors.primary }} />,
      title: "Irrigation Solutions",
      desc: "Water-efficient systems to ensure optimal hydration and sustainable use.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: colors.primary }} />,
      title: "Pest Protection",
      desc: "AI alerts for pest detection and natural prevention methods for safe crops.",
      img: "https://images.unsplash.com/photo-1578321272228-3f8d64f29511?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden" style={{ color: colors.text }}>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          scroll-behavior: smooth;
          background: #fff;
        }
        section {
          width: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 w-full shadow-sm z-50"
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div
            className="text-2xl font-bold flex items-center gap-2"
            style={{ color: colors.primary }}
          >
            <Sprout className="w-6 h-6" />
            AgriDrone
          </div>

          <nav className="hidden md:flex gap-10 font-medium items-center">
            {["About", "Features", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-700 transition"
                style={{ color: colors.primary }}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => navigate("/dashboard")} // ✅ Navigate to dashboard
            className="hidden md:block px-6 py-2 rounded-full font-semibold transition"
            style={{
              backgroundColor: colors.primary,
              color: "white",
            }}
          >
            Get Started
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ color: colors.primary }}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md w-full text-center py-4">
            {["About", "Features", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-lg font-medium"
                style={{ color: colors.primary }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative flex flex-col justify-center items-center text-center h-screen px-6"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuutX8HduKl2eiBeqSWo1VdXcOS9UxzsKhQ&s')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{
              color: "#e2ad0ee3",
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0)",
            }}
          >
            Transforming Agriculture with{" "}
            <span style={{ color: "#03030398" }}>Smart Drones</span>
          </h1>

          <p
            className="text-lg md:text-xl font-medium mb-10"
            style={{
              color: "#52d141ff",
              textShadow: "1px 1px 6px rgba(0, 0, 0, 0.01)",
            }}
          >
            Empowering farmers through technology, sustainability, and precision.
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => navigate("/dashboard")} // ✅ Navigate to dashboard
              className="font-semibold px-8 py-3 rounded-full transition shadow-md"
              style={{
                backgroundColor: colors.accent,
                color: colors.primary,
              }}
            >
              Get Started
            </button>
            <button
              className="border px-8 py-3 rounded-full transition shadow-md"
              style={{
                borderColor: colors.accent,
                color: "#fff",
              }}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-20 text-center"
        style={{ backgroundColor: colors.lightBg }}
      >
        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: colors.primary }}
        >
          Smart Farming Solutions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={f.img}
                alt={f.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <div className="mb-3 flex justify-center">{f.icon}</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colors.primary }}
                >
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 text-center"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, #256428)`,
          color: "white",
        }}
      >
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="max-w-xl mx-auto mb-8 text-gray-100">
          Let’s grow together! Contact us for partnership or demo requests.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-gray-800"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg text-gray-800"
          ></textarea>
          <button
            type="submit"
            className="font-semibold px-8 py-3 rounded-full transition"
            style={{
              backgroundColor: colors.accent,
              color: colors.primary,
            }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        className="text-center py-6 text-sm"
        style={{ backgroundColor: "#1B4D1B", color: "#E8F5E9" }}
      >
        © 2025 AgriDrone | Smart Farming for a Sustainable Tomorrow 🌿
      </footer>
    </div>
  );
};

export default LandingPage;
