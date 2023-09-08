"use client"

interface HeadingProps {
    title: string
    subtitle?: string
    center?: boolean
}

export const Heading = ({title, center, subtitle}: HeadingProps) => {
    return(
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light mt-2 text-neutral-400">
                {subtitle}
            </div>
        </div>
    )
}