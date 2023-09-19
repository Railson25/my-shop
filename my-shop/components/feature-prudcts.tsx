"use client"

import { FeatureProductCard } from "./feature-product-card"


export const FeatureProducts = () => {
    return(
        <div className="py-10 px-20 text-center bg-white">
            <h1>
                Featured Products
            </h1>
            <p>
                Summer Collection New Modern Design
            </p>

            <div className="flex justify-between pt-5 flex-wrap">
                <FeatureProductCard 
                    src='/images/products/f1.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f2.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f3.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f4.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f5.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f6.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f7.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/products/f8.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
            </div>
        </div>
    )
}