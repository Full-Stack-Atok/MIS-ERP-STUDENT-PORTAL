// src/pages/RegisterPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Page-level fade/slide variants
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

// Card-level scale/fade variants
const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

export default function RegisterPage() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-tr from-[#ffefba] to-[#ffffff]"
      initial="initial"
      animate="animate"
      variants={pageVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-2xl"
        initial="initial"
        animate="animate"
        variants={cardVariants}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Registration Form
        </h1>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email Id</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 mb-1">Gender</label>
            <input
              type="text"
              placeholder="Gender"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="col-span-2 w-full py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
