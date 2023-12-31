"use client";

interface FooterProps {
  children?: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <div className="py-10 px-20 flex flex-wrap justify-between max-[477px]:p-[20px]">
      {children}
    </div>
  );
};

interface FooterTitleProps {
  title: string;
}

export const FooterTitle = ({ title }: FooterTitleProps) => {
  return (
    <>
      <h4 className="text-[14px] pb-5 font-bold">{title}</h4>
    </>
  );
};

interface FooterParagraphProps {
  text: string;
  strong?: string;
}

export const FooterParagraph = ({ text, strong }: FooterParagraphProps) => {
  return (
    <>
      <p className="text-[13px] m-0 mb-2">
        <strong>{strong}</strong>
        {text}
      </p>
    </>
  );
};

interface SocialMediaLinksProps {
  children?: React.ReactNode;
}

export const SocialMediaLinks = ({ children }: SocialMediaLinksProps) => {
  return (
    <div className="mt-5">
      <h4>Follow us</h4>
      <div className="flex gap-x-1 cursor-pointer my-5">{children}</div>
    </div>
  );
};

interface FooterColumnProps {
  children?: React.ReactNode;
}

export const FooterColumn = ({ children }: FooterColumnProps) => {
  return <div className="flex flex-col items-start mb-5">{children}</div>;
};

interface FooterRowProps {
  children?: React.ReactNode;
}

export const FooterRow = ({ children }: FooterRowProps) => {
  return (
    <div className="flex gap-x-1 mt-[10px] mx-0 mb-[15px] max-[477px]:flex-col max-[477px]:gap-y-1">
      {children}
    </div>
  );
};

export const FooterCopyright = () => {
  return (
    <div className="w-full text-center max-[477px]:text-start">
      <FooterParagraph text=" 2023. Railson Santiago - NextJs Ecommerce Template" />
    </div>
  );
};
