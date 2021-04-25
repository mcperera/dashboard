import React from "react";
import { tab_line, seleted_tab } from "./TabItem.module.css";

function TabItem({ label, selectTab, setSelectTab }) {
  return (
    <div
      className={`h-20 w-6/12 flex items-center justify-center ${
        selectTab === label ? seleted_tab : tab_line
      }`}
      onClick={() => setSelectTab(label)}>
      <h1
        className={`text-lg font-bold ${
          selectTab === label ? "text-red-600" : "text-gray-300"
        }`}>
        {label}
      </h1>
    </div>
  );
}

export default TabItem;
