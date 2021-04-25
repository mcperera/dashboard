import React, { useState } from "react";
import mapImg from "../../assets/80-cool-grey@2x.png";
import arror from "../../assets/Path 86@2x.png";
import { map_img, arrow_img } from "./Map.module.css";

function Map() {
  const [toggleMap, setToggleMap] = useState(false);

  return (
    <div
      className={`relative ${
        toggleMap ? "h-3/4" : "h-1/4"
      } w-full ml-5 mb-2 flex flex-col shadow-2xl rounded-md transition-height duration-500 ease-in-out`}>
      <img src={mapImg} alt="map" className={`h-full w-full ${map_img}`} />
      <img
        src={arror}
        alt="arrow"
        className={`${arrow_img} transform ${
          toggleMap ? "rotate-0" : "rotate-180"
        } absolute bottom-0 left-2/4 cursor-pointer`}
        onClick={() => setToggleMap((prev) => !prev)}
      />
    </div>
  );
}

export default Map;
