import React from "react";
import sosImg from "../../assets/Group 323@2x.png";
import { header_container } from "./Header.module.css";

function Header({ handleSignOut }) {
  return (
    <div className={`h-24 w-full flex items-center ${header_container}`}>
      <div className="w-6/12">
        <h1 className="ml-8 text-2xl font-bold">Monitor</h1>
      </div>
      <div className="w-6/12 flex items-center justify-end">
        <button
          className="h-10 px-12 mx-5 rounded border-2 border-gray-400 bg-white hover:bg-gray-100"
          onClick={handleSignOut}>
          Sign out!
        </button>
        <img src={sosImg} alt="sos_img" className="h-24 w-24 mt-3" />
      </div>
    </div>
  );
}

export default Header;
