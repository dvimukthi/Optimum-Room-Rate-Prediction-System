import React from "react";
import SidebarBody from "../Components/Sidebar/SidebarBody";
import MainScreen from "../Pages/MainScreen";

function SidebarContent({ widget }) {
  return (
    <div>
      <MainScreen />
      <SidebarBody widget={widget} />
    </div>
  );
}

export default SidebarContent;
