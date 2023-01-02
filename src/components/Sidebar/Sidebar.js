import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarItemContainer } from "./Sidebar.element";

const Sidebar = () => {
  const sidebarMenu = [
    { name: "Dashboard", path: "/" },
    { name: "Today", path: "/today" },
    { name: "Quiz", path: "/quiz" },
  ];

  const SidebarItem = ({ menu }) => {
    return (
      <SidebarItemContainer className="SidebarItem">
        <p>{menu.name}</p>
      </SidebarItemContainer>
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
