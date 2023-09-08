"use client"

import {IconType} from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    outline?: boolean
    small?: boolean
    icon?: IconType
    className?: string
}


export const Button = ({
    label,
    onClick,
    disabled,
    icon : Icon,
    outline,
    small,
    className
}: ButtonProps) => {
    return(
       <button
            onClick={onClick}
            disabled={disabled}
            className={ twMerge(`
                relative disabled:opacity-70 disabled:cursor-pointer rounded-s-2xl rounded-br-2xl hover:opacity-80 transition w-full 
                ${outline ? 'bg-white' : 'bg-[#7253A4] '} 
                ${outline ? 'border-[#7253A4]' : 'bg-[#7253A4]'} 
                ${outline ? 'text-[#7253A4]' : 'text-white'}
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
       `, className)}>
        {Icon && (
            <Icon 
                size={24}
                className='absolute left-4 top-3'
            />
        )}
        {label}
       </button>
    )
} 