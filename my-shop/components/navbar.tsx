"use client"

import Link from "next/link"

import {AiOutlineShopping} from "react-icons/ai"
import { LogoIcon } from "./icon/logo"
import { LinkItem } from "./link"

export const Navbar = () => {


    return(
        <div className="flex items-center justify-between bg-[#d6daec] px-20 py-5 sticky top-0 left-0 z-[999] shadow-lg">
            <Link
                href="/"
                className="w-12 h-10 "
            >
                <LogoIcon />
            </Link>

            <div>
                <nav className="flex items-center justify-center gap-x-5 font-semibold text-[16px]">
                   <LinkItem 
                        src="/"
                        label="Home"
                        active
                   />
                   <LinkItem 
                        src="/"
                        label="Shop"
                   />
                   <LinkItem 
                        src="/"
                        label="Blog"
                   />
                   <LinkItem 
                        src="/"
                        label="About"
                   />
                   <LinkItem 
                        src="/"
                        label="Contact"
                   />

                    <LinkItem 
                        src="/"
                        icon={AiOutlineShopping}
                    />
                </nav>
            </div>
        </div>
    )
}