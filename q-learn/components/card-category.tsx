'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

interface CardCategoryProps{
    label: string
    description: string
    src: string
}


export const CardCategory = ({label, description, src}: CardCategoryProps) => {

    const [isHover, setIsHover] = useState(false)

  

    return(
        <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="w-96 h-64 px-11 rounded-[20px] shadow bg-opacity-10  hover:bg-[#7253a4] hover:text-white flex flex-col text-center items-center "
        
        >
            <div className="p-5 w-[71px] bg-[#7253a4] rounded-full mb-3 mt-3 hover:bg-white">
                <Image 

                    src={src}
                    alt="Icon"
                    height={33}
                    width={33}
                />
            </div>
            <h3 className="text-[25px] leading-[31px] font-bold mb-[10px]">
                {label}
            </h3>
            <p className="text-[16px] leading-[24px] font-medium">
                {description}  
            </p>
        </div>
    )
}