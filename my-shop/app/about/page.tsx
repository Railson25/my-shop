import { AboutContent } from "@/components/about-content";

import { Feature } from "@/components/feature";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";

const About = () => {
  return (
    <div>
      <Header
        billboardId="4ae06d21-91c0-49a1-850b-0a0bde426fa3"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="h-[40vh] items-center p-[14px] "
      />

      <AboutContent />

      <Feature />
      <Newsletter />
    </div>
  );
};

export default About;
