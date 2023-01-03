import React from "react";

import { TopbarContainer, TopbarMenuIconContainer } from "./Topbar.element";

import { MdMenu } from "react-icons/md";

const Topbar = (props) => {
  const SidebarWidthHandler = () => {
    props.setSidebarOpen(!props.sidebarOpen);
  };
  return (
    <TopbarContainer width={props.width} className="topbar">
      <TopbarMenuIconContainer>
        <MdMenu size={36} onClick={SidebarWidthHandler} />
      </TopbarMenuIconContainer>
      Topbar
    </TopbarContainer>
  );
};

export default Topbar;
