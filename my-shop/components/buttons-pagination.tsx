"use client";

import React from "react";
import { Button } from "./button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface ButtonsPaginationProps {
  onNext: () => void;
  onPrev: () => void;
  onPage?: (pageNumber: number) => void;
  pageNumber: number;
  maxPage: number;
  goToInitialPage: () => void;
  goToLastPage: () => void;
}

export const ButtonsPagination = ({
  onPrev,
  onNext,
  onPage,
  pageNumber,
  maxPage,
  goToInitialPage,
  goToLastPage,
}: ButtonsPaginationProps) => {
  return (
    <div className="py-10 px-20 flex text-center justify-center gap-x-2 ">
      {pageNumber !== 1 ? (
        <Button pagination icon={BsArrowLeft} onClick={onPrev} />
      ) : (
        <></>
      )}
      <Button pagination onClick={goToInitialPage} outline>
        {pageNumber}
      </Button>

      <Button pagination onClick={() => onPage?.(pageNumber)}>
        {pageNumber !== maxPage ? pageNumber + 1 : pageNumber}
      </Button>

      <span className="flex items-end px-5">...</span>

      <Button pagination onClick={goToLastPage}>
        {pageNumber !== maxPage ? pageNumber + 1 : pageNumber}
      </Button>

      <Button pagination icon={BsArrowRight} onClick={onNext} />
    </div>
  );
};
