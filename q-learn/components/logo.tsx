import { twMerge } from "tailwind-merge"
import { RiGraduationCapFill } from 'react-icons/ri'

interface LogoProps{
    className?: string
}

export const Logo = ({className}: LogoProps) => {
    return(
        <div className="flex items-center gap-x-3 hover:opacity-80">
            <RiGraduationCapFill className={twMerge("text-[#7253A4] w-[30px] h-[30px] md:w-[44px] sm:h-[44px]", className)} />
            <span className={twMerge("font-bold text-[15px] leading-4 text-[#7253A4] sm:text-2xl ", className)}>
                QLearn
            </span> 
        </div>
    )
}