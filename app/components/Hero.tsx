import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col gap-8">
      <div className="bg-gradient-to-b from-indigo-100   ">
        <h1 className="p-4 mt-10 text-5xl font-bold mx-auto font-sans text-center ">
          Lorem ipsum dolor sit amet{" "}
          <span className="text-purple-500">Genmataotion.</span>
        </h1>
      </div>

      <p className=" mt-0 text-gray-700 text-1xl mx-auto font-sans text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        placeat quae quibusdam temporibus optio delectus iste, aut sunt? Rem
        maxime dolorum qui reiciendis eius porro nisi molestiae laudantium illum
        numquam.
      </p>
      <button className=" rounded-full bg-purple-700 p-2 mt-9 ml-3 mr-3 text-white font-bold">
        Get Started
      </button>
      <button className="rounded-full bg-purple-100 p-2 -mt-3  ml-3 mr-3 text-purple-700 ">
        Learn More
      </button>
      <div className=""></div>
    </div>
  );
};

export default Hero;
