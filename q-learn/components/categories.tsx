"use client"

import { CardCategory } from "./card-category"
import { ClientOnly } from "./client-only"
import { SectionTitle } from "./section-title"

export const Categories = () => {
    return(
        <ClientOnly>
            <div className="w-full flex flex-col items-center py-16 justify-center xl:py-28  lg:py-22 md:py-18" >
                <SectionTitle 
                    title="Popular Categories"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th"
                />
                
                <div className="mt-14  gap-x-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <CardCategory 
                        src="design"
                        label="Web Design"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                    />
                    <CardCategory 
                        src="web"
                        label="Web Development"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                    />
                    <CardCategory 
                        src="marketing"
                        label="Marketing"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                    />
                    <CardCategory 
                        src="data"
                        label="Data Entry"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"
                    />
                </div>
            </div>
        </ClientOnly>
    )
}