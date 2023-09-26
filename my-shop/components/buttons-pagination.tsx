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

  return (
    <div className="py-10 px-20 flex text-center justify-center gap-x-2 max-[477px]:px-3  ">
      <Button
        pagination
        icon={BsArrowLeft}
        onClick={onPrev}
        disabled={pageNumber === 1}
        className="max-sm:px-1 max-sm:py-2"
      />
      {generatePages().map((page, index) =>
        page === -1 ? (
          <span
            key={index}
            className="flex items-end px-5 max-sm:px-2 max-sm:py-2"
          >
            ...
          </span>
        ) : (
          <Button
            pagination
            onClick={() => onPage?.(page)}
            key={index}
            outline={page === pageNumber}
            className="max-sm:px-2 max-sm:py-2"
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
        className="max-sm:px-1 max-sm:py-2"
      />
    </div>
  );
};
