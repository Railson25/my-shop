"use client"

import { CardCategory } from "./card-category"

export const Categories = () => {
    return(
        <div className="w-full flex flex-col items-center justify-center py-28" >
            <h2 className="text-[60px] leading-[75px] font-bold mb-2">Popular Categories</h2>
            <p className="text-center text-2xl font-medium max-w-[708px] text-[#6A6B6C]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th </p>

            <div className="flex flex-row mt-14 px-40 gap-x-7 ">
                <CardCategory 
                    src="/images/web-design.svg"
                    label="Web Design"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                />
                <CardCategory 
                    src="/images/web-development.svg"
                    label="Web Development"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                />
                <CardCategory 
                    src="/images/marketing.svg"
                    label="Marketing"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                />
                <CardCategory 
                    src="/images/data-entry.svg"
                    label="Data Entry"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                />
            </div>
        </div>
    )
}