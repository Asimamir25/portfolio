"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:asimamir32@gmail.com?subject=${data.subject}&body= iam ${data.name}:${data.message} (${data.email})`;
  };

  return (
    <div className="relative flex flex-col items-center text-center pt-36 py-5 md:text-left md:flex-col max-w-8xl  justify-evenly space-y-5">
      <h3 className="  uppercase tracking-[20px] text-gray-500 text-2xl ">
        CONTACT Us
      </h3>
      <h4 className="text-2xl font-semibold text-center">
        I have got just what you need.{" "}
        <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
      </h4>
      <div className="flex flex-col space-y-10">
        <div className="space-y-5 px-10">
          <div className="flex gap-3 space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">03157221702</p>
          </div>
          <div className="flex gap-3 space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">asimamir32@gmail.com</p>
          </div>
          <div className="flex gap-3 space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-2xl">Lahore</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-x-0 space-y-2 md:space-x-2 md:space-y-0  md:flex-row">
            <input
              placeholder="Name"
              className="inputfield"
              type="text"
              {...register("name")}
            />
            <input
              placeholder="Email"
              className="inputfield"
              type="email"
              {...register("email")}
            />
          </div>
          <input
            placeholder="Subject"
            className="inputfield"
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            className="inputfield"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
