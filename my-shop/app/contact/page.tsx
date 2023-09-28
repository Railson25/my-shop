import { ContactContent } from "@/components/contact-content";
import { Header } from "@/components/header";
import { Newsletter } from "@/components/newsletter";

const Contact = () => {
  return (
    <div>
      <Header
        subtitle="#let's_talk"
        paragraph="LEAVE A MESSAGE, We love to hear from you"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="bg-[url('/images/about/banner.png')]  h-[40vh] items-center p-[14px] "
      />
      <ContactContent />
      <Newsletter />
    </div>
  );
};

export default Contact;
