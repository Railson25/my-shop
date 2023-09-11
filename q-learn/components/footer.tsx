"use client"

import { AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import { FaFacebookF} from 'react-icons/fa'
import { RiGraduationCapFill } from 'react-icons/ri'

import { Links } from './link'
import { Logo } from './logo'

export const Footer = () => {
    return(
        <div className="flex flex-col bg-[#7253A4] w-full  items-center px-20 sm:px-40 pt-[137px]">
            <div className="flex flex-col md:flex-row w-full justify-center md:justify-evenly md:gap-x-14">
                <div className="grow-[2] flex flex-col items-start mb-6 md:mb-0">
                    <Logo 
                        className='text-white'
                    />
                    <h2 className='mt-4 mb-4 text-[25px] text-white leading-[31px] font-medium'>
                        Follow on social service
                    </h2>
                    <div className='flex gap-x-6 md:mb-5'>
                        <div className='cursor-pointer w-[34px] h-[34px] bg-[#40839D] rounded-full flex items-end justify-center'>
                            <FaFacebookF size={26} className='text-white' />
                        </div>
                        <div className='cursor-pointer w-[34px] h-[34px] bg-[#40839D] rounded-full flex items-center justify-center'>
                            <AiOutlineInstagram size={26} className='text-white rounded-full'/>
                        </div>
                        <div className='cursor-pointer w-[34px] h-[34px] bg-[#40839D] rounded-full flex items-center justify-center object-fill'>
                            <AiOutlineTwitter size={26} className='text-white rounded-full'/>
                        </div>
                    </div>
                </div>
                <Links 
                    title='Links'
                    page='Home'
                    service='Help center'
                    contact='Service'
                />
                <Links 
                    title='Resource'
                    page='About Us'
                    service='Carrier'
                    contact='Legal Notice'
                />
                <Links 
                    title='Contacts'
                    page='192. New york'
                    service='Support'
                    contact='+1125156363'
                />
            </div>
            <hr className='w-[1050px] border '/>
            <p className='pt-[30px] pb-[54px] text-white text-[20px] leading-[30px] font-normal'>
                Copyright 2023@ all right
            </p>
        </div>
    )
}