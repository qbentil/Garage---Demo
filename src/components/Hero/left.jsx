import React from "react";
import { motion } from "framer-motion";

// import { BikeDelivery } from "../Assets";

const Left = () => {
  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-sky-100 px-4 py-1 rounded-full">
        <p className="text-base text-sky-500 font-bold">Garage</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={"BikeDelivery"}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        The largest auto tech platform in
        <span className="text-sky-600 text-[2.5rem] lg:text-[4.6rem]">
          {" "}
          Africa
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Garage is an auto tech platform that connects fleet owners to
        maintenance services and affordable parts. We are building the largest
        auto tech platform to increase access to affordable, functioning and
        eco-friendly vehicles in Africa. We are focused on differentiating
        ourselves through deep data operations and community driven growth.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-sky-400 to-sky-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Contact Us
      </motion.button>
    </div>
  );
};

export default Left;
