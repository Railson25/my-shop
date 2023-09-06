"use client"

import Image from "next/image"
import { ClientOnly } from "./client-only"
import { Button } from "./button"


export const Teachers = () => {
    return(
        <ClientOnly>
            <div className="group w-full py-56 px-40 group bg-gradient-to-r from-[#d6bdff] to-[#f4effd] flex gap-x-[356px] items-center">
                <div className="flex items-center bg-transparent">
                    <Image 
                        className="rounded-full object-cover w-[519px] h-[519px]"
                        src='/images/teacher-image-one.jpg'
                        alt="Estudante imagem"
                        width={519}
                        height={519}
                    />
                    <div className="rounded-full absolute left-[570px] w-[300px] h-[284px] flex items-center justify-center z-10 bg-gradient-to-r from-[#E1cefe] to-[#e9dcfd] ">
                        <Image 
                            className="rounded-full object-cover w-[270px] h-[264px] z-20"
                            src='/images/teacher-image-two.jpg'
                            alt="Estudante imagem"
                            width={270}
                            height={264}
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-[60px] leading-[75px] font-bold w-[726px] text-[#07152F]">
                        Take student experience to the next Level
                    </h2>
                    <p className="my-7 text-[22px] leading-[33px] w-[725px] font-medium text-[#6A6B6C]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    </p>
                    

                    <Button 
                        className='w-48 font-semibold hover:opacity-70 transition'
                        label="Learn More"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </ClientOnly>
    )
}