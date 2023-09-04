'use client'

import Image from "next/image"

export const Input = () => {
    return(
        <div className="bg-white flex flex-row py-2 px-6 w-[446px] justify-between rounded-[50px]">
            <input 
                className="font-normal leading-8 text-neutral-500 text-[20px] border-none focus:outline-none"
                placeholder="Search your favorite course"
            />
            <Image 
                src='/images/search-icon.svg'
                alt="Search icon"
                width={39}
                height={39}
            />
        </div>
    )
}