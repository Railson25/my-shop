"use client";

import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";

import { FiMap } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

import { Input } from "./input";
import { useState } from "react";
import { Button } from "./button";
import { PeopleCard } from "./people-card";

const contactInformation = [
  {
    icon: <FiMap />,
    label: "56 Glassford Street Glasgow G1 1UL New York",
  },
  {
    icon: <AiOutlineMail />,
    label: "contact@example.com",
  },
  {
    icon: <BsFillTelephoneFill />,
    label: "contact@example.com",
  },
  {
    icon: <AiOutlineClockCircle />,
    label: "Monday to Saturday: 9.00am to 16.pm",
  },
];

export const ContactContent = () => {
  const [name, setName] = useState("");

  return (
    <div className="py-10 px-20 max-md:px-5">
      <div className="flex items-center gap-x-3 justify-between max-sm:flex-col max-md:gap-y-4">
        <div className="w-[40%] max-md:w-full">
          <span className="text-[12px]">GET IN TOUCH</span>
          <h2 className="text-[26px] leading-[35px] py-5">
            Visit one of our agency locations or contact us today.
          </h2>
          <h3 className="text-[16px] pb-[15px]">Head Office</h3>

          <ul>
            {contactInformation.map((link, index) => (
              <li key={index} className="flex py-[10px] gap-x-[22px]">
                <i className="text-[14px]">{link.icon}</i>
                <p className="m-0 text-[14px]">{link.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[55%] h-[400px] max-md:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbr!4v1695915629181!5m2!1sen!2sbr"
            width="600"
            height="450"
            className="border-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex justify-between m-[30px] p-20 border border-solid border-[#e1e1e1] gap-x-4 max-lg:p-10 max-md:p-5 max-md:mx-2 max-md:flex-wrap max-md:gap-y-8">
        <div className="w-[65%] flex items-start flex-col max-md:w-[100%]">
          <span className="text-[12px]">LEAVE A MESSAGE</span>
          <h2 className="text-[26px] leading-[35px] py-5">
            We love to hear from you
          </h2>
          <div className="flex flex-col gap-y-2 w-full mb-5">
            <Input
              id="name"
              label="Username"
              onChange={(e: any) => setName(e.target.value)}
              type="name"
              value={name}
            />
            <Input
              id="email"
              label="E-mail"
              onChange={(e: any) => setName(e.target.value)}
              type="email"
              value={name}
            />
            <Input
              id="subject"
              label="Subject"
              onChange={(e: any) => setName(e.target.value)}
              type="text"
              value={name}
            />
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your message"
            className="w-full py-3 px-[15px] outline-none mb-5 border border-solid border-[#e1e1e1e]"
          />
          <Button className="bg-[#088178] text-white hover:bg-white hover:text-[#088178] border border-solid border-[#088178]">
            Submit
          </Button>
        </div>

        <PeopleCard />
      </div>
    </div>
  );
};
