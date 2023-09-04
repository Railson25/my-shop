"use client"

import {twMerge} from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label: string
    outline?: boolean 
}

export const Button = ({label, outline, onClick, className}: ButtonProps) => {
    return(
        <button 
            className={twMerge(`w-[153px] h-14 p-3 border-[2px] border-solid border-purple-900/75 rounded-s-2xl rounded-br-2xl text-2xl font-bold 
            ${outline ? 'bg-white': ' bg-purple-900'}
            ${outline ? 'text-neutral-500': 'text-white'}
            `, 
            className)}
        >
            {label}
        </button>
    )
}
