"use client";

import { LinkItem } from "./link";

import { BsArrowRight } from "react-icons/bs";

interface ButtonsPaginationProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const ButtonsPagination = ({
  children,
  onClick,
}: ButtonsPaginationProps) => {
  return (
    <div className="py-10 px-20 flex text-center justify-center gap-x-2 ">
      <LinkItem src="/" label="1" pagination onClick={onClick} />
      <LinkItem src="/" label="2" pagination onClick={onClick} />
      <LinkItem src="/" icon={BsArrowRight} pagination onClick={onClick} />
    </div>
  );
};
