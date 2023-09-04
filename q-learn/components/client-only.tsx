"use client"

import { useEffect, useState } from "react"

export const ClientOnly = ({children}: {children: React.ReactNode}) => {
    const [mounted, setMounteed ] = useState(false)

    useEffect(() => {
        setMounteed(true)
    }, [])

    if(!mounted){
        return
    }

    return(
        <>
            {children}
        </>
    )
}