import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Gisty Chat!
        </h1>
        <p className="text-gray-600 mb-4">
          Connect with friends and start chatting instantly.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
