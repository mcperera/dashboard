import React from "react";

import { NavItem } from "../";

import logoImg from "../../assets/Group 537@2x.png";
import icon1 from "../../assets/icons/Group 538@2x.png";
import icon2 from "../../assets/icons/Group 563@2x.png";
import icon3 from "../../assets/icons/Group 548@2x.png";
import icon4 from "../../assets/icons/Group 549@2x.png";
import icon5 from "../../assets/icons/Group 555@2x.png";

import { navbar_container } from "./NavBar.module.css";

const icons = [logoImg, icon1, icon2, icon3, icon4, icon5];

function NavBar() {
  return (
    <div
      className={`w-24 h-full flex flex-col items-center ${navbar_container}`}>
      {icons.map((item, index) => {
        return <NavItem key={index} icon={item} alt={index} />;
      })}
      <div className="w-full pb-12 xl:pb-10 flex-grow flex items-end justify-center">
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
          <h1 className="font-bold">TB</h1>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
