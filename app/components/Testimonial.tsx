import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="p-10 mt-5 h-fit w-screen bg-white dark:bg-slate-700 dark:text-white "
    >
      <h3 className="text-3xl mt-5 font-bold text-center">
        We have some fans.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:pl-10 md:pr-10 mt-20">
        <TestimonialCard
          avatar="A"
          job="Mobile Developer"
          name="Dot Dot"
          review="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem."
        />
        <TestimonialCard
          avatar="A"
          job="Web Developer"
          name="Dot Dot"
          review="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem. "
        />
        <TestimonialCard
          avatar="A"
          job="Mobile Developer"
          name="Dot Dot"
          review="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem."
        />
        <TestimonialCard
          avatar="A"
          job="Mobile Developer"
          name="Dot Dot"
          review="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem. 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quam officia necessitatibus voluptas unde ad sequi magnam ut, a autem."
        />
      </div>
    </div>
  );
};

export default Testimonial;
