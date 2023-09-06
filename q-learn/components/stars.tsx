'use client'

import { useState } from "react"

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const Stars = () => {

    const [activeStar, setActiveStar] = useState(false)

    const toggleStarButton = () => {
        if(activeStar){
            setActiveStar(true)
        }
    }

    return(
        <div 
            onClick={toggleStarButton}
            className="cursor-pointer flex"
        >
            {activeStar ? <AiOutlineStar  size={30} className='cursor-pointer'/> : <AiFillStar className="text-yellow-400" size={30} />}
            {activeStar ? <AiOutlineStar  size={30} className='cursor-pointer'/> : <AiFillStar className="text-yellow-400" size={30} />}
            {activeStar ? <AiOutlineStar  size={30} className='cursor-pointer'/> : <AiFillStar className="text-yellow-400" size={30} />}
            {activeStar ? <AiOutlineStar  size={30} className='cursor-pointer'/> : <AiFillStar className="text-yellow-400" size={30} />}
            {!activeStar ? <AiOutlineStar  size={30} className='cursor-pointer'/> : <AiFillStar className="text-yellow-400" size={30} />}
                    
        </div>
    )
}