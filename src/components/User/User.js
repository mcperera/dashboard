import React from "react";
import dots from "../../assets/Group 566@2x.png";
import { user_label } from "./User.module.css";

function User({ name, index }) {
  return (
    <div
      className={`w-full py-2 mt-4 rounded-md ${user_label} flex items-center cursor-pointer`}>
      <div className="md:h-8 md:w-8 mx-4 bg-blue-400 rounded-full flex items-center justify-center text-white">
        {name[0]}
      </div>
      <h1>{name}</h1>
      <div className="flex-grow flex justify-end mx-4">
        <img src={dots} alt="dots" className="h-4" />
      </div>
    </div>
  );
}

export default User;
