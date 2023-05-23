import React from "react";
type CardProps = {
  icon: string;
  cardTitle: string;
  description: string;
  link: string;
};
const FeatureCard = ({ icon, cardTitle, description, link }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 sm:border-l border-b">
      <div className="text-5xl mt-7 mb-3">{icon}</div>
      <h3 className="font-bold font-mono text-slate-600 text-xl">
        {cardTitle}
      </h3>
      <div className="font-sans text-slate-600 text-xl">{description}</div>
      <div className="font-sans text-slate-500 text-xl">
        <a href="#">{link}</a>
      </div>
    </div>
  );
};

export default FeatureCard;
