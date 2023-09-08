"use client"


import { useLoginModal } from "@/hooks/userLoginModal"
import { Button } from "./button"
import { Logo } from "./logo"
import { useRegisterModal } from "@/hooks/userRegisterModal"

export const Navbar = () => {

    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    return(
        <div className="h-20 bg-white w-full text-neutral-700 py-5 flex flex-row justify-around">
            <Logo />
            <div className="flex items-center text-neutral-400 gap-x-12 text-2xl">
                <p className="cursor-pointer hover:text-[#7253A4] hover:font-bold transition">
                    Home
                </p>
                <p className="cursor-pointer hover:text-[#7253A4] hover:font-bold transition">
                    Teachers
                </p>
                <p className="cursor-pointer hover:text-[#7253A4] hover:font-bold transition">
                    Course
                </p>
                <p className="cursor-pointer hover:text-[#7253A4] hover:font-bold transition">
                    testimonials
                </p>
            </div>
            <div className="flex items-center gap-x-4">
                <Button 
                    label="Sign up"
                    outline
                    onClick={registerModal.onOpen}
                    className="hover:bg-[#7253A4] hover:text-white w-[153px]"
                />
                <Button 
                    label="Log in"
                    onClick={loginModal.onOpen}
                    className="hover:text-[#7253A4] hover:border-[#7253A4] hover:bg-white w-[153px]"
                />
            </div>
        </div>
    )
}