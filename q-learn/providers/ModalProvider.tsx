"use client"

import { LoginModal } from "@/components/modals/login-Modal"
import { RegisterModal } from "@/components/modals/register-Modal"

export const ModalProvider = () => {


    return(
        <>
            <LoginModal />
            <RegisterModal />
        </>
    )
}