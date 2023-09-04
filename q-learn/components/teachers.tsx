"use client"

import Image from "next/image"
import { ClientOnly } from "./client-only"
import { Button } from "./button"


export const Teachers = () => {
    return(
        <ClientOnly>
            <div className=" w-full py-56 px-40 bg-gradient-to-r from-purple-300 to-purple-50 flex gap-x-[356px] items-center">
                <div className="flex items-center">
                    <Image 
                        className="rounded-full object-contain"
                        src='/images/teacher-image-one.png'
                        alt="Estudante imagem"
                        width={519}
                        height={519}
                    />
                    <Image 
                        className="rounded-full object-contain absolute left-[570px]"
                        src='/images/teacher-image-two.png'
                        alt="Estudante imagem"
                        width={300}
                        height={284}
                    />
                </div>
                <div>
                    <h2 className="text-[60px] leading-[75px] font-bold w-[726px]">
                        Take student experience to the next Level
                    </h2>
                    <p className="my-7 text-[22px] leading-[33px] w-[725px] font-medium">
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