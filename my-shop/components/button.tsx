"use client"

import {twMerge} from "tailwind-merge"

interface ButtonProps {
    className?: string
    label: string
    banner?: boolean
}

export const Button = ({label, className, banner}: ButtonProps) => {
    return(
        <button 
            className={twMerge(`font-semibold cursor-pointer outline-none transition
                ${banner ? 'text-[13px]' : 'text-[14px]'}
                ${banner ? 'py-[11px]' : 'py-[15px]'}
                ${banner ? 'px-[18px]' : 'px-[30px]'}
                ${banner ? 'text-white' : 'text-black'}
                ${banner ? 'border' : 'border-none'}
                ${banner ? 'rounded-none' : 'rounded'}
                ${banner ? 'bg-transparent' : 'bg-white'}
                ${banner ? 'group-hover:bg-[#088178]' : ''}
                ${banner ? 'group-hover:border-[#088178]' : ''}
                ${banner ? 'border-solid' : 'border-none'}
                ${banner ? 'border-white' : ''}
            `, className)}
        >
            {label}
        </button>
    )
}