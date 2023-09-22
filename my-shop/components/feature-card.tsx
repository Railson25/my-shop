"use client";

import Image from "next/image";

import { twMerge } from "tailwind-merge";

interface FeatureCardProps {
  className?: string;
  label: string;
  src: string;
}

export const FeatureCard = ({ className, label, src }: FeatureCardProps) => {
  return (
    <div className="w-[180px] text-center py-[25px] px-[15px] shadow-md border border-[#cce7d0] rounded my-[15px] hover:shadow-xl hover:shadow-[70,62,221,0.1] max-[477px]:w-[155px] max-[477px]:mt-0 max-[477px]:mb-[15px] ">
      <Image
        alt="Card image"
        width={180}
        height={1}
        src={src}
        className="w-full mb-[10px]"
      />
      <h6
        className={twMerge(
          "pt-[9px] px-2 pb-[4px] inline-block text-[#088178] rounded bg-[#fddde4]",
          className
        )}
      >
        {label}
      </h6>
    </div>
  );
};
