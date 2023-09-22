"use client";

export const Header = () => {
  return (
    <div
      className="bg-[url('/images/hero4.png')] w-full h-[90vh] max-md:h-[70vh] bg-cover bg-no-repeat px-20 flex flex-col justify-center items-start
      bg-positionLarge  max-md:bg-positionIpad max-[477px]:px-[20px]
      max-[477px]:bg-positionMobile
    "
    >
      <h4 className="p-4">Trade-in-offer</h4>
      <h2 className="max-[477px]:text-[32px]">Super value deals</h2>
      <h1 className="text-[#088178] font-bold max-[477px]:text-[38px]">
        On all products
      </h1>
      <p>Save more with coupons $ up to 70% off!</p>
      <button className="bg-[#088178] text-white  border-none py-[14px] pr-20 pl-[65px] bg-no-repeat font-bold rounded-full cursor-pointer">
        Shop Now
      </button>
    </div>
  );
};
