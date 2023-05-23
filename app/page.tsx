import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

const HomePage = async () => {
  return (
    <div className="min-h-screen dark:bg-white text-black ">
      <Hero />
      <Features />
      <Testimonial />
    </div>
  );
};

export default HomePage;
