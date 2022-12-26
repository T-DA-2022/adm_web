import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer } from "./Sidebar.element";

const Sidebar = () => {
  const sidebarMenu = [
    { name: "dashboard", path: "/" },
    { name: "today", path: "/today" },
    { name: "quiz", path: "/quiz" },
  ];

  const SidebarItem = ({ menu }) => {
    return (
      <div className="SidebarItem">
        <p>{menu.name}</p>
      </div>
    );
  };

  return (
    <div className="Sidebar">
      <SidebarContainer>
        {sidebarMenu.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <SidebarItem menu={item}></SidebarItem>
            </Link>
          );
        })}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
