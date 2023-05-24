import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div
      id="blog"
      className="p-10 mt-5  w-screen bg-white dark:bg-slate-700 dark:text-white "
    >
      <h3 className="text-3xl mt-5 font-bold text-center">Latest Articles</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pl-10 pr-10 mt-20">
        <BlogCard
          image="https://placehold.co/600x400/orange/white"
          title="Mobile Developer"
          desc="Dot Dot"
          link="Read More."
        />
        <BlogCard
          image="https://placehold.co/600x400/orange/white"
          title="Web Developer"
          desc="Dot Dot"
          link="Read More."
        />
        <BlogCard
          image="https://placehold.co/600x400/orange/white"
          title="Mobile Developer"
          desc="Dot Dot"
          link="Read More."
        />
        <BlogCard
          image="https://placehold.co/600x400/orange/white"
          title="Mobile Developer"
          desc="Dot Dot"
          link="Read More."
        />
        <BlogCard
          image="https://placehold.co/600x400/orange/white"
          title="Web Developer"
          desc="Dot Dot"
          link="Read More."
        />{" "}
        <BlogCard
          image="https://placehold.co/600x400/orange/white"
          title="Web Developer"
          desc="Dot Dot"
          link="Read More."
        />
      </div>
    </div>
  );
};

export default Blog;
