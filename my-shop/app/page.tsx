import { Banner } from "@/components/banner";
import { Feature } from "@/components/feature";
import { FeatureProductCard } from "@/components/feature-product-card";
import { FeatureProducts } from "@/components/feature-prudcts";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature />
      <FeatureProducts 
        title="Featured Products"
        subtitle="Summer Collection New Modern Design"
      >
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
      </FeatureProducts>
      <Banner />
      <FeatureProducts 
        title="New Arrivals"
        subtitle="Summer Collection New Modern Design"
      >
         <FeatureProductCard 
                    src='/images/arrivals/n1.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n2.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n3.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n4.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n5.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n6.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n7.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
                <FeatureProductCard 
                    src='/images/arrivals/n8.jpg'
                    brand="adidas"
                    name="Cartoon Astronaut T-Shirt"
                    price="$78"
                />
      </FeatureProducts>
    </div>
  )
}
