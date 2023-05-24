import React from "react";
type CardProps = {
  image: string;
  title: string;
  desc: string;
  link: string;
};
const BlogCard = ({ image, title, desc, link }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 w-full  sm:w-full bg-white dark:bg-gray-300 dark:text-white  border-solid border-2 rounded-2xl">
      <div className="text-2xl bg-purple-300 dark:bg-gray-500  h-48 w-full rounded text-white font-sans pl-4 pt-1">
        {image}
      </div>
      <h3 className="font-bold font-mono text-slate-600  dark:text-gray-600 text-lg">
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
