import { Dispatch, SetStateAction, useState } from "react";

interface UsePaginationResult<T> {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
  currentData: () => T[];
  nextPage: () => void;
  backPage: () => void;
  goToPage: (pageNumber: number) => void;
  goToInitialPage: () => void;
  goToLastPage: () => void;
}

export function usePagination<T>(
  data: T[],
  itemPerPage: number
): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return data.slice(begin, end);
  }

  function nextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  }

  function backPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  function goToPage(pageNumber: number) {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), maxPage));
  }

  function goToInitialPage() {
    setCurrentPage(1);
  }
  function goToLastPage() {
    setCurrentPage(maxPage);
  }

  return {
    currentPage,
    setCurrentPage,
    maxPage,
    currentData,
    nextPage,
    backPage,
    goToPage,
    goToInitialPage,
    goToLastPage,
  };
}
