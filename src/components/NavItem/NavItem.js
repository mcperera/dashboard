import React from "react";
import { icon_style } from "./NavItem.module.css";

const NavItem = ({ icon, alt }) => {
  return (
    <div
      className={`${
        alt === 0 ? "h-24 w-24" : "h-20 w-20 2xl:h-28"
      } flex items-center justify-center ${alt === 0 && "bg-red-600"}`}>
      <img
        src={icon}
        alt={`icon_${alt}`}
        className={`${alt === 0 ? "h-10 w-10" : "h-8 w-8"} ${icon_style}`}
      />
    </div>
  );
};

export default NavItem;
