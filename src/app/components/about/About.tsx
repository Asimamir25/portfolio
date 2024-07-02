"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../assets/profile.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col justify-center relative text-center">
      <h1 className="text-center py-20 text-gray-500 tracking-[20px] uppercase">
        About
      </h1>
      <div className="flex flex-col p-4 text-center justify-center items-center gap-7 md:flex-row  md:text-left ">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          <div className="w-24 h-24 rounded-full object-cover relative md:w-80 md:h-80 md:rounded-sm">
            <Image
              src={profile}
              alt="Profile picture"
              className=" rounded-full md:rounded-md object-cover"
              layout="fill"
            />
          </div>
        </motion.div>
        <div>
          <h1 className="pb-7 font-bold">
            Her is <span className="underline colo"> Littel </span> Background
          </h1>
          <div className=" w-full md:w-[400px]">
            <p className=" w-full  font-sm  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              cumque ducimus veniam, magni voluptatem ut repellendus omnis?
              Ipsum assumenda repellendus mollitia dicta impedit, molestiae
              veniam cum dignissimos quia, deserunt dolore! Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Rerum corrupti, inventore
              impedit ducimus aliquam sequi nobis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
