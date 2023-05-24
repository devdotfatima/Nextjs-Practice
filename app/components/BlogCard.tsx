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
    <div className="flex flex-col gap-4 p-6 w-full  sm:w-full bg-white dark:bg-gray-300 dark:text-white  border-solid border-2 rounded-2xl">
      <div className="text-2xl h-48 w-full rounded text-white font-sans ">
        <Image
          src={`${image}+.png?text=${title}`}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>

      <h3 className="font-bold font-mono text-slate-600 mt-12 sm:mt-0  dark:text-gray-600 text-lg">
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
