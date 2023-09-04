"use client"

import Image from "next/image"
import { Button } from "./button"

export const Navbar = () => {
    return(
        <div className="h-20 bg-white w-full text-neutral-700 py-5 flex flex-row justify-around">
            <div className="flex items-center gap-x-3">
                <Image 
                    alt="Logo"
                    src='/images/logo.png'
                    width='55'
                    height='55'
                />
                <span className="font-bold text-3xl text-purple-900/75 hover:opacity-80">
                    QLearn
                </span>
            </div>
            <div className="flex items-center text-neutral-400 gap-x-12 text-2xl">
                <p className="cursor-pointer hover:text-purple-900/75 hover:font-bold transition">
                    Home
                </p>
                <p className="cursor-pointer hover:text-purple-900/75 hover:font-bold transition">
                    Teachers
                </p>
                <p className="cursor-pointer hover:text-purple-900/75 hover:font-bold transition">
                    Course
                </p>
                <p className="cursor-pointer hover:text-purple-900/75 hover:font-bold transition">
                    testimonials
                </p>
            </div>
            <div className="flex items-center gap-x-4">
                <Button 
                    label="Sign up"
                    outline
                    onClick={() =>{}}
                />
                <Button 
                    label="Log in"
                    onClick={() =>{}}
                />
            </div>
        </div>
    )
}