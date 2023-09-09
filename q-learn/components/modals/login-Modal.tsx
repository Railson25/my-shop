'use client'


import { useCallback, useState } from "react"
import { useLoginModal } from "@/hooks/userLoginModal"
import { Modal } from "./Modal"
import { Heading } from "../Heading"
import { Input } from "../input"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "../button"
import {AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useRegisterModal } from "@/hooks/userRegisterModal"

export const LoginModal = () => {
    const [loading, setLoading] = useState(false)
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()



    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const toggle = useCallback(() => {
        loginModal.onClose()
        registerModal.onOpen()
    }, [loginModal, registerModal])


    const bodyContent = (
        <div className="flex flex-col gap-4 text-[#7253A4]">
            <Heading 
                title="Welcome Back"
                subtitle="Login to your account"
                center
            />
            <Input 
                id="email"
                label="Email"
                type="email"
                register={register}
                errors={errors}
            />
            <Input 
                id="password"
                label="Password"
                type="password"
                register={register}
                errors={errors}
            />
        </div>
    )

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button 
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button 
                outline
                label='Continue with Github'
                icon={AiFillGithub}
                onClick={() => {}}
            />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className=' justify-center flex flex-row items-center gap-6'>
                    <div>First time using QLearn?</div>
                    <div
                        onClick={toggle}
                        className='text-black font-bold cursor-pointer hover:underline'
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )    

    
    return(
        <Modal
            onSubmit={() => {}}
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            title="Login"
            body={bodyContent}
            footer={footerContent}
            actionLabel="Welcome back"
        />
    )
}