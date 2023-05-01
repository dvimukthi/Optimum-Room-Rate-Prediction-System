import React from "react";
import "./Sidebar.css";
import { Link, List, ListItem, ListItemText } from "@mui/material";
import { ExitToAppRounded } from "@mui/icons-material";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  function LogOut() {
    navigate("/signin");
  }
  return (
    <div className="Sidebar__Container">
      {/* sidebar contents */}
      <div className="SidebarItems__Container">
        <h2>Dashboard</h2>
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
          {/* <Link href="/roomtype" underline="none" color="inherit">
            <ListItem button key={"Room Type"}>
              <ListItemText primary={"Room Type"} />
            </ListItem>
          </Link> */}
        </List>
        {/* Log Out Button */}
        <div className="LogOut__Btn" onClick={LogOut}>
          <ExitToAppRounded />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
