"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "../skills/Skills";
type Props = {};

const Skill = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 8.2 }}
        className="pb-10 flex relative flex-col text-center md:text-left xl:flex-col max-width-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center mt-10 mb-4">
          Skilll
        </h3>
        <h3 className="  uppercase tracking-[3px] text-center  text-gray-500 text-sm  ">
          hover over a skill to check profiecency
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-20 px-1">
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
      </motion.div>
    </>
  );
};

export default Skill;
