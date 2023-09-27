import { AboutContent } from "@/components/about-content";

import { Feature } from "@/components/feature";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";

const About = () => {
  return (
    <div>
      <Header
        subtitle="#KnowUs"
        paragraph="Lorem ipsum dolor sit amet, consectetur"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="bg-[url('/images/about/banner.png')]  h-[40vh] items-center p-[14px] "
      />

      <AboutContent />

      <Feature />
      <Newsletter />
    </div>
  );
};

export default About;
