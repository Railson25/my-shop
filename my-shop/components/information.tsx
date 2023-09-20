"use client"

import {twMerge} from 'tailwind-merge'

interface InformationProps {
    children: React.ReactNode
    className?: string
}

export const Information = ({children, className}: InformationProps) => {
    return(
        <div className={twMerge(`py-10 px-20 flex  justify-between flex-wrap bg-white`, className)}>
           {children}
        </div>
    )
}