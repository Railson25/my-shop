import { Button } from "./button";

export const Newsletter = () => {
  return (
    <div className="flex justify-between items-center flex-wrap bg-[url('/images/banner/b14.png')] bg-no-repeat bg-[20%] bg-[#041e42]  py-10 px-20 my-10 max-[477px]:py-[40px]  max-[477px]:px-[20px]">
      <div>
        <h4 className="text-[22px] font-bold text-white">
          Sing Up For Newsletters
        </h4>
        <p className="text-[14px] font-semibold text-[#818ea0]">
          Get E-mail updates about our latest shop and
          <span className="text-[#ffbd27] pl-2">special offers.</span>
        </p>
      </div>
      <div className="flex w-[40%] max-md:w-[70%] max-[477px]:w-full">
        <input
          className="h-[3.125rem] px-[1.25em] text-[14px] w-full border border-solid border-transparent rounded outline-none rounded-e-none"
          type="text"
          placeholder="Your email address"
        />
        <Button
          label="Sign up"
          className="bg-[#088178] text-white whitespace-nowrap rounded-s-none"
        />
      </div>
    </div>
  );
};
