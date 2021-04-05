import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const buttonVariants = {
  hover: {
    scale: [1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: '0px 0px 8px 0px rgb(255,255,255)',
    boxShadow: '0px 0px 8px 0px rgb(255,255,255)',
  },
};
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
