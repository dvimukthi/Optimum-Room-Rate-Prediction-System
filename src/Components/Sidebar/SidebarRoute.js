import { Box } from "@mui/material";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Price from "../Price/Price";
import RoomType from "../RoomType/RoomType";

function SidebarRoute({ widget }) {
  return (
    <div>
      <Box>
        {widget === "dashboard" ? (
          <Dashboard />
        ) : widget === "price" ? (
          <Price />
        ) : widget === "roomtype" ? (
          <RoomType />
        ) : null}
      </Box>
    </div>
  );
}

export default SidebarRoute;
