// src/pages/LoginPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <motion.div
      // animate background position to create a wave-like color transition
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{
        backgroundPosition: [
          "0% 50%",
          "50% 50%",
          "100% 50%",
          "50% 50%",
          "0% 50%",
        ],
      }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #654ea3 0%, #eaafc8 25%, #aa4b6b 50%, #6b6b83 75%, #3b8d99 100%)",
        backgroundSize: "300% 300%",
      }}
    >
      <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
