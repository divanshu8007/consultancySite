import { Avatar } from "@chakra-ui/react";
import React from "react";
import imagepath from "../../constants/imagepath";
import commonstyles from "../../styles/commonstyles";

function Header() {
  const headerColumns = [
    { number: 1, name: "Home" },
    { number: 2, name: "Insights", dropdown: true },
    { number: 3, name: "Services", dropdown: true },
    { number: 4, name: "Portfolio" },
    { number: 5, name: "Portfolio" },
    { number: 6, name: "Testimonials" },
  ];
  return (
    <div className="w-full py-1 px-3 flex bg-white shadow-lg items-center fixed top-0 z-50">
      <img src={imagepath.logo} className="h-20 w-auto ml-auto" />
      <div className="flex justify-end items-center flex-grow">
        {headerColumns?.map((column, index) => (
          <span
            key={column.number}
            className={`${
              index > 0
                ? "ml-4 cursor-pointer text-base md:text-md lg:text-lg xl:text-xl sm:text-sm min:text-sm"
                : "cursor-pointer text-base md:text-base lg:text-lg xl:text-xl sm:text-sm min:text-sm"
            }`}
          >
            {column.name}
          </span>
        ))}
        <button className={`${commonstyles.textbase.semibold} rounded-full px-6 py-2 bg-orange-600 text-white ml-24`}>
          Get Quotes
        </button>
      </div>
      <div className="absolute bottom-0 w-full h-1 bg-white shadow-md"></div>
    </div>
  );
}

export default Header;
