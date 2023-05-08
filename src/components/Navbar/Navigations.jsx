// import React from 'react'

import { motion } from "framer-motion";

const Navigations = ({ direction }) => {

  return (
    <div className="flex items-center gap-8">
      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={`flex items-center gap-8 ${direction && direction}`}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-sky-600 duration-100 transition-all ease-in-out"
        >
          <a href="#">Products</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-sky-600 duration-100 transition-all ease-in-out"
        >
          <a href="#">About Us</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-sky-600 duration-100 transition-all ease-in-out"
        >
          <a href={'/services'}>Pricing</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-sky-600 duration-100 transition-all ease-in-out"
        >
          <a href={'/about'}>Team</a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-sky-600 duration-100 transition-all ease-in-out"
        >
          Contact us
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navigations;
