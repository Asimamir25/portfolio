"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto  z-20 p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          url="https://linkedin.com/in/couetilc"
          bgColor="transparent"
          fgColor="gray"

          // style={{ width: "50px" }}
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://facebook.com/in/couetilc"
          bgColor="transparent"
          fgColor="gray"
        />{" "}
        <SocialIcon
          url="https://youtube.com/in/couetilc"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center text-gray-500 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bgColor="transparent"
          fgColor="gray"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
