import { Box } from "@mui/material";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Price from "../Price/Price";
import RoomType from "../RoomType/RoomType";

function SidebarRoute({ widget }) {
  console.log("WIDGET - ",widget)
  return (
    <div>
      <Box>
        {widget == "Dashboard" ? (
          <Dashboard />
        ) : widget == "Price" ? (
          <Price />
        ) : widget == "roomtype" ? (
          <RoomType />
        ) : null}
      </Box>
    </div>
  );
}

export default SidebarRoute;
