import React from "react";
import "./Sidebar.css";
import { Link, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="Sidebar__Container">
      {/* sidebar contents */}
      <div className="SidebarItems__Container">
        <h2>Main</h2>
        <List>
          <Link href="/dashboard" underline="none" color="inherit">
            <ListItem button key={"Dashboard"}>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Link>
          <Link href="/price" underline="none" color="inherit">
            <ListItem button key={"Price"}>
              <ListItemText primary={"Price"} />
            </ListItem>
          </Link>
          <Link href="/roomtype" underline="none" color="inherit">
            <ListItem button key={"Room Type"}>
              <ListItemText primary={"Room Type"} />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
