'use client'

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { useState } from "react"

interface StarProps{
    isActiveStar?: boolean
}

export const Stars = ({isActiveStar}: StarProps) => {
    const [activeStar, setActiveStar] = useState(0)
  
    const toggleStarButton = (value: number) => {
        setActiveStar(value)
        
    }
     
    return(
        <div 
            className="cursor-pointer flex"
        >
            {[1, 2, 3, 4, 5].map((value) => (
                <>
                    {  value <= activeStar
                        ?   
                            <span
                            key={value}
                            onClick={() => toggleStarButton(value)}
                            >
                                <AiFillStar size={30} className='text-yellow-400' />
                            </span>
                        :   
                            <span
                            key={value}
                            onClick={() => toggleStarButton(value)}
                            >
                                 <AiOutlineStar size={30} /> 
                            </span>
                    }
                    
                </>
            ))}

            {isActiveStar && (
                <>
                    <p className="pl-8 pr-2">
                        {activeStar}.0
                    </p>
                    <p> 
                        rating {activeStar}
                    </p>
                </>
            )}
        </div>
    )
}


