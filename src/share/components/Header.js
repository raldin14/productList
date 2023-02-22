import React from "react";

const Header = () => {
  return (
    <header className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <h1 className="text-3xl text-orange-300 ml-3 pt-2 uppercase">
            ImagineApp
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;