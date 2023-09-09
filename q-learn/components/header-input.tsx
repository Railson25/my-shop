'use client'

import { SearchIncon } from "./icons/search-icon"

export const HeaderInput = () => {
    return(
        <div className="bg-white flex flex-row py-2 px-6 w-[446px] justify-between rounded-[50px]">
            <input 
                className="font-normal leading-8 text-neutral-500 text-[20px] border-none focus:outline-none"
                placeholder="Search your favorite course"
            />
            <div className="fill-text-neutral-500 w-9 h-9">
                <SearchIncon />
            </div>
        </div>
    )
}