import { ContactContent } from "@/components/contact-content";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";

const Contact = () => {
  return (
    <div>
      <Header
        billboardId="d810a1b1-e4da-45ad-96cf-ecd7f979ad71"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="h-[40vh] items-center p-[14px] "
      />
      <ContactContent />
      <Newsletter />
    </div>
  );
};

export default Contact;
