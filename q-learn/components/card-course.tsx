"use client"

import Image from "next/image"
import { Button } from "./button"
import { Stars } from "./stars"

interface CardCourseProps{
    title: string
    rating: string
    note: string
    src: string
    price: number
}

export const CardCourse = ({note, rating, src, title, price}: CardCourseProps) => {

     
    return(
        <div className="w-[419px] h-[505px] rounded-3xl shadow-lg flex items-center flex-col relative mt-[77px]">
            <Image 
                src={src}
                alt="Course image"
                width={419}
                height={250}            
            />
            <h2 className="text-[25px] leading-[30px] font-bold text-[#07152F] text-center mt-[35px] mb-[10px] px-[35px]">
                {title}
            </h2>
            <div className="flex items-center  justify-center  rounded-full w-[61px] h-[61px] bg-[#7253a4] absolute right-[10px] top-[213px]">
                <p className="p-[18px] text-[20px] leading-25px font-bold text-white"> 
                    ${price}
                </p>
            </div>
            <div className="flex items-center w-[333px]">
                <Stars />
                <p className="pl-8 pr-2">
                    {note}
                </p>
                <p>({rating})</p>
            </div>
            <Button 
                onClick={() => {}}
                label="Add to Cart"
                outline
                className="w-[347px] mt-[40px] mb-[27px] hover:text-white hover:bg-[#7253A4]"
            />
        </div>
    )
}