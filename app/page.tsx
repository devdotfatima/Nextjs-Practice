import Blog from "./components/Blog";
import Features from "./components/Features";
import { GetSarted } from "./components/GetSarted";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

const HomePage = async () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-700 dark:text-white text-black ">
      <Hero />
      <Features />
      <Testimonial />
      <GetSarted />
      <Blog />
    </div>
  );
};

export default HomePage;
