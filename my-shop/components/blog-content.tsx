"use client";

import Image from "next/image";
import { LinkItem } from "./link";

import { usePagination } from "@/hook/usePagination";
import { ButtonsPagination } from "./buttons-pagination";

import getBlogs from "@/actions/get-blogs";
import { useEffect, useState } from "react";
import { Blog } from "@/types/types";

export const BlogContent = () => {
  const [newBlogs, setNewBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getBlogs();

        setNewBlogs(blogs);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar blogs", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const {
    currentData,
    nextPage,
    backPage,
    currentPage,
    goToPage,
    maxPage,
    goToInitialPage,
    goToLastPage,
  } = usePagination(newBlogs, 4);

  return (
    <div className="px-[150px] pt-[150px] flex flex-col gap-y-[90px] max-md:px-5 max-[477px]:pt-[100px] ">
      {currentData().map((blog: Blog) => (
        <div
          key={blog.id}
          className="flex items-center w-full relative max-[477px]:flex-col max-[477px]:items-start"
        >
          <div className="w-[50%] mr-10 z-10 max-[477px]:w-full max-[477px]:mr-0 max-[477px]:mb-7">
            <Image
              alt="Image"
              src={blog.imageUrl}
              width={1024}
              height={720}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="w-[50%] max-[477px]:w-full ">
            <h4>{blog.title} </h4>
            <p>{blog.description}</p>
            <LinkItem
              src="#"
              label="CONTINUE READING"
              className="group relative  text-black text-[11px] font-bold after:w-[50px] after:h-[1px] after:bg-black after:absolute after:top-2 after:right-[-60px] after:hover:bg-[#088175]"
            />
          </div>
          <h1 className="absolute top-[-40px] left-0 text-[70px] font-bold text-[#c9cbce]">
            {blog.date}
          </h1>
        </div>
      ))}
      <ButtonsPagination
        onNext={nextPage}
        onPrev={backPage}
        pageNumber={currentPage}
        onPage={goToPage}
        maxPage={maxPage}
        goToInitialPage={goToInitialPage}
        goToLastPage={goToLastPage}
      />
    </div>
  );
};
