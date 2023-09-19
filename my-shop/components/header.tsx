"use client"

export const Header = () => {
    return(
        <div className="bg-[url('/images/hero4.png')] w-full h-[90vh] bg-cover bg-right-top bg-no-repeat px-20 flex flex-col justify-center items-start">
            <h4 className="p-4">
                Trade-in-offer
            </h4>
            <h2>
                Super value deals
            </h2>
            <h1 className="text-[#088178] font-bold">
                On all products
            </h1>
            <p>
                Save more with coupons $ up to 70% off!
            </p>
            <button className="bg-[url('/images/button.jpg')] bg-transparent border-none py-[14px] pr-20 pl-[65px] bg-no-repeat font-bold rounded-full cursor-pointer">
                Shop Now
            </button>
        </div>
    )
}
