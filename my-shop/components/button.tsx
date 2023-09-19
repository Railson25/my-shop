"use client"

import {twMerge} from "tailwind-merge"

interface ButtonProps {
    className?: string
    label: string
}

export const Button = ({label, className}: ButtonProps) => {
    return(
        <button 
            className={twMerge("text-[14px] font-semibold py-[15px] px-[30px] text-black bg-white rounded cursor-pointer border-none outline-none transition", className)}
        >
            {label}
        </button>
    )
}