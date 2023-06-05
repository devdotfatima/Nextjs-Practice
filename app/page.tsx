import { Suspense } from "react";
import Blog from "./components/Blog";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import ReposPage from "./repos/page";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-700 dark:text-white text-black ">
      <Hero />
      <Features />
      <Testimonial />
      <GetStarted />
      <Blog />
      <Suspense fallback={<div>Loading ....</div>}>
        <ReposPage />
      </Suspense>
    </div>
  );
};

export default HomePage;
