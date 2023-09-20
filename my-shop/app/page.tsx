"use client"

import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Feature } from "@/components/feature";
import { FeatureProductCard } from "@/components/feature-product-card";
import { FeatureProducts } from "@/components/feature-prudcts";
import { Footer, FooterColumn, FooterCopyright, FooterParagraph, FooterRow, FooterTitle, SocialMediaLinks } from "@/components/footer";
import { Header } from "@/components/header";
import { LogoIcon } from "@/components/icon/logo";
import { Information } from "@/components/information";
import { InformationCard } from "@/components/information-card";
import { LinkItem } from "@/components/link";
import { Newsletter } from "@/components/newsletter";
import Image from "next/image";
import Link from "next/link";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import {BiLogoFacebook, BiLogoPinterestAlt} from 'react-icons/bi'


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

      <Footer>

        <div>
            <Link
                href="/"
                className=" flex w-12 h-10 mb-2 object-contain"
            >
                <LogoIcon />
            </Link>

            <FooterTitle 
                title="Contact"
            />

            <FooterParagraph 
                paragraph="562 Wellington Road. Street 32, San Francisco"
                strong="Address:"
            />
            <FooterParagraph 
                paragraph="+01 2222 365 /(+91) 01 2345 6789"
                strong="Phone:"
            />
            <FooterParagraph 
                paragraph="10:00 - 18:00. Mon - Sat"
                strong="Hours:"
            />

            <SocialMediaLinks>
                <LinkItem 
                    src="/"
                    icon={BiLogoFacebook}
                    className="text-[#465b52]"
                />    
                <LinkItem 
                    src="/"
                    icon={AiOutlineTwitter}
                    className="text-[#465b52]"
                />    
                <LinkItem 
                    src="/"
                    icon={AiOutlineInstagram}
                    className="text-[#465b52]"
                />    
                <LinkItem 
                    src="/"
                    icon={BiLogoPinterestAlt}
                    className="text-[#465b52]"
                />    
                <LinkItem 
                    src="/"
                    icon={AiFillYoutube}
                    className="text-[#465b52]"
                />    
            </SocialMediaLinks> 
        </div>

        <FooterColumn>
            <FooterTitle 
                title="About"
            />

            <LinkItem 
                src="/"
                label="About us"
                footer
            />
            <LinkItem 
                src="/"
                label="Delivery Information"
                footer
            />
            <LinkItem 
                src="/"
                label="Privacy Policy"
                footer
            />
            <LinkItem 
                src="/"
                label="Terms & Conditions"
                footer
            />
            <LinkItem 
                src="/"
                label="Contact Us"
                footer
            />
        </FooterColumn>

        <FooterColumn>
            <FooterTitle 
                title="My Account"
            />

            <LinkItem 
                src="/"
                label="My Account"
                footer
            />
            <LinkItem 
                src="/"
                label="Sign In"
                footer
            />
            <LinkItem 
                src="/"
                label="View Cart"
                footer
            />
            <LinkItem 
                src="/"
                label="My Wishlist"
                footer
            />
            <LinkItem 
                src="/"
                label="Track My Order"
                footer
            />
            <LinkItem 
                src="/"
                label="Help"
                footer
            />
        </FooterColumn>

        <FooterColumn>
            <FooterTitle 
                title="Install App"
            />
            <FooterParagraph 
                paragraph="From App Store or Google Play"
            />

            <FooterRow>
                <Image 
                    src="/images/pay/app.jpg"
                    alt="Footer image"
                    width={1920}
                    height={1280}
                    className="w-[170px] h-12 border border-solid border-[#088178] rounded-[6px] object-cover"
                />
                <Image 
                    src="/images/pay/play.jpg"
                    alt="Footer image"
                    width={1920}
                    height={1280}
                    className="w-[170px] h-12 border border-solid border-[#088178] rounded-[6px] object-cover"
                />
            </FooterRow>

            <FooterParagraph 
                paragraph="Secured Payment Gateways"
            />  

            <Image 
                src="/images/pay/pay.png"
                alt="Footer image"
                width={1920}
                height={1280}
                className="w-[224px] h-8"
            />
        </FooterColumn>

        
      </Footer>
      <FooterCopyright />
    </div>
  )
}
