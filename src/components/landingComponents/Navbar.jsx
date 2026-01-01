import React from "react";
import CustomButton from "../common/CustomButton";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4">
        {/* left Navbar Section */}
      <div>
        <h2 className="text-4xl fond-bold">WanderWise</h2>
      </div>

        {/* right Navbar Section */}
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6 [&>a]:text-log-lg [&>a]:font-medium [&>a]:hover:text-blue-600">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="">Famous Trips</a>
          <a href="">Contact</a>
        </nav>

        <CustomButton text="Sign in" />
      </div>
    </header>
  );
};

export default Navbar;
