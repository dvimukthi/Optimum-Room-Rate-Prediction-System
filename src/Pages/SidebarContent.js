import React from "react";
import MainScreen from "./MainScreen";

function SidebarContent({ widget }) {
  return (
    <div>
      <MainScreen widget={widget} />
    </div>
  );
}

export default SidebarContent;
