import Features from "./components/Features";
import Hero from "./components/Hero";

const HomePage = async () => {
  return (
    <div className="min-h-screen dark:bg-white text-black ">
      <Hero />
      <Features />
    </div>
  );
};

export default HomePage;
