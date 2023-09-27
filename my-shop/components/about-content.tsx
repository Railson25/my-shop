import Image from "next/image";
import { LinkItem } from "./link";

export const AboutContent = () => {
  return (
    <div className="py-10 px-20 max-md:px-2">
      <div className=" flex items-center gap-x-[40px] w-full max-sm:flex-col">
        <Image
          src="/images/about/a6.jpg"
          alt="Image"
          width={1024}
          height={720}
          className="w-[50%] h-auto max-sm:w-full max-sm:mb-5"
        />
        <div className="w-full overflow-hidden">
          <h2 className="max-md:text-[30px] text-center">Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quia unde reiciendis rem impedit officia dolores, cum, fuga illo
            nesciunt doloribus nobis eius, magni eum quasi est nam ratione
            <abbr title="">
              Create stunning images with as much or as little control as you
              like, thanks to a choice of Basic and Creative modes.
            </abbr>
          </p>
          <br />
          <div className="bg-neutral-400 w-full text-black overflow-hidden flex">
            <div className="whitespace-nowrap max-w-full inline-block overflow-hidden animate-marquee">
              Create stunning images with as much or as little control as you
              like, thanks to a choice of Basic and Creative modes.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-10">
        <h1>
          Download Our
          <LinkItem
            src="#"
            label="App"
            className="p-3 font-bold underline text-purple-800 hover:text-purple-400 "
          />
        </h1>
        <div className="w-[70%] h-full mt-[30px] mx-auto mb-0 max-sm:w-full">
          <video
            autoPlay
            muted
            loop
            src="/images/about/1.mp4"
            className="w-full h-full rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};
