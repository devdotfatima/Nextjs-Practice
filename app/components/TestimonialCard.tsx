import React from "react";
type CardProps = {
  name: string;
  avatar: string;
  job: string;
  review: string;
};
const TestimonialCard = ({ avatar, name, job, review }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 w-full sm:w-full bg-white dark:bg-gray-300 dark:text-white  border-solid border-2 rounded-2xl">
      <div className=" flex flex-row gap-5">
        <div className="text-2xl bg-purple-300 dark:bg-gray-500 h-12 w-12 rounded-full text-white font-sans pl-4 pt-1">
          {avatar}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold font-mono text-slate-600  dark:text-gray-600 text-lg">
            {name}
          </h3>

          <h3 className="font-semibold text-slate-400 dark:text-gray-500 text-md">
            {job}
          </h3>
        </div>
      </div>

      <div className="font-sans text-slate-600 text-lg">{review}</div>
    </div>
  );
};

export default TestimonialCard;
