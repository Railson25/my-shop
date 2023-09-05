import Image from "next/image"

interface TestimonialsCardProps{
    src: string
    title: string
    role?: string
    description: string
}

export const TestimonialsCard = ({description, title, role, src}: TestimonialsCardProps) => {
    return(
        <div className="w-[500px] h-[383px] rounded-[20px shadow-md px-6 pt-8 pb-[73px] rounded-[20px] hover:bg-[#7253A4] hover:text-white">
            <div className="flex gap-x-3">
                <Image 
                    className="border-[2px] object-cover rounded-full border-[#7253A4]"
                    alt="Student Image"
                    src={src}
                    width={61}
                    height={61}
                />
                <div>
                    <h2 className="text-[19px] leading-[29px] text-[#07152F] font-bold">
                        {title}
                    </h2>
                    <h3 className="text-[19px]  font-medium leading-[28px]">
                        {role}
                    </h3>
                </div>
            </div>
            <p className="my-[30px] text-[22px]  font-normal leading-[33px]">
                {description}
            </p>    
        </div>
    )
}