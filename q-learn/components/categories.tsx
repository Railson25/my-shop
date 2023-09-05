"use client"

import { CardCategory } from "./card-category"
import { ClientOnly } from "./client-only"
import { SectionTitle } from "./section-title"

export const Categories = () => {
    return(
        <ClientOnly>
            <div className="w-full flex flex-col items-center justify-center py-28" >
                <SectionTitle 
                    title="Popular Categories"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th"
                />
                
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
        </ClientOnly>
    )
}