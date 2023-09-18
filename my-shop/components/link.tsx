"use client"

import Link from "next/link"
import { IconType } from "react-icons"

interface LinkProps {
    active?: boolean
    label?: string
    src: string
    icon?: IconType
}

export const LinkItem = ({active, label, src, icon:Icon}: LinkProps) => {
    return(
        <Link 
            href={src}
            className={`hover:text-[#088175]  transition relative 
                ${active  ? "text-[#088175]" : "text-[#1a1a1a]" }
                ${active  
                    ? "after:w-[30%] after:h-[2px] after:bg-[#088175] after:absolute after:-bottom-1 after:left-1" 
                    : "" 
                }`
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
