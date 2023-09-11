import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface LinksProps{
    className?: string
    title: string
    page: string
    service: string
    contact: string

}

export const Links = ({className, contact, service, title, page}: LinksProps) => {
    return(
        <div className={twMerge("grow flex flex-col items-start mb-[90px] md:mb-[168px] ", className)}>
            <h1 className="text-white text-[30px] leading-[37px] font-bold pb-3">
                {title}
            </h1>
            <Link href="/" className="text-white text-[20px] leading-[30px] font-normal pb-9">
                {page}
            </Link>
            <Link href="/" className="text-white text-[20px] leading-[30px] font-normal pb-6">
                {service}
            </Link>
            <Link href="/" className="text-white text-[20px] leading-[30px] font-normal">
                {contact}
            </Link>
        </div>
    )
}