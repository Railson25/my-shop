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

  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        `font-semibold cursor-pointer outline-none transition
                ${banner ? "text-[13px]" : "text-[14px]"}
                ${banner ? "py-[11px]" : "py-[15px]"}
                ${banner ? "px-[18px]" : "px-[30px]"}
                ${banner ? "text-white" : "text-black"}
                ${banner ? "border" : "border-none"}
                ${banner ? "rounded-none" : "rounded"}
                ${banner ? "bg-transparent" : "bg-white"}
                ${banner ? "group-hover:bg-[#088178]" : ""}
                ${banner ? "group-hover:border-[#088178]" : ""}
                ${banner ? "border-solid" : "border-none"}
                ${banner ? "border-white" : ""}
                ${pagination ? "bg-[#088175]" : ""}
                ${pagination ? "py-[15px]" : ""}
                ${pagination ? "px-[20px]" : ""}
                ${pagination ? "text-white" : ""}
                ${pagination ? "rounded" : ""}
                ${pagination ? "font-semibold" : ""}
                ${
                  pagination
                    ? "hover:bg-white  border border-solid border-[#088175]"
                    : ""
                }
                ${pagination ? "hover:text-neutral-700" : ""}
                ${outline ? "bg-white" : ""}
                ${outline ? "text-[#088175]" : ""}
            `,
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
