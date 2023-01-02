import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: yellowgreen;
  width: min(20vw, 250px);
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
`;

export const SidebarItemContainer = styled.div`
  background-color: green;
  font-size: 16px;
`;
