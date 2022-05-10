import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { url: "/search", text: "All" },
  { url: "/news", text: "News" },
  { url: "/image", text: "Images" },
  { url: "/video", text: "Videos" },
];

const Links = () => {
  return (
    <div className="flex md:justify-around justify-between items-center mt-4">
      {navLinks.map(({ url, text }, index) => (
        <NavLink
          to={url}
          key={index}
          style={{ margin: 10 }}
          className={({ isActive }) =>
            isActive
              ? "text-black border-b-2 dark:text-white border-black"
              : "none"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

// ext-black border-b-2 dark:text-white border-black pb-2
export default Links;
