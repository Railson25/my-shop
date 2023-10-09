import { Product } from '@/mock/product'
import axios from 'axios'


import {useEffect, useState} from 'react'

interface Api {
    productsFeatured: Product[]
    productsArrivals: Product[]
  }


export function useProducts(){
    const [products, setProducts] = useState<Api>()

    const apiRoute = process.env.NEXT_PUBLIC_API as string
  

    useEffect(() => {
        axios.get(`${apiRoute}/products`)
        .then(res => {
          setProducts(res.data);
        })
        .catch(error => {
          console.error("Erro na requisição:", error);
        });
    },[])

    return(
        products
    )
}


