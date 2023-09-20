import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Feature } from "@/components/feature";
import { FeatureProductCard } from "@/components/feature-product-card";
import { FeatureProducts } from "@/components/feature-prudcts";
import { Header } from "@/components/header";
import { Information } from "@/components/information";
import { InformationCard } from "@/components/information-card";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <div className="bg-white">
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

      <Information
        className="justify-center gap-x-3 gap-y-3"
      >
      <InformationCard
                title="crazy deals"
                subtitle="buy 1 get 1 free"
                description="The best classic dress is on sale at Less"
            >
                <Button 
                    label="Learn more"
                    banner
                />
            </InformationCard>
            <InformationCard
                title="spring/summer"
                subtitle="upcoming season "
                description="The best classic dress is on sale at Less"
                className="bg-[url('/images/banner/b10.jpg')]"
            >
                <Button 
                    label="Collection"
                    banner
                />
            </InformationCard>
      </Information>

      <Information
        className="py-0"
      >
      <InformationCard
            subtitle="SEASONAL SALE "
            sell="Winter Collection -50% OFF"
            small
            className="bg-[url('/images/banner/b7.jpg')] min-w-[30%] h-[30vh] p-5 mb-5"
        />
      <InformationCard
            subtitle="SEASONAL SALE "
            sell="Winter Collection -50% OFF"
            small
            className="bg-[url('/images/banner/b4.jpg')] min-w-[30%] h-[30vh] p-5 mb-5"
        />
      <InformationCard
            subtitle="SEASONAL SALE "
            sell="Winter Collection -50% OFF"
            small
            className="bg-[url('/images/banner/b18.jpg')] min-w-[30%] h-[30vh] p-5 mb-5"
        />
      </Information>
      <Newsletter />
    </div>
  )
}
