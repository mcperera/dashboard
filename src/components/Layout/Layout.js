import React from "react";
import { layout_container } from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={`h-full w-full pl-12 pr-12 ${layout_container}`}>
      {children}
    </div>
  );
}

export default Layout;
