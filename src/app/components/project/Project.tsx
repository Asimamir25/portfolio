"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  const project = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className="text-center  text-2xl py-20 text-gray-500 tracking-[20px] uppercase">
        Project
      </h1>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" h-screen   relative  flex   pb-10 flex-col text-left md:flex-row max-w-full justify-evenly mx-auto  z-0 items-center py-10"
      >
        <div className="relative flex  w-full overflow-x-scroll scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#f7ab0a]/80 overflow-y-hidden snap-x snap-mandatory  z-20">
          {project.map((item, i) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center py-14 px-5 md:p-40   h-screen">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://thewebsitesurgery.co.uk/wp-content/uploads/2023/04/laptop-and-mobile-nvc.png"
                alt=""
                className="w-[270px] h-[375px]"
              />
              <div className="space-y-2 md:space-y-5 px-0 max-w-6xl ">
                <h4 className=" text-lg md:text-3xl font-semibold text-left md:text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    {" "}
                    Case Study
                  </span>{" "}
                  {i + 1} of {6} Ups Clone
                </h4>
                <p className="text-xs md:text-sm lg:text-xl text-left md:text-center pb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo consequuntur laboriosam pariatur magnam, deserunt
                  asperiores corrupti quisquam voluptas voluptatem quam
                  consequatur laborum ratione, numquam ut, odit error doloribus
                  obcaecati dolor?
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#f7AB0A]/10 left-0 h-[270px]  absolute top-[30%] -skew-y-12" />
      </motion.div>
    </>
  );
};

export default Project;
