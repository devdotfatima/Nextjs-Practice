import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="m-8  flex flex-col gap-6 h-full  sm:p-10">
      <span className="text-2xl">✨</span>
      <h2 className="text-xl font-bold text-gray-600 sm:text-3xl sm:w-1/3">
        {" "}
        A technology-first approach to payments and finance
      </h2>
      <p className="text-mono text-lg text-slate-500 font-semibold sm:w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugit
        vel aut delectus, ducimus esse iusto repellendus doloremque hic,
        laboriosam dolor unde eos. hic, laboriosam dolor unde eos.
      </p>
      <div className=" flex flex-col sm:flex-row border-gray-200 border-2 rounded-3xl ">
        <FeatureCard
          icon="⏰"
          cardTitle="First Feature"
          description="
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          link="Read More"
        />
        <FeatureCard
          icon="⚓"
          cardTitle="Second Feature"
          description="
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          link="Read More"
        />{" "}
        <FeatureCard
          icon="🖋"
          cardTitle="Third Feature"
          description="
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          link="Read More"
        />{" "}
        <FeatureCard
          icon="🎓"
          cardTitle="More Features"
          description="
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
          link="Read More"
        />
      </div>
    </div>
  );
};

export default Features;
