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
  const generatePages = () => {
    const pages: number[] = [];
    const pagesAroundCurrent = 1;

    const startPage = Math.max(2, pageNumber - pagesAroundCurrent);
    const endPage = Math.min(maxPage - 1, pageNumber + pagesAroundCurrent);

    for (let i = 1; i <= maxPage; i++) {
      if (i === 1 || i === maxPage || (i >= startPage && i <= endPage)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== -1) {
        pages.push(-1);
      }
    }

    return pages;
  };

  console.log(pageNumber);
  return (
    <div className="py-10 px-20 flex text-center justify-center gap-x-2 ">
      <Button
        pagination
        icon={BsArrowLeft}
        onClick={onPrev}
        disabled={pageNumber === 1}
      />
      {generatePages().map((page, index) =>
        page === -1 ? (
          <span key={index} className="flex items-end px-5">
            ...
          </span>
        ) : (
          <Button
            pagination
            onClick={() => onPage?.(page)}
            key={index}
            outline={page === pageNumber}
          >
            {page}
          </Button>
        )
      )}

      <Button
        pagination
        icon={BsArrowRight}
        onClick={onNext}
        disabled={pageNumber === maxPage}
      />
    </div>
  );
};
