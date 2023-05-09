import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="p-4 bg-primary sm:p-6 w-full">
      <div className="flex justify-center md:justify-start items-center">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          className="mb-3 md:mb-0"
        >
          <a href="/" className="flex gap-8 items-center">
            {/* <motion.img
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              src={Logo}
              className="w-10 md:w-36 object-contain"
              alt="Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-headingColor">
              Garage
            </span>
          </a>
        </motion.div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022 Garage™. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:text-xl">
          <motion.a
            whileTap={{ scale: 1.1 }}
            rel="noreferrer"
            href="#"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsDribbble />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            rel="noreferrer"
            href="#"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            rel="noreferrer"
            href="#"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            rel="noreferrer"
            href="#"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsTwitter />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            rel="noreferrer"
            href="#"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            rel="noreferrer"
            href="#"
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsFacebook />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
