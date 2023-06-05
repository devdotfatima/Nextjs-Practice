import React from "react";

const GetStarted = () => {
  return (
    <div className="  dark:from-gray-800 w-screen pt-20 pb-20 h bg-white dark:bg-slate-700 dark:text-white ">
      <div>
        <div
          id="getstarted"
          className="bg-gradient-to-t from-indigo-100 dark:from-gray-800"
        >
          <div className="mt-10 justify-center flex -space-x-2 overflow-hidden">
            <div className="text-2xl bg-purple-300 dark:bg-gray-500 h-12 w-12 rounded-full text-white font-sans pl-4 pt-1">
              A
            </div>
            <div className="text-2xl bg-purple-300 dark:bg-gray-500 h-12 w-12 rounded-full text-white font-sans pl-4 pt-1">
              B
            </div>
            <div className="text-2xl bg-purple-300 dark:bg-gray-500 h-12 w-12 rounded-full text-white font-sans pl-4 pt-1 ">
              C
            </div>
            <div className="text-2xl bg-purple-300 dark:bg-gray-500 h-12 w-12 rounded-full text-white font-sans pl-4 pt-1">
              A
            </div>
            <div className="text-2xl bg-purple-300 dark:bg-gray-500 h-12 w-12 rounded-full text-white font-sans pl-4 pt-1">
              B
            </div>
          </div>
          <div className="mt-5 flex justify-center space-x-2 text-base">
            <h4 className="font-bold text-3xl font-sans text-slate-900">
              Get Started Now
            </h4>
          </div>
          <div className="mt-3 text-slate-500 dark:text-gray-300 text-center ml-10 mr-10  text-lg font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </div>
        </div>
        <div className="bg-gradient-to-b pb-20 pt-20 from-indigo-100 dark:from-gray-800">
          <div className="  flex flex-col  gap-3 ml-10 mr-10 sm:flex sm:flex-row sm:justify-center">
            <button className="sm:w-1/6 rounded-full bg-purple-700 p-2 ml-3 mr-3 text-white font-bold">
              Get Started
            </button>
            <button className=" sm:w-1/6 rounded-full bg-white p-2 sm:p-0  ml-3 mr-3 font-bold text-purple-700 ">
              Learn More
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default GetStarted;
