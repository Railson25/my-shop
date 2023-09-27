import { BlogContent } from "@/components/blog-content";

import { Header } from "@/components/header";

import { Newsletter } from "@/components/newsletter";

const Blog = () => {
  return (
    <div>
      <Header
        subtitle="#readmore"
        paragraph="Real all case studies our products"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="bg-[url('/images/banner/b19.jpg')]  h-[40vh] items-center p-[14px] "
      />

      <BlogContent />
      <Newsletter />
    </div>
  );
};

export default Blog;
