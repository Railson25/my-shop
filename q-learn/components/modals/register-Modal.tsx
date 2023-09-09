"use client"

import { useCallback, useState } from "react"
import { Modal } from "./Modal"
import { Button } from "../button"
import {AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { Heading } from "../Heading"
import { Input } from "../input"
import { FieldValues, useForm } from "react-hook-form"
import { useRegisterModal } from "@/hooks/userRegisterModal"
import { useLoginModal } from "@/hooks/userLoginModal"

export const RegisterModal = () => {
    const [loading, setLoading] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const toggle = useCallback(() => {
        registerModal.onClose()
        loginModal.onOpen()
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className='flex flex-col gap-4 text-[#7253A4]'>
                <Heading 
                    title='Welcome to QLearn'
                    subtitle='Create an account'
                    center
                />
                <Input 
                    id='email'
                    label='Email'
                    type='email'
                    disabled={loading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='name'
                    label='Name'
                    disabled={loading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='password'
                    label='Password'
                    type='password'
                    disabled={loading}
                    register={register}
                    errors={errors}
                    required
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
                <div className=' justify-center flex flex-row items-center gap-4'>
                    <div>Already have an account?</div>
                    <div
                        onClick={toggle}
                        className='text-black font-bold cursor-pointer hover:underline'
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <Modal 
        disabled={loading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        onSubmit={() => {}}
        body={bodyContent}
        footer={footerContent}
    /> 
    )
}