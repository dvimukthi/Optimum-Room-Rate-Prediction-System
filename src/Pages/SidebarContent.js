import React from "react";
import SidebarBody from "../Components/Sidebar/SidebarBody";
import MainScreen from "../Pages/MainScreen";

function SidebarContent({ widget }) {
  return (
    <div style={{
        display:"flex",
        flexDirection:"row"
      }}>
      <MainScreen />
      <SidebarBody widget={widget} />
    </div>
  );
}

export default SidebarContent;
