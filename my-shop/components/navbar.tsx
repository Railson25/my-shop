"use client";

import Link from "next/link";

import {
  AiOutlineClose,
  AiOutlineMenuFold,
  AiOutlineShopping,
} from "react-icons/ai";
import { LogoIcon } from "./icon/logo";
import { LinkItem } from "./link";
import { useState } from "react";

const menuItems = [
  {
    src: "/",
    label: "Home",
  },
  {
    src: "/shop",
    label: "Shop",
  },
  {
    src: "/blog",
    label: "Blog",
  },
  {
    src: "/about",
    label: "About",
  },
  {
    src: "/contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [currentActive, setCurrentActive] = useState("Home");

  const toggleOpen = () => {
    setShowNavbar(true);
  };

  const toggleClose = () => {
    setShowNavbar(false);
  };

  return (
    <div className="flex items-center justify-between bg-[#d6daec] px-20 py-5 sticky top-0 left-0 z-[999] shadow-lg max-[477px]:py-[10px] max-[477px]:px-[30px]">
      <Link
        href="/"
        className="w-12 h-10"
        onClick={() => setCurrentActive("Home")}
      >
        <LogoIcon />
      </Link>

      <div>
        <nav
          className={`flex items-center justify-center gap-x-5 font-semibold text-[16px] max-md:flex-col max-md:items-start max-md:justify-start max-md:fixed max-md:top-0  max-md:h-[100vh] max-md:w-[300px] max-md:bg-[#e3e6f3] max-md:shadow-2xl max-md:pt-20 max-md:pl-[30px] max-md:gap-y-[25px] max-md:transition max-md:z-10
                ${!showNavbar ? "max-md:right-[-300px]" : "max-md:right-0"}
            `}
        >
          {menuItems.map((item) => (
            <LinkItem
              key={item.label}
              src={item.src}
              label={item.label}
              active={currentActive === item.label}
              onClick={() => setCurrentActive(item.label)}
            />
          ))}

          <LinkItem
            src="/cart"
            icon={AiOutlineShopping}
            className="max-md:hidden"
            onClick={() => setCurrentActive("")}
          />
          <LinkItem
            onClick={toggleClose}
            src="#"
            icon={AiOutlineClose}
            className="absolute top-[30px] left-[30px] md:hidden"
          />
        </nav>
      </div>
      <div className="hidden gap-x-[20px] items-center max-md:flex">
        <LinkItem src="#" icon={AiOutlineShopping} />
        <LinkItem src="#" icon={AiOutlineMenuFold} onClick={toggleOpen} />
      </div>
    </div>
  );
};
