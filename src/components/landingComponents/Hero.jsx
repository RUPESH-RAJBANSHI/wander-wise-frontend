import React from "react";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <section className="h-150 flex items-center justify-center px-40 relative overflow-hidden">
      <div className="flex flex-col items-center gap-10 text-white">
        <h1 className="text-5xl font-bold">plan your trip with wanderwise</h1>
        <p className="text-xl">
          Discover the world with our travel palnning tools and expert device
        </p>
        <CustomButton text="Get Started" />
      </div>

      {/* background image Section */}
      <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="wanderwise"
        />
      </div>

      {/* black overlay */}
      <div className="absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-40"></div>
    </section>
  );
};

export default Hero;
