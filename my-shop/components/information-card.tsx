"use client";

import { twMerge } from "tailwind-merge";

interface InformationCardProps {
  title?: string;
  subtitle: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  small?: boolean;
  sell?: string;
}

export const InformationCard = ({
  sell,
  small,
  description,
  subtitle,
  title,
  className,
  children,
}: InformationCardProps) => {
  return (
    <div
      className={twMerge(
        `group flex flex-col justify-center items-start  min-w-[580px] h-[50vh] bg-cover bg-no-repeat bg-center p-[30px] bg-[url('/images/banner/b17.jpg')]  max-md:min-w-full max-md:h-[30vh] 
    
        `,
        className
      )}
    >
      <h4 className="text-white text-[20px] font-light">{title}</h4>
      <h2
        className={twMerge(`text-white text-[28px] 
                    ${small ? "font-black" : "font-extrabold"}
                    ${small ? "text-[22px]" : "text-[28px]"}
                `)}
      >
        {subtitle}
      </h2>
      <h3 className="text-[#ec544e] font-extrabold text-[15px]">{sell}</h3>
      <span className="text-white text-[14px] font-medium pb-[15px]">
        {description}
      </span>
      {children}
    </div>
  );
};
