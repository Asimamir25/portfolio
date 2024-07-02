"use client";
import React, { useState } from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgriundCircle from "../backgroundCircle/BackgriundCircle";
import prfile from "../../assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import profile from "../../assets/profile.jpg";
type Props = {};

const Information = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "hii,THE NAME ASIM",
      "Love  to doing Devloping",
      "TEA+REPEAT+SLEEP",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-[600px] relative flex flex-col justify-center items-center space-y-8 text-center mt-20 ">
      <BackgriundCircle />
      <div className="relative w-40 h-40 mx-auto">
        <Image
          src={profile}
          alt="Profile picture"
          className="rounded-full object-cover "
          layout="fill"
        />
      </div>
      <div className="z-40">
        <h2 className="text-sm uppercase text-gray-500  tracking-[3px] pb-2 z-30">
          Softaware Engineer
        </h2>
        <h1 className="">
          <span className=" relative text-2xl lg:6xl font-semibold scroll-px-10">
            {text.toUpperCase()}
            <Cursor cursorColor="#f7ab0a" />
          </span>
        </h1>
        <div className="pt-2 relative z-20 ">
          <Link href="#about">
            <button className="btn">About</button>
          </Link>
          <Link href="#skill">
            <button className="btn">Experience</button>
          </Link>
          <button className="btn">Skill</button>
          <button className="btn">Contact</button>
          <a
            className="btn "
            href="resume/Asim's CV.pdf"
            download="proposed_file_name"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
