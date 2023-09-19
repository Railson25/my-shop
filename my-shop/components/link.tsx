"use client"

import Link from "next/link"
import { IconType } from "react-icons"
import {twMerge} from 'tailwind-merge'

interface LinkProps {
    active?: boolean
    label?: string
    src: string
    icon?: IconType
    className?: string
}

export const LinkItem = ({active, label, src, icon:Icon, className}: LinkProps) => {
    return(
        <Link 
            href={src}
            className={twMerge(
                `hover:text-[#088175]  transition relative 
                    ${active  ? "text-[#088175]" : "text-[#1a1a1a]" }
                    ${active  
                        ? "after:w-[30%] after:h-[2px] after:bg-[#088175] after:absolute after:-bottom-1 after:left-1" 
                        : "" 
                    }`, className
                )
            }  
        > 
            {label}
            {Icon && (
                <Icon 
                    size={22}
                />
            )}
        </Link>
    )
}
