"use client"

interface ButtonProps{
    label: string
    outline?: boolean 
    onClick: () => void
}

export const Button = ({label, outline, onClick}: ButtonProps) => {
    return(
        <button 
            className={`
                w-[153px] h-14 p-3 border-[2px] border-solid border-purple-900/75 
                rounded-s-2xl rounded-br-2xl text-2xl font-bold 
                ${outline ? 'bg-white': ' bg-purple-900'}
                ${outline ? 'text-neutral-500': 'text-white'}
            `}
        >
            {label}
        </button>
    )
}