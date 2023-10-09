import { CategoriesType, Product } from '@/mock/product'
import axios from 'axios'

import {useEffect, useState} from 'react'

interface Api {
    productsFeatured: Product[]
    productsArrivals: Product[]
  }

export function useProducts(){
    const [products, setProducts] = useState<Api>()

    useEffect(() => {
        axios.get("http://localhost:3000/api/products")
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


