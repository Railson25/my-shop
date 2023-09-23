import { twMerge } from "tailwind-merge";

interface HeaderProps {
  title?: string;
  description?: string;
  subtitle?: string;
  paragraph?: string;
  textButton?: string;
  hasButton?: boolean;
  isHeader?: boolean;
  h2Style?: string;
  pStyle?: string;
  className?: string;
}

export const Header = ({
  hasButton,
  isHeader,
  title,
  description,
  paragraph,
  subtitle,
  textButton,
  h2Style,
  className,
  pStyle,
}: HeaderProps) => {
  return (
    <div
      className={twMerge(
        `bg-[url('/images/hero4.png')] w-full h-[90vh] max-md:h-[70vh] bg-cover bg-no-repeat px-20 flex flex-col justify-center items-start
      bg-positionLarge  max-md:bg-positionIpad max-[477px]:px-[20px]
      max-[477px]:bg-positionMobile`,
        className
      )}
    >
      {isHeader && <h4 className="p-4">{title}</h4>}

      <h2 className={twMerge(`max-[477px]:text-[32px]`, h2Style)}>
        {subtitle}{" "}
      </h2>

      {isHeader && (
        <h1 className="text-[#088178] font-bold max-[477px]:text-[38px]">
          {description}
        </h1>
      )}
      <p className={twMerge(``, pStyle)}>{paragraph}</p>

      {hasButton && (
        <button className="bg-[#088178] text-white  border-none py-[14px] pr-20 pl-[65px] bg-no-repeat font-bold rounded-full cursor-pointer">
          {textButton}
        </button>
      )}
    </div>
  );
};
