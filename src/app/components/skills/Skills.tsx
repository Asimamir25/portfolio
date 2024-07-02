"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};

const Skills = ({ directionLeft }: Props) => {
  return (
    <div className="relative flex group  cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YE2GVhm_mJWiHhEj2kTvWlSGaHGEeBiinA&s"
        className="w-20 h-20 object-cover rounded-full border border-gray-500 md:h-28 md:w-28 xl:w-32 xl:h-32   filter  group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24  md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className=" text-2xl font-bold opacity-100 text-black">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
