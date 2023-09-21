"use client";

import { LinkItem } from "@/components/link";
import { LogoIcon } from "@/components/icon/logo";
import {
  Footer,
  FooterColumn,
  FooterCopyright,
  FooterParagraph,
  FooterRow,
  FooterTitle,
  SocialMediaLinks,
} from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";

export const Footermounted = () => {
  return (
    <>
      <Footer>
        <div>
          <Link href="/" className=" flex w-12 h-10 mb-2 object-contain">
            <LogoIcon />
          </Link>

          <FooterTitle title="Contact" />

          <FooterParagraph
            text="562 Wellington Road. Street 32, San Francisco"
            strong="Address:"
          />
          <FooterParagraph
            text="+01 2222 365 /(+91) 01 2345 6789"
            strong="Phone:"
          />
          <FooterParagraph text="10:00 - 18:00. Mon - Sat" strong="Hours:" />

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
            <LinkItem src="/" icon={AiFillYoutube} className="text-[#465b52]" />
          </SocialMediaLinks>
        </div>

        <FooterColumn>
          <FooterTitle title="About" />

          <LinkItem src="/" label="About us" footer />
          <LinkItem src="/" label="Delivery Information" footer />
          <LinkItem src="/" label="Privacy Policy" footer />
          <LinkItem src="/" label="Terms & Conditions" footer />
          <LinkItem src="/" label="Contact Us" footer />
        </FooterColumn>

        <FooterColumn>
          <FooterTitle title="My Account" />

          <LinkItem src="/" label="My Account" footer />
          <LinkItem src="/" label="Sign In" footer />
          <LinkItem src="/" label="View Cart" footer />
          <LinkItem src="/" label="My Wishlist" footer />
          <LinkItem src="/" label="Track My Order" footer />
          <LinkItem src="/" label="Help" footer />
        </FooterColumn>

        <FooterColumn>
          <FooterTitle title="Install App" />
          <FooterParagraph text="From App Store or Google Play" />

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

          <FooterParagraph text="Secured Payment Gateways" />

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
    </>
  );
};
