"use client";

import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  banner?: boolean;
  pagination?: boolean;
  icon?: IconType;
  onClick?: () => void;
  children?: React.ReactNode;
  outline?: boolean;
  disabled?: boolean;
}

export const Button = ({
  label,
  className,
  banner,
  icon: Icon,
  onClick,
  pagination,
  children,
  outline,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "font-semibold cursor-pointer outline-none transition",
        banner
          ? "text-[13px] py-[11px] px-[18px] text-white border rounded-none bg-transparent border-solid border-white"
          : "text-[14px] py-[15px] px-[30px] text-black border-none rounded bg-white",
        banner ? "group-hover:bg-[#088178] group-hover:border-[#088178]" : "",
        pagination
          ? "bg-[#088175] py-[15px] px-[20px] text-white rounded font-semibold"
          : "",
        pagination
          ? "hover:bg-white border border-solid border-[#088175] hover:text-neutral-700"
          : "",
        outline ? "bg-white text-[#088175]" : "",
        disabled
          ? "opacity-30 cursor-not-allowed hover:bg-[#088178] text-white"
          : "",
        className
      )}
      onClick={onClick}
    >
      {label}
      {children}
      {Icon && <Icon size={22} />}
    </button>
  );
};
