import React from "react";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  desc: string;
  link: string;
};
const BlogCard = ({ image, title, desc, link }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 p-4 sm:p-6 w-full  sm:w-full bg-white dark:bg-gray-300 dark:text-white  border-solid border-2 rounded-2xl ">
      <img src={`/${image}`} alt={title} className="h-3/4 w-5/4 rounded " />

      <h3 className="font-bold font-mono text-slate-600 mt-3 sm:mt-3 dark:text-gray-600 text-lg">
        {title}
      </h3>

      <h3 className="font-semibold text-slate-400 dark:text-gray-500 text-md">
        {desc}
      </h3>

      <div className="font-sans text-blue-500 dark:text-slate-600 text-lg">
        {link}
      </div>
    </div>
  );
};

export default BlogCard;
