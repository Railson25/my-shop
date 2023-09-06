'use client'

import Image from "next/image"

interface CardCategoryProps{
    label: string
    description: string
    src: string
}


export const CardCategory = ({label, description, src}: CardCategoryProps) => {

    return(
        <div className="group w-96 h-64 px-11 rounded-[20px] shadow bg-opacity-10  hover:bg-[#7253a4] hover:text-white flex flex-col text-center items-center">
            <div className="p-5 w-[71px] bg-[#7253a4] rounded-full mb-3 mt-3 group-hover:bg-white">
                <Image 

                    src={src}
                    alt="Icon"
                    height={33}
                    width={33}
                />
            </div>
            <h3 className="text-[#07152F] text-[25px] leading-[31px] font-bold mb-[10px] group-hover:text-white">
                {label}
            </h3>
            <p className="text-[#6A6B6C] text-[16px] leading-[24px] font-medium group-hover:text-white">
                {description}  
            </p>
        </div>
    )
}