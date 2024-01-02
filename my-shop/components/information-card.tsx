import getBillboard from "@/actions/get-billboard";

import { twMerge } from "tailwind-merge";

interface InformationCardProps {
  className?: string;
  children?: React.ReactNode;
  small?: boolean;
  sell?: string;
  billboardId: string;
}

export const InformationCard = async ({
  sell,
  small,

  className,
  billboardId,
  children,
}: InformationCardProps) => {
  const billboard = await getBillboard(billboardId!);

  return (
    <div
      className={twMerge(
        `group flex flex-col justify-center items-start  min-w-[580px] h-[50vh] bg-cover  bg-no-repeat bg-center p-[30px] max-md:min-w-full max-md:h-[30vh] 
      `,
        className
      )}
      style={{ backgroundImage: `url(${billboard.imageUrl})` }}
    >
      <h4 className="text-white text-[20px] font-light">{billboard.label}</h4>
      <h2
        className={twMerge(`text-white text-[28px] 
                    ${small ? "font-black" : "font-extrabold"}
                    ${small ? "text-[22px]" : "text-[28px]"}
                `)}
      >
        {billboard.subtitle}
      </h2>
      <h3 className="text-[#ec544e] font-extrabold text-[15px]">{sell}</h3>
      <span className="text-white text-[14px] font-medium pb-[15px]">
        {billboard.descriptionSeason}
      </span>
      {children}
    </div>
  );
};
