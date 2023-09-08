import {create} from 'zustand'

interface useLoginModalProps{
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLoginModal = create<useLoginModalProps>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))