import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: yellowgreen;
  width: ${(props) => `${props.width}px`};
  height: 100vh;
  flex-direction: column;
  padding-left: 30px;
  box-sizing: border-box;
  display: ${(props) => (props.width ? "flex" : "none")};
`;

export const SidebarItemContainer = styled.div`
  background-color: green;
  font-size: 16px;
`;

export const SidebarChevron = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 175px;
  background-color: yellowgreen;
  height: 40px;
  align-content: center;
  flex-wrap: wrap;
  padding-right: 4px;
  border-radius: 8px;
  z-index: 99;
  width: 48px;
`;
