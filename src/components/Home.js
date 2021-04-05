import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 0.2, marginTop: 200 }}
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
