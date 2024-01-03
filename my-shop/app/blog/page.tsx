import { BlogContent } from "@/components/blog-content";

import { Header } from "@/components/header";

import { Newsletter } from "@/components/newsletter";

const Blog = () => {
  return (
    <div>
      <Header
        billboardId="b4ae5ee7-a248-41b0-92e4-25ec43cc4f20"
        h2Style="font-bold text-white"
        pStyle="text-white"
        className="h-[40vh] items-center p-[14px] "
      />

      <BlogContent />
      <Newsletter />
    </div>
  );
};

export default Blog;
