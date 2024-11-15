import React from "react"; // Import React

// Define Header component
const Header = () => {
  return (
    <>
      {/* Main header element */}
      <h1 className="text-3xl md:text-4xl text-white h-16 font-extrabold flex justify-center items-center italic bg-cyan-500 fixed top-0 w-full">
        To-Do-Input {/* Header text */}
      </h1>
    </>
  );
};

export default Header; // Export Header component for use in other parts of the application
