
import {useEffect, useState} from 'react'

export function useDebounce<T>(value: T, delay?: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    },[value, delay])

    return debounceValue
}

// essa funcao e para esperar  500 mili segundos apos o usuario para de digitar no input  para que seja feita uma busca no banco de dados ! evitando assim o overflow