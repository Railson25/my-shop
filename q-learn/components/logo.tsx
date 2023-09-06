import { twMerge } from "tailwind-merge"
import { RiGraduationCapFill } from 'react-icons/ri'

interface LogoProps{
    className?: string
}

export const Logo = ({className}: LogoProps) => {
    return(
        <div className="flex items-center gap-x-3 hover:opacity-80">
            <RiGraduationCapFill className={twMerge("text-[#7253A4]", className)} size={55} />
            <span className={twMerge("font-bold text-3xl text-[#7253A4]", className)}>
                QLearn
            </span>
        </div>
    )
}