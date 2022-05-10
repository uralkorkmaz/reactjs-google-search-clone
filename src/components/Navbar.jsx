import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-5 flex flex-wrap md:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl font-bold bg-black text-white px-4 py-2 rounded-[24px] dark:bg-white dark:text-black">
            LARUS
          </p>
        </Link>
        <button
          type="button"
          className="bg-black px-3 py-2 dark:px-3 dark:py-2 dark:bg-white rounded-[24px] hover:scale-110"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "🌚" : "🌕"}
        </button>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
