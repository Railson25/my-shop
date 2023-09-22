"use client";

import { FeatureCard } from "./feature-card";

export const Feature = () => {
  return (
    <div className="py-10 px-20 bg-white flex items-center justify-between flex-wrap max-md:justify-center max-md:gap-x-[15px] max-md:px-10 max-[477px]:p-[20px]">
      <FeatureCard src="/images/f1.png" label="Free Shipping" />
      <FeatureCard
        className="bg-[#cdebbc]"
        src="/images/f2.png"
        label="Online Order"
      />
      <FeatureCard
        className="bg-[#d1e8f2]"
        src="/images/f3.png"
        label="Save Money"
      />
      <FeatureCard
        className="bg-[#cdd4f8]"
        src="/images/f4.png"
        label="Promotions"
      />
      <FeatureCard
        className="bg-[#f6dbf6]"
        src="/images/f5.png"
        label="Happy Sell"
      />
      <FeatureCard
        className="bg-[#fff2e5]"
        src="/images/f6.png"
        label="F24/7 Support"
      />
    </div>
  );
};
