import React from "react";
import SidebarRoute from "./SidebarRoute";

function SidebarBody(props) {
  const { widget } = props;
  return (
    <div className="SidebarBodyBody__Container">
      <SidebarRoute widget={widget} />
    </div>
  );
}

export default SidebarBody;
