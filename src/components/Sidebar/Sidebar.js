import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SidebarChevron,
  SidebarContainer,
  SidebarItemContainer,
} from "./Sidebar.element";

import { MdChevronLeft } from "react-icons/md";
const Sidebar = (props) => {
  const SidebarWidthHandler = () => {
    props.setSidebarOpen(!props.sidebarOpen);
  };

  const sidebarMenu = [
    { name: "메인페이지", path: "/" },
    { name: "오늘의 수업", path: "/today" },
    { name: "학생 관리", path: "/student" },
    { name: "퀴즈 관리", path: "/quiz" },
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
      <SidebarContainer width={props.width}>
        <SidebarChevron onClick={SidebarWidthHandler}>
          <MdChevronLeft size={24} />
        </SidebarChevron>

        {sidebarMenu.map((item, index) => {
          return (
            <Link to={item.path} key={index} onClick={SidebarWidthHandler}>
              <SidebarItem menu={item}></SidebarItem>
            </Link>
          );
        })}
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
