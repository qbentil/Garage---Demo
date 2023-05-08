// import React from 'react'

import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

// import { Logo } from "../Assets";


const MobileNav = ({ isOpen, setIsOpen }) => {

  return (
    <div className="flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden ">
      <motion.div className="flex items-center justify-between w-screen h-24  px-10">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"

        >
          {/* <MdShoppingBasket className="text-4xl cursor-pointer" /> */}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdClose className="text-headingColor text-4xl" />
        </motion.div>
      </motion.div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <a
          onClick={() => setIsOpen(!isOpen)}
          href={"/"}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Product
        </a>
        <a
          onClick={() => setIsOpen(!isOpen)}
          href={"services"}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          About Us
        </a>
        <a
          onClick={() => setIsOpen(!isOpen)}
          href={"/"}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Pricing
        </a>
        <a
          onClick={() => setIsOpen(!isOpen)}
          href={"/"}
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Team
        </a>
        <p
          className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10"
        >
          Contact Us
        </p>
      </div>

      <a
        href={"/"}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center  justify-center w-full"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* <img src={} alt="Logo" className="w-16 object-cover" /> */}
          <p className="text-headingColor text-3xl font-bold">Garage</p>
        </motion.div>
      </a>
    </div>
  );
};

export default MobileNav;
