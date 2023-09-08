'use client'

import { DataEntryIcon } from "./icons/data-entry"
import { MarketingIcon } from "./icons/marketing"
import { WebDesignIcon } from "./icons/web-design"
import { WebDevelopmentIcon } from "./icons/web-development"

type SrcType = 'data' | 'marketing' | 'design' | 'web'

interface CardCategoryProps{
    label: string
    description: string
    src?: SrcType
}

//Utilizando o Record para tipar chave e valor ! a chave é uma string e o valor é o component
const IconsBySrc: Record<SrcType, () => JSX.Element> = {
    data: DataEntryIcon,
    marketing: MarketingIcon,
    design: WebDesignIcon,
    web: WebDevelopmentIcon
}

//DEfinindo que o tipo default é do tipo que definimos .
const DEFAULT_ICON: SrcType = 'data' 


export const CardCategory = ({label, description, src}: CardCategoryProps) => {

    let Icon = IconsBySrc[src?? DEFAULT_ICON]

    return(
        <div className="group w-96 h-64 px-11 rounded-[20px] shadow bg-opacity-10  hover:bg-[#7253a4] hover:text-white flex flex-col text-center items-center">
            <div className="p-5 w-[71px] rounded-full mb-3 mt-3 bg-[#7253a4] fill-white  group-hover:bg-white group-hover:fill-[#7253a4]">
                <Icon />
            </div>
            <h3 className="text-[#07152F] text-[25px] leading-[31px] font-bold mb-[10px] group-hover:text-white">
                {label}
            </h3>
            <p className="text-[#6A6B6C] text-[16px] leading-[24px] font-medium group-hover:text-white">
                {description}  
            </p>
        </div>
    )
}