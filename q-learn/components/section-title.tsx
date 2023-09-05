"use client"

interface SectionTitleProps{
    title: string
    description: string
}

export const SectionTitle = ({title, description}: SectionTitleProps) => {
    return(
        <>
            <h2 className="text-[60px] font-bold leading-[75px] text-[#07152F;]">
                {title}
            </h2>
            <p className="w-[708px] text-[22px] leading-[33px] font-medium text-center mt-[18px]">
                {description}
            </p>
        </>
    )
}