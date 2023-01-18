import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
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
  position: absolute;
  right: -43px;
  top: 50%;
  width: 43px;
  transform: translateY(-50%);
  height: 44px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 0;
  border-radius: 0 4px 4px 0;
  font-size: 1px;
  line-height: 1px;
  box-shadow: 0 3px 7px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;
